import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_CONNECTION_URL, // PostgreSQL connection string from .env.local
});

export const query = async (text: string, params?: any[]) => {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } finally {
    client.release();
  }
};
