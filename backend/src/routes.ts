import express from "express";
import chartController from "./controllers/chartController";

const route = express.Router();

route.get("/analytics");
route.get("/analytics/region", chartController.getByRegion);
route.get("/analytics/age", chartController.getByAge);
route.get("/analytics/regionAndAge", chartController.getByRegionAndAge);

export default route;
