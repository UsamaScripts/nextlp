import React from "react";
import PageContent from "../components/PageContent";

interface Params {
  id: string;
}

const StaticPage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  const BASEURL =
    "https://nextlp-git-main-muhammadusama2106s-projects.vercel.app";
  const res = await fetch(`${BASEURL}/api/getDataById?id=${id}`);
  const data = await res.json();
  const companyName = `${data.company_name || "Our Company"}`;
  const location = {
    countyState: `${data.state} `,
    county: `${data.county}`,
  };

  const logoUrl = data.company_logo
    ? `${data.company_logo}`
    : "/your_company_logo.png";
  const LogoUrlHero = data.company_logo
    ? `${data.company_logo}`
    : "/your_company_logo_transparent.png";
  const reviewData = [
    {
      body: data.review1_body
        ? data.review1_body
        : `${companyName} transformed my bathroom last month,and the results were outstanding!`,
      author: data.review1_author ? data.review1_author : "Jessica R",
    },
    {
      body: data.review2_body
        ? data.review2_body
        : `I recently had a fantastic experience working with the folks at ${companyName} on a full kitchen and bath renovation. From day one, everything went smoothly. They were very responsive—always ready to answer my questions, offer suggestions, and keep me updated throughout the project.`,
      author: data.review2_author ? data.review2_author : "Nina K",
    },
    {
      body: data.review3_body
        ? data.review3_body
        : `Could not be happier with the new bathroom! The quality of work and attention to detail surpassed my expectations. ${companyName} rocks.`,
      author: data.review3_author ? data.review3_author : "Carlos G",
    },
    {
      body: data.review4_body
        ? data.review4_body
        : ` Clear communication, prompt service, and a professional finish. Highly recommend ${companyName}!`,
      author: data.review4_author ? data.review4_author : "Valeria S",
    },
  ];

  return (
    <PageContent
      reviews={reviewData}
      companyName={companyName}
      location={location}
      logoUrl={logoUrl}
      LogoUrlHero={LogoUrlHero}
    />
  );
};

export default StaticPage;
