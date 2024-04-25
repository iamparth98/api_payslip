import pg from "pg";
const { Client } = pg;

export const client = new Client({
  host: "localhost",
  port: 5432,
  database: "payslip",
  user: "postgres",
  password: "varisis",
});

await client.connect();
