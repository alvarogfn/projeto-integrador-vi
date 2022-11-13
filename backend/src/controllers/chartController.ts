import { NextFunction, Request, Response } from "express";
import { ClientModel } from "../models/Clients";
import { Statistics } from "../utils/Statistics";

export function getByRegion(
  req: Request<{}, {}, {}, { groupBy: "state" | "city" | "region" }>,
  res: Response,
  next: NextFunction
) {
  try {
    (async () => {
      const groupBy = req.query.groupBy || "region";
      const clients = await ClientModel.find();
      if (clients.length === 0) return res.send([]);

      const group = clients.reduce((group, client) => {
        const credit = Math.round(client.credit);
        if (typeof group[client.address[groupBy]] === "undefined") {
          group[client.address[groupBy]] = credit;
          return group;
        }
        group[client.address[groupBy]] += credit;
        return group;
      }, {} as { [k: string]: number });

      const insights = {
        biggest: Statistics.biggest(group),
        lowest: Statistics.lowest(group),
        average: Statistics.average(group),
      };

      const response = {
        chartData: group,
        insights,
      };

      return res.send(response);
    })();
  } catch (e) {
    next(e);
  }
}

export function getByAge(req: Request, res: Response, next: NextFunction) {
  try {
    (async () => {
      const clients = await ClientModel.find();
      if (clients.length === 0) return res.send([]);

      const group = clients.reduce((group, client) => {
        const age = client.age;

        for (let index = 18; index < 80; index += 10) {
          const label = `${index}-${index + 9}`;

          if (typeof group[label] === "undefined") {
            group[label] = 0;
          }

          if (age >= index && age < index + 10) {
            group[label]++;
          }
        }

        return group;
      }, {} as { [k: string]: number });

      const insights = {
        biggest: Statistics.biggest(group),
        lowest: Statistics.lowest(group),
      };

      const response = {
        chartData: group,
        insights,
      };

      return res.send(response);
    })();
  } catch (e) {
    next(e);
  }
}

export function getByRegionAndAge(
  req: Request<
    {},
    {},
    {},
    { groupBy: "state" | "city" | "region"; gapByAge: string }
  >,

  res: Response,
  next: NextFunction
) {
  try {
    const groupBy = req.query.groupBy || "region";
    const gap = parseInt(req.query.gapByAge || "10");

    (async () => {
      const clients = await ClientModel.find();
      if (clients.length === 0) return res.send([]);

      const group = clients.reduce((group, client) => {
        if (typeof group[client.address[groupBy]] === "undefined") {
          group[client.address[groupBy]] = [client];
          return group;
        }

        group[client.address[groupBy]].push(client);
        return group;
      }, {} as { [k: string]: typeof clients });

      const response = {
        chartData: {},
      };

      for (const key in group) {
        response.chartData[key] = group[key].reduce((group, client) => {
          const age = client.age;

          for (let index = 18; index < 80; index = index + +gap) {
            const end = index + (gap - 1) > 80 ? 80 : index + (gap - 1);

            const label = `${index}-${end}`;

            if (typeof group[label] === "undefined") {
              group[label] = 0;
            }

            if (age >= index && age < index + gap) {
              group[label] += client.credit;
            }

            group[label] = +group[label].toFixed(2);
          }

          return group;
        }, {} as { [k: string]: number });
      }

      return res.send(response);
    })();
  } catch (e) {
    next(e);
  }
}

export default {
  getByRegion,
  getByAge,
  getByRegionAndAge,
};
