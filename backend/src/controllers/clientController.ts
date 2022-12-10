import { NextFunction, Request, Response } from "express";
import { ClientModel } from "../models/Clients";

export function get(
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) {
  console.log(res.locals.USER_ID);
  (async () => {
    const clients = await ClientModel.findById(req.params.id);
    return res.status(200).send(clients);
  })();
}

export function getAll(
  req: Request,
  res: Response<{}, { USER_ID: string }>,
  next: NextFunction
) {
  (async () => {
    const userId = res.locals.USER_ID;
    const clients = await ClientModel.find({ createdBy: userId });
    return res.status(200).send(clients);
  })();
}

export function post(
  req: Request<
    {},
    {},
    {
      birthdate: number;
      city: string;
      credit: number;
      preferences: number[];
      sex: string;
    }
  >,
  res: Response<{}, { USER_ID: string }>,
  next: NextFunction
) {
  (async () => {
    const userId = res.locals.USER_ID;
    const { birthdate, city, credit, preferences, sex } = req.body;
    const newClient = new ClientModel({
      createdBy: userId,
      birthdate,
      city,
      credit,
      preferences,
      sex,
    });
    const response = await newClient.save();
    return res.status(200).send(response);
  })();
}

export function removeMany(
  req: Request<{}, {}, { ids: string[] }>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    const ids = req.body.ids;

    await Promise.all(ids.map((id) => ClientModel.findByIdAndRemove(id)));

    return res.status(204);
  })();
}

export function remove(req: Request, res: Response, next: NextFunction) {
  (async () => {
    const id = req.params.id;

    await ClientModel.findByIdAndRemove(id);

    return res.status(204);
  })();
}

export default { get, getAll, post, removeMany, remove };
