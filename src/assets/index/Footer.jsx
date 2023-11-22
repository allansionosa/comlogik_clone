import React from "react";
import { BsTelephoneFill, BsFacebook } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="bg-[#E9F6FB] pb-16">
        <div className="px-5">
          <div className=" flex justify-center">
            <div className="w-40">
              <div className="mt-10">
                <a>
                  <img src="static/logo.png" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 ">
            <div className="mt-5">
              <div>
                <h5 className="text-[#687280] font-sans text-[14px] font-bold">
                  ADDRESS
                </h5>
              </div>
              <div className="mt-5">
                <ul className="text-[#666666] font-sans text-[16px]">
                  <li>
                    <p>
                      2/F F & L Centre 2211 Commonwealth Avenue<br></br>
                      Brgy. Holy Spirit, Quezon City<br></br>Philippines 1127
                    </p>
                  </li>
                  <li className="flex justify-start gap-5 mt-4">
                    <BsTelephoneFill className="mt-1" />
                    8952-2589
                  </li>
                  <li className="flex justify-start gap-5 mt-4">
                    <BsTelephoneFill className="mt-1" />
                    8932-9421
                  </li>
                  <li className="flex justify-start gap-5 mt-4">
                    <BsFacebook size={30} color="#00B2FF" />
                    <FaFacebookMessenger size={30} color="#00B2FF" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-5">
              <div>
                <h5 className="text-[#6B7280] font-bold text-[16px]">
                  QUICK LINKS
                </h5>
              </div>
              <div>
                <ul className="mt-5 text-[#495057] font-sans text-[17px]">
                  <li className="mt-5">About us</li>
                  <li className="mt-5">Solutions</li>
                  <li className="mt-5">Clients</li>
                  <li className="mt-5">News</li>
                  <li className="mt-5">Support</li>
                  <li className="mt-5">Contact us</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <div>
                <h5 className="text-[#6B7280] font-bold text-[16px]">
                  SOLUTIONS
                </h5>
              </div>
              <div>
                <ul className="mt-5 text-[#495057] font-sans text-[17px]">
                  <li className="mt-5">
                    Hospital Information Management System
                  </li>
                  <li className="mt-5">Clinic Information Management System</li>
                  <li className="mt-5">ClaimsAssure</li>
                  <li className="mt-5">Comlogik EMR</li>
                  <li className="mt-5">WorkbenchMD</li>
                  <li className="mt-5">Comlogik Connect</li>
                  <li className="mt-5">PayManager</li>
                  <li className="mt-5">WorkForce</li>
                  <li className="mt-5">InstaP Survey</li>
                  <li className="mt-5">eHealth Tracker</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-center my-5 text-[#2E67B2] font-bold">
          COPYRIGHT © 2020 - 2022, COMLOGIK BUSINESS SYSTEMS INC.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
