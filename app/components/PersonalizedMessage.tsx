import React from "react";

interface PersonalizedMessageProps {
  companyName: string;
  // firstName: string;
  // lastName: string;
  // emailAddress: string;
}

const PersonalizedMessage: React.FC<PersonalizedMessageProps> = ({
  companyName,
  // firstName,
  // lastName,
  // emailAddress,
}) => {
  return (
    <div className="relative w-full bg-hero-section-second-image bg-cover  flex items-center justify-center">
      <div className="absolute inset-0 bg-Personalizedmesssage bg-opacity-90"></div>
      <div className="flex flex-col items-center text-white px-0 sm:px-8 md:px-0 py-20 w-full max-w-4xl z-10">
        <div className="mx-6">
          <div className="px-0 sm:px-0 md:px-12 font-open">
            <p className="text-2xl font-bold mb-5 font-work">Hi Jane,</p>
            <p className="my-5 text-base font-thin">
              At <span className="font-bold">{companyName}</span>, we believe
              every home and bathroom has its own unique charm.
            </p>
            <p className="my-5 font-thin">
              With our skilled team, we are ready to create the bathroom of your
              dreams. This proposal outlines all the details from our
              consultation—covering your project’s specifics, the chosen design
              style, and a breakdown of our estimated costs.
            </p>
            <p className="my-5 font-thin">
              We hope this proposal shows how
              <span className="font-bold"> {companyName}</span> can be the
              perfect partner for your remodeling project. If you’re ready to
              move forward, simply sign digitally below—quick, easy, and
              paper-free!
            </p>
            <p className="my-5 font-thin">
              Feel free to reach out to me using the contact information below
              if you have any questions.
            </p>
            <p className="my-5 ">
              <br />
              <strong>Best Wishes,</strong>
            </p>
            <p className="text-lg font-light">{` — The ${companyName} Team`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedMessage;
