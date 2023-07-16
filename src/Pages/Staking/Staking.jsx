import React from "react";

import ShapeLeft from "../../assets/img/bg/shape_left.png";
import ShapeRight from "../../assets/img/bg/shape_right.png";
import YellowBigStar from "../../assets/img/icons/yellow_big_star.svg";
import YellowMediumStar from "../../assets/img/icons/yellow_medium_star.svg";

import LinkButtonRightArrow from "../../assets/img/icons/link_btn_right_arrow.svg";
import GetStartThum from "../../assets/img/thumbs/get_start_thum.png";

import BigBlueStar from "../../assets/img/icons/big_blue_star.svg";
import SmallBlueStar from "../../assets/img/icons/small_blue_star.svg";

import MediumHiteStart from "../../assets/img/icons/medium_hite_star.svg";
import Plus from "../../assets/img/icons/plus_icon.svg";
import GreenThick from "../../assets/img/icons/green_thick.svg";
import RedCross from "../../assets/img/icons/red_cross.svg";
import IC1 from "../../assets/img/icons/ic-1(1).svg";
import IC2 from "../../assets/img/icons/ic-2(1).svg";
import IC3 from "../../assets/img/icons/ic-3(1).svg";
import IC4 from "../../assets/img/icons/ic-4(1).svg";
import IC5 from "../../assets/img/icons/ic-5(1).svg";
import IC6 from "../../assets/img/icons/ic-6(1).svg";
import IC7 from "../../assets/img/icons/ic-7(1).svg";
import IC8 from "../../assets/img/icons/ic-8.svg";
import IC9 from "../../assets/img/icons/ic-9.svg";

import WhiteSmallStar from "../../assets/img/icons/whiite_small_star.svg";

import MediumBlueStar from "../../assets/img/icons/medium_blue_star.svg";
import Line from "../../assets/img/icons/Line 99.svg";
import Thick from "../../assets/img/icons/thick.svg";
import HorizontalLine from "../../assets/img/icons/horihontal_line.svg";
import FinanceThum from "../../assets/img/thumbs/finance_thum.png";
import WorkRightShape from "../../assets/img/bg/work_right_shape.png";
import WorkLeftShape from "../../assets/img/bg/work_left_shape.png";
import BlueRightArrow from "../../assets/img/icons/blue_right_arrow.svg";
import TableArrow from "../../assets/img/icons/table_arrow.svg";
import SwipeArrow from "../../assets/img/icons/swipe_arrow.svg";
import ButtonArrow from "../../assets/img/icons/btn_arrow.svg";
import Star7 from "../../assets/img/icons/Star 7.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const Staking = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const [activeTab, setActiveTab] = React.useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <main className="main overflow-hidden">
        {/* <!--========  REWARDS  section Start =========--> */}
        <section className="mt-[125px] md:mt-[210px] lg::mt-[180px]">
          <div className="container">
            <div className="grid gap-0 sm:gap-8 grid-cols-12">
              {/* <!-- --left-part--  --> */}
              <div
                className="col-span-12 lg:col-span-7"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="md:min-h-[698px] border-0 md:border-[1px] md:border-themeColor rounded-[13px]">
                  {/* <!-- top-part  --> */}
                  <div className="pt-[34px] px-[32px] pb-[42px]">
                    <h6 className="mb-[28px] text-[17px] text-center lg:text-left text-[#A1E4DF] font-[500] font-clash">
                      DRAW #9
                    </h6>
                    <div className="p-[40px] max-w-[516px] mx-auto shadow-[0_0px_36px_0px_rgba(21,191,253,0.47)] border-[1px] border-themeColor rounded-[16px]">
                      <h6 className="hidden lg:block mb-[37px] text-[24px] text-center text-[#A1E4DF] font-[500] font-clash">
                        THIS WEEK'S REWARDS
                      </h6>

                      <h6 className="block lg:hidden mb-[37px] text-[24px] text-center text-[#A1E4DF] font-[500] font-clash">
                        REWARDS
                      </h6>

                      <div className="flex gap-[38px] md:gap-0 flex-col md:flex-row">
                        {/* <!-- single-item  --> */}
                        <div className="w-full md:w-[33%] flex flex-col justify-center items-center text-center">
                          <div className="flex items-center gap-2">
                            <div className="">
                              <img src={Star7} alt="" />
                            </div>
                            <p className="text-[25px] text-center text-[#A1E4DF] font-[700] font-clash">
                              2.85
                            </p>
                          </div>
                          <span className="mt-2 text-[14px] text-center text-[rgba(255,255,255,0.5)] font-[500] font-clash">
                            stETH
                          </span>
                        </div>
                        {/* <!-- single-item  --> */}
                        <div className="w-full md:w-[33%] flex flex-col justify-center items-center text-center">
                          <div className="flex items-center gap-2">
                            <div className="">
                              <img src={Star7} alt="" />
                            </div>
                            <p className="text-[25px] text-center text-[#A1E4DF] font-[700] font-clash">
                              2.85
                            </p>
                          </div>
                          <span className="mt-2 text-[14px] text-center text-[rgba(255,255,255,0.5)] font-[500] font-clash">
                            stETH
                          </span>
                        </div>
                        {/* <!-- single-item  --> */}
                        <div className="w-full md:w-[33%] flex flex-col justify-center items-center text-center">
                          <div className="flex items-center gap-2">
                            <div className="">
                              <img src={Star7} alt="" />
                            </div>
                            <p className="text-[25px] text-center text-[#A1E4DF] font-[700] font-clash">
                              2.85
                            </p>
                          </div>
                          <span className="mt-2 text-[14px] text-center text-[rgba(255,255,255,0.5)] font-[500] font-clash">
                            stETH
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- --divider--  --> */}
                  <div className="h-[1px] w-full bg-[rgba(255,255,255,0.20)]"></div>

                  {/* <!-- --bottom-part--  --> */}
                  <div className="pt-[34px] px-4 md:px-[32px] pb-3 md:pb-[42px] grid gap-0 md:gap-8 grid-cols-12">
                    <div className="col-span-12 md:col-span-7">
                      <div className="">
                        <h6 className="text-[17px] text-center lg:text-left text-[#A1E4DF] font-[500] font-clash">
                          EARNINGS
                        </h6>
                        <h2 className="my-[10px] text-[29px] text-center lg:text-left text-white font-[400] font-satoshi">
                          0.000000 $BRAINZ
                        </h2>

                        <span className="text-[12px] text-center lg:text-left block text-white font-[400] font-satoshi">
                          21.62% APR
                        </span>
                      </div>

                      <div className="mb-[20px] md:mb-[0] text-center lg:text-left">
                        <a
                          href="#"
                          className="mt-[35px] w-[281px] text-center text-[20px] py-[14px] px-[20px] text-themeColor font-inter font-[500] inline-flex justify-center items-center border-[1px] border-themeColor rounded-[30px] transition hover:bg-themeColor hover:text-[#000] group"
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
                          </span>{" "}
                          CLAIM TOKENS
                        </a>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-5">
                      <div className="flex justify-between">
                        {/* <!-- single-item  --> */}
                        <div className="">
                          <span className="text-[13px] text-[rgba(255,255,255,0.5)] font-[400] font-satoshi">
                            ENDS IN
                          </span>
                          <h2 className="mt-2 text-[20px] text-white font-[500] font-satoshi">
                            2d 10h
                          </h2>
                        </div>
                        {/* <!-- single-item  --> */}
                        <div className="text-right">
                          <span className="text-[13px] text-[rgba(255,255,255,0.5)] font-[400] font-satoshi">
                            TOTAL
                          </span>
                          <h2 className="my-2 text-[20px] text-themeColor font-[500] font-satoshi">
                            5.708890
                          </h2>
                          <span className="text-[13px] text-[rgba(255,255,255,0.5)] font-[400] font-satoshi">
                            stETH
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- --right-part--  --> */}
              <div
                className="col-span-12 lg:col-span-5"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="lg:min-h-[698px] pt-0 md:pt-[34px] px-3 sm:px-[28px] pb-[42px] lg:border-[1px] lg:border-themeColor rounded-[13px]">
                  {/* <!-- top-part  --> */}
                  <div className="pt-6 lg:pt-0 bg-[rgba(255,255,255,0.05)] border-[1px] border-themeColor lg:border-none rounded-[18px] lg:bg-transparent">
                    <h6 className="text-center lg:text-left mb-[28px] text-[17px] text-[#A1E4DF] font-[500] font-clash">
                      MY BALANCE
                    </h6>
                    <div className="text-center pb-[35px]">
                      <span className="mb-3 text-[11.33px] text-white font-[400] font-satoshi">
                        IN PROTOCOL
                      </span>

                      <h6 className="text-[19px] text-white font-[400] font-satoshi">
                        0.0000 stETH = 0 picks
                      </h6>
                    </div>
                  </div>
                  {/* <!-- --divider--  --> */}
                  <div className="hidden lg:block h-[1px] w-full bg-[rgba(255,255,255,0.20)]"></div>
                  {/* <!-- --bottom-part--  --> */}

                  {/* <!-- ==========================---tab--==========================  --> */}

                  <div className="">
                    <div className="pt-4 tab-container flex gap-3 items-center justify-center">
                      <div
                        className={`text-[16px] p-[10px] text-[rgba(255,255,255,0.5)]  ${
                          activeTab === "tab1"
                            ? " font-[500] active-tab text-themeColor border-b-[2px]"
                            : "font-[500]"
                        } tab tab-title cursor-pointer transition-all hover:text-themeColor border-themeColor`}
                        onClick={() => handleTabClick("tab1")}
                      >
                        Deposit
                      </div>
                      <div
                        className={`text-[16px] p-[10px] text-[rgba(255,255,255,0.5)]  ${
                          activeTab === "tab2"
                            ? " font-[500] active-tab text-themeColor  border-b-[2px] border-themeColor"
                            : "font-[500]"
                        } tab tab-title cursor-pointer transition-all hover:text-themeColor`}
                        onClick={() => handleTabClick("tab2")}
                      >
                        Withdraw
                      </div>
                      <div
                        className={`text-[16px] p-[10px] text-[rgba(255,255,255,0.5)]  ${
                          activeTab === "tab3"
                            ? " font-[500] text-themeColor  active-tab border-b-[2px] border-themeColor"
                            : "font-[500]"
                        } tab tab-title cursor-pointer transition-all hover:text-themeColor`}
                        onClick={() => handleTabClick("tab3")}
                      >
                        Swap
                      </div>
                    </div>

                    <div
                      id="tab1"
                      className={`tab-content ${
                        activeTab === "tab1" ? "" : "hidden"
                      }`}
                    >
                      <div className="py-[20px] pb-2 lg:py-[26px] max-w-[360px] mx-auto">
                        <h6 className="mb-3 text-center text-[12px] text-white font-[700]">
                          Note :
                        </h6>

                        <p className="text-center text-[12px] text-[rgba(255,255,255,0.6)] font-[400]">
                          After deposit, You will receive LP tokens in your
                          wallet address which represents your stETH/ETH
                          deposits in the Brainz finance pool. The LP token
                          burned when you withdraw
                        </p>
                      </div>

                      <div className="pt-[10px] lg:pt-[37px] pb-[10px] lg:pb-[30px] px-3 lg:px-[18px] lg:bg-[rgba(255,255,255,0.05)] rounded-[18px]">
                        <div className="p-[12px] h-[55px] sm:h-[65px] flex items-center mt-3 mb-4 lg:my-5 border-[1px] border-[#D1D1D6] rounded-[30px] overflow-hidden">
                          <div className="w-full flex items-center">
                            <input
                              className="w-[60%] px-5 py-5 h-full text-[19px] text-[rgba(255,255,255,0.6)] placeholder:text-[12px] sm:placeholder:text-[19px] placeholder:text-[rgba(255,255,255,0.6)] focus:outline-none focus:border-none bg-transparent"
                              type="text "
                              placeholder="O ETH"
                            />
                            <div className="text-right w-[40%]">
                              <button
                                className="py-[8px] px-[24px] sm:px-[39px] rounded-[30px] bg-themeColor text-[10px] sm:text-[16px] text-[#000] font-[500] font-inter transition-all 
                            hover:bg-white hover:text-black"
                              >
                                MAX
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-6 mt-3 justify-center items-center">
                          <h6 className="text-center text-[11px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            BALANCE ETH : <br />
                            <span className="mt-2 text-[11px] text-[rgb(255,255,255)] font-[700] font-satoshi">
                              0.0000 ETH
                            </span>
                          </h6>
                          <h6 className="text-center text-[11px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            BALANCE stETH : <br />
                            <span className="mt-2 text-[11px] text-[rgb(255,255,255)] font-[700] font-satoshi">
                              0.0000 stETH
                            </span>
                          </h6>
                        </div>
                      </div>

                      {/* <!-- --btn-group--  --> */}

                      <div className="flex gap-[10px] mt-3 lg:mt-8">
                        <button className="flex items-center justify-center gap-4 w-[215px] py-[14px] px-[15.5px] rounded-[30px] bg-[#131633] text-[11px] sm:text-[13px] text-[#B0B0B0] font-[500] font-inter transition-all hover:bg-[#282B46] hover:text-white">
                          <img src={ButtonArrow} alt="" />
                          Deposit ETH
                        </button>
                        <button className="flex items-center justify-center gap-4 w-[215px] py-[14px] px-[15.5px] rounded-[30px] bg-[#131633] text-[11px] sm:text-[13px] text-[#B0B0B0] font-[500] font-inter transition-all hover:bg-[#282B46] hover:text-white">
                          <img src={ButtonArrow} alt="" />
                          Deposit stETH
                        </button>
                      </div>
                    </div>

                    <div
                      id="tab2"
                      className={`tab-content ${
                        activeTab === "tab2" ? "" : "hidden"
                      }`}
                    >
                      <div className="pt-[10px] lg:pt-[37px] pb-[10px] lg:pb-[30px] px-3 md:px-[18px] lg:bg-[rgba(255,255,255,0.05)] rounded-[18px]">
                        <div className="p-[12px] h-[55px] sm:h-[65px] flex items-center mt-2 mb-4 lg:my-5 border-[1px] border-[#D1D1D6] rounded-[30px] overflow-hidden">
                          <div className="w-full flex items-center">
                            <input
                              className="w-[60%] px-5 py-5 h-full text-[19px] text-[rgba(255,255,255,0.6)] placeholder:text-[12px] sm:placeholder:text-[19px] placeholder:text-[rgba(255,255,255,0.6)] focus:outline-none focus:border-none bg-transparent"
                              type="text "
                              placeholder="0 stETH"
                            />
                            <div className="text-right w-[40%]">
                              <button
                                className="py-[8px] px-[24px] sm:px-[39px] rounded-[30px] bg-themeColor text-[10px] sm:text-[16px] text-[#000] font-[500] font-inter transition-all 
                            hover:bg-white hover:text-black"
                              >
                                MAX
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-6 mt-3 justify-center items-center">
                          <h6 className="text-center text-[11px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            BALANCE ETH : <br />
                            <span className="mt-2 text-[11px] text-[rgb(255,255,255)] font-[700] font-satoshi">
                              0.0000 ETH
                            </span>
                          </h6>
                          <h6 className="text-center text-[11px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            BALANCE stETH : <br />
                            <span className="mt-2 text-[11px] text-[rgb(255,255,255)] font-[700] font-satoshi">
                              0.0000 stETH
                            </span>
                          </h6>
                        </div>
                      </div>

                      {/* <!-- --btn---  --> */}

                      <button className="mt-5 w-full flex items-center justify-center gap-4 py-[14px] px-[15.5px] rounded-[30px] bg-white text-[13px] text-[#000] font-[500] font-inter hover:bg-themeColor transition-all">
                        <img src={SwipeArrow} alt="" />
                        WITHDRAW
                      </button>
                      {/* <!-- --text--  --> */}

                      <p className="mt-5 text-center text-[10px] text-white font-[700] font-satoshi">
                        Gas fees: 0
                      </p>
                    </div>

                    <div
                      id="tab3"
                      className={`tab-content ${
                        activeTab === "tab3" ? "" : "hidden"
                      }`}
                    >
                      <div className="py-4 mt-3 lg:mt-0 lg:py-[26px] flex-col md:flex-row flex gap-5 justify-between items-center">
                        <div className="w-[80%] md:min-w-[130px] bg-white rounded-[7px] py-[7px] px-[12px]">
                          <p className="text-[8px] text-[#757575] font-[400] font-inter">
                            From
                          </p>
                          <div className="flex justify-between">
                            <input
                              className="text-[12px] text-[#212121] font-[400] font-inter border-0 outline-none w-full"
                              value="1,000.0"
                            />
                            <h6 className="text-[12px] text-[#000] font-[600] font-inter">
                              ETH
                            </h6>
                          </div>
                        </div>
                        <div className="shrink-0 w-[33px] h-[33px] rounded-full flex justify-center items-center bg-white">
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.3422 8.59325L10.1751 7.42618L12.2682 5.33305L1.3965 5.33305L1.3965 3.68232L12.2682 3.68232L10.1751 1.59001L11.3422 0.422119L15.4277 4.50768L11.3422 8.59325ZM4.6567 16.8469L0.571137 12.7613L4.6567 8.67578L5.82377 9.84285L3.73064 11.9368L14.6024 11.936L14.6024 13.5867L3.73064 13.5867L5.82377 15.6798L4.6567 16.8469V16.8469Z"
                              fill="#1573FE"
                            />
                          </svg>
                        </div>
                        <div className="w-[80%] md:min-w-[130px] bg-white rounded-[7px] py-[7px] px-[12px]">
                          <p className="text-[8px] text-[#757575] font-[400] font-inter">
                            To
                          </p>
                          <div className="flex justify-between">
                            <input
                              className="text-[12px] text-[#212121] font-[400] font-inter border-0 outline-none w-full"
                              value="1,000.0"
                            />
                            <h6 className="text-[12px] text-[#000] font-[600] font-inter">
                              stETH
                            </h6>
                          </div>
                        </div>
                      </div>

                      <div className="pt-[10px] lg:pt-[37px] pb-[10px] lg:pb-[30px] px-3 md:px-[18px] lg:bg-[rgba(255,255,255,0.05)] rounded-[18px]">
                        <div className="p-[12px] h-[55px] sm:h-[65px] flex items-center lg:my-5 border-[1px] border-[#D1D1D6] rounded-[30px] overflow-hidden">
                          <div className="w-full flex items-center">
                            <input
                              className="w-[60%] px-5 py-5 h-full text-[19px] text-[rgba(255,255,255,0.6)] placeholder:text-[12px] sm:placeholder:text-[19px] placeholder:text-[rgba(255,255,255,0.6)] focus:outline-none focus:border-none bg-transparent"
                              type="text "
                              placeholder="O ETH"
                            />
                            <div className="text-right w-[40%]">
                              <button
                                className="py-[8px] px-[24px] sm:px-[39px] rounded-[30px] bg-themeColor text-[10px] sm:text-[16px] text-[#000] font-[500] font-inter transition-all 
                            hover:bg-white hover:text-black"
                              >
                                MAX
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-6 mt-3 justify-center items-center">
                          <h6 className="text-center text-[11px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            BALANCE ETH : <br />
                            <span className="mt-2 text-[11px] text-[rgb(255,255,255)] font-[700] font-satoshi">
                              0.0000 ETH
                            </span>
                          </h6>
                          <h6 className="text-center text-[11px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            BALANCE stETH : <br />
                            <span className="mt-2 text-[11px] text-[rgb(255,255,255)] font-[700] font-satoshi">
                              0.0000 stETH
                            </span>
                          </h6>
                        </div>
                      </div>

                      {/* <!-- --btn---  --> */}

                      <button className="mt-2 lg:mt-5 w-full flex items-center justify-center gap-4 py-[14px] px-[15.5px] rounded-[30px] bg-white text-[13px] text-[#000] font-[500] font-inter hover:bg-themeColor transition-all">
                        <img src={SwipeArrow} alt="" />
                        SWAP
                      </button>
                      {/* <!-- --text--  --> */}

                      <p className="mt-5 text-center text-[10px] text-white font-[700] font-satoshi">
                        Gas fees: 0
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--========  REWARDS  section End =========--> */}

        {/* <!--========  Table  section start =========--> */}
        <section>
          <div className="container">
            <div className="mt-6 lg:mt-[29px]">
              {/* <!-- --large-screen-table--  --> */}
              <div
                className="hidden md:block"
                data-aos="fade-up"
                data-aos-duration="1300"
              >
                <table className="w-full border-separate border-spacing-y-5  border-slate-500 ">
                  <thead className="bg-[#282B46] rounded-[16px]">
                    <tr className="py-10 px-7  ">
                      <th className="py-3 text-[16px] text-white font-[700] font-satoshi">
                        #
                      </th>
                      <th className="py-3 text-[16px] text-white font-[700] font-satoshi">
                        DATE
                      </th>
                      <th className="py-3 text-[16px] text-white font-[700] font-satoshi">
                        REWARDS
                      </th>
                      <th className="py-3 text-[16px] text-white font-[700] font-satoshi">
                        ADDRESS
                      </th>
                      <th className="py-3 text-[16px] text-white font-[700] font-satoshi">
                        USER ODDS
                      </th>
                      <th className="py-3 text-[16px] text-white font-[700] font-satoshi">
                        USER WIN <br />
                        HISTORY
                      </th>
                      <th className="py-3 text-[16px] text-white font-[700] font-satoshi">
                        USER TIME <br />
                        IN APP
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-gap">
                    <tr className="bg-[#0E1633]">
                      <td className="pl-[24px]">
                        <div className="flex items-center gap-[50px]">
                          <div className="">
                            <img src={TableArrow} alt="" />
                          </div>
                          <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                            #8
                          </span>
                        </div>
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        JUN 16, 2023
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        7.97 stETH
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        MULTIPLE
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        MULTIPLE
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        3
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        MULTIPLE
                      </td>
                    </tr>
                    <tr className="space_under bg-[#0E1633]">
                      <td className="pl-[24px]">
                        <div className="flex items-center gap-[50px]">
                          <div className="">
                            <img src={TableArrow} alt="" />
                          </div>
                          <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                            #8
                          </span>
                        </div>
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        JUN 16, 2023
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        7.97 stETH
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        MULTIPLE
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        MULTIPLE
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        3
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        MULTIPLE
                      </td>
                    </tr>
                    <tr className="bg-[#0E1633]">
                      <td className="pl-[24px]">
                        <div className="flex items-center gap-[50px]">
                          <div className="">
                            <img src={TableArrow} alt="" />
                          </div>
                          <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                            #8
                          </span>
                        </div>
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        JUN 16, 2023
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        7.97 stETH
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        MULTIPLE
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        MULTIPLE
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        3
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        MULTIPLE
                      </td>
                    </tr>
                    <tr className="space_under bg-[#0E1633]">
                      <td className="pl-[24px]">
                        <div className="flex items-center gap-[50px]">
                          <div className="">
                            <img src={TableArrow} alt="" />
                          </div>
                          <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                            #8
                          </span>
                        </div>
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        JUN 16, 2023
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        7.97 stETH
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        MULTIPLE
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        MULTIPLE
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        3
                      </td>
                      <td className="py-5 text-center text-[14px] text-white font-[400] font-satoshi">
                        MULTIPLE
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- --small-screen-table--  --> */}
              <div
                className="block md:hidden"
                data-aos="fade-up"
                data-aos-duration="1300"
              >
                {/* <!-- --single-item--  --> */}
                <div className="mb-7">
                  <div className="pt-10 pb-[30px] px-6 bg-[rgba(255,255,255,0.05)] border-[1px] border-themeColor">
                    <div className="">
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          #
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          #8
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          DATE
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          JUN 16, 2023
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          REWARDS
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          7.97 stETH
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          ADDRESS
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          MULTIPLE
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          USER ODDS
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          MULTIPLE
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          USER WIN <br />
                          HISTORY
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          3
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          USER TIME <br />
                          IN APP
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          MULTIPLE
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right mt-2">
                    {/* <!-- --link-btn--  --> */}
                    <a
                      href="#"
                      className="pr-3 inline-flex gap-3 items-center text-[14px] py-[15px] text-themeColor font-inter font-[400] transition hover:text-white"
                    >
                      See All
                      <img src={BlueRightArrow} alt="" />
                    </a>
                  </div>
                </div>
                {/* <!-- --single-item--  --> */}
                <div className="mb-7">
                  <div className="pt-10 pb-[30px] px-6 bg-[rgba(255,255,255,0.05)] border-[1px] border-themeColor">
                    <div className="">
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          #
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          #8
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          DATE
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          JUN 16, 2023
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          REWARDS
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          7.97 stETH
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          ADDRESS
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          MULTIPLE
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          USER ODDS
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          MULTIPLE
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          USER WIN <br />
                          HISTORY
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          3
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          USER TIME <br />
                          IN APP
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          MULTIPLE
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right mt-2">
                    {/* <!-- --link-btn--  --> */}
                    <a
                      href="#"
                      className="pr-3 inline-flex gap-3 items-center text-[14px] py-[15px] text-themeColor font-inter font-[400] transition hover:text-white"
                    >
                      See All
                      <img src={BlueRightArrow} alt="" />
                    </a>
                  </div>
                </div>
                {/* <!-- --single-item--  --> */}
                <div className="mb-7">
                  <div className="pt-10 pb-[30px] px-6 bg-[rgba(255,255,255,0.05)] border-[1px] border-themeColor">
                    <div className="">
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          #
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          #8
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          DATE
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          JUN 16, 2023
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          REWARDS
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          7.97 stETH
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          ADDRESS
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          MULTIPLE
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          USER ODDS
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          MULTIPLE
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          USER WIN <br />
                          HISTORY
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          3
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          USER TIME <br />
                          IN APP
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          MULTIPLE
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right mt-2">
                    {/* <!-- --link-btn--  --> */}
                    <a
                      href="#"
                      className="pr-3 inline-flex gap-3 items-center text-[14px] py-[15px] text-themeColor font-inter font-[400] transition hover:text-white"
                    >
                      See All
                      <img src={BlueRightArrow} alt="" />
                    </a>
                  </div>
                </div>
                {/* <!-- --single-item--  --> */}
                <div className="mb-7">
                  <div className="pt-10 pb-[30px] px-6 bg-[rgba(255,255,255,0.05)] border-[1px] border-themeColor">
                    <div className="">
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          #
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          #8
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          DATE
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          JUN 16, 2023
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          REWARDS
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          7.97 stETH
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          ADDRESS
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          MULTIPLE
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          USER ODDS
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          MULTIPLE
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          USER WIN <br />
                          HISTORY
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          3
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <p className="py-3 text-[16px] text-white font-[700] font-satoshi">
                          USER TIME <br />
                          IN APP
                        </p>

                        <span className="py-3 text-[14px] text-white font-[400] font-satoshi">
                          MULTIPLE
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right mt-2">
                    {/* <!-- --link-btn--  --> */}
                    <a
                      href="#"
                      className="pr-3 inline-flex gap-3 items-center text-[14px] py-[15px] text-themeColor font-inter font-[400] transition hover:text-white"
                    >
                      See All
                      <img src={BlueRightArrow} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--========  Table  section End =========--> */}

        {/* <!--========  How  It  Works  section start =========--> */}
        <section className="relative z-10 pt-[20px] md:pt-[50px]">
          {/* <!-- --shapes--  --> */}

          <img
            className="hidden md:block absolute top-[-10%] left-0 -z-10"
            src={WorkLeftShape}
            alt=""
          />
          <img
            className="hidden md:block absolute top-[-10%] right-0 -z-10"
            src={WorkRightShape}
            alt=""
          />

          {/* <!-- ---stars--  --> */}

          <div className="hidden md:block">
            <img
              className="absolute top-[5%] left-[35%] -z-10"
              src={SmallBlueStar}
              alt=""
            />
            <img
              className="absolute top-[6%] left-[70%] -z-10"
              src={SmallBlueStar}
              alt=""
            />

            <img
              className="absolute -z-10 top-[18%] left-[75%]"
              src={SmallBlueStar}
              alt=""
            />
            <img
              className="absolute -z-10 left-[5%] top-[18%]"
              src={SmallBlueStar}
              alt=""
            />
          </div>

          <div className="container">
            {/* <!-- --heading--  --> */}
            <h4
              className="my-[40px] sm:my-[80px] md:my-[112px] text-center text-[32px] sm:text-[45px] text-white font-[600] font-clash"
              data-aos="fade-in"
              data-aos-duration="1300"
            >
              How It Works
            </h4>
            <div
              className="relative md:after:absolute md:after:top-0 md:after:left-[37px] md:after:bg-themeColor md:after:w-[3px] after:h-[85%] after:-z-10"
              data-aos="fade-up"
              data-aos-duration="1300"
            >
              {/* <!-- --single-item--  --> */}
              <div className="min-h-[346px] mb-[60px] md:mb-[43px] flex-col md:flex-row flex gap-[52px]">
                {/* <!-- number  --> */}
                <div className="mx-auto md:mx-0 shrink-0 sm:w-[75px] sm:h-[75px] w-[65px] h-[65px] rounded-full bg-themeColor flex justify-center items-center text-[40px] text-white font-[700] font-clash">
                  1
                </div>
                {/* <!-- --content-- --> */}
                <div className="" data-aos="fade-up" data-aos-duration="1300">
                  <h4 className="text-center md:text-left mb-[36px] text-[24px] md:text-[32px] text-white font-[600] font-clash">
                    Ignite Your Investment Journey
                  </h4>
                  <p className="text-center md:text-left max-w-[1112px] text-[20px] md:text-[24px] text-[rgba(255,255,255,0.8)] font-[400] leading-[43px] tracking-[0.48px] font-satoshi">
                    Prepare for an exhilarating ride with the Brainz Finance
                    Protocol! Begin by depositing your stETH tokens and witness
                    the magic unfold. Our smart contract swiftly mints PST (Pool
                    Share Token) in a 1:1 ratio, reflecting your ownership in
                    the protocol. These tokens are crucial for future
                    withdrawals. And remember, the minimum deposit amount is 0.1
                    stETH, though we welcome fractions too—embrace flexibility!
                  </p>
                </div>
              </div>
              {/* <!-- --single-item--  --> */}
              <div className="min-h-[346px] mb-[60px] md:mb-[43px] flex-col md:flex-row flex gap-[52px]">
                {/* <!-- number  --> */}
                <div className="mx-auto md:mx-0 shrink-0 sm:w-[75px] sm:h-[75px] w-[65px] h-[65px] rounded-full bg-themeColor flex justify-center items-center text-[40px] text-white font-[700] font-clash">
                  2
                </div>
                {/* <!-- --content-- --> */}
                <div className="" data-aos="fade-up" data-aos-duration="1300">
                  <h4 className="text-center md:text-left mb-[36px] text-[24px] md:text-[32px] text-white font-[600] font-clash">
                    Watch Your Rewards Blossom
                  </h4>
                  <p className="text-center md:text-left max-w-[1112px] text-[20px] md:text-[24px] text-[rgba(255,255,255,0.8)] font-[400] leading-[43px] tracking-[0.48px] font-satoshi">
                    Sit back and let your ETH staking rewards flourish within
                    the protocol. As time ticks by, your stETH balance grows at
                    the current Lido APR speed, updating every 24 hours. Feel
                    the excitement as your assets accumulate and your potential
                    expands.
                  </p>
                </div>
              </div>
              {/* <!-- --single-item--  --> */}
              <div className="min-h-[346px] mb-[60px] md:mb-[43px] flex-col md:flex-row flex gap-[52px]">
                {/* <!-- number  --> */}
                <div className="mx-auto md:mx-0 shrink-0 sm:w-[75px] sm:h-[75px] w-[65px] h-[65px] rounded-full bg-themeColor flex justify-center items-center text-[40px] text-white font-[700] font-clash">
                  3
                </div>
                {/* <!-- --content-- --> */}
                <div className="" data-aos="fade-up" data-aos-duration="1300">
                  <h4 className="text-center md:text-left mb-[36px] text-[24px] md:text-[32px] text-white font-[600] font-clash">
                    Unleash the Power of Yield
                  </h4>
                  <p className="text-center md:text-left max-w-[1112px] text-[20px] md:text-[24px] text-[rgba(255,255,255,0.8)] font-[400] leading-[43px] tracking-[0.48px] font-satoshi">
                    Prepare for the grand reveal! Every 604,800 seconds, a draw
                    occurs to distribute the yield among our esteemed users.
                    Thanks to Chainlink VRF, a renowned solution for impeccable
                    randomness, winners are chosen with utmost fairness. Your
                    odds of victory dynamically change in real time, adding an
                    extra thrill to the game. No need to re-enter manually for
                    subsequent draws; your initial deposits remain in the
                    protocol, fueling your future chances.
                  </p>
                </div>
              </div>
              {/* <!-- --single-item--  --> */}
              <div className="min-h-[346px] mb-[60px] md:mb-[43px] flex-col md:flex-row flex gap-[52px]">
                {/* <!-- number  --> */}
                <div className="mx-auto md:mx-0 shrink-0 sm:w-[75px] sm:h-[75px] w-[65px] h-[65px] rounded-full bg-themeColor flex justify-center items-center text-[40px] text-white font-[700] font-clash">
                  4
                </div>
                {/* <!-- --content-- --> */}
                <div className="" data-aos="fade-up" data-aos-duration="1300">
                  <h4 className="text-center md:text-left mb-[36px] text-[24px] md:text-[32px] text-white font-[600] font-clash">
                    Victory's Sweet Rewards
                  </h4>
                  <p className="text-center md:text-left max-w-[1112px] text-[20px] md:text-[24px] text-[rgba(255,255,255,0.8)] font-[400] leading-[43px] tracking-[0.48px] font-satoshi">
                    When fortune favors you, success is celebrated instantly. As
                    a winner, you automatically receive your rewards in the form
                    of PST—equivalent to your stETH holdings—bolstering your
                    balance and amplifying your odds for future draws. Sit back
                    and let the protocol handle the rest; there's no need to
                    manually claim rewards. Just remember, a 10% winning fee
                    applies—small price for a taste of triumph.
                  </p>
                </div>
              </div>
              {/* <!-- --single-item--  --> */}
              <div className="min-h-[346px] flex-col md:flex-row flex gap-[52px]">
                {/* <!-- number  --> */}
                <div className="mx-auto md:mx-0 shrink-0 sm:w-[75px] sm:h-[75px] w-[65px] h-[65px] rounded-full bg-themeColor flex justify-center items-center text-[40px] text-white font-[700] font-clash">
                  5
                </div>
                {/* <!-- --content-- --> */}
                <div className="" data-aos="fade-up" data-aos-duration="1300">
                  <h4 className="text-center md:text-left mb-[36px] text-[24px] md:text-[32px] text-white font-[600] font-clash">
                    Freedom to Withdraw
                  </h4>
                  <p className="text-center md:text-left max-w-[1112px] text-[20px] md:text-[24px] text-[rgba(255,255,255,0.8)] font-[400] leading-[43px] tracking-[0.48px] font-satoshi">
                    Maintaining control of your funds is our priority. At any
                    time, you have the power to withdraw your initial deposit.
                    Simply follow the withdrawal process, and our protocol will
                    burn your PST tokens, exchanging them for stETH at a 1:1
                    ratio. Your financial freedom is just a click away.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="hidden md:block ml-[120px]"
              data-aos="fade-up"
              data-aos-duration="1300"
            >
              <a
                href="https://brainzfinance.gitbook.io/whitepaper/"
                className="w-[222px] text-center text-[20px] py-[13px] px-[25px] text-themeColor font-inter font-[500] inline-flex items-center justify-center group border-[1px] border-themeColor rounded-[30px] transition hover:bg-themeColor hover:text-[#000]"
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
                </span>{" "}
                Learn more
              </a>
            </div>
          </div>
        </section>
        {/* <!--========  How  It  Works  section End =========--> */}

        {/* <!--======== opportunity  section Start =========--> */}
        <section
          className="mt-[50px] md:mt-[100px] py-[50px]"
          data-aos="fade-up"
          data-aos-duration="1300"
        >
          <div className="container">
            {/* <!-- opportunity-inner-  --> */}
            <div className="py-[50px] md:py-[204px] rounded-[10px] bg-[url('assets/img/bg/opportunity_bg.png')] bg-cover bg-center px-3">
              <p className="max-w-[1168px] tracking-[0.66px] mx-auto text-center text-[20px] md:text-[33px] text-[#fff] font-[400] font-satoshi leading-[55px]">
                Experience the Brainz Finance Protocol, where your journey is in
                your hands—empowering, exhilarating, and completely
                non-custodial.
              </p>
            </div>
          </div>
        </section>
        {/* <!--======== opportunity  section End =========--> */}
      </main>
    </>
  );
};

export default Staking;
