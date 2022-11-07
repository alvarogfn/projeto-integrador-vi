import { NextFunction, Request, Response } from "express";
import { database } from "../sql/Database";

export function routeController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  database()
    .then((r) => r.query(""))
    .then((r) => res.send(r[0].toString()));
}
