import pool from "@libs/db";

export async function ClientQuery(query: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const result = await client.query(query, params);
    return result.rows;
  } catch (error) {
    throw error;
  } finally {
    client.release();
  }
}
