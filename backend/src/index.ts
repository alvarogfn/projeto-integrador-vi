import express from "express";
import config from "./config";
import route from "./routes";
import morgan from "morgan";
import moongose from "mongoose";
import cors from "cors";
import { handleError } from "./middlewares/handleError";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("tiny"));

app.use(route);

app.use(handleError);

const hostname = config.host ?? "localhost";
const port = parseInt(config.port ?? "3000");

moongose.connect("mongodb://localhost:27017/projetovi").then(
  async () => {
    app.listen(port, hostname, () => {
      const url = `http://${hostname}:${port}`;
      console.log("Your app is running: " + url);
    });
  },
  (e) => {
    console.log(e);
  }
);
