import express from "express";
import { config } from "dotenv";

config({ override: true });

const app = express();

const hostname = process.env.HOSTNAME ?? "localhost";
const port = parseInt(process.env.PORT ?? "3000");

app.listen(port, hostname, () => {
  const url = `http://${hostname}:${port}`;
  console.log("Your app is running: " + url);
});
