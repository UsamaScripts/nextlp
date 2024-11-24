import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-footer-green-gradient text-white flex flex-col justify-center items-center font-open">
        <div className="text-center py-20 px-8 w-full max-w-3xl">
          <div>
            <h2 className="text-4xl mb-12">
              Ready to Transform Your Proposals?
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="md:w-1/3">
              <p className="text-left text-lg">
                Turn your estimates into
                <strong> captivating experiences </strong> with ProFunnel.
              </p>
            </div>

            <div className="md:w-2/3 text-footerText">
              <p className="text-left text-lg md:text-xl border-b border-footerText pb-2">
                ProFunnel transforms static estimates into interactive, dynamic
                web experiences that provide the ultimate functionality to your
                clients— with no extra work for you.
              </p>
              <div className="flex gap-2">
                <div className="flex items-center border border-footerText gap-2 rounded-xl mt-6 px-2">
                  <p>
                    <Image
                      priority
                      src="/tick_mark_orange.svg"
                      height={18}
                      width={19}
                      alt="Follow us on Twitter"
                    />
                  </p>
                  <p>Optimized For Clients</p>
                </div>
                <div className="flex items-center border border-footerText rounded-xl gap-2 mt-6 px-2">
                  <p>
                    <Image
                      priority
                      src="/tick_mark_orange.svg"
                      height={18}
                      width={19}
                      alt="Follow us on Twitter"
                    />
                  </p>
                  <p>Optimized For Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-footerBG text-white flex flex-col justify-center items-center font-open">
        <div className="text-center py-20 px-8 w-full max-w-3xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className=" flex flex-col justify-start items-start w-full">
              <div>
                <div className="mb-8 border-b-2 pb-4">
                  <Image
                    priority
                    src="/footer-logo.svg"
                    height={76}
                    width={430}
                    alt="Follow us on Twitter"
                  />
                  <div className="flex gap-2">
                    <p className="text-start text-footerLogo">
                      Proposals That Win
                    </p>
                    <Image
                      priority
                      src="/tick_mark.svg"
                      height={18}
                      width={18}
                      alt="Follow us on Twitter"
                    />
                  </div>
                </div>
                <p className="text-start font-work text-footerlogotext text-xl">
                  Let’s chat about how we can maximize your profit and convert
                  more customers.
                </p>
              </div>
            </div>
            <div className="  w-full text-footerBG flex justify-center items-center ">
              <div className=" w-full">
                <button className="bg-buttonBook py-2 px-4 text-bold rounded-3xl">
                  BOOK A FREE CONSULTATION
                </button>
                <div className="mt-4">
                  <p className="text-white"> or contact us at</p>
                </div>
                <div className="mt-4 text-2xl font-semibold">
                  <p className="text-white">contact@profunnel.ai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
