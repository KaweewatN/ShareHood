// db.js
import postgres from "postgres";

const connectionString = process.env.SUPABASE_DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not defined");
}
const sql = postgres(connectionString);

export default sql;
