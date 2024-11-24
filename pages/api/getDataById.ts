import { query } from "../../utils/db";

export default async function handler(req, res) {
  console.log("Incoming request:", req.method, req.query);

  if (req.method !== "GET") {
    console.log("Error: Method not allowed");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.query;

  if (!id) {
    console.log("Error: ID is required");
    return res.status(400).json({ error: "ID is required" });
  }

  try {
    console.log("Querying database for ID:", id);
    const data = await query(
      'SELECT id, company_name, first_name, last_name, company_email FROM "public"."google-places" WHERE id = $1',
      [id]
    );

    console.log("Query result:", data);

    if (data.length === 0) {
      console.log("No data found for ID:", id);
      return res.status(404).json({ error: "No data found" });
    }

    console.log("Returning data:", data[0]);
    return res.status(200).json(data[0]);
  } catch (error) {
    console.error("Database query error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
