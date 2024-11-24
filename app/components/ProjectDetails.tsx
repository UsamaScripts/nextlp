import React from "react";
import Image from "next/image";
function ProjectDetails() {
  return (
    <>
      <div className="relative h-64">
        <div className="absolute inset-0 bg-hero-section-first-image bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-project opacity-90"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <div className="w-full px-4 max-w-4xl">
            <h1 className="text-5xl md:text-5xl font-bold font-work">
              Project Details
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 py-8 flex justify-center mt-14">
        <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* Left Section */}
          <div className="flex flex-col  px-6">
            <h3 className="font-work text-2xl mb-4 text-gray-700 ">
              Your New Bathroom
            </h3>
            <p className="text-gray-700 text-base mb-5">
              This proposal includes a comprehensive estimate for the full range
              of services, labor, and materials required to bring the project to
              completion.
            </p>
            <p className="text-gray-700 text-base mb-5">
              This includes demolition, new tile flooring, electrical and
              plumbing work, fixture installations, drywall, painting, and
              cleanup. The estimate covers standard materials and labor; finish
              materials are to be provided by you, the owner.
            </p>
            <p className="text-gray-700 text-base">
              Additional costs may apply for upgrades like a larger glass panel
              or a second shower valve.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center px-6">
            <h3 className="text-lg font-bold  flex items-center mb-4 gap-2">
              <span> ✅ </span> This renovation includes:
            </h3>
            <ul className="list-decimal list-inside text-gray-700 space-y-1 text-base pl-4">
              <li>Demolish shower, jacuzzi, vanity, floor, and walls</li>
              <li>
                Install porcelain floor tiles, shower tiles with niche, and
                herringbone tiles
              </li>
              <li>
                Install recessed lights, separate circuits for fan, sconces, and
                tub light
              </li>
              <li>
                Install new tub, vanity, sconces, mirrors, shower valve, and
                glass panel
              </li>
              <li>
                Install new shower valve, replace toilet, and relocate towel
                warmer
              </li>
              <li>Perform drywall work, plaster, and paint</li>
              <li>Replace exhaust fan</li>
              <li>Install baseboards and trims</li>
              <li>Manage permits and fees</li>
              <li>Remove garbage and clean up</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/ProFunnelAI_Render-7.jpg"
          alt="Licensed Icon"
          width={2400}
          height={100}
          className="object-cover"
        />
      </div>
    </>
  );
}

export default ProjectDetails;
