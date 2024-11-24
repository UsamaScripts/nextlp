"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Investment from "../components/Investment";
import HeroSection from "../components/HeroSection";
import PersonalizedMessage from "../components/PersonalizedMessage";
import FeatureSection from "../components/FeatureSection";
import ProjectDetails from "../components/ProjectDetails";
import ProjectSpecifics from "../components/ProjectSpecifics";
import BathGallery from "../components/BathGallery";
import Review from "../components/Review";
import NextStep from "../components/NextStep";
import Footer from "../components/Footer";
const DynamicPage: React.FC = () => {
  const reviewData = [
    {
      body: "ProFunnel AI transformed my bathroom beyond my expectations!",
      author: "John Doe",
    },
    {
      body: "Excellent service and craftsmanship. Highly recommended!",
      author: "Jane Smith",
    },
    {
      body: "I love my new bathroom, it’s so elegant and modern!",
      author: "Sarah Lee",
    },
    {
      body: "Great experience from start to finish. Five stars!",
      author: "Mark Johnson",
    },
  ];

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
      for (let sectionId of sections) {
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
      <main className="md:ml-72  min-h-screen">
        <section id="introduction">
          <HeroSection />
          <PersonalizedMessage
            companyName="Dream Bathrooms Co."
            firstName="John"
            lastName="Doe"
            emailAddress="john.doe@dreambathrooms.com"
          />
          <FeatureSection state="California" county="Los Angeles County" />
        </section>
        <section id="project-details" className="bg-white font-open">
          <ProjectDetails />
          <ProjectSpecifics />
          <BathGallery />
          <Review reviews={reviewData} />
        </section>
        <Investment />
        <section id="next-steps">
          <NextStep
            first_name="John"
            last_name="Doe"
            company_name="Dream Bathrooms Co."
          />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default DynamicPage;
