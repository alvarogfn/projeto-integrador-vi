import express from "express";
import { config } from "dotenv";
import route from "./routes";
import morgan from "morgan";
import mysql from "mysql2/promise";

config({ override: true });

const app = express();
(async () => {
  await mysql
    .createConnection({
      password: "123456",
    })
    .then((connection) =>
      connection.query(`CREATE DATABASE IF NOT EXISTS financeiro`)
    );
})();

app.use(morgan("tiny"));
app.use(route);

const hostname = process.env.HOSTNAME ?? "localhost";
const port = parseInt(process.env.PORT ?? "3000");

app.listen(port, hostname, () => {
  const url = `http://${hostname}:${port}`;
  console.log("Your app is running: " + url);
});
