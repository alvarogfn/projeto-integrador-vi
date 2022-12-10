import { NextFunction, Request, Response } from "express";
import { ClientModel } from "../models/Clients";
import { Preferences } from "../models/Preferences";
import { Statistics } from "../utils/Statistics";

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
    });
  })();
}

export default {
  get,
};
