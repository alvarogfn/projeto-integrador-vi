import { NextFunction, Request, Response } from "express";
import { ClientModel } from "../models/Clients";

export function getClients(req: Request, res: Response, next: NextFunction) {
  (async () => {
    const clients = await ClientModel.find();
    return res.status(200).send(clients);
  })();
}

export default { getClients };
