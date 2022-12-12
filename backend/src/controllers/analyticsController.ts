import { NextFunction, Request, Response } from "express";
import { ClientInterface, ClientModel } from "../models/Clients";
import { Preferences } from "../models/Preferences";
import { Bar, Line, Pie, Radar } from "../utils/Chart";
import { Statistics } from "../utils/Statistics";
import {
  colors,
  groupByRange,
  groupObjArrayByProperty,
  sortObjArrayByValue,
} from "../utils/Utils";

export function get(
  req: Request,
  res: Response<{}, { USER_ID: string }>,
  next: NextFunction
) {
  (async () => {
    const clients = await ClientModel.find({ createdBy: res.locals.USER_ID });

    const group = clients.reduce((prev, curr, index) => {
      curr.preferences.forEach((pref) => {
        if (prev.get(pref) === undefined) prev.set(pref, 0);
        prev.set(pref, prev.get(pref) + 1);
      });

      return prev;
    }, new Map<string | number, number>());

    const biggest = Statistics.biggest(Object.fromEntries(group.entries()));

    const map = groupByRange(
      clients,
      {
        "18-27 anos": [18, 27],
        "28-37 anos": [28, 37],
        "38-47 anos": [38, 47],
        "48-57 anos": [48, 57],
        "58-67 anos": [58, 67],
        "68-80 anos": [68, 80],
      },
      "age"
    );

    const result: { [k: string]: number } = {};

    map.forEach((value, key) => {
      result[key] = +Statistics.average(
        value.map((value) => value.credit)
      ).toFixed(2);
    });

    const line = new Line().withTitle("Tendencia de captação de crédito");

    const dataset = line
      .withLabels(Object.keys(result))
      .newDataset("Porcentagem");

    Object.values(result).forEach((value) =>
      dataset.withValues({
        value,
        color: colors[14],
      })
    );

    const charts: any[] = [
      chartModaAgeBar(clients),
      chartCityLength(clients),
      chartCityBar(clients),
    ];

    if (clients.length > 50) {
      charts.push(
        chartAverageAge(clients),
        chartTendencyAgeLine(clients),
        chartCityAgeAverage(clients),
        chartCityAgeAverageRadar(clients)
      );
    }

    res.send({
      insights: [
        {
          label: "Clientes Cadastrados",
          value: clients.length,
        },
        {
          label: "Modalidade Preferida",
          value: Preferences[biggest.label],
        },
        {
          label: "Crédito Médio",
          value: Statistics.average(
            clients.map(({ credit }) => credit)
          ).toLocaleString("pt-br", { style: "currency", currency: "BRL" }),
        },
      ],
      charts: charts,
    });
  })();
}
function chartAverageAge(clients: ClientInterface[]) {
  const map = groupByRange(
    clients,
    { Jovens: [18, 30], Adultos: [31, 50], Idosos: [51, 80] },
    "age"
  );

  let result: { [k: string]: number } = {};

  map.forEach((value, key) => {
    result[key] = +Statistics.average(
      value.map((value) => value.credit)
    ).toFixed(2);
  });

  result = Statistics.absoluteToPercent(result);
  const sortedResult = sortObjArrayByValue(result);

  const pie = new Pie().withTitle(
    "Quanto de crédito é buscado em média por idade? "
  );

  const dataset = pie.newDataset("Crédito por Faixa Etária");

  let color = 0;
  sortedResult.forEach((value, index) => {
    pie.withLabels(index);
    dataset.withValues({ value, color: colors[color] });
    color += 1;
  });

  return pie.toObject();
}

function chartTendencyAgeLine(clients: ClientInterface[]) {
  const map = groupByRange(
    clients,
    {
      "18-27 anos": [18, 27],
      "28-37 anos": [28, 37],
      "38-47 anos": [38, 47],
      "48-57 anos": [48, 57],
      "58-67 anos": [58, 67],
      "68-80 anos": [68, 80],
    },
    "age"
  );

  const result: { [k: string]: number } = {};

  map.forEach((value, key) => {
    result[key] = +Statistics.average(
      value.map((value) => value.credit)
    ).toFixed(2);
  });

  const line = new Line().withTitle("Tendencia de captação de crédito");

  const dataset = line
    .withLabels(Object.keys(result))
    .newDataset("Porcentagem");

  Object.values(result).forEach((value) =>
    dataset.withValues({
      value,
      color: colors[14],
    })
  );

  return line.toObject();
}

function chartModaAgeBar(clients: ClientInterface[]) {
  const map = groupByRange(
    clients,
    {
      "0-1000 R$": [0, 1000],
      "1001-5000 R$": [1000, 5000],
      "5001-10000 R$": [5001, 10000],
      "10000 ou mais R$": [10000, Infinity],
    },
    "credit"
  );

  let result: { [k: string]: number } = {};

  map.forEach((value, key) => {
    result[key] = value.length;
  });

  result = Statistics.absoluteToPercent(result);

  const bar = new Bar().withTitle(
    "Quantidade de pessoas buscando por X faixa de crédito."
  );

  const dataset = bar.withLabels(Object.keys(result)).newDataset("Porcentagem");

  Object.values(result).forEach((value) =>
    dataset.withValues({
      value,
      color: colors[14],
    })
  );

  return bar.toObject();
}

function chartCityBar(clients: ClientInterface[]) {
  const map = groupObjArrayByProperty(clients, "city");

  let result: { [k: string]: number } = {};

  Object.keys(map).forEach((key) => {
    result[key] = +Statistics.average(
      map[key].map((client) => client.credit)
    ).toFixed(2);
  });

  result = Statistics.absoluteToPercent(result);

  const bar = new Bar().withTitle(
    "Quantidade de crédito buscado por cidade do noroeste mineiro"
  );

  const dataset = bar.withLabels(Object.keys(result)).newDataset("Porcentagem");

  Object.values(result).forEach((value) =>
    dataset.withValues({
      value,
      color: colors[14],
    })
  );

  return bar.toObject();
}

function chartCityLength(clients: ClientInterface[]) {
  const map = groupObjArrayByProperty(clients, "city");

  let result: { [k: string]: number } = {};

  Object.keys(map).forEach((key) => {
    result[key] = map[key].length;
  });

  result = Statistics.absoluteToPercent(result);

  const bar = new Bar().withTitle(
    "Quantidade de pessoas buscado crédito por cidade do noroeste mineiro"
  );

  const dataset = bar.withLabels(Object.keys(result)).newDataset("Porcentagem");

  Object.values(result).forEach((value) =>
    dataset.withValues({
      value,
      color: colors[3],
    })
  );

  return bar.toObject();
}

function chartCityAgeAverage(clients: ClientInterface[]) {
  const city = groupObjArrayByProperty(clients, "city");
  const age = Object.entries(city).map(([key, client]) => {
    return {
      [key]: groupByRange(
        client,
        { Jovens: [18, 30], Adultos: [31, 50], Idosos: [51, 80] },
        "age"
      ),
    };
  });

  const bar = new Line().withTitle(
    "Quantidade de pessoas buscado crédito por cidade do noroeste mineiro"
  );

  let counter = 0;
  age.forEach((item) => {
    Object.keys(item).forEach((city) => {
      bar.withLabels([...item[city].keys()]);
      const dataset = bar.newDataset(city);
      item[city].forEach((clients, key) => {
        const total =
          clients.reduce((acc, clients) => acc + clients.credit, 0) /
          clients.length;
        dataset.withValues({ value: total, color: colors[counter] });
      });
    });
    counter += 2;
  });

  return bar.toObject();
}

function chartCityAgeAverageRadar(clients: ClientInterface[]) {
  const groupByAge = groupByRange(
    clients,
    { Jovens: [18, 30], Adultos: [31, 50], Idosos: [51, 80] },
    "age"
  );

  const cities = Array.from(new Set(clients.map((client) => client.city)));

  const radar = new Radar()
    .withLabels([...cities])
    .withTitle("Mapeamento de crédito entre cidades e faixas etárias");

  let color = 0;
  groupByAge.forEach((clients, key) => {
    const dataset = radar.newDataset(key);
    cities.forEach((city) => {
      const value = [];
      clients.forEach((client) => {
        if (client.city === city) value.push(client.credit);
      });
      const average = Statistics.average(value);
      dataset.withValues({ value: average, color: colors[color] });
    });
    color += 2;
  });

  return radar.toObject();
}
export default {
  get,
};
