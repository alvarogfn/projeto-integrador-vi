import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";
import config from "../config";
import { UserModel } from "../models/User";

export function login(
  req: Request<{}, {}, { username: string; password: string } | undefined>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    try {
      if (req.body === undefined) throw new Error("Missing body");

      const { username, password } = req.body;

      if (!username || !password) throw new Error("Missing parameters");
      const user = await UserModel.findOne({
        username: username.toLowerCase(),
        password,
      });

      if (user === null) throw new Error("User no found");

      const id = user._id;
      const token = Jwt.sign({ id }, config.secret, {
        expiresIn: 50000,
      });
      return res.json({ name: user.name, username: user.username, token });
    } catch (err) {
      next(err);
    }
  })();
}

export function register(
  req: Request<
    {},
    {},
    { name: string; username: string; password: string } | undefined
  >,
  res: Response,
  next: NextFunction
) {
  (async () => {
    try {
      if (req.body === undefined) throw new Error("Missing body");

      const { name, username, password } = req.body;

      if (!name || !username || !password)
        throw new Error("Missing parameters");

      const alreadyExists = await UserModel.findOne({
        username: username.toLowerCase(),
        password,
      });

      if (alreadyExists !== null) throw new Error("Already Exists");

      const user = await new UserModel({
        name,
        username: username.toLowerCase(),
        password,
      }).save();

      if (user === null) throw new Error("User no found");

      const id = user._id;
      const token = Jwt.sign({ id }, config.secret, {
        expiresIn: 50000,
      });

      return res.json({ token });
    } catch (err) {
      return next(err);
    }
  })();
}

export default { login, register };
