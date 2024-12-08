import React from "react";
import Image from "next/image";

interface FeatureSectionProps {
  countyState: string;
  county: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  countyState,
  county,
}) => {
  const featuresData = [
    {
      title: "Experienced",
      description:
        "Our skilled professionals bring years of experience to deliver top-tier results for your project.",
      image: "/ProFunnalAI04.png",
      imageAlt: "Experienced Icon",
    },
    {
      title: "Reliable",
      description:
        "Our dedicated team provides dependable, swift, and professional service you can count on.",
      image: "/ProFunnalAI03.png",
      imageAlt: "Reliable Icon",
    },
    {
      title: "Licensed & Protected",
      description:
        "We are fully certified and insured, offering peace of mind and a one-year guarantee on all our work.",
      image: "/ProFunnalAI02.png",
      imageAlt: "Licensed Icon",
    },
    {
      title: "Cost Effective",
      description:
        "We provide competitive pricing to ensure your project stays within budget and on schedule.",
      image: "/ProFunnalAI01.png",
      imageAlt: "Cost Effective Icon",
    },
  ];

  return (
    <div className="w-full font-work">
      <div className="flex items-center justify-center px-4 sm:px-0">
        <div className="mt-12 mb-8 max-w-3xl">
          <p className="text-lg sm:text-2xl font-light text-center ">
            We provide <strong>{county}</strong> with exceptional service you
            can trust.
          </p>
        </div>
      </div>
      {/* Features Section */}
      <div className="flex justify-center items-center font-open">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-16 py-20 max-w-3xl">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 px-8"
            >
              <div
                className={`${
                  feature.title === "Cost Effective" ? "w-20 h-20" : "w-16 h-20"
                }`}
              >
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={2400}
                  height={100}
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-base md:text-base">
                {feature.title}
              </h3>
              <p className="max-w-xs text-gray-600 text-sm md:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`flex  items-center justify-center py-24 font-work ${
          !countyState || countyState.trim() === "null" ? "hidden" : ""
        }
        }`}
      >
        <div className="w-full max-w-3xl">
          <div className="w-full max-w-3xl">
            <h2 className="text-2xl md:text-4xl text-center font-light px-8">
              {`${countyState}'s `}
              <span className="font-bold">
                top choice in bathroom remodeling
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div>
        <Image
          src="/image_section_last.png"
          alt="Licensed Icon"
          width={2400}
          height={425}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
