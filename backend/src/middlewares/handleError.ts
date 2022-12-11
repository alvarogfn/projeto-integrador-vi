import { NextFunction, Request, Response } from "express";
import { HTTPError } from "../errors/Error";

export function handleError(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof HTTPError) {
    return res.status(err.code).send({ err: err.message });
  }
  return res.status(500).send(err);
}
