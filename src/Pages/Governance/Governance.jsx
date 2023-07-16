import React, { useRef, useState } from "react";

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
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import SliderArrow from "../../assets/img/icons/Slider arrow.svg";
import AOS from "aos";

import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Governance = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const proposalCarouselRef = useRef(null);
  const requirementsCarouselRef = useRef(null);
  const influenceCarouselRef = useRef(null);
  const handleNext = () => {
    if (proposalCarouselRef.current) {
      proposalCarouselRef.current.next();
    }
  };
  const requirementsHandleNext = () => {
    if (requirementsCarouselRef.current) {
      requirementsCarouselRef.current.next();
    }
  };
  const influenceHandleNext = () => {
    if (influenceCarouselRef.current) {
      influenceCarouselRef.current.next();
    }
  };

  const responsive = {
    0: {
      items: 1,
      nav: false,
      dots: true,
      stagePadding: 0,
    },
    768: {
      items: 1,
      nav: false,
      dots: true,
      stagePadding: 0,
    },
    1000: {
      items: 2,
      nav: true,
      dots: false,
      loop: false,
      margin: 40,
    },
    1024: {
      items: 2,
      nav: true,
      dots: false,
      loop: false,
      margin: 120,
    },
  };

  const [activeTab, setActiveTab] = React.useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <main className="main overflow-hidden relative z-10">
        {/* <!-- --shapes--  --> */}
        <div className="hidden md:block">
          <img src={ShapeLeft} className="absolute top-0 left-0 -z-10" alt="" />

          <img
            src={ShapeRight}
            className="absolute top-0 right-0 -z-10"
            alt=""
          />
        </div>
        {/* <!--======== Hero Area Start =========--> */}
        <section className="bg-transparent mt-16 md:mt-28 lg:mt-[150px] pt-28 md:pt-[150px] pb-[80px] md:pb-[200px] relative">
          {/* <!-- --shapes--  --> */}

          {/* <!-- ---stars--big-screen  --> */}
          <div className="hidden md:block">
            <img
              className="absolute top-[10%] left-[90%] -z-10"
              data-aos="zoom-in"
              data-aos-duration="1300"
              src={BigBlueStar}
              alt=""
            />
            <img
              className="absolute top-[10%] left-[60%] -z-10"
              data-aos="zoom-in"
              data-aos-duration="1300"
              src={SmallBlueStar}
              alt=""
            />
            <img
              className="absolute top-[15%] left-[15%] -z-10"
              data-aos="zoom-in"
              data-aos-duration="1300"
              src={SmallBlueStar}
              alt=""
            />

            <img
              className="absolute top-[60%] left-[5%] -z-10"
              data-aos="zoom-in"
              data-aos-duration="1300"
              src={MediumHiteStart}
              alt=""
            />
            <img
              className="absolute bottom-[10%] left-[50%] -z-10"
              data-aos="zoom-in"
              data-aos-duration="1300"
              src={SmallBlueStar}
              alt=""
            />
          </div>
          {/* <!-- ---stars--small-screen  --> */}
          <div className="block md:hidden">
            <img
              className="absolute -z-10 top-[7%] right-[10%]"
              src={YellowBigStar}
              alt=""
            />
            <img
              className="absolute -z-10 top-[20%] left-[0%]"
              src={YellowMediumStar}
              alt=""
            />
          </div>

          <div className="container">
            <div
              className="hero_content z-20"
              data-aos="fade-up"
              data-aos-duration="1300"
            >
              <div className="hero-text">
                <h1 className="text-[32px] md:text-[48px] max-w-[1223px] mx-auto text-[#fff] text-center font-[600] font-clash tracking-[0.96px]">
                  Welcome to the Brainz Finance
                  <span
                    className="text-themeColor"
                    style={{ marginLeft: 10, marginRight: 10 }}
                  >
                    Governance
                  </span>
                  Page: Where Your Voice Shapes the Future!
                </h1>
                <p className="text-[20px] md:text-[26px] mt-[37px] md:mt-[78px] max-w-[1124px] mx-auto text-[#ADAEB9] text-center font-[400] font-inter tracking-[0.26px]">
                  At Brainz Finance, we believe in the power of community-driven
                  decision-making. As a token holder, you have the opportunity
                  to actively participate in shaping the direction of our
                  protocol. Our governance framework empowers you to propose and
                  vote on a wide range of crucial matters that impact the Brainz
                  ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!--======== Hero Area End =========--> */}

        {/* <!--======== Proposals  section Start =========--> */}
        <section className="right_fixd_carousel proposals-section py-[0px] md:py-[140px] bg-transparent md:bg-[#121533] ">
          <div className="container relative">
            <div className="mb-14 md:mb-28">
              {/* <!-- --section-heading--  --> */}
              <h2 className="mb-6 text-center md:text-left text-[24px] md:text-[34px] text-themeColor font-[500] font-clash">
                Proposals that could change the game:
              </h2>

              <p className="block md:hidden text-center text-[20px] text-white font-[400] font-satoshi">
                And so much more! The possibilities are vast, and your input
                matters.
              </p>
            </div>

            <OwlCarousel
              ref={proposalCarouselRef}
              items={2}
              nav
              dots={false}
              loop={false}
              margin={35}
              autoPlay={false}
              autoplayTimeout={3000}
              smartSpeed={1000}
              responsiveClass
              responsive={responsive}
              // style={{
              //   transform: `translate3d(-514px, 0px, 0px)`,
              //   transition: `all 0s ease 0s`,
              // }}
            >
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[150px] p-4">
                {/* <!-- --card-heading- --> */}
                <div className="card-icon min-h-[63px] mb-5 flex items-center justify-center md:justify-start ">
                  <img
                    src={IC1}
                    className="w-auto inline-block"
                    style={{ width: "auto" }}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="w-full text-center md:text-start text-[35px] text-themeColor font-[700] font-satoshi">
                    Token Taxes
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="text-center md:text-left mt-[30px] text-[20px] text-[rgba(255,255,255,0.8)] font-[500] font-satoshi">
                  Have a say in incrementing or reducing token taxes, ensuring a
                  fair and sustainable financial model.
                </p>
              </div>

              {/* <!-- --single_items--  --> */}
              <div className="min-h-[150px] p-4">
                {/* <!-- --card-heading- --> */}
                <div className="card-icon min-h-[63px] mb-5 flex items-center justify-center md:justify-start">
                  <img
                    src={IC2}
                    className="w-auto inline-block"
                    style={{ width: "auto" }}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="w-full text-center md:text-start text-[35px] text-themeColor font-[700] font-satoshi">
                    Burning
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="text-center md:text-left mt-[30px] text-[20px] text-[rgba(255,255,255,0.8)] font-[500] font-satoshi">
                  Influence the supply dynamics by proposing increments or
                  reductions in token burning.
                </p>
              </div>
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[150px] p-4">
                {/* <!-- --card-heading- --> */}
                <div className="card-icon min-h-[63px] mb-5 flex items-center justify-center md:justify-start">
                  <img
                    src={IC3}
                    className="w-auto inline-block"
                    style={{ width: "auto" }}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="w-full text-center md:text-start text-[35px] text-themeColor font-[700] font-satoshi">
                    Pool Winners
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="text-center md:text-left mt-[30px] text-[20px] text-[rgba(255,255,255,0.8)] font-[500] font-satoshi">
                  Advocate for increasing or reducing the pool winners' rewards,
                  making the experience even more thrilling.
                </p>
              </div>
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[150px] p-4">
                {/* <!-- --card-heading- --> */}
                <div className="card-icon min-h-[63px] mb-5 flex items-center justify-center md:justify-start">
                  <img
                    src={IC4}
                    className="w-auto inline-block"
                    style={{ width: "auto" }}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="w-full text-center md:text-start text-[35px] text-themeColor font-[700] font-satoshi">
                    Exploring Other Crypto Chains
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="text-center md:text-left mt-[30px] text-[20px] text-[rgba(255,255,255,0.8)] font-[500] font-satoshi">
                  Unleash the potential of expanding our protocol by considering
                  integration with other crypto chains.
                </p>
              </div>
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[150px] p-4">
                {/* <!-- --card-heading- --> */}
                <div className="card-icon min-h-[63px] mb-5 flex items-center justify-center md:justify-start">
                  <img
                    src={IC5}
                    className="w-auto inline-block"
                    style={{ width: "auto" }}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="w-full text-center md:text-start text-[35px] text-themeColor font-[700] font-satoshi">
                    Governance Settings
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="text-center md:text-left mt-[30px] text-[20px] text-[rgba(255,255,255,0.8)] font-[500] font-satoshi">
                  Help fine-tune the governance settings to ensure optimal
                  decision-making and transparency.
                </p>
              </div>
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[150px] p-4">
                {/* <!-- --card-heading- --> */}
                <div className="card-icon min-h-[63px] mb-5 flex items-center justify-center md:justify-start">
                  <img
                    src={IC6}
                    className="w-auto inline-block"
                    style={{ width: "auto" }}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="w-full text-center md:text-start text-[35px] text-themeColor font-[700] font-satoshi">
                    Partnerships or Marketing
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="text-center md:text-left mt-[30px] text-[20px] text-[rgba(255,255,255,0.8)] font-[500] font-satoshi">
                  Suggest potential partnerships or marketing strategies to
                  drive growth and awareness.
                </p>
              </div>
            </OwlCarousel>

            <div className="flex justify-center mt-4 absolute top-[0px] right-[0px] max-[1000px]:hidden">
              <button className="focus:outline-none" onClick={handleNext}>
                <img src={SliderArrow} alt="Next" className="" />
              </button>
            </div>
          </div>
        </section>
        {/* <!--======== Proposals  section End =========--> */}
        {/* <!--======== Requirements  section Start =========--> */}
        <section className="right_fixd_carousel requirements-section py-[50px] md:py-[150px]">
          <div className="container relative">
            <div className="mb-14 md:mb-28">
              {/* <!-- --section-heading--  --> */}
              <h2 className="text-center md:text-left mb-6 text-[34px] text-themeColor font-[500] font-clash">
                Requirements to make a difference:
              </h2>
              <p className="mx-auto md:mx-0 text-center md:text-left text-[20px] max-w-[443px] text-white font-[400] font-clash">
                To ensure a robust decision-making process, we have set the
                following requirements:
              </p>
            </div>

            <OwlCarousel
              ref={requirementsCarouselRef}
              items={2}
              nav
              dots={false}
              loop={false}
              margin={35}
              autoPlay={false}
              autoplayTimeout={3000}
              smartSpeed={1000}
              responsiveClass
              responsive={responsive}
              // style={{
              //   transform: `translate3d(-514px, 0px, 0px)`,
              //   transition: `all 0s ease 0s`,
              // }}
            >
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[150px] p-4">
                {/* <!-- --card-heading- --> */}
                <div className="card-icon min-h-[63px] mb-5 flex items-center justify-center md:justify-start">
                  <img
                    src={IC7}
                    className="w-auto inline-block"
                    style={{ width: "auto" }}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="w-full text-center md:text-start text-[35px] text-themeColor font-[700] font-satoshi">
                    80% Majority
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="text-center md:text-left mt-[30px] text-[20px] text-[rgba(255,255,255,0.8)] font-[500] font-satoshi">
                  For a proposal to pass, it must receive an 80% majority vote
                  from the Brainz community, ensuring consensus and alignment.
                </p>
              </div>

              {/* <!-- --single_items--  --> */}
              <div className="min-h-[150px] p-4">
                {/* <!-- --card-heading- --> */}
                <div className="card-icon min-h-[63px] mb-5 flex items-center justify-center md:justify-start">
                  <img
                    src={IC8}
                    className="w-auto inline-block"
                    style={{ width: "auto" }}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-center md:text-left text-[35px] text-themeColor font-[700] font-satoshi">
                    Token Holding Requirement
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="text-center md:text-left mt-[30px] text-[20px] text-[rgba(255,255,255,0.8)] font-[500] font-satoshi">
                  To vote on proposals, a minimum of 10,000 $Brainz tokens must
                  be held in your wallet, allowing committed participants to
                  have their voices heard.
                </p>
              </div>
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[150px] p-4">
                {/* <!-- --card-heading- --> */}
                <div className="card-icon min-h-[63px] mb-5 flex items-center justify-center md:justify-start">
                  <img
                    src={IC9}
                    className="w-auto inline-block"
                    style={{ width: "auto" }}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="w-full text-center md:text-start text-[35px] text-themeColor font-[700] font-satoshi">
                    Proposal Power
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="text-center md:text-left mt-[30px] text-[20px] text-[rgba(255,255,255,0.8)] font-[500] font-satoshi">
                  To make a proposal, a minimum of 1,000,000 $Brainz tokens must
                  be held, enabling passionate individuals to shape the future
                  of Brainz Finance actively.
                </p>
              </div>
            </OwlCarousel>
            <div className="flex justify-center mt-4 absolute top-[0px] right-[0px] max-[1000px]:hidden">
              <button
                className="focus:outline-none"
                onClick={requirementsHandleNext}
              >
                <img src={SliderArrow} alt="Next" className="" />
              </button>
            </div>
          </div>
        </section>
        {/* <!--======== Requirements  section End =========--> */}
        {/* <!--======== Propose & Influence  section Start =========--> */}
        <section className="right_fixd_carousel proposals-section py-[50px] md:py-[140px] bg-[#121533]">
          <div className="container relative">
            <div className="mb-14 md:mb-28">
              {/* <!-- --section-heading--  --> */}
              <h2 className="text-center md:text-left mb-6 text-[34px] text-white font-[500] font-clash">
                Propose & Influence : Your Power Play
              </h2>
            </div>

            <OwlCarousel
              ref={influenceCarouselRef}
              items={2}
              nav={false}
              dots={false}
              loop={false}
              margin={35}
              autoPlay={false}
              autoplayTimeout={3000}
              smartSpeed={1000}
              responsiveClass
              responsive={responsive}
              // style={{
              //   transform: `translate3d(-514px, 0px, 0px)`,
              //   transition: `all 0s ease 0s`,
              // }}
            >
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[150px] p-4">
                <div className="flex flex-col md:flex-row gap-8">
                  <span className="mx-auto md:mx-0 shrink-0 text-[27px] flex justify-center items-center text-[#fff] font-[700] bg-themeColor font-clash w-[50px] h-[50px] rounded-full">
                    1
                  </span>
                  <div className="">
                    {/* <!-- --card-heading- --> */}
                    <div className="flex items-center justify-between">
                      <h3 className="mx-auto md:mx-0 text-[28px] text-white font-[500] font-clash uppercase">
                        Connect Wallet:
                      </h3>
                    </div>
                    {/* <!-- --card-body--  --> */}
                    <p className="text-center md:text-left mt-[30px] text-[24px] text-[rgba(255,255,255,0.8)] font-[400] font-satoshi tracking-[0.48px]">
                      Link up your wallet—our portal to infinite possibilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- --single_items--  --> */}
              <div className="min-h-[150px] p-4">
                <div className="flex flex-col md:flex-row gap-8">
                  <span className="mx-auto md:max-0 shrink-0 text-[27px] flex justify-center items-center text-[#fff] font-[700] bg-themeColor font-clash w-[50px] h-[50px] rounded-full">
                    2
                  </span>
                  <div className="">
                    {/* <!-- --card-heading- --> */}
                    <div className="flex items-center justify-between">
                      <h3 className="mx-auto md:mx-0 text-[28px] text-white font-[500] font-clash uppercase">
                        Token Up:
                      </h3>
                    </div>
                    {/* <!-- --card-body--  --> */}
                    <p className="text-center md:text-left mt-[30px] text-[24px] text-[rgba(255,255,255,0.8)] font-[400] font-satoshi tracking-[0.48px]">
                      Ensure your wallet packs the required $Brainz tokens. It's
                      your ticket to propose like a boss.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[150px] p-4">
                <div className="flex flex-col md:flex-row gap-8">
                  <span className="mx-auto md:mx-0 shrink-0 text-[27px] flex justify-center items-center text-[#fff] font-[700] bg-themeColor font-clash w-[50px] h-[50px] rounded-full">
                    3
                  </span>
                  <div className="">
                    {/* <!-- --card-heading- --> */}
                    <div className="flex items-center justify-between">
                      <h3 className="mx-auto md:mx-0 text-[28px] text-white font-[500] font-clash uppercase">
                        Click to Act:
                      </h3>
                    </div>
                    {/* <!-- --card-body--  --> */}
                    <p className="text-center md:text-left mt-[30px] text-[24px] text-[rgba(255,255,255,0.8)] font-[400] font-satoshi tracking-[0.48px]">
                      Ready to rock? Hit the button to propose or cast your
                      vote. No hidden fees, just your genius at work.
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- --single_items--  --> */}
              <div className="min-h-[150px] p-4">
                <div className="flex flex-col md:flex-row gap-8">
                  <span className="mx-auto md:max-0 shrink-0 text-[27px] flex justify-center items-center text-[#fff] font-[700] bg-themeColor font-clash w-[50px] h-[50px] rounded-full">
                    4
                  </span>
                  <div className="">
                    {/* <!-- --card-heading- --> */}
                    <div className="flex items-center justify-between">
                      <h3 className="mx-auto md:mx-0 text-[28px] text-white font-[500] font-clash uppercase">
                        Fee Freedom:
                      </h3>
                    </div>
                    {/* <!-- --card-body--  --> */}
                    <p className="text-center md:text-left mt-[30px] text-[24px] text-[rgba(255,255,255,0.8)] font-[400] font-satoshi tracking-[0.48px]">
                      We believe in fair play. No gas fees, voting fees, or
                      proposal fees. It's all about your brain, not your wallet.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[150px] p-4">
                <div className="flex flex-col md:flex-row gap-8">
                  <span className="mx-auto md:max-0 shrink-0 text-[27px] flex justify-center items-center text-[#fff] font-[700] bg-themeColor font-clash w-[50px] h-[50px] rounded-full">
                    5
                  </span>
                  <div className="">
                    {/* <!-- --card-heading- --> */}
                    <div className="flex items-center justify-between">
                      <h3 className="mx-auto md:mx-0 text-[28px] text-white font-[500] font-clash uppercase">
                        Voting Vortex:
                      </h3>
                    </div>
                    {/* <!-- --card-body--  --> */}
                    <p className="text-center md:text-left mt-[30px] text-[24px] text-[rgba(255,255,255,0.8)] font-[400] font-satoshi tracking-[0.48px]">
                      Proposals go through a 7-day voting whirlwind. The final
                      countdown unveils our community's verdict.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[150px] p-4">
                <div className="flex flex-col md:flex-row gap-8">
                  <span className="mx-auto md:max-0 shrink-0 text-[27px] flex justify-center items-center text-[#fff] font-[700] bg-themeColor font-clash w-[50px] h-[50px] rounded-full">
                    6
                  </span>
                  <div className="">
                    {/* <!-- --card-heading- --> */}
                    <div className="flex items-center justify-between">
                      <h3 className="mx-auto md:mx-0 text-[28px] text-white font-[500] font-clash uppercase">
                        From Proposal to Reality
                      </h3>
                    </div>
                    {/* <!-- --card-body--  --> */}
                    <p className="text-center md:text-left mt-[30px] text-[24px] text-[rgba(255,255,255,0.8)] font-[400] font-satoshi tracking-[0.48px]">
                      A 30-Day Transformational Journey to Fulfillment!
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
            <div className="flex justify-center mt-4 absolute top-[0px] right-[0px] max-[1000px]:hidden">
              <button
                className="focus:outline-none"
                onClick={influenceHandleNext}
              >
                <img src={SliderArrow} alt="Next" className="" />
              </button>
            </div>
          </div>
        </section>
        {/* <!--======== Propose & Influence  section End =========--> */}

        {/* <!--========  Create  Proposal section Start =========--> */}
        <section className="py-[50px] md:py-20 lg:py-28">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            {/* <!-- --1st-part--  --> */}
            <div className="mb-16 grid grid-cols-12 py-[50px] md:py-0 px-[20px] md:px-0 bg-[#121533] md:bg-transparent rounded-[13px] md:border-none border-[1px] border-themeColor">
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                {/* <!-- --solid-btn--  --> */}
                <a
                  href="#"
                  className="createProposalButton hidden md:inline-flex gap-2 items-center text-[20px] text-[#000] bg-themeColor py-[15px] px-[35px] leading-none hover:text-themeColor font-inter font-[500] border-[1px] border-themeColor rounded-[30px] hover:border-[1px] hover:border-themeColor hover:rounded-[30px] transition hover:bg-transparent"
                >
                  <img src={Plus} alt="" /> Create a Proposal
                </a>

                {/* <!-- Modal --> */}
                <div
                  id="proposalModal"
                  className="fixed z-[60] inset-0 overflow-y-auto hidden"
                >
                  <div className="flex items-center justify-center min-h-screen p-4">
                    {/* <!-- Overlay --> */}
                    {/* <!-- <div className="fixed inset-0 bg-green-500 opacity-75"></div> --> */}
                    <div className="fixed inset-0 bg-black opacity-75"></div>

                    {/* <!-- Modal content --> */}
                    <div className="bg-[#0C1C35] w-[90%] md:w-[60%] h-auto md:h-[500px] rounded-[12px] shadow-lg p-10 relative z-50">
                      <div className="flex flex-col">
                        <h2 className="text-center md:text-left mb-5 text-[20px] md:text-[28px] text-white font-[500] font-satoshi">
                          Write your proposal
                        </h2>
                        <textarea
                          id="proposalText"
                          style={{ background: "rgba(255, 255, 255, 0.84)" }}
                          className="w-full h-52 md:h-72 mb-4 rounded-[12px] p-4 placeholder:text-[14px] placeholder:font-satoshi placeholder:text-[#0C1C35] resize-none outline-none"
                          placeholder="Unleash your ideas !"
                        ></textarea>

                        <div className="text-center md:text-right">
                          <a
                            href="#"
                            id="submitProposalButton"
                            className="mt-4 inline-flex gap-2 items-center text-[14px] md:text-[20px] text-[#000] bg-themeColor py-[15px] px-[60px] leading-none font-inter font-[500] border-[1px] border-themeColor rounded-[30px]"
                          >
                            <img src={Plus} alt="" />
                            Proposal
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4 text-center md:text-left">
                <a
                  href="#"
                  className="w-[297px] text-center leading-none text-[20px] py-[15px] px-[25px] text-themeColor font-inter font-[500] inline-flex items-center justify-center group border-[1px] border-themeColor rounded-[30px] transition hover:bg-themeColor hover:text-[#000]"
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
                  connect wallet
                </a>
              </div>
              <div className="mt-[40px] lg:mt-0 flex justify-center flex-wrap gap-[40px] sm:gap-[60px] col-span-12 md:col-span-12 lg:col-span-4">
                <div className="text-center">
                  <h6 className="mb-2 text-[15px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                    your wallet $brains balance
                  </h6>
                  <h2 className="text-[20px] text-[#90FF9C] font-[700] font-satoshi">
                    0 $Brainz
                  </h2>
                </div>
                <div className="text-center">
                  <h6 className="mb-2 text-[15px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                    Your pool balance
                  </h6>
                  <h2 className="text-[20px] text-[#15BFFD] font-[700] font-satoshi">
                    0 $Brainz
                  </h2>
                </div>
                <div className="flex gap-3 md:gap-9 flex-wrap justify-center">
                  {/* <!-- --single-tip--  --> */}
                  <div className="w-[205px] md:w-auto inline-flex gap-8 justify-between rounded-[6px] bg-[#0C1C35] p-3">
                    <h6 className="shrink-0 text-[11px] text-white font-[400] font-satoshi">
                      Eligibility for Proposal
                    </h6>
                    <img src={GreenThick} alt="" />
                  </div>
                  {/* <!-- --single-tip--  --> */}
                  <div className="w-[205px] md:w-auto inline-flex gap-8 justify-between rounded-[6px] bg-[#0C1C35] p-3">
                    <h6 className="shrink-0 text-[11px] text-white font-[400] font-satoshi">
                      Eligibility for voting
                    </h6>
                    <img src={RedCross} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4 text-center mt-[35px]">
                {/* <!-- --solid-btn--  --> */}
                <a
                  href="#"
                  className="createProposalButton inline-flex md:hidden gap-2 items-center text-[20px] text-[#000] bg-themeColor py-[15px] px-[35px] leading-none hover:text-themeColor font-inter font-[500] border-[1px] border-themeColor rounded-[30px] hover:border-[1px] hover:border-themeColor hover:rounded-[30px] transition hover:bg-transparent"
                >
                  <img src={Plus} alt="" /> Create a Proposal
                </a>
              </div>
            </div>

            {/* <!-- --2nd-part--  --> */}

            <div className="">
              {/* <!-- --heading--  --> */}
              <h6 className="mb-3 text-[22px] text-white font-[500] font-satoshi">
                List of proposal
              </h6>

              {/* <!-- --List Nav --  --> */}

              <div className="tab-container flex gap-10 mb-5 border-b-[2px] border-b-[rgba(255,255,255,0.5)]">
                <div
                  className={`text-[16px] p-[10px] text-[rgba(255,255,255,0.5)]  ${
                    activeTab === "tab1"
                      ? " font-[500] active-tab text-themeColor border-b-[2px]"
                      : "font-[500]"
                  } tab tab-title cursor-pointer transition-all hover:text-themeColor border-themeColor`}
                  onClick={() => handleTabClick("tab1")}
                  data-tab="tab1"
                >
                  Current
                </div>
                <div
                  className={`text-[16px] p-[10px] text-[rgba(255,255,255,0.5)]  ${
                    activeTab === "tab2"
                      ? " font-[500] active-tab text-themeColor  border-b-[2px] border-themeColor"
                      : "font-[500]"
                  } tab tab-title cursor-pointer transition-all hover:text-themeColor`}
                  onClick={() => handleTabClick("tab2")}
                  data-tab="tab2"
                >
                  Past
                </div>
              </div>

              {/* <!-- --single-Proposals--conatiner  --> */}

              <div
                id="tab1"
                className={`tab-content ${
                  activeTab === "tab1" ? "" : "hidden"
                }`}
              >
                <div className="flex flex-col gap-6">
                  {/* <!-- --single-Proposal--  --> */}
                  <div className="px-10 py-[33px] rounded-[5px] bg-[#0C1C35]">
                    {/* <!-- --top-part--  --> */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 md:gap-20">
                        <span className="text-[16px] md:text-[24px] text-white font-[500] font-satoshi">
                          #1
                        </span>
                        <h6 className="text-[13px] md:text-[20px] text-white font-[500] font-satoshi uppercase">
                          STATUS:
                          <span className="text-[#90FF9C]">VOTING ONGOING</span>
                        </h6>
                      </div>
                      <p className="text-[11px] md:text-[16px] text-white font-[500] font-satoshi uppercase">
                        executed
                      </p>
                    </div>
                    {/* <!-- --middle_part--  --> */}

                    <div className="">
                      {/* <!-- --title--  --> */}

                      <h6 className="text-[16px] md:text-[24px] my-[10px] text-white font-[500] font-satoshi">
                        Title
                      </h6>

                      <p className="text-[13px] md:text-[19px] pb-4 min-h-[135px] border-b-[1px] border-b-[rgba(255,255,255,0.20)] text-white font-[500] font-satoshi tracking-[0.38px]">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque
                        duis consequat a aliquam natoque cras tortor. Id
                        consectetur nullam nibh gravida tempor massa pharetra
                        vitae. Sapien tortor diam ipsum amet velit egestas
                        molestie duis eget. Id enim id quam nulla. Semper sit
                        maecenas hac nibh viverra. Ut dictum magna iaculis
                        posuere elementum fringilla sed tellus metus.
                      </p>
                    </div>
                    {/* <!-- ---bottom-part--  --> */}

                    <div className="mt-5 gap-5 md:gap-[100px] flex flex-wrap items-center">
                      <div className="w-[285px]">
                        <h2 className="text-[14px] mb-5 text-white font-[500] font-satoshi uppercase">
                          Vote percentages ( 54.21%)
                        </h2>
                        {/* <!-- --range-slider--  --> */}
                        <div className="slider w-[285px] h-[10px] bg-[#90FF9C] relative rounded-[5px]">
                          <div className="slider-thumb w-1 h-6 bg-white absolute top-[-7px] rounded-[50%] cursor-pointer"></div>
                          <div className="slider-track w-[50%] h-[10px] bg-[#FD1515] absolute top-0 rounded-[5px]"></div>
                        </div>
                        {/* <!-- --Vot count --  --> */}
                        <div className="mt-5 flex justify-between items-center">
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Reject: 88 %
                          </h6>
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Vote: 88 %
                          </h6>
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Support: 88 %
                          </h6>
                        </div>
                      </div>

                      <div className="flex gap-[60px]">
                        <div className="text-center">
                          <h6 className="text-[13px] mb-2 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Date of creation
                          </h6>
                          <p className="text-[13px] text-themeColor font-[500] font-satoshi">
                            12/06/2023
                          </p>
                        </div>
                        <div className="text-center">
                          <h6 className="text-[13px] mb-2 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            End date
                          </h6>
                          <p className="text-[13px] text-themeColor font-[500] font-satoshi">
                            12/06/2023
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 md:mt-0 flex gap-7 md:ml-auto">
                        {/* <!-- ---btns--  --> */}
                        <a
                          href="#"
                          className="leading-none text-[20px] py-[15px] px-[25px] text-[#90FF9C;] font-inter font-[500] inline-block border-[1px] border-[#90FF9C;] rounded-[30px] transition hover:bg-themeColor hover:text-[#000] hover:border-themeColor"
                        >
                          Support
                        </a>
                        {/* <!-- ---btns--  --> */}
                        <a
                          href="#"
                          className="leading-none text-[20px] py-[15px] px-[25px] text-[#FF9090] font-inter font-[500] inline-block border-[1px] border-[#FF9090] rounded-[30px] transition hover:bg-themeColor hover:text-[#000]  hover:border-themeColor"
                        >
                          Reject
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- --single-Proposal--  --> */}
                  <div className="px-10 py-[33px] rounded-[5px] bg-[#0C1C35]">
                    {/* <!-- --top-part--  --> */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 md:gap-20">
                        <span className="text-[16px] md:text-[24px] text-white font-[500] font-satoshi">
                          #1
                        </span>
                        <h6 className="text-[13px] md:text-[20px] text-white font-[500] font-satoshi uppercase">
                          STATUS:
                          <span className="text-[#90FF9C]">VOTING ONGOING</span>
                        </h6>
                      </div>
                      <p className="text-[11px] md:text-[16px] text-white font-[500] font-satoshi uppercase">
                        executed
                      </p>
                    </div>
                    {/* <!-- --middle_part--  --> */}

                    <div className="">
                      {/* <!-- --title--  --> */}

                      <h6 className="text-[16px] md:text-[24px] my-[10px] text-white font-[500] font-satoshi">
                        Title
                      </h6>

                      <p className="text-[13px] md:text-[19px] pb-4 min-h-[135px] border-b-[1px] border-b-[rgba(255,255,255,0.20)] text-white font-[500] font-satoshi tracking-[0.38px]">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque
                        duis consequat a aliquam natoque cras tortor. Id
                        consectetur nullam nibh gravida tempor massa pharetra
                        vitae. Sapien tortor diam ipsum amet velit egestas
                        molestie duis eget. Id enim id quam nulla. Semper sit
                        maecenas hac nibh viverra. Ut dictum magna iaculis
                        posuere elementum fringilla sed tellus metus.
                      </p>
                    </div>
                    {/* <!-- ---bottom-part--  --> */}

                    <div className="mt-5 gap-5 md:gap-[100px] flex flex-wrap items-center">
                      <div className="w-[285px]">
                        <h2 className="text-[14px] mb-5 text-white font-[500] font-satoshi uppercase">
                          Vote percentages ( 54.21%)
                        </h2>
                        {/* <!-- --range-slider--  --> */}
                        <div className="slider w-[285px] h-[10px] bg-[#90FF9C] relative rounded-[5px]">
                          <div className="slider-thumb w-1 h-6 bg-white absolute top-[-7px] rounded-[50%] cursor-pointer"></div>
                          <div className="slider-track w-[50%] h-[10px] bg-[#FD1515] absolute top-0 rounded-[5px]"></div>
                        </div>
                        {/* <!-- --Vot count --  --> */}
                        <div className="mt-5 flex justify-between items-center">
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Reject: 88 %
                          </h6>
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Vote: 88 %
                          </h6>
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Support: 88 %
                          </h6>
                        </div>
                      </div>

                      <div className="flex gap-[60px]">
                        <div className="text-center">
                          <h6 className="text-[13px] mb-2 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Date of creation
                          </h6>
                          <p className="text-[13px] text-themeColor font-[500] font-satoshi">
                            12/06/2023
                          </p>
                        </div>
                        <div className="text-center">
                          <h6 className="text-[13px] mb-2 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            End date
                          </h6>
                          <p className="text-[13px] text-themeColor font-[500] font-satoshi">
                            12/06/2023
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 md:mt-0 flex gap-7 md:ml-auto">
                        {/* <!-- ---btns--  --> */}
                        <a
                          href="#"
                          className="leading-none text-[20px] py-[15px] px-[25px] text-[#90FF9C;] font-inter font-[500] inline-block border-[1px] border-[#90FF9C;] rounded-[30px] transition hover:bg-themeColor hover:text-[#000] hover:border-themeColor"
                        >
                          Support
                        </a>
                        {/* <!-- ---btns--  --> */}
                        <a
                          href="#"
                          className="leading-none text-[20px] py-[15px] px-[25px] text-[#FF9090] font-inter font-[500] inline-block border-[1px] border-[#FF9090] rounded-[30px] transition hover:bg-themeColor hover:text-[#000]  hover:border-themeColor "
                        >
                          Reject
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- --single-Proposal--  --> */}
                  <div className="px-10 py-[33px] rounded-[5px] bg-[#0C1C35]">
                    {/* <!-- --top-part--  --> */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 md:gap-20">
                        <span className="text-[16px] md:text-[24px] text-white font-[500] font-satoshi">
                          #1
                        </span>
                        <h6 className="text-[13px] md:text-[20px] text-white font-[500] font-satoshi uppercase">
                          STATUS:
                          <span className="text-[#90FF9C]">VOTING ONGOING</span>
                        </h6>
                      </div>
                      <p className="text-[11px] md:text-[16px] text-white font-[500] font-satoshi uppercase">
                        executed
                      </p>
                    </div>
                    {/* <!-- --middle_part--  --> */}

                    <div className="">
                      {/* <!-- --title--  --> */}

                      <h6 className="text-[16px] md:text-[24px] my-[10px] text-white font-[500] font-satoshi">
                        Title
                      </h6>

                      <p className="text-[13px] md:text-[19px] pb-4 min-h-[135px] border-b-[1px] border-b-[rgba(255,255,255,0.20)] text-white font-[500] font-satoshi tracking-[0.38px]">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque
                        duis consequat a aliquam natoque cras tortor. Id
                        consectetur nullam nibh gravida tempor massa pharetra
                        vitae. Sapien tortor diam ipsum amet velit egestas
                        molestie duis eget. Id enim id quam nulla. Semper sit
                        maecenas hac nibh viverra. Ut dictum magna iaculis
                        posuere elementum fringilla sed tellus metus.
                      </p>
                    </div>
                    {/* <!-- ---bottom-part--  --> */}

                    <div className="mt-5 gap-5 md:gap-[100px] flex flex-wrap items-center">
                      <div className="w-[285px]">
                        <h2 className="text-[14px] mb-5 text-white font-[500] font-satoshi uppercase">
                          Vote percentages ( 54.21%)
                        </h2>
                        {/* <!-- --range-slider--  --> */}
                        <div className="slider w-[285px] h-[10px] bg-[#90FF9C] relative rounded-[5px]">
                          <div className="slider-thumb w-1 h-6 bg-white absolute top-[-7px] rounded-[50%] cursor-pointer"></div>
                          <div className="slider-track w-[50%] h-[10px] bg-[#FD1515] absolute top-0 rounded-[5px]"></div>
                        </div>
                        {/* <!-- --Vot count --  --> */}
                        <div className="mt-5 flex justify-between items-center">
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Reject: 88 %
                          </h6>
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Vote: 88 %
                          </h6>
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Support: 88 %
                          </h6>
                        </div>
                      </div>

                      <div className="flex gap-[60px]">
                        <div className="text-center">
                          <h6 className="text-[13px] mb-2 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Date of creation
                          </h6>
                          <p className="text-[13px] text-themeColor font-[500] font-satoshi">
                            12/06/2023
                          </p>
                        </div>
                        <div className="text-center">
                          <h6 className="text-[13px] mb-2 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            End date
                          </h6>
                          <p className="text-[13px] text-themeColor font-[500] font-satoshi">
                            12/06/2023
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 md:mt-0 flex gap-7 md:ml-auto">
                        {/* <!-- ---btns--  --> */}
                        <a
                          href="#"
                          className="leading-none text-[20px] py-[15px] px-[25px] text-[#90FF9C;] font-inter font-[500] inline-block border-[1px] border-[#90FF9C;] rounded-[30px] transition hover:bg-themeColor hover:text-[#000] hover:border-themeColor"
                        >
                          Support
                        </a>
                        {/* <!-- ---btns--  --> */}
                        <a
                          href="#"
                          className="leading-none text-[20px] py-[15px] px-[25px] text-[#FF9090] font-inter font-[500] inline-block border-[1px] border-[#FF9090] rounded-[30px] transition hover:bg-themeColor hover:text-[#000]  hover:border-themeColor"
                        >
                          Reject
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    {/* <!-- --link-btn--  --> */}
                    <a
                      href="#"
                      className="inline-flex gap-3 mt-7 items-center text-[18px] md:text-[25px] py-[15px] text-themeColor font-inter font-[500] transition hover:text-white"
                    >
                      View more
                      <img src={LinkButtonRightArrow} alt="" />
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- --single-Proposals--conatiner  --> */}

              <div
                id="tab2"
                className={`tab-content ${
                  activeTab === "tab1" ? "" : "hidden"
                }`}
                style={{ display: "block" }}
              >
                <div className="flex flex-col gap-6">
                  {/* <!-- --single-Proposal--  --> */}
                  <div className="px-10 py-[33px] rounded-[5px] bg-[#0C1C35]">
                    {/* <!-- --top-part--  --> */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 md:gap-20">
                        <span className="text-[16px] md:text-[24px] text-white font-[500] font-satoshi">
                          #1
                        </span>
                        <h6 className="text-[13px] md:text-[20px] text-white font-[500] font-satoshi uppercase">
                          STATUS:{" "}
                          <span className="text-[#90FF9C]">SUCCESSFUL</span>
                        </h6>
                      </div>
                      <p className="text-[11px] md:text-[16px] text-white font-[500] font-satoshi uppercase">
                        executed
                      </p>
                    </div>
                    {/* <!-- --middle_part--  --> */}

                    <div className="">
                      {/* <!-- --title--  --> */}

                      <h6 className="text-[16px] md:text-[24px] my-[10px] text-white font-[500] font-satoshi">
                        Title
                      </h6>

                      <p className="text-[13px] md:text-[19px] pb-4 min-h-[135px] border-b-[1px] border-b-[rgba(255,255,255,0.20)] text-white font-[500] font-satoshi tracking-[0.38px]">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque
                        duis consequat a aliquam natoque cras tortor. Id
                        consectetur nullam nibh gravida tempor massa pharetra
                        vitae. Sapien tortor diam ipsum amet velit egestas
                        molestie duis eget. Id enim id quam nulla. Semper sit
                        maecenas hac nibh viverra. Ut dictum magna iaculis
                        posuere elementum fringilla sed tellus metus.
                      </p>
                    </div>
                    {/* <!-- ---bottom-part--  --> */}

                    <div className="mt-5 gap-5 md:gap-[100px] flex flex-wrap items-center">
                      <div className="w-[285px]">
                        <h2 className="text-[14px] mb-5 text-white font-[500] font-satoshi uppercase">
                          Vote percentages ( 54.21%)
                        </h2>
                        {/* <!-- --range-slider--  --> */}
                        <div className="slider w-[285px] h-[10px] bg-[#90FF9C] relative rounded-[5px]">
                          <div className="slider-thumb w-1 h-6 bg-white absolute top-[-7px] rounded-[50%] cursor-pointer"></div>
                          <div className="slider-track w-[50%] h-[10px] bg-[#FD1515] absolute top-0 rounded-[5px]"></div>
                        </div>
                        {/* <!-- --Vot count --  --> */}
                        <div className="mt-5 flex justify-between items-center">
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Reject: 88 %
                          </h6>
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Vote: 88 %
                          </h6>
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Support: 88 %
                          </h6>
                        </div>
                      </div>
                      <div className="flex gap-[60px]">
                        <div className="text-center">
                          <h6 className="text-[13px] mb-2 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Date of creation
                          </h6>
                          <p className="text-[13px] text-themeColor font-[500] font-satoshi">
                            12/06/2023
                          </p>
                        </div>
                        <div className="text-center">
                          <h6 className="text-[13px] mb-2 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            End date
                          </h6>
                          <p className="text-[13px] text-themeColor font-[500] font-satoshi">
                            12/06/2023
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- --single-Proposal--  --> */}
                  <div className="px-10 py-[33px] rounded-[5px] bg-[#0C1C35]">
                    {/* <!-- --top-part--  --> */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 md:gap-20">
                        <span className="text-[16px] md:text-[24px] text-white font-[500] font-satoshi">
                          #2
                        </span>
                        <h6 className="text-[13px] md:text-[20px] text-white font-[500] font-satoshi uppercase">
                          STATUS:{" "}
                          <span className="text-[#90FF9C]">SUCCESSFUL</span>
                        </h6>
                      </div>
                      <p className="text-[11px] md:text-[16px] text-white font-[500] font-satoshi uppercase">
                        Execution Time - 30 days
                      </p>
                    </div>
                    {/* <!-- --middle_part--  --> */}

                    <div className="">
                      {/* <!-- --title--  --> */}

                      <h6 className="text-[16px] md:text-[24px] my-[10px] text-white font-[500] font-satoshi">
                        Title
                      </h6>

                      <p className="text-[13px] md:text-[19px] pb-4 min-h-[135px] border-b-[1px] border-b-[rgba(255,255,255,0.20)] text-white font-[500] font-satoshi tracking-[0.38px]">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque
                        duis consequat a aliquam natoque cras tortor. Id
                        consectetur nullam nibh gravida tempor massa pharetra
                        vitae. Sapien tortor diam ipsum amet velit egestas
                        molestie duis eget. Id enim id quam nulla. Semper sit
                        maecenas hac nibh viverra. Ut dictum magna iaculis
                        posuere elementum fringilla sed tellus metus.
                      </p>
                    </div>
                    {/* <!-- ---bottom-part--  --> */}

                    <div className="mt-5 gap-5 md:gap-[100px] flex flex-wrap items-center">
                      <div className="w-[285px]">
                        <h2 className="text-[14px] mb-5 text-white font-[500] font-satoshi uppercase">
                          Vote percentages ( 54.21%)
                        </h2>
                        {/* <!-- --range-slider--  --> */}
                        <div className="slider w-[285px] h-[10px] bg-[#90FF9C] relative rounded-[5px]">
                          <div className="slider-thumb w-1 h-6 bg-white absolute top-[-7px] rounded-[50%] cursor-pointer"></div>
                          <div className="slider-track w-[50%] h-[10px] bg-[#FD1515] absolute top-0 rounded-[5px]"></div>
                        </div>
                        {/* <!-- --Vot count --  --> */}
                        <div className="mt-5 flex justify-between items-center">
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Reject: 88 %
                          </h6>
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Vote: 88 %
                          </h6>
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Support: 88 %
                          </h6>
                        </div>
                      </div>
                      <div className="flex gap-[60px]">
                        <div className="text-center">
                          <h6 className="text-[13px] mb-2 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Date of creation
                          </h6>
                          <p className="text-[13px] text-themeColor font-[500] font-satoshi">
                            12/06/2023
                          </p>
                        </div>
                        <div className="text-center">
                          <h6 className="text-[13px] mb-2 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            End date
                          </h6>
                          <p className="text-[13px] text-themeColor font-[500] font-satoshi">
                            12/06/2023
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- --single-Proposal--  --> */}
                  <div className="px-10 py-[33px] rounded-[5px] bg-[#0C1C35]">
                    {/* <!-- --top-part--  --> */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 md:gap-20">
                        <span className="text-[16px] md:text-[24px] text-white font-[500] font-satoshi">
                          #3
                        </span>
                        <h6 className="text-[13px] md:text-[20px] text-white font-[500] font-satoshi uppercase">
                          STATUS:{" "}
                          <span className="text-[#FD1515]">REJECTED</span>
                        </h6>
                      </div>
                    </div>
                    {/* <!-- --middle_part--  --> */}

                    <div className="">
                      {/* <!-- --title--  --> */}

                      <h6 className="text-[16px] md:text-[24px] my-[10px] text-white font-[500] font-satoshi">
                        Title
                      </h6>

                      <p className="text-[13px] md:text-[19px] pb-4 min-h-[135px] border-b-[1px] border-b-[rgba(255,255,255,0.20)] text-white font-[500] font-satoshi tracking-[0.38px]">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque
                        duis consequat a aliquam natoque cras tortor. Id
                        consectetur nullam nibh gravida tempor massa pharetra
                        vitae. Sapien tortor diam ipsum amet velit egestas
                        molestie duis eget. Id enim id quam nulla. Semper sit
                        maecenas hac nibh viverra. Ut dictum magna iaculis
                        posuere elementum fringilla sed tellus metus.
                      </p>
                    </div>
                    {/* <!-- ---bottom-part--  --> */}

                    <div className="mt-5 gap-5 md:gap-[100px] flex flex-wrap items-center">
                      <div className="w-[285px]">
                        <h2 className="text-[14px] mb-5 text-white font-[500] font-satoshi uppercase">
                          Vote percentages ( 54.21%)
                        </h2>
                        {/* <!-- --range-slider--  --> */}
                        <div className="slider w-[285px] h-[10px] bg-[#90FF9C] relative rounded-[5px]">
                          <div className="slider-thumb w-1 h-6 bg-white absolute top-[-7px] rounded-[50%] cursor-pointer"></div>
                          <div className="slider-track w-[50%] h-[10px] bg-[#FD1515] absolute top-0 rounded-[5px]"></div>
                        </div>
                        {/* <!-- --Vot count --  --> */}
                        <div className="mt-5 flex justify-between items-center">
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Reject: 88 %
                          </h6>
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Vote: 88 %
                          </h6>
                          <h6 className="text-[10px] mb-5 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Support: 88 %
                          </h6>
                        </div>
                      </div>
                      <div className="flex gap-[60px]">
                        <div className="text-center">
                          <h6 className="text-[13px] mb-2 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            Date of creation
                          </h6>
                          <p className="text-[13px] text-themeColor font-[500] font-satoshi">
                            12/06/2023
                          </p>
                        </div>
                        <div className="text-center">
                          <h6 className="text-[13px] mb-2 text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                            End date
                          </h6>
                          <p className="text-[13px] text-themeColor font-[500] font-satoshi">
                            12/06/2023
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    {/* <!-- --link-btn--  --> */}
                    <a
                      href="#"
                      className="inline-flex gap-3 mt-7 items-center text-[18px] md:text-[25px] py-[15px] text-themeColor font-inter font-[500] transition hover:text-white"
                    >
                      View more
                      <img src={LinkButtonRightArrow} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--========  Create  Proposal section End =========--> */}

        {/* <!--========  Get Started  section Start =========--> */}
        <section className="py-0 md:py-[100px]">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            <div className="flex flex-wrap items-center gap-[20px] md:gap-[31px] py-[50px] sm:py-[100px] px-[20px] sm:px-[75px] rounded-[10px] bg-[#101332]">
              <div className="w-[100%] lg:w-[58%] order-2 lg:order-1">
                <p className="text-center md:text-left my-[20px] md:my-[43px] text-[20px] md:text-[26px] text-[#FFFFFF] font-[400] font-inter tracking-[0.26px] leading-[32px]">
                  Join the Brainz Governance Community today and seize the
                  opportunity to contribute your ideas, shape the protocol's
                  destiny, and unlock the full potential of our ecosystem.
                </p>

                <p className="text-center md:text-left block md:hidden text-[20px] md:text-[26px] text-[#FFFFFF] font-[400] font-inter tracking-[0.26px] leading-[32px]">
                  Together, we can build a decentralized future where every
                  voice matters. Let your voice be heard at Brainz Finance
                  Governance!
                </p>
              </div>
              <div className="w-[210px] mx-auto opacity-70 md:opacity-100 lg:w-[39%] mb-5 lg:mb-0 order-1 lg:order-2">
                <img className="mx-auto" src={GetStartThum} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!--========  Get Started  section End =========--> */}

        {/* <!--========  text  section Start =========--> */}
        <section className="hidden md:block mb-[100px]">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            <p className="text-[33px] max-w-[1205px] mx-auto text-center text-white font-[400] font-satoshi leading-[55px] tracking-[0.66px]">
              Together, we can build a decentralized future where every voice
              matters. Let your voice be heard at Brainz Finance Governance!
            </p>
          </div>
        </section>
        {/* <!--========  text  section End =========--> */}
      </main>
    </>
  );
};

export default Governance;
