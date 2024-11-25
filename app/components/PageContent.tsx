"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Investment from "./Investment";
import HeroSection from "./HeroSection";
import PersonalizedMessage from "./PersonalizedMessage";
import FeatureSection from "./FeatureSection";
import ProjectDetails from "./ProjectDetails";
import ProjectSpecifics from "./ProjectSpecifics";
import BathGallery from "./BathGallery";
import Review from "./Review";
import NextStep from "./NextStep";
import Footer from "./Footer";

interface PageContentProps {
  reviews: Array<{ body: string; author: string }>;
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  location: {
    state: string;
    county: string;
  };
}

const PageContent: React.FC<PageContentProps> = ({
  reviews,
  firstName,
  lastName,
  email,
  companyName,
  location,
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    if (isSidebarOpen) setSidebarOpen(false);
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "introduction",
        "project-details",
        "your-investment",
        "next-steps",
      ];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        const rect = section?.getBoundingClientRect();
        if (rect && rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
      <main className="md:ml-72 min-h-screen">
        <section id="introduction">
          <HeroSection />
          <PersonalizedMessage
            companyName={companyName}
            firstName={firstName}
            lastName={lastName}
            emailAddress={email}
          />
          <FeatureSection state={location.state} county={location.county} />
        </section>
        <section id="project-details" className="bg-white font-open">
          <ProjectDetails />
          <ProjectSpecifics />
          <BathGallery />
          <Review reviews={reviews} />
        </section>
        <Investment />
        <section id="next-steps">
          <NextStep
            first_name={firstName}
            last_name={lastName}
            company_name={companyName}
          />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default PageContent;
