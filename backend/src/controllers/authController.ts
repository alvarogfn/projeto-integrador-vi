import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { UserModel } from "../models/User";
export function login(
  req: Request<{}, {}, { user: string; password: string }>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    const user = await UserModel.find({
      $where: () =>
        this.username === req.body.user && this.password === req.body.password,
    });

    console.log(user);

    // if (req.body.user === "luiz" && req.body.password === "123") {
    //   // auth ok
    //   const id = 1; // esse id viria do banco de dados
    //   const token = Jwt.sign({ id }, process.env.SECRET, {
    //     expiresIn: 300, // expires in 5min
    //   });
    //   return res.json({ auth: true, token });
    // }

    // res.status(500).json({ message: "Login inválido!" });
  })();
}

export default { login };
