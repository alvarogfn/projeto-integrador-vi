import express from "express";
import analyticsController from "./controllers/analyticsController";
import authController from "./controllers/authController";
import userController from "./controllers/userController";
import clientController from "./controllers/clientController";
import { authenticate } from "./middlewares/authenticate";

const route = express.Router();

route.post("/login", authController.login);
route.post("/register", authController.register);

route.get("/user", userController.get);

route.get("/clients", authenticate, clientController.getAll);
route.get("/clients/:id", authenticate, clientController.get);
route.post("/clients", authenticate, clientController.post);
route.delete("/clients/deleteMany", authenticate, clientController.removeMany);
route.delete("/clients/:id", authenticate, clientController.remove);

route.get("/analytics", authenticate, analyticsController.get);
export default route;
