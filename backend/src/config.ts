import { config } from "dotenv";
config();

export default {
  secret: process.env.secret ?? null,
  host: process.env.HOST ?? "localhost",
  port: process.env.PORT ?? "3000",
  db_password: process.env.mongo_password,
  db_username: process.env.mongo_username,
};
