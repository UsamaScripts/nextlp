import React from "react";
import Image from "next/image";
interface NextStepProps {
  first_name: string;
  last_name: string;
  company_name: string;
}

const NextStep: React.FC<NextStepProps> = ({
  first_name,
  last_name,
  company_name,
}) => {
  return (
    <>
      {/* Header Section */}
      <div className="relative bg-ready-section flex items-center justify-center h-64">
        <div className="absolute inset-0 bg-review bg-opacity-60"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-white text-5xl font-light">READY TO START?</h2>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-investmentHero flex justify-center items-center font-open">
        <div className="text-center py-20 px-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl rounded">
          <h2 className="text-4xl font-light mb-6">NO Paper, NO FUSS</h2>
          <p className="mb-6">
            <strong>STEP ONE</strong> <br />
            Type your name in the box below and click ‘Accept and Sign’.
          </p>
          <p className="mb-6">
            <strong>STEP TWO</strong> <br />
            Submit your deposit on the next page.
          </p>
          <p className="mb-6">
            <strong>STEP THREE</strong> <br />
            We’ll have a call to schedule and begin the work.
          </p>
          <p className="mb-6">
            We can’t wait to start getting results for you as quick as possible
            to <br /> reiterate that you made the right decision.
          </p>
          <p>
            <strong>{`${first_name} ${last_name} | ${company_name}`}</strong>
          </p>
        </div>
      </div>
      <div>
        <Image
          src="/next_step_image.png"
          alt="Logo_investment"
          width={3000}
          height={1}
          className="inline align-middle"
        />
      </div>
      <div className="bg-white flex flex-col justify-center items-center font-open">
        <div className="text-center py-20 px-8 w-full  max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl rounded">
          <h2 className="text-2xl font-light mb-16">
            Pay easily by check, money order or
          </h2>
          <Image
            src="/payment_image.png"
            alt="Logo_investment"
            width={3000}
            height={1}
            className="inline align-middle"
          />
          <h2 className="text-2xl font-light mt-16">
            right here in your proposal
          </h2>
        </div>
        <div className=" border m-8 pt-20 pb-8 px-8 mb-16 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl rounded">
          <p className="text-base font-light mb-12">
            I, Jane Smith, agree to the terms of this agreement and I agree that
            my typed name below can be used as a digital representation of my
            signature to that fact.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 ">
            <div>
              <p>Signature</p>
              <p>Accepted and Signed on 3 Nov 2024 at 08:35</p>
            </div>

            <div className="flex justify-center sm:justify-end items-center font-bold rounded-lg py-4 px-6 text-white bg-blue-500">
              <button>Next Step</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextStep;
