import { group } from "console";
import { NextFunction, Request, Response } from "express";
import { ClientModel } from "../models/Clients";
import { Bar, Line, Pie } from "../utils/Chart";
import { Statistics } from "../utils/Statistics";
import {
  colors,
  countObjArrayByProperty,
  groupObjArrayByProperty,
} from "../utils/Utils";

export async function appData(req: Request, res: Response, next: NextFunction) {
  return res.send([
    {
      type: "pie",
      chartData: {
        labels: ["Suldeste", "Sul", "Nordeste", "Centro-oeste", "Norte"],
        datasets: [
          {
            data: [10, 9, 8, 7, 6],
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
            text: "Qual o consumo de crédito por região Brasileira?",
            color: "black",
            align: "start",
          },
        },
      },
    },
    {
      type: "line",
      chartData: {
        labels: ["Jovens", "Adultos", "Idosos"],
        datasets: [
          {
            label: "Quantidade de crédito",
            data: [20, 35, 30],
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
            text: "Qual o consumo de crédito médio por idade no Brasil?",
            color: "black",
            align: "start",
          },
        },
      },
    },
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
    {
      type: "bar",
      chartData: {
        labels: ["Burits", "Unaí", "Paracatu", "Arinos", "Vazante"],
        datasets: [
          {
            data: [5, 8, 9, 7, 3],
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
            text: "Qual o consumo de crédito médio por cidade no Noroeste Mineiro?",
            color: "black",
            align: "start",
          },
        },
      },
    },
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

// async function getAgeData() {
//   const clients = await ClientModel.find();

//   const groupByRegion = groupObjArrayByProperty(clients, "address.region");

//   const groupByRegionAndByAge = Object.keys(groupByRegion).reduce(
//     (acc, key) => {
//       acc[key] = groupByRegion[key].reduce((acc, client, _, arr) => {
//         if (acc[client.age] === undefined) {
//           acc[client.age] = +client.credit.toFixed(2);
//           return acc;
//         }
//         acc[client.age] += +client.credit.toFixed(2);

//         return acc;
//       }, {} as { [key: string]: number });

//       return acc;
//     },
//     {} as { [k: string]: {} }
//   );

//   const data = Object.keys(groupByRegion).reduce((acc, key) => {
//     return (acc[key] = groupObjArrayByProperty(groupByRegion[key], "age"));
//   }, {});

//   console.log(data);

//   // const data = Object.keys(groupByRegion).map((key) => {
//   //   return {
//   //     [key]: Object.entries(
//   //       groupObjArrayByProperty(groupByRegion[key], "age")
//   //     ).map(([key, values]) => {
//   //       const average = Statistics.average(values.map((value) => value.credit));
//   //       return { [key]: average };
//   //     }),
//   //   };
//   // });

//   console.log(data);

//   const line = new Line().withLabels(
//     Object.keys(groupByRegionAndByAge)
//       .map((key) => Object.keys(groupByRegionAndByAge[key]).map((key) => key))
//       .flat()
//   );

//   for (const key in groupByRegionAndByAge) {
//     const groupByAge = groupByRegionAndByAge[key];
//     const dataset = line.newDataset(key);
//     for (const [key, value] of Object.entries(groupByAge)) {
//       dataset.withValues({ value: groupByAge[key], color[0] });
//     }
//   }

//   console.log(line.toObject());

//   line.newDataset();

//   Object.entries(groupByRegionAndByAge).forEach((item) => {
//     console.log(item);
//   });

//   Object.values(groupByAge).map((value) => {
//     console.log(value);
//     return countObjArrayByProperty({}, "age");
//   });

//   const countByAge = Object.entries(groupByAge).map(([key, array]) => {
//     return { [key]: array.reduce((acc, act) => acc + act.credit, 0) };
//   });

//   const map = new Map();

//   countByAge.forEach((object) => {
//     const [key, value] = Object.entries(object)[0];
//     map.set(key, +value.toFixed(2));
//   });

//   const data = Object.fromEntries(map.entries());

//   const biggest = Statistics.biggest(data);
//   const lowest = Statistics.lowest(data);

//   const line = new Line().withLabels(Object.keys(data));

//   const line = new Line(Object.keys(data))
//     .withTitle("Qual idade mais busca por crédito hoje?")
//     .withValues("", Object.values(data))
//     .withInsight("Qual idade mais busca por crédito?", biggest.label + " anos")
//     .withInsight("Qual idade menos busca por crédito?", lowest.label + " anos");

//   return line.toObject();
// }

// async function getRegionData() {
//   const clients = await ClientModel.find();

//   const groupByAge = groupObjArrayByProperty(clients, "address.region");

//   const countByAge = Object.entries(groupByAge).map(([key, array]) => {
//     return { [key]: array.reduce((acc, act) => acc + act.credit, 0) };
//   });

//   const map = new Map();

//   countByAge.forEach((object) => {
//     const [key, value] = Object.entries(object)[0];
//     map.set(key, +value.toFixed(2));
//   });

//   const data = Object.fromEntries(map.entries());

//   const biggest = Statistics.biggest(data);
//   const lowest = Statistics.lowest(data);

//   const pie = new Pie(Object.keys(data))
//     .withTitle("Qual idade mais busca por crédito hoje?")
//     .withValues("", Object.values(data))
//     .withInsight("Qual idade mais busca por crédito?", biggest.label + " anos")
//     .withInsight("Qual idade menos busca por crédito?", lowest.label + " anos");

//   return pie.toObject();
// }

// async function getAgeRegion() {
//   const clients = await ClientModel.find();

//   const groupByAge = groupObjArrayByProperty(clients, "address.region");

//   const countByAge = Object.entries(groupByAge).map(([key, array]) => {
//     return { [key]: array.reduce((acc, act) => acc + act.credit, 0) };
//   });

//   const map = new Map();

//   countByAge.forEach((object) => {
//     const [key, value] = Object.entries(object)[0];
//     map.set(key, +value.toFixed(2));
//   });

//   const data = Object.fromEntries(map.entries());

//   const biggest = Statistics.biggest(data);
//   const lowest = Statistics.lowest(data);

//   const pie = new Pie(Object.keys(data))
//     .withTitle("Qual idade mais busca por crédito hoje?")
//     .withValues("", Object.values(data))
//     .withInsight("Qual idade mais busca por crédito?", biggest.label + " anos")
//     .withInsight("Qual idade menos busca por crédito?", lowest.label + " anos");

//   return pie.toObject();
// }

export default {
  appData,
};
