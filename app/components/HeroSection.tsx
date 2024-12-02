import React from "react";
import Image from "next/image";
type HeroSectionProps = {
  compnayLogoUrl: string;
};
const HeroSection: React.FC<HeroSectionProps> = ({ compnayLogoUrl }) => {
  return (
    <>
      <div className="relative py-16 bg-hero-section-first-image bg-cover bg-center flex flex-col items-center justify-center font-work">
        <div className="absolute inset-0 bg-herosection"></div>
        <div className="relative w-full z-10 text-white text-center flex flex-col items-center">
          <div className="w-10/12 ">
            <div className="mb-6">
              <Image
                src={compnayLogoUrl}
                width={162}
                height={86}
                alt="Your company logo"
                className="mx-auto"
                unoptimized
              />
            </div>
            <div className="mb-8 mx-auto">
              <h1 className="mt-10 mb-5 text-5xl font-light">Bathroom Bliss</h1>
              <p className="text-base	 my-5 font-open">
                <strong>
                  Thank you for giving us the opportunity to pitch for your
                  master bathroom renovation at 6 Main Street.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Image
          src="/image1.png"
          alt="First Image"
          width={2400}
          height={40}
          className="object-cover"
        />
      </div>
    </>
  );
};

export default HeroSection;
