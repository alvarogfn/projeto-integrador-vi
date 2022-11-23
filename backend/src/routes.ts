import express from "express";
import analyticsController from "./controllers/analyticsController";
import clientController from "./controllers/clientController";

const route = express.Router();

route.get("/analytics", analyticsController.appData);
route.get("/clients", clientController.getClients);
// route.get("/insights", insightsController)

export default route;
