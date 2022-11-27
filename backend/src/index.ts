import express from "express";
import { config } from "dotenv";
import route from "./routes";
import morgan from "morgan";
import moongose from "mongoose";
import cors from "cors";
import { FakePopulate } from "./utils/FakePopulate";

config({ override: true });

const app = express();

app.use(cors());
app.use(morgan("tiny"));

app.use(route);

const hostname = process.env.HOSTNAME ?? "localhost";
const port = parseInt(process.env.PORT ?? "3000");

moongose.connect("mongodb://localhost:27017/projetovi").then(
  async () => {
    await FakePopulate();
    await FakePopulate();
    await FakePopulate();
    await FakePopulate();
    await FakePopulate();

    app.listen(port, hostname, () => {
      const url = `http://${hostname}:${port}`;
      console.log("Your app is running: " + url);
    });
  },
  (e) => {
    console.log(e);
  }
);
