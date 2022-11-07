import mysql from "mysql2/promise";
import config from "../config";

export async function database() {
  const connection = await mysql.createConnection({
    password: config.mysql_password,
  });
  return connection;
}
