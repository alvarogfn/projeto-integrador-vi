import express from "express";
import { routeController } from "./controllers/routeController";
import { Middleware } from "./middlewares/middleware";

const route = express.Router();

route.get("/", Middleware, routeController);
route.post("/");

export default route;
