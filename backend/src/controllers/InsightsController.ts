import { NextFunction, Request, Response } from "express";
import { ClientInterface, ClientModel } from "../models/Clients";
import { Statistics } from "../utils/Statistics";
import { groupByRange, groupObjArrayByProperty } from "../utils/Utils";

export async function insights(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const clients = await ClientModel.find();

  res.status(200).send([
    biggestAge(clients),
    lowestAge(clients),
    // biggestCity(clients),
    // lowestCity(clients),
  ]);
}

// function lowestCity(clients: ClientInterface[]) {
//   const group = groupObjArrayByProperty(clients, "address.city");
//   const map = new Map(Object.entries(group));

//   let data = {};

//   map.forEach((value, key, arr) => {
//     data[key] =
//       value.reduce((acc, actual) => acc + actual.credit, 0) / value.length;
//   });

//   data = Statistics.absoluteToPercent(data);

//   return {
//     title: "Qual a cidade que menos busca crédito?",
//     value: Statistics.lowest(data).label,
//   };
// }

// function biggestCity(clients: ClientInterface[]) {
//   const group = groupObjArrayByProperty(clients, "address.city");
//   const map = new Map(Object.entries(group));

//   let data = {};

//   map.forEach((value, key) => {
//     data[key] =
//       value.reduce((acc, actual) => acc + actual.credit, 0) / value.length;
//   });

//   data = Statistics.absoluteToPercent(data);

//   return {
//     title: "Qual a cidade que mais busca crédito?",
//     value: Statistics.biggest(data).label,
//   };
// }

function biggestAge(clients: ClientInterface[]) {
  const group = groupByRange(
    clients,
    { jovens: [18, 30], adultos: [31, 50], idosos: [51, 80] },
    "age"
  );

  let data = {};

  group.forEach((value, key, arr) => {
    data[key] = +Statistics.average(value.map((value) => value.credit)).toFixed(
      2
    );
  });

  data = Statistics.absoluteToPercent(data);

  return {
    title: "Qual a faixa etária que mais busca crédito?",
    value: Statistics.biggest(data).label,
  };
}

function lowestAge(clients: ClientInterface[]) {
  const group = groupByRange(
    clients,
    { jovens: [18, 30], adultos: [31, 50], idosos: [51, 80] },
    "age"
  );

  let data = {};

  group.forEach((value, key, arr) => {
    data[key] = +Statistics.average(value.map((value) => value.credit)).toFixed(
      2
    );
  });

  data = Statistics.absoluteToPercent(data);

  return {
    title: "Qual faixa etária que menos busca crédito?",
    value: Statistics.lowest(data).label,
  };
}

export default {
  insights,
};
