import React from "react";
import PageContent from "../components/PageContent";

interface Params {
  id: string;
}

const StaticPage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getDataById?id=${id}`
  );
  const data = await res.json();
  console.log(data);

  const firstName = `${data.first_name || "Your"}`;
  const lastName = `${data.last_name || "Name"}`;
  const email = `${data.company_email || "youremail@me.com"}`;
  const companyName = `${data.company_name || "Our Company"}`;
  const location = {
    state: `${data.state}`,
    county: `${data.county}`,
  };
  const reviewData = [
    {
      body: `${data.review1_body}`,
      author: `${data.review1_author}`,
    },
    {
      body: `${data.review2_body}`,
      author: `${data.review2_author}`,
    },
    {
      body: `${data.review3_body}`,
      author: `${data.review3_author}`,
    },
    {
      body: `${data.review4_body}`,
      author: `${data.review4_author}`,
    },
  ];

  return (
    <PageContent
      reviews={reviewData}
      firstName={firstName}
      lastName={lastName}
      email={email}
      companyName={companyName}
      location={location}
    />
  );
};

export default StaticPage;
