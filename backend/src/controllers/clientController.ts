import { NextFunction, Request, Response } from "express";
import { ClientModel } from "../models/Clients";

export function get(
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    const clients = await ClientModel.findById(req.params.id);
    return res.status(200).send(clients);
  })();
}

export function getAll(req: Request, res: Response, next: NextFunction) {
  (async () => {
    const clients = await ClientModel.find();
    return res.status(200).send(clients);
  })();
}

export function post(
  req: Request<{}, {}, { birthdate: number; city: string; credit: number }>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    const data = req.body;
    const newClient = new ClientModel(data);
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

export function remove(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    const id = req.params.id;

    await ClientModel.findByIdAndRemove(id);

    return res.status(204);
  })();
}

export default { get, getAll, post, removeMany, remove };
