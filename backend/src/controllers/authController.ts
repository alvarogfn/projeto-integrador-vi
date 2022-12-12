import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";
import config from "../config";
import {
  BadRequestError,
  ForbiddenResourceError,
  UnprocessableEntityError,
} from "../errors/Error";
import { UserModel } from "../models/User";

export function login(
  req: Request<{}, {}, { username: string; password: string } | undefined>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    try {
      if (req.body === undefined) throw new BadRequestError("No Body");

      const { username, password } = req.body;

      if (!username || !password) throw new BadRequestError("Malformed Body");
      const user = await UserModel.findOne({
        username: username.toLowerCase(),
        password,
      });

      if (user === null)
        throw new ForbiddenResourceError(
          "No user for this combination of username and password"
        );

      const id = user._id;
      const token = Jwt.sign({ id }, config.secret, {
        expiresIn: "2h",
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
      if (req.body === undefined) throw new BadRequestError("No body");

      const { name, username, password } = req.body;

      if (!name || !username || !password) throw new BadRequestError("No body");

      const alreadyExists = await UserModel.findOne({
        username: username.toLowerCase(),
        password,
      });

      if (alreadyExists !== null)
        throw new UnprocessableEntityError("Username already exists");

      const user = await new UserModel({
        name,
        username: username.toLowerCase(),
        password,
      }).save();

      if (user === null) throw new ForbiddenResourceError("User no found");

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
