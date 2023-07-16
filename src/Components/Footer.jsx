import React from "react";
import footerLeftShape from "../assets/img/bg/footer_left_shape.png";
import footerRightShape from "../assets/img/bg/footer-right_shape.png";
import footerBg from "../assets/img/bg/Footer_bg.png";
import logo from "../assets/img/logos/logo.svg";
import facebookIcon from "../assets/img/icons/facebook (4) 1.svg";
import twitterIcon from "../assets/img/icons/twitter (2) 1.svg";
import githubIcon from "../assets/img/icons/github 1.svg";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="relative z-10 md:bg-[#111131] bg-transparent">
      {/* Shape */}
      <div className="hidden md:block">
        <img
          className="absolute bottom-0 left-0 -z-10"
          src={footerLeftShape}
          alt=""
        />
        <img
          className="absolute bottom-0 right-0 -z-10"
          src={footerRightShape}
          alt=""
        />
      </div>
      <div className="hidden md:block">
        <img src={footerBg} alt="" className="w-full" />
      </div>
      <div className="container">
        <div className="py-[50px] md:py-[70px] flex justify-center items-center">
          {/* Nav links */}
          <ul className="gap-9 hidden lg:flex">
            <li>
              <Link
                to={"/staking"}
                className={`text-[17px] text-[#fff] font-[700] font-satoshi transition hover:text-[#15BFFD] ${
                  location.pathname === "/staking"
                    ? "text-[#15BFFD] px-[10px] py-[10px]  bg-[#141735] rounded-[32px]"
                    : ""
                }`}
              >
                Staking
              </Link>
            </li>
            <li>
              <Link
                to="/privatesale"
                className={`text-[17px] text-[#fff] font-[700] font-satoshi transition hover:text-[#15BFFD] ${
                  location.pathname === "/privatesale"
                    ? "text-[#15BFFD] px-[10px] py-[10px]  bg-[#141735] rounded-[32px]"
                    : ""
                }`}
              >
                Private sale
              </Link>
            </li>
            <li>
              <Link
                to="/presale"
                className={`text-[17px] text-[#fff] font-[700] font-satoshi transition hover:text-[#15BFFD] ${
                  location.pathname === "/presale"
                    ? "text-[#15BFFD] px-[10px] py-[10px]  bg-[#141735] rounded-[32px]"
                    : ""
                }`}
              >
                Presale
              </Link>
            </li>
            <li>
              <Link
                to="/governance"
                className={`text-[17px] text-[#fff] font-[700] font-satoshi transition hover:text-[#15BFFD] ${
                  location.pathname === "/governance"
                    ? "text-[#15BFFD] px-[10px] py-[10px]  bg-[#141735] rounded-[32px]"
                    : ""
                }`}
              >
                Governance
              </Link>
            </li>
            <li>
              <a
                href="https://brainzfinance.gitbook.io/whitepaper/"
                className="text-[17px] text-[#fff] font-[700] font-satoshi transition hover:text-[#15BFFD]"
              >
                Whitepaper
              </a>
            </li>
          </ul>
        </div>
        <div className="pb-[90px] flex flex-col md:flex-row gap-14 md:gap-4 justify-between items-center">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="flex gap-2">
            <a
              href="https://www.t.me/brainzfinance"
              target="_blank"
              className="flex justify-center items-center h-[38px] w-[38px] rounded-full border-[1px] border-[rgba(255,255,255,0.5)]"
            >
              <img src={facebookIcon} alt="" />
            </a>
            <a
              href="https://www.twitter.com/brainzfinance"
              target="_blank"
              className="flex justify-center items-center h-[38px] w-[38px] rounded-full border-[1px] border-[rgba(255,255,255,0.5)]"
            >
              <img src={twitterIcon} alt="" />
            </a>
            <a
              href="https://github.com/brainzfinance"
              target="_blank"
              className="flex justify-center items-center h-[38px] w-[38px] rounded-full border-[1px] border-[rgba(255,255,255,0.5)]"
            >
              <img src={githubIcon} alt="" />
            </a>
          </div>
          <p className="text-[10.5px] text-[#fff] font-[400]">
            © 2023 Brainz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
