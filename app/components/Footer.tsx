import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-footer-green-gradient text-white flex flex-col justify-center items-center font-DMsans">
        <div className=" h-64 bg-footer-transparent-gradient w-full z-20 -mt-64"></div>

        <div className="text-center pb-20 px-8 w-full max-w-5xl">
          <div>
            <h2 className="text-7xl mb-12">
              Ready to Transform Your Proposals?
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="w-full md:w-2/5">
              <p className="text-left text-3xl text-footerText font-DMsans">
                Turn your estimates into
                <strong className="text-white font-semibold">
                  {" "}
                  captivating experiences{" "}
                </strong>
                with ProFunnel.
              </p>
            </div>
            <div className="w-full md:w-3/5 text-footerText">
              <p className="text-left text-8xl md:text-8xl border-b  border-footerText pb-2">
                ProFunnel transforms static estimates into interactive, dynamic
                web experiences that provide the ultimate functionality to your
                clients—with no extra work for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center border border-footerText gap-1 rounded-full mt-6 px-2 py-1">
                  <p>
                    <Image
                      priority
                      src="/tick_mark_orange.svg"
                      height={18}
                      width={18}
                      alt="Follow us on Twitter"
                    />
                  </p>
                  <p className="font-semibold text-sm sm:text-base font-open text-center">
                    Optimized For Clients
                  </p>
                </div>
                <div className="flex items-center border border-footerText gap-1 rounded-full mt-6 px-2 py-1">
                  <p>
                    <Image
                      priority
                      src="/tick_mark_orange.svg"
                      height={18}
                      width={18}
                      alt="Follow us on Twitter"
                    />
                  </p>
                  <p className="font-semibold text-sm sm:text-base font-open text-center">
                    Accept Payments & Feedback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-footerBG text-white flex flex-col justify-center  items-center ">
        <div className="text-center py-20  w-full max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col justify-start items-start w-full px-4 sm:px-6 md:px-8">
              <div>
                <div className="mb-4 sm:mb-6 md:mb-8 border-b border-footerBorder py-6">
                  <Image
                    priority
                    src="/footer-logo.svg"
                    height={76}
                    width={430}
                    alt="Footer Logo"
                    className="max-w-full"
                  />
                  <div className="flex gap-2 items-center mt-2 sm:mt-4">
                    <p className="text-start font-DMsans text-footerLogo">
                      Proposals That Win
                    </p>
                    <Image
                      priority
                      src="/tick_mark.svg"
                      height={16}
                      width={16}
                      alt="Tick Mark"
                    />
                  </div>
                </div>
                <p className="text-start text-footerlogotext text-2xl leading-relaxed">
                  Let’s chat about how we can maximize your profit and convert
                  more customers.
                </p>
              </div>
            </div>

            <div className="w-full text-footerBG flex flex-col md:flex-row justify-center items-center pt-6 px-4 md:px-0">
              <div className="w-full md:w-auto text-center space-y-6">
                <div>
                  <a
                    href="https://profunnel.ai/contact-us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-buttonBook font-open text-sm md:text-base hover:bg-buttonBookHover text-btcolor font-bold py-3 px-6 md:px-10 rounded-full shadow-lg transition-all duration-300 w-full md:w-auto"
                  >
                    BOOK A FREE CONSULTATION
                  </a>
                </div>
                <div className="pt-4">
                  <p className="text-contactUsColor text-sm md:text-base">
                    or contact us at
                  </p>
                </div>

                <div className="text-2xl md:text-4xl font-semibold">
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
