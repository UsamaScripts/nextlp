import React from "react";
import Image from "next/image";
function ProjectSpecifics() {
  return (
    <>
      <div className="h-80 font-work bg-violet-800 flex flex-col items-center justify-center gap-10 text-white ">
        <p className="text-4xl font-bold">Project Specifics</p>
        <p className="text-3xl font-light text-center">
          Master Bathroom Renovation consisting of:
        </p>
      </div>
      <div>
        <Image
          src="/constraction_image.png"
          alt="Licensed Icon"
          layout="responsive"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="py-20 px-8 mx-4 flex justify-center">
        <div className="flex flex-col md:flex-row max-w-3xl">
          {/* Left Section */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0 pl-0 md:pl-10">
            <div>
              <h2 className="text-3xl font-bold">Phase 1</h2>
              <h3 className="mt-10 text-2xl md:text-4xl text-gray-600">
                Demolition
              </h3>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 w-full pl-0 md:pl-10">
            <div>
              <p className="font-bold">
                Remove existing shower, jacuzzi, vanity, floor, and walls. Clear
                all debris and prepare the site for new installations.
              </p>
              <div className="py-6 font-sans text-gray-600">
                <ul className="list-disc ml-5">
                  <li>Demo existing shower and increase its size.</li>
                  <li>Demo jacuzzi, vanity, floor, and any necessary walls.</li>
                  <li>
                    Demo and replace existing tile flooring with porcelain tile.
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold my-5">
                  <span className="mr-2">✅</span>Ready for Rough-In
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/phase_1.png"
          alt="Licensed Icon"
          layout="responsive"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="py-20 px-8 mx-4 flex justify-center">
        <div className="flex flex-col md:flex-row max-w-3xl">
          {/* Left Section */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0 pl-0 md:pl-10">
            <div>
              <h2 className="text-3xl font-bold">Phase 2</h2>
              <h3 className="mt-10 text-2xl md:text-4xl text-gray-600">
                Rough-In Work
              </h3>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 w-full pl-0 md:pl-10">
            <div>
              <p className="font-bold">
                Install new plumbing rough-ins and electrical circuits,
                including recessed lighting and separate circuits for fan,
                sconces, and tub light.
              </p>
              <p className="mt-4 font-bold">Lighting & Electrical:</p>

              <div className="py-6 font-sans text-gray-600">
                <ul className="list-disc ml-5">
                  <li>
                    Install four 4-inch recessed lights on the ceiling (toilet,
                    shower, niche, and hallway bath) on the same circuit.
                  </li>
                  <li>
                    Install separate circuits for:
                    <ul className="list-[circle] list-inside ml-5">
                      <li>Fan</li>
                      <li>Sconces</li>
                      <li>Tub light</li>
                    </ul>
                  </li>
                  <li>
                    Install new GFCI and circuit breakers in the main panel.
                  </li>
                </ul>
              </div>

              <p className="font-bold">Plumbing:</p>
              <div className="py-6 font-sans text-gray-600">
                <ul className="list-disc ml-5">
                  <li>
                    Install a new shower valve (standard $300.00 included in the
                    proposal)
                  </li>
                  <li>Replace the toilet.</li>
                  <li>Relocate and install a towel warmer (not included).</li>
                </ul>
              </div>

              <p>
                <strong>Note:</strong> For a second ceiling shower valve, labor
                cost is $1,380.00.
              </p>
              <div>
                <p className="font-bold my-5">
                  <span className="mr-2">✅</span>Ready for Drywall, Plaster &
                  Painting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/phase_2.png"
          alt="Licensed Icon"
          layout="responsive"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="h-auto py-20 px-8 mx-4 flex justify-center">
        <div className="flex flex-col md:flex-row max-w-3xl">
          {/* Left Section */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0 pl-0 md:pl-10">
            <div>
              <h2 className="text-3xl font-bold">Phase 3</h2>
              <h3 className="mt-10 text-2xl md:text-4xl leading-normal text-gray-600 font-light">
                Drywall, Plaster & Painting
              </h3>
            </div>
          </div>
          {/* Right Section */}
          <div className="md:w-1/2 w-full pl-0 md:pl-10 font-normal ">
            <div>
              <p>
                <strong>
                  Perform drywall and plaster work, followed by painting and
                  finishing touches like baseboards.
                </strong>
              </p>
              <div>
                <p className="font-bold my-5">
                  <span className="mr-2">✅</span>Ready for Tile & Fixture
                  Install
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/phase_3.png"
          alt="Licensed Icon"
          layout="responsive"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="py-20 px-8 mx-4 flex justify-center ">
        <div className="flex flex-col md:flex-row max-w-3xl ">
          {/* Left Section */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0 pl-0 md:pl-10">
            <div>
              <h2 className="text-3xl font-bold">Phase 4</h2>
              <h3 className="mt-10 text-2xl md:text-4xl text-gray-600">
                Tile & Fixture Install
              </h3>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 w-full pl-0 md:pl-10">
            <div>
              <p className="font-bold">
                Lay new porcelain floor tiles, install tiles on the shower walls
                and niche, and apply herringbone tiles on specific walls.
              </p>
              <p className="mt-5">
                Install new fixtures including a free-standing tub, vanity,
                sconces, mirrors, shower valve, glass panel, and replace the
                toilet.
              </p>
              <p className="mt-4 font-bold">Tile Work:</p>

              <div className="py-6 font-sans text-gray-600">
                <ul className="list-disc ml-5">
                  <li>
                    Install new 48x48 porcelain tile on the entire bathroom
                    floor with a linear drain.
                  </li>
                  <li>Install tiles on the shower wall and a new niche.</li>
                  <li>
                    Install herringbone tiles on the back toilet wall
                    (approximately 16-22 sq. ft.).
                  </li>
                  <li>
                    Install tiles on the vanity side wall (approximately 16-22
                    sq. ft.).
                  </li>
                </ul>
              </div>

              <p>
                <strong>Note:</strong> $1,000 price allowance for tiles is
                included in the proposal ($3.50 per sq. ft.).
              </p>
              <p className="font-bold mt-5">Fixtures & Fittings:</p>

              <div className="py-6 font-sans text-gray-600">
                <ul className="list-disc ml-5">
                  <li>
                    Install new free-standing tub with faucet (faucet and tub
                    not included; determine if the faucet comes out of the wall
                    or from the floor).
                  </li>
                  <li>Install new vanity</li>
                  <li>Install new sconces lights (3 units).</li>
                  <li>Install new mirrors (2 units).</li>
                  <li>
                    Install a new valve shower with a handheld shower head.
                  </li>
                  <li>
                    Install a new fixed glass panel (36-inch; if 48-inch is
                    needed, an additional $1,280.00 will be added).
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold my-5">
                  <span className="mr-2">✅</span>Ready for Drywall, Plaster &
                  Painting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/phase_4.png"
          alt="Licensed Icon"
          layout="responsive"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="py-20 px-8 mx-4 flex justify-center">
        <div className="flex flex-col md:flex-row max-w-3xl">
          {/* Left Section */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0 pl-0 md:pl-10">
            <div>
              <h2 className="text-3xl font-bold">Phase 5</h2>
              <h3 className="mt-10 text-2xl md:text-4xl text-gray-600">
                Finishing Touches + Cleanup
              </h3>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 w-full pl-0 md:pl-10">
            <div>
              <p className="font-bold">
                Replace the exhaust fan, perform final inspections, and clean up
                the site. Address any remaining adjustments.
              </p>
              <div>
                <p className="font-bold my-5">
                  <span className="mr-2">✅</span>Done!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectSpecifics;
