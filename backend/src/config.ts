import { config } from "dotenv";
config();

export default {
  mysql_password: process.env.mysql_password,
};