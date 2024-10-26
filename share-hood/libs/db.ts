// lib/db.js
import {Pool} from "pg";

const pool = new Pool({
  user: "admin",
  host: "localhost",
  database: "share-hood-db",
  password: "sleepyorca",
  port: 5432,
});

export default pool;
