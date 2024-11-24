import { query } from "../../utils/db";

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  try {
    const data = await query(
      'SELECT id, company_name, first_name, last_name, company_email, phone, state,county,city,service_years,review1_body,review1_author,review2_body,review2_author,review3_body,review3_author,review4_body,review4_author FROM "public"."google-places" WHERE id = $1',
      [id]
    );

    if (data.length === 0) {
      return res.status(404).json({ error: "No data found" });
    }

    return res.status(200).json(data[0]);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
