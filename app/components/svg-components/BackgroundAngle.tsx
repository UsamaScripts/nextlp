import React from "react";

interface BackgroundAngleProps {
  className?: string; // For customizing Tailwind classes
}

const BackgroundAngle: React.FC<BackgroundAngleProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full ${className || "h-auto"}`} // Default to full width and auto height
      viewBox="0 0 1440 5000"
      preserveAspectRatio="none"
      fill="none"
    >
      <style>{`.st0 { opacity: 0.1; }`}</style>
      <path
        className="st0"
        d="M720,5000l720-53V0H0v4947L720,5000z"
        fill="currentColor"
      />
      <path d="M720,4971.7l720-36V0H0v4935.7L720,4971.7z" fill="currentColor" />
    </svg>
  );
};

export default BackgroundAngle;
