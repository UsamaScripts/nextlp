"use client";

import React from "react";

type HeaderProps = {
  toggleSidebar: () => void;
};

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 left-0 w-full bg-[var(--sidebar-bg)] text-white p-4 flex justify-between md:hidden z-50">
      <h1 className="text-lg">Your Company</h1>
      <button
        onClick={toggleSidebar}
        className="text-white text-2xl focus:outline-none"
      >
        ☰
      </button>
    </header>
  );
};

export default Header;
