import { NextFunction, Request, Response } from "express";
import { ClientInterface, ClientModel } from "../models/Clients";
import { Bar, Line, Pie } from "../utils/Chart";
import { Statistics } from "../utils/Statistics";
import {
  absToPercent,
  colors,
  groupByAge,
  groupObjArrayByProperty,
} from "../utils/Utils";

export async function charts(req: Request, res: Response, next: NextFunction) {
  const data = await ClientModel.find();
  return res.send([
    chartMedianByAge(data),
    chartLineByAge(data),
    {
      type: "bar",
      chartData: {
        labels: ["Suldeste", "Sul", "Nordeste", "Centro-oeste", "Norte"],
        datasets: [
          {
            label: "Jovens",
            data: [11, 13, 14, 11, 15],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
          {
            label: "Adultos",
            data: [15, 13, 14, 12, 15],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
          {
            label: "Idosos",
            data: [11, 13, 14, 11, 35],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
        ],
      },
      chartOptions: {
        plugins: {
          title: {
            display: true,
            text: "Qual o consumo de crédito médio por idade e região no Brasil?",
            color: "black",
            align: "start",
          },
        },
      },
    },
    chartMedianByCity(data),
    {
      type: "line",
      chartData: {
        labels: ["Jovens", "Adultos", "Idosos"],
        datasets: [
          {
            label: "Nordeste",
            data: [11, 13, 14],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
          {
            label: "Suldeste",
            data: [15, 20, 14],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
          {
            label: "Sul",
            data: [14, 13, 2],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
          {
            label: "Centro-oeste",
            data: [15, 9, 12],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
          {
            label: "Norte",
            data: [5, 6, 8],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
        ],
      },
      chartOptions: {
        plugins: {
          title: {
            display: true,
            text: "Qual o consumo de crédito médio por idade e região no Brasil?",
            color: "black",
            align: "start",
          },
        },
      },
    },
    {
      type: "radar",
      chartData: {
        labels: ["Jovens", "Adultos", "Idosos"],
        datasets: [
          {
            label: "Nordeste",
            data: [11, 13, 14],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
          {
            label: "Suldeste",
            data: [15, 20, 14],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
          {
            label: "Sul",
            data: [14, 13, 2],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
          {
            label: "Centro-oeste",
            data: [15, 9, 12],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
          {
            label: "Norte",
            data: [5, 6, 8],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
        ],
      },
      chartOptions: {
        plugins: {
          title: {
            display: true,
            text: "Qual o consumo de crédito médio por idade e região no Brasil?",
            color: "black",
            align: "start",
          },
        },
      },
    },
    {
      type: "doughnut",
      chartData: {
        labels: ["Jovens", "Adultos", "Idosos"],
        datasets: [
          {
            label: "Nordeste",
            data: [11, 13, 14],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
          {
            label: "Suldeste",
            data: [15, 20, 14],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
          {
            label: "Sul",
            data: [14, 13, 2],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
          {
            label: "Centro-oeste",
            data: [15, 9, 12],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
          {
            label: "Norte",
            data: [5, 6, 8],
            backgroundColor: [
              "hsla(251, 100%, 10%, 1)",
              "hsla(251, 100%, 20%, 1)",
              "hsla(251, 100%, 30%, 1)",
              "hsla(251, 100%, 40%, 1)",
              "hsla(251, 100%, 60%, 1)",
              "hsla(251, 100%, 70%, 1)",
              "hsla(251, 100%, 90%, 1)",
            ],
          },
        ],
      },
      chartOptions: {
        plugins: {
          title: {
            display: true,
            text: "Qual o consumo de crédito médio por idade e região no Brasil?",
            color: "black",
            align: "start",
          },
        },
      },
    },
  ]);
}

export async function insights(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const clients = await ClientModel.find();

  res
    .status(200)
    .send([
      biggestAge(clients),
      lowestAge(clients),
      biggestRegion(clients),
      lowestRegion(clients),
      biggestCity(clients),
      lowestCity(clients),
    ]);
}

function lowestCity(clients: ClientInterface[]) {
  const group = groupObjArrayByProperty(clients, "address.city");
  const map = new Map(Object.entries(group));

  const result = {
    title: "",
    value: "",
  };

  const data = {};

  map.forEach((value, key, arr) => {
    data[key] =
      value.reduce((acc, actual) => acc + actual.credit, 0) / value.length;
  });

  result.title = "Qual a cidade que menos busca crédito?";
  result.value = Statistics.lowest(data).label;

  return result;
}

function biggestCity(clients: ClientInterface[]) {
  const group = groupObjArrayByProperty(clients, "address.city");
  const map = new Map(Object.entries(group));

  const result = {
    title: "",
    value: "",
  };

  const data = {};

  map.forEach((value, key, arr) => {
    data[key] =
      value.reduce((acc, actual) => acc + actual.credit, 0) / value.length;
  });

  result.title = "Qual a cidade que mais busca crédito?";
  result.value = Statistics.biggest(data).label;

  return result;
}

function biggestAge(clients: ClientInterface[]) {
  const group = groupByAge(clients);

  const result = {
    title: "",
    value: "",
  };

  const data = {};

  group.forEach((value, key, arr) => {
    data[key] =
      value.reduce((acc, actual) => acc + actual.credit, 0) / value.length;
  });

  result.title = "Qual a faixa etária que mais busca crédito?";
  result.value = Statistics.biggest(data).label;

  return result;
}

function lowestAge(clients: ClientInterface[]) {
  const group = groupByAge(clients);

  const result = {
    title: "",
    value: "",
  };

  const data = {};

  group.forEach((value, key, arr) => {
    data[key] =
      value.reduce((acc, actual) => acc + actual.credit, 0) / value.length;
  });

  result.title = "Qual faixa etária que menos busca crédito?";
  result.value = Statistics.lowest(data).label;

  return result;
}

function biggestRegion(clients: ClientInterface[]) {
  const group = groupObjArrayByProperty(clients, "address.region");
  const map = new Map(Object.entries(group));

  const result = {
    title: "",
    value: "",
  };

  const data = {};

  map.forEach((value, key, arr) => {
    data[key] =
      value.reduce((acc, actual) => acc + actual.credit, 0) / value.length;
  });

  result.title = "Qual a região que mais busca crédito?";
  result.value = Statistics.biggest(data).label;

  return result;
}

function lowestRegion(clients: ClientInterface[]) {
  const group = groupObjArrayByProperty(clients, "address.region");
  const map = new Map(Object.entries(group));

  const result = {
    title: "",
    value: "",
  };

  const data = {};

  map.forEach((value, key, arr) => {
    data[key] =
      value.reduce((acc, actual) => acc + actual.credit, 0) / value.length;
  });

  result.title = "Qual a região que menos busca crédito?";
  result.value = Statistics.lowest(data).label;

  return result;
}

function chartMedianByAge(clients: ClientInterface[]) {
  const map = new Map();

  map.set("Jovens", []);
  map.set("Adultos", []);
  map.set("Idosos", []);

  clients.forEach((client) => {
    if (client.age >= 18 && client.age <= 39) {
      map.get("Jovens").push(client);
    } else if (client.age >= 40 && client.age <= 59) {
      map.get("Adultos").push(client);
    } else {
      map.get("Idosos").push(client);
    }
  });

  const result: { [k: string]: number } = {};

  map.forEach((value, key) => {
    result[key] = +(
      value.reduce((acc: number, client: ClientInterface) => {
        return acc + client.credit;
      }, 0) / value.length
    ).toFixed(2);
  });

  const pie = new Pie()
    .withLabels(Object.keys(result))
    .withTitle("Quanto de crédito é buscado em média por idade? ");

  const dataset = pie.newDataset("Crédito por Faixa Etária");

  Object.values(result).forEach((value, index) => {
    dataset.withValues({ value, color: colors[index * 2] });
  });

  return pie.toObject();
}

function chartLineByAge(clients: ClientInterface[]) {
  const map = new Map();

  map.set(20, []);
  map.set(30, []);
  map.set(40, []);
  map.set(50, []);
  map.set(60, []);
  map.set(70, []);

  clients.forEach((client) => {
    if (client.age < 30) {
      map.get(20).push(client);
    } else if (client.age < 40) {
      map.get(30).push(client);
    } else if (client.age < 50) {
      map.get(40).push(client);
    } else if (client.age < 60) {
      map.get(50).push(client);
    } else if (client.age < 70) {
      map.get(60).push(client);
    } else if (client.age <= 80) {
      map.get(70).push(client);
    }
  });

  const line = new Line()
    .withTitle(
      "O qual a tendência de consumo de crédito ao longo das faixas etárias?"
    )
    .withAxis({ x: "Idade", y: "Média de Crédito em Reais" });

  line.withLabels(Array.from(map.keys()));

  const dataset = line.newDataset("Credit By Age");

  map.forEach((value: ClientInterface[], key) => {
    dataset.withValues({
      value: +(
        value.reduce((acc, client) => acc + client.credit, 0) / value.length
      ).toFixed(2),
      color: colors[7],
    });
  });

  return line.toObject();
}

function chartMedianByCity(clients: ClientInterface[]) {
  const group = groupObjArrayByProperty(clients, "address.city");

  const cities = Object.keys(group);

  const bar = new Bar()
    .withLabels(cities)
    .withTitle(
      "Qual o consumo médio de crédito nas cidades do noroeste mineiro"
    )
    .withAxis({ y: "Montante de Crédito", x: "Cidade" });
  const dataset = bar.newDataset("Cidades");

  Object.keys(group).forEach((key, index) => {
    const value = +(
      group[key].reduce((acc, client) => acc + client.credit, 0) /
      group[key].length
    ).toFixed(2);

    dataset.withValues({ value, color: colors[index] });
  });

  return bar.toObject();
}

export default {
  charts,
  insights,
};
