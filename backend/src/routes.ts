import express from "express";
import analyticsController from "./controllers/analyticsController";
import clientController from "./controllers/clientController";
import insightsController from "./controllers/InsightsController";

const route = express.Router();

route.get("/analytics", analyticsController.charts);
route.get("/analytics/insights", insightsController.insights);
route.get("/clients", clientController.getClients);

export default route;
