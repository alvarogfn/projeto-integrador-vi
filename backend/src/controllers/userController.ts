import { NextFunction, Request, Response } from "express";
import config from "../config";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/User";

function get(
  req: Request,
  res: Response<{}, { USER_ID: any }>,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization as string;

    if (token === undefined) throw new Error("Missing Token");

    jwt.verify(token, config.secret, async (err, decoded) => {
      if (err) return next(err);

      const { id } = decoded as unknown as { id: string };

      const user = await UserModel.findById(id);

      if (user === null)
        return next({ err: new Error("Something is Broken").toString() });

      return res.send({ username: user.username, name: user.name });
    });
  } catch (err) {
    next(err);
  }
}

export default { get };
