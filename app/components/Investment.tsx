"use client";

import React from "react";
import Image from "next/image";
const Investment: React.FC = () => {
  return (
    <section id="your-investment" className="font-open bg-white">
      {/* Hero Section */}
      <div className="relative bg-investmentHero flex items-center justify-center px-6 py-16 md:py-24">
        <div className="relative z-10 max-w-3xl text-center">
          <h2 className="text-gray-700 text-3xl font-semibold">
            Like our bathrooms, we like to keep our pricing flexible and simple.
          </h2>
          <p className="text-gray-500 mt-6">
            Based on the specifics outlined in this proposal, we estimate your
            project cost to be{" "}
            <strong className="text-gray-600">as follows:</strong>
          </p>
        </div>
      </div>

      {/* Investment Details Section */}
      <div className="py-12 px-4 md:px-10 flex justify-center">
        <div className="max-w-3xl w-full">
          {/* Renovation Summary */}
          <div className="rounded-sm border ">
            {/* Header */}
            <div className="bg-invoiceBG text-white rounded-sm py-6 px-6">
              <h2 className="text-xl font-semibold">
                Your Master Bathroom Renovation
              </h2>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Total Cost */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-lg">Total Cost</h3>
                  <p className="text-gray-700 text-normal">
                    Complete renovation of the master bathroom, including
                    demolition, new tile flooring, electrical and plumbing work,
                    fixture installations, drywall, painting, and cleanup.
                  </p>
                </div>
                <p className="text-lg font-bold text-gray-700">$26,500</p>
              </div>

              {/* Flooring Discount */}
              <div className="flex justify-between items-center py-4 border-t border-gray-300">
                <p className="font-bold text-gray-700">Flooring Discount</p>
                <p className="font-bold text-gray-700">-$1,000</p>
              </div>

              {/* Payment Plan Header */}
              <div className="py-2 bg-gray-200 rounded-sm mt-5 text-gray-800">
                <p className="ml-4 font-bold">Payment Plan</p>
              </div>

              {/* Payment Plan Details */}
              <div className="py-4 ">
                {[
                  {
                    title: "Deposit",
                    details: "$2,550 Due at signing",
                    percentage: "10%",
                  },
                  {
                    title: "First Payment",
                    details: "$10,327.50 Due on project start",
                    percentage: "40%",
                  },
                  {
                    title: "Second Payment",
                    details: "$10,327.50 Due on completion of rough-in",
                    percentage: "40%",
                  },
                  {
                    title: "Final Payment",
                    details: "$2,295 Due on final inspection",
                    percentage: "10%",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center mb-4 ${
                      item.title == "Deposit" ? "" : "border-t"
                    } `}
                  >
                    <div className="mt-2 ">
                      <p className="font-bold font-open ">{item.title}</p>
                      <p className="text-gray-700 text-normal">
                        {item.details}
                      </p>
                    </div>
                    <p className="font-bold text-gray-700 ">
                      {item.percentage}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Total Summary Section */}
          <div className="mt-8  p-6 border rounded ">
            <div className="flex justify-between text-sm mb-2">
              <p>One-off Total</p>
              <p className="text-gray-700">$26,500</p>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <p>- Flooring Discount</p>
              <p className="text-gray-700">-$1,000</p>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <p>Total</p>
              <p className="text-gray-900">$25,500</p>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Section */}
      <div className="bg-investmentHero flex justify-center items-center">
        <div className=" w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl  rounded mx-4">
          <div>
            <div className="px-2 py-20">
              <div className="flex justify-center items-center flex-col  mb-20 px-4">
                <Image
                  src="/ProFunnalTogall.png"
                  alt="Logo_investment"
                  width={65}
                  height={53}
                  className="object-cover"
                />
                <h2 className="text-4xl font-light mt-10 mb-5 text-center">
                  Control Your Pricing
                </h2>
                <p className="font-bold text-center">
                  What may affect the cost of the job?
                </p>
              </div>
              <p className="mb-6">
                <Image
                  src="/--png.png"
                  alt="Logo_investment"
                  width={15}
                  height={15}
                  className="inline align-middle"
                />
                <strong className="ml-3">Tile Allowance: </strong> We &apos;re
                including a $1,000 price allowance for tiles, at $3.50 per sq.
                ft.
              </p>
              <p className="mb-6">
                <Image
                  src="/arrow-up.png"
                  alt="Logo_investment"
                  width={15}
                  height={15}
                  className="inline align-middle"
                />
                <strong className="ml-3">Shower Glass Sizing: </strong>
                We &apos;he priced for 36-inch glass, with 48-inch adding
                +$1,280 if needed
              </p>
              <p>
                <Image
                  src="/arrow-up.png"
                  alt="Logo_investment"
                  width={15}
                  height={15}
                  className="inline align-middle"
                />
                <strong className="ml-3">Window Film: </strong>
                If required, window film installation adds +$300 for both
                windows
              </p>
              <p className="my-14 text-2xl text-center">
                ✅ What &apos;s reIncluded:
              </p>
              <ul className="list-disc ml-8 font-open text-base font-light">
                <li>Replace the exhaust fan (Panasonic model included)</li>
                <li>Drywall and plaster work included</li>
                <li>Painting included</li>
                <li>Trims (baseboards) included</li>
                <li>Permits and fees included</li>
                <li>Electrician and plumber included</li>
                <li>All garbage removal included</li>
                <li>All rough materials included</li>
                <li>
                  Finish materials provided by the owner except where noted
                </li>
              </ul>
              <p className="my-8 text-2xl text-center"> ❌ What&apos;s Not:</p>
              <ul className="list-disc ml-8 font-open text-base font-light">
                <li>
                  Faucet and tub not included, must determine whether faucet
                  comes out of wall or floor
                </li>
                <li>
                  All other fixtures and finish materials are to be provided by
                  the owner
                </li>
                <li>
                  If surprises or problems are found on existing covered
                  flooring or walls, the project scope will need to be reviewed
                  and adjusted accordingly.
                </li>
                <li>Relocating and installing towel warmer</li>
                <li>
                  Fixed panel glass and new shower valve will incur an
                  additional cost of $2,260.00
                </li>
              </ul>
              <p className="my-8 text-2xl text-center"> Your Discounts:</p>
              <p className="text-center">
                <Image
                  src="/arrow-down.png"
                  alt="Logo_investment"
                  width={15}
                  height={15}
                  className="inline align-middle"
                />
                <strong className="ml-3">$1,000 discount </strong>
                on all bathroom floor materials
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/image_investment_section.jpg"
          alt="Logo_investment"
          width={3000}
          height={1}
          className="inline align-middle"
        />
      </div>
    </section>
  );
};

export default Investment;
