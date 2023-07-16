import React, { useState } from "react";
import logo from "../assets/img/logos/logo.svg";
import hamburger from "../assets/img/icons/burger_icon.svg";
import { Link, useLocation } from "react-router-dom";
import MobileLogo from "../assets/img/icons/moble_logo.svg";

const Header = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div>
        {/* Navbar Menu */}
        {isMenuOpen && (
          <div className="navbar-menu relative z-50">
            <div
              className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
              onClick={toggleMenu}
            ></div>
            <nav className="fixed top-[110px] sm:top-[130px] md:top-[170px] left-0 right-0 mx-auto flex flex-col w-5/6 max-w-sm py-7 px-5 border-[2px] border-themeColor rounded-[10px] bg-white border-r overflow-y-auto">
              <div>
                <ul>
                  <li className="mb-[28px]">
                    <Link
                      className={`block px-4 text-[16px] font-satoshi font-[700] text-[#203E62] hover:text-themeColor text-center transition-all ${
                        location.pathname === "/staking"
                          ? "text-themeColor"
                          : ""
                      }`}
                      to="/staking"
                    >
                      Staking
                    </Link>
                  </li>
                  <li className="mb-[28px]">
                    <Link
                      className={`block px-4 text-[16px] font-satoshi font-[700] text-[#203E62] hover:text-themeColor text-center transition-all ${
                        location.pathname === "/privatesale"
                          ? "text-themeColor"
                          : ""
                      }`}
                      to="/privatesale"
                    >
                      <span className="text-red-500 text-[8px] block mb-0 text-center w-full">
                        Coming Soon !
                      </span>
                      Private sale
                    </Link>
                  </li>
                  <li className="mb-[28px]">
                    <Link
                      className={`block px-4 text-[16px] font-satoshi font-[700] text-[#203E62] hover:text-themeColor text-center transition-all ${
                        location.pathname === "/presale"
                          ? "text-themeColor"
                          : ""
                      }`}
                      to="/presale"
                    >
                      <span className="text-red-500 text-[8px] block mb-0 text-center w-full">
                        Coming Soon !
                      </span>
                      Presale
                    </Link>
                  </li>
                  <li className="mb-[28px]">
                    <Link
                      className={`block px-4 text-[16px] font-satoshi font-[700] text-[#203E62] hover:text-themeColor text-center transition-all ${
                        location.pathname === "/governance"
                          ? "text-themeColor"
                          : ""
                      }`}
                      to="/governance"
                    >
                      <span className="text-red-500 text-[8px] block mb-0 text-center w-full">
                        Coming Soon !
                      </span>
                      Governance
                    </Link>
                  </li>
                  <li className="">
                    <a
                      className="block px-4 text-[16px] font-satoshi font-[700] text-[#203E62] hover:text-themeColor text-center transition-all"
                      href="https://brainzfinance.gitbook.io/whitepaper/"
                    >
                      Whitepaper
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        )}

        {/* Header */}
        <header
          style={{ boxShadow: "0px 3px 17px 0px rgba(21, 191, 253, 0.75)" }}
          className="shadow-[0_0px_36px_0px_rgba(21,191,253,0.47)] lg:shadow-none bg-[#0B1538] lg:bg-transparent absolute top-0 left-0 w-full z-20 pb-[15px] pt-[30px] md:pb-[40px] md:pt-[40px] bg-transparent"
        >
          <div className="container">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/">
                <img className="hidden md:block" src={logo} alt="" />
                <img className="block md:hidden" src={MobileLogo} alt="" />
              </Link>

              {/* Nav Links */}
              <ul className="gap-9 hidden lg:flex">
                <li>
                  <Link
                    to="/staking"
                    className={`text-[17px] text-[#fff]  bg-[#141735] rounded-[32px] font-[700] font-satoshi transition hover:text-[#15BFFD] ${
                      location.pathname === "/staking"
                        ? "text-themeColor px-[10px] py-[10px]"
                        : ""
                    }`}
                    onClick={() => handleTabClick("staking")}
                  >
                    Staking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privatesale"
                    className={`text-[17px] text-[#fff]   font-[700] font-satoshi  transition hover:text-[#15BFFD] ${
                      location.pathname === "/privatesale"
                        ? "text-themeColor bg-[#141735] rounded-[32px] px-[10px] py-[10px]"
                        : "relative"
                    }`}
                  >
                    <span className="text-red-500 text-[8px] absolute -top-2.5 left-auto right-auto mx-auto text-center w-full">
                      Coming Soon !
                    </span>
                    Private sale
                  </Link>
                </li>
                <li>
                  <Link
                    to="./presale"
                    className={`text-[17px] text-[#fff]   font-[700] font-satoshi  transition hover:text-[#15BFFD] ${
                      location.pathname === "/presale"
                        ? "text-themeColor bg-[#141735] rounded-[32px] px-[10px] py-[10px]"
                        : "relative"
                    }`}
                  >
                    <span className="text-red-500 text-[8px] absolute -top-2.5 left-auto right-auto mx-auto text-center w-full">
                      Coming Soon !
                    </span>
                    Presale
                  </Link>
                </li>
                <li>
                  <Link
                    to="/governance"
                    className={`text-[17px] text-[#fff]   font-[700] font-satoshi  transition hover:text-[#15BFFD] ${
                      location.pathname === "/governance"
                        ? "text-themeColor bg-[#141735] rounded-[32px] px-[10px] py-[10px]"
                        : "relative"
                    }`}
                  >
                    <span className="text-red-500 text-[8px] absolute -top-2.5 left-auto right-auto mx-auto text-center w-full">
                      Coming Soon !
                    </span>
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

              {/* Border Button */}
              <div className="flex items-center gap-4 md:gap-10">
                <a
                  href="#"
                  className="leading-none text-[12px] sm:text-[20px] py-[12px] sm:py-[15px] px-[18px] sm:px-[25px] text-themeColor font-inter font-[500] inline-flex items-center border-[1px] border-themeColor group rounded-[30px] transition hover:bg-themeColor hover:text-[#000]"
                >
                  <span className="inline-block mr-3 lg:mr-3 xl:mr-4">
                    <svg
                      className="h-4 md:h-5 lg:h-[22px]"
                      viewBox="0 0 25 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-black"
                        d="M23 4H3C2.73478 4 2.48043 3.89464 2.29289 3.70711C2.10536 3.51957 2 3.26522 2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H20C20.2652 2 20.5196 1.89464 20.7071 1.70711C20.8946 1.51957 21 1.26522 21 1C21 0.734784 20.8946 0.48043 20.7071 0.292893C20.5196 0.105357 20.2652 0 20 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V19C0 19.7956 0.316071 20.5587 0.87868 21.1213C1.44129 21.6839 2.20435 22 3 22H23C23.5304 22 24.0391 21.7893 24.4142 21.4142C24.7893 21.0391 25 20.5304 25 20V6C25 5.46957 24.7893 4.96086 24.4142 4.58579C24.0391 4.21071 23.5304 4 23 4ZM23 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V5.82875C2.32109 5.94257 2.65933 6.0005 3 6H23V20ZM17 12.5C17 12.2033 17.088 11.9133 17.2528 11.6666C17.4176 11.42 17.6519 11.2277 17.926 11.1142C18.2001 11.0007 18.5017 10.9709 18.7926 11.0288C19.0836 11.0867 19.3509 11.2296 19.5607 11.4393C19.7704 11.6491 19.9133 11.9164 19.9712 12.2074C20.0291 12.4983 19.9993 12.7999 19.8858 13.074C19.7723 13.3481 19.58 13.5824 19.3334 13.7472C19.0867 13.912 18.7967 14 18.5 14C18.1022 14 17.7206 13.842 17.4393 13.5607C17.158 13.2794 17 12.8978 17 12.5Z"
                        fill="#15BFFD"
                      />
                    </svg>
                  </span>
                  connect wallet
                </a>
                <span
                  className="inline-block lg:hidden navbar-burger cursor-pointer max-w-[39px] mr-2"
                  onClick={toggleMenu}
                >
                  <img src={hamburger} alt="" />
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
