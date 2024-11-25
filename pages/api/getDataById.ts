import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../utils/db";

interface CompanyData {
  id: number;
  company_name: string;
  first_name: string;
  last_name: string;
  company_email: string;
  phone: string;
  state: string;
  county: string;
  city: string;
  service_years: number;
  review1_body: string;
  review1_author: string;
  review2_body: string;
  review2_author: string;
  review3_body: string;
  review3_author: string;
  review4_body: string;
  review4_author: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CompanyData | { error: string }>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: "A single ID is required" });
  }

  try {
    const data = await query(
      'SELECT id, company_name, first_name, last_name, company_email, phone, state, county, city, service_years, review1_body, review1_author, review2_body, review2_author, review3_body, review3_author, review4_body, review4_author FROM "public"."google-places" WHERE id = $1',
      [id]
    );

    if (data.length === 0) {
      return res.status(404).json({ error: "No data found" });
    }

    return res.status(200).json(data[0]);
  } catch (error) {
    console.error("Database query failed:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
