import express from "express";
import analyticsController from "./controllers/analyticsController";
import authController from "./controllers/authController";
import clientController from "./controllers/clientController";
import insightsController from "./controllers/InsightsController";

const route = express.Router();

route.post("/login", authController.login);

route.get("/analytics", analyticsController.charts);
route.get("/analytics/insights", insightsController.insights);

route.get("/clients", clientController.getAll);
route.get("/clients/:id", clientController.get);
route.post("/clients", clientController.post);
route.post("/clients/delete", clientController.removeMany);
route.delete("/clients/:id", clientController.remove);

export default route;
