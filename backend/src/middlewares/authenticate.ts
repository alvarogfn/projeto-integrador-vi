import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

export function authenticate(
  req: Request,
  res: Response<{}, { USER_ID: any }>,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization as string;

    if (token === undefined) throw new Error("Missing Token");

    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) throw new Error("Invalid token");

      const { id } = decoded as unknown as { id: string };
      res.locals.USER_ID = id;
    });
    return next();
  } catch (e) {
    next(e);
  }
}
