import { NextFunction, Request, Response } from "express";
import { AuthenticationError } from "../errors/Error";

export function handleError(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AuthenticationError) {
    return res.status(401).send({ err: err.message });
  }
  return res.status(500).send(err);
}
