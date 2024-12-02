"use client";

import React from "react";
import Image from "next/image";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
  compnayLogoUrl: string;
};

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "project-details", label: "Project Details" },
  { id: "your-investment", label: "Your Investment" },
  { id: "next-steps", label: "Next Steps" },
];

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  scrollToSection,
  activeSection,
  compnayLogoUrl,
}) => {
  return (
    <aside
      className={` fixed top-0 left-0 h-full w-72 bg-[var(--sidebar-bg)] text-white z-10 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col items-center`}
    >
      <div className="flex flex-col items-center space-y-8 w-full">
        <div className="p-8">
          {/* <Image
            src="/your_company_logo.png"
            width={300}
            height={167}
            alt="Your company logo here"
            className="mx-auto"
          /> */}
          <Image
            src={compnayLogoUrl}
            width={300}
            height={167}
            alt="Your company logo here"
            className="mx-auto"
            unoptimized
          />
        </div>
        <div className="w-full space-y-4">
          <ul className="w-full flex flex-col items-start">
            {sections.map(({ id, label }) => (
              <li key={id} className="w-full">
                <button
                  onClick={() => scrollToSection(id)}
                  aria-current={activeSection === id ? "page" : undefined}
                  className={`w-full text-left p-2 pl-6 text-sm ${
                    activeSection === id
                      ? "bg-[var(--sidebar-active-bg)] font-bold text-white"
                      : "hover:bg-gray-700"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
