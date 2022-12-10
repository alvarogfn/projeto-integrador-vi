import { NextFunction, Request, Response } from "express";

export function handleError(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).send(err);
}