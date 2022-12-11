import { config } from "dotenv";
config();

export default {
  secret: process.env.secret ?? null,
  host: "127.0.0.1",
  port: "3000",
  db_password: process.env.mongo_password,
  db_username: process.env.mongo_username,
};
