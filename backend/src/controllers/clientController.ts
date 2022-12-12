import { NextFunction, Request, Response } from "express";
import { ClientModel } from "../models/Clients";
import { BadRequestError, NotFoundError, ServerError } from "../errors/Error";

export function get(
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    try {
      const userId = res.locals.USER_ID;
      if (userId === null) throw new ServerError();

      const client = await ClientModel.findOne({
        createdBy: userId,
        _id: req.params.id,
      });

      console.log(client);

      if (client === null) throw new NotFoundError();
      return res.status(200).send(client);
    } catch (e) {
      next(e);
    }
  })();
}

export function getAll(
  req: Request,
  res: Response<{}, { USER_ID: string }>,
  next: NextFunction
) {
  (async () => {
    try {
      const userId = res.locals.USER_ID;
      if (userId === null) throw new ServerError();
      const clients = await ClientModel.where({ createdBy: userId }).find();
      return res.status(200).send(clients);
    } catch (e) {
      next(e);
    }
  })();
}

export function post(
  req: Request<
    {},
    {},
    {
      birthdate: number;
      city: string;
      credit: number;
      preferences: number[];
      sex: string;
    }
  >,
  res: Response<{}, { USER_ID: string }>,
  next: NextFunction
) {
  (async () => {
    try {
      const userId = res.locals.USER_ID;
      if (userId === null) throw new ServerError();
      const { birthdate, city, credit, preferences, sex } = req.body;
      if (!birthdate || !city || !credit || !preferences || !sex)
        throw new BadRequestError();

      const newClient = new ClientModel({
        createdBy: userId,
        birthdate,
        city,
        credit,
        preferences,
        sex,
      });
      const response = await newClient.save();
      return res.status(201).send(response);
    } catch (e) {
      next(e);
    }
  })();
}

export function removeMany(
  req: Request<{}, {}, { ids: string[] }>,
  res: Response,
  next: NextFunction
) {
  (async () => {
    try {
      const ids = req.body.ids;
      const userId = res.locals.USER_ID;
      if (userId === null) throw new ServerError();
      if (ids === null) throw new BadRequestError();
      if (ids.length === 0) throw new BadRequestError("Empty ID Array");

      await ClientModel.deleteMany({ _id: { $in: ids }, createdBy: userId });

      return res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  })();
}

export function remove(req: Request, res: Response, next: NextFunction) {
  (async () => {
    try {
      const userId = res.locals.USER_ID;

      if (userId === null) throw new ServerError();
      const id = req.params.id;

      const client = await ClientModel.findOne({
        createdBy: userId,
        _id: id,
      });

      if (client === null) throw new NotFoundError();

      await client.remove();

      return res.sendStatus(204);
    } catch (err) {
      console.log(err);
      next(err);
    }
  })();
}

export default { get, getAll, post, removeMany, remove };
