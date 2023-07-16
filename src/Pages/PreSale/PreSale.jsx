import React, { useRef, useState } from "react";

import ShapeLeft from "../../assets/img/bg/shape_left.png";
import ShapeRight from "../../assets/img/bg/shape_right.png";
import YellowBigStar from "../../assets/img/icons/yellow_big_star.svg";
import YellowMediumStar from "../../assets/img/icons/yellow_medium_star.svg";

import LinkButtonRightArrow from "../../assets/img/icons/link_btn_right_arrow.svg";

import BigBlueStar from "../../assets/img/icons/big_blue_star.svg";
import SmallBlueStar from "../../assets/img/icons/small_blue_star.svg";

import FinanceThum from "../../assets/img/thumbs/finance_thum.png";
import MediumHiteStart from "../../assets/img/icons/medium_hite_star.svg";
import ConnectBg from "../../assets/img/bg/connect_bg.png";
import FinanceBg from "../../assets/img/bg/Finance_bg.png";
import DontMissBg from "../../assets/img/bg/dont_miss_bg.png";
import SliderArrow from "../../assets/img/icons/Slider arrow.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const PreSale = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const cardsCarouselRef = useRef(null);
  const handleNext = () => {
    if (cardsCarouselRef.current) {
      cardsCarouselRef.current.next();
    }
  };
  const responsive = {
    0: {
      items: 1,
      dots: true,
      nav: false,
      stagePadding: 0,
    },
    768: {
      items: 1,
      dots: true,
      nav: false,
      stagePadding: 0,
    },
    1000: {
      items: 2,
      dots: false,
      nav: true,
      loop: false,
      stagePadding: 0,
    },
    1400: {
      items: 2,
      dots: false,
      nav: true,
      loop: false,
      stagePadding: 0,
    },
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
        <section className="bg-transparent mt-16 md:mt-28 lg:mt-[150px] pt-28 md:pt-[150px] pb-[0px] md:pb-[200px] relative">
          {/* <!-- ---stars--  --> */}
          <div className="hidden md:block">
            <img
              className="absolute top-[10%]  left-[90%] -z-10"
              data-aos="zoom-in"
              data-aos-duration="1300"
              src={BigBlueStar}
              alt=""
            />
            <img
              className="absolute top-[10%]  left-[60%] -z-10"
              data-aos="zoom-in"
              data-aos-duration="1300"
              src={SmallBlueStar}
              alt=""
            />
            <img
              className="absolute top-[15%]  left-[15%] -z-10"
              data-aos="zoom-in"
              data-aos-duration="1300"
              src={SmallBlueStar}
              alt=""
            />

            <img
              className="absolute top-[60%]  left-[5%] -z-10"
              data-aos="zoom-in"
              data-aos-duration="1300"
              src={MediumHiteStart}
              alt=""
            />
            <img
              className="absolute bottom-[10%]  left-[50%] -z-10"
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
              <div className="hero-text max-w-[1090px] mx-auto">
                <h1 className="text-[32px] md:text-[48px] text-[#fff] text-center font-[600] font-clash tracking-[0.96px]">
                  Prepare for the Ultimate Crypto Spectacle: The Brainz Finance
                  Presale Carnival - Where Brilliance Meets Opportunity!
                </h1>
                <p className="text-[20px] md:text-[26px] py-[35px] text-[#ADAEB9] text-center font-[400] font-inter tracking-[0.26px]">
                  Step right up, ladies and gentlemen, as we unveil the most
                  thrilling presale opportunity of the century! The Brainz
                  Finance Presale Carnival is your front-row ticket to an
                  exhilarating ride filled with breathtaking rewards and
                  jaw-dropping returns. Get ready to unleash your inner genius
                  and make a smart move that will set you apart from the crowd!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!--======== Hero Area End =========--> */}

        {/* <!--======== Features  section Start =========--> */}
        <section className="right_fixd_carousel py-[50px] md:py-[80px] ">
          <div
            className="container "
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            <OwlCarousel
              ref={cardsCarouselRef}
              items={2}
              nav
              dots={false}
              loop={false}
              margin={35}
              autoplay={false}
              autoplayTimeout={3000}
              smartSpeed={1000}
              responsiveClass={true}
              responsive={responsive}
              // style={{
              //   transform: `translate3d(-514px, 0px, 0px)`,
              //   transition: `all 0s ease 0s`,
              // }}
            >
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[428px] p-10 shadow-[0_0px_36px_0px_rgba(21,191,253,0.47)] border-[1px] border-themeColor rounded-[16px]">
                {/* <!-- --card-heading- --> */}
                <div className="flex pb-8 md:pb-11 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                  <h3 className="text-[26px] text-[#fff] font-[500] font-clash">
                    Be a Financial Maestro
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="mt-[32px] md:mt-[44px] text-[20px] text-[#fff] font-[500] font-satoshi leading-[32px]">
                  You've got the power, the knowledge, and the wit to make smart
                  investments. With the Brainz Finance Presale Carnival, you
                  become the conductor of your financial destiny. Play the
                  symphony of success as you secure your share of $Brainz
                  tokens, the ultimate masterpiece in the crypto universe.
                </p>
              </div>
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[428px] p-10 shadow-[0_0px_36px_0px_rgba(21,191,253,0.47)] border-[1px] border-themeColor rounded-[16px]">
                {/* <!-- --card-heading- --> */}
                <div className="flex pb-8 md:pb-11 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                  <h3 className="text-[26px] text-[#fff] font-[500] font-clash">
                    The Genius Club
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="mt-[32px] md:mt-[44px] text-[20px] text-[#fff] font-[500] font-satoshi leading-[32px]">
                  Welcome to the elite club of brilliance and visionaries. By
                  participating in our presale, you join a league of exceptional
                  minds who understand the art of seizing opportunities. Rub
                  shoulders with the best and brightest in the crypto world and
                  bask in the glow of shared success. The Brainz Finance Presale
                  Carnival is where true geniuses gather!
                </p>
              </div>
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[428px] p-10 shadow-[0_0px_36px_0px_rgba(21,191,253,0.47)] border-[1px] border-themeColor rounded-[16px]">
                {/* <!-- --card-heading- --> */}
                <div className="flex pb-8 md:pb-11 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                  <h3 className="text-[26px] text-[#fff] font-[500] font-clash">
                    Be a Financial Maestro
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="mt-[32px] md:mt-[44px] text-[20px] text-[#fff] font-[500] font-satoshi leading-[32px]">
                  You've got the power, the knowledge, and the wit to make smart
                  investments. With the Brainz Finance Presale Carnival, you
                  become the conductor of your financial destiny. Play the
                  symphony of success as you secure your share of $Brainz
                  tokens, the ultimate masterpiece in the crypto universe.
                </p>
              </div>
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[428px] p-10 shadow-[0_0px_36px_0px_rgba(21,191,253,0.47)] border-[1px] border-themeColor rounded-[16px]">
                {/* <!-- --card-heading- --> */}
                <div className="flex pb-8 md:pb-11 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                  <h3 className="text-[26px] text-[#fff] font-[500] font-clash">
                    The Genius Club
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="mt-[32px] md:mt-[44px] text-[20px] text-[#fff] font-[500] font-satoshi leading-[32px]">
                  Welcome to the elite club of brilliance and visionaries. By
                  participating in our presale, you join a league of exceptional
                  minds who understand the art of seizing opportunities. Rub
                  shoulders with the best and brightest in the crypto world and
                  bask in the glow of shared success. The Brainz Finance Presale
                  Carnival is where true geniuses gather!
                </p>
              </div>
            </OwlCarousel>
            <div className="flex justify-center mt-4 absolute top-[-200px] right-[0px] max-[1000px]:hidden">
              <button className="focus:outline-none" onClick={handleNext}>
                <img src={SliderArrow} alt="Next" className="" />
              </button>
            </div>
          </div>
        </section>
        {/* <!--======== Features  section End =========--> */}

        {/* <!--======== don't miss section  Start =========--> */}
        <section className="">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            {/* <!-- --inner--  --> */}
            <div
              className="pt-[59px] md:pt-[73.35px] pb-[50px] md:pb-[58px] px-6 md:px-[60px] rounded-[13px]  bg-cover"
              style={{
                backgroundImage: `url(${DontMissBg})`,
              }}
            >
              <h2 className="text-center md:text-left text-[32px] text-[#fff] font-[600] font-clash">
                Don’t Miss The Chance !
              </h2>
              <p className="text-center md:text-left text-[20px] md:text-[24px] py-[36px] leading-[38px] text-[rgba(255,255,255,0.8)] font-[400] font-inter">
                Don't miss out on this brain-tickling, money-spinning
                extravaganza.
                <span className="text-themeColor">
                  The Brainz Finance Presale Carnival
                </span>
                is where brilliance meets opportunity, and you're invited to
                take center stage. Join the ranks of the brightest minds, secure
                your share of the future, and let your investments flourish. The
                spotlight is on you, so make the smartest investment of your
                lifetime!
              </p>
              {/* <!-- --link-btn--  --> */}
              <a
                href="#"
                className="hidden md:flex gap-3 items-center text-[20px] text-themeColor font-inter font-[500] transition hover:text-white"
              >
                Learn more
                <img src={LinkButtonRightArrow} alt="" />
              </a>
            </div>
          </div>
        </section>
        {/* <!--======== don't miss section  End =========--> */}

        {/* <!--======== Disclaimer section  Start =========--> */}
        <section className="hidden md:block py-[120px] pb-20">
          <div className="container">
            <h2 className="text-[31px] text-[#fff] font-[700] font-clash">
              Disclaimer:
            </h2>
            <p className="text-[22px] py-[36px] leading-[38px] text-[rgba(255,255,255,0.8)] font-[400] font-inter">
              Disclaimer: Prepare for a mind-bending experience that may result
              in occasional bursts of genius, unstoppable excitement, and an
              irresistible urge to outsmart the financial universe. Side effects
              may include sudden wealth, an elevated sense of investment
              prowess, and a reputation as the smartest investor in town.
              Embrace the brilliance and ride the wave of prosperity!
            </p>
          </div>
        </section>
        {/* <!--======== Disclaimer section  End =========--> */}

        {/* <!--======== Finance  section Start =========--> */}
        <section className="py-[20px] md:py-[50px]">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            {/* <!-- finance_inner  --> */}
            <div className="pt-[20px] md:pt-[41px] pb-[28px] px-2 sm:pl-[47px] sm:pr-[38px] bg-transparent md:bg-[url('assets/img/bg/Finance_bg.png')] bg-cover rounded-[12px]">
              {/* <!-- ---finance-Top--  --> */}
              <div className="grid gap-0 md:gap-10 xl:gap-28 pb-6 md:pb-8 grid-cols-12 border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                <div className="mb-7 md:mb-0 col-span-12 lg:col-span-6">
                  <div className="grid gap-5 md:gap-7 grid-cols-12">
                    <div className="col-span-12 md:col-span-5">
                      <div className="mx-auto md:mx-0 max-w-[213px] max-h-[213px] border-[1px] border-themeColor rounded-full p-2 flex justify-center items-center">
                        <img src={FinanceThum} alt="" />
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-7">
                      {/* <!-- single_item  --> */}
                      <div className="text-center md:text-left mb-[17px] md:mb-[60px]">
                        <h6 className="mb-2 text-[20px] md:text-[23px] text-white font-[700] font-satoshi">
                          $Brainz Finance tokens
                        </h6>
                        <p className="text-[14px] md:text-[18px] text-themeColor font-[500] font-satoshi">
                          1 ETH = 100,000 $Brainz
                        </p>
                      </div>

                      {/* <!-- single_item  --> */}
                      <div className="text-center md:text-left">
                        <h6 className="mb-2 text-[20px] md:text-[23px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                          TOTAL $Brainz RAISE
                        </h6>
                        <p className="text-[14px] md:text-[18px] text-themeColor font-[500] font-satoshi">
                          10,000,000 $Brainz
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:mt-6 lg:mt-0 lg:col-span-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-6">
                      {/* <!-- single_item  --> */}
                      <div className="mb-[17px] md:mb-[60px]">
                        <h6 className="mb-2 text-[16px] md:text-[21px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                          Soft cap /hard cap
                        </h6>
                        <p className="text-[14px] md:text-[18px] text-themeColor font-[500] font-satoshi">
                          10 ETH - 100 ETH
                        </p>
                      </div>

                      {/* <!-- single_item  --> */}
                      <div className="">
                        <h6 className="mb-2 text-[16px] md:text-[21px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                          MIN AMOUNT
                        </h6>
                        <p className="text-[14px] md:text-[18px] text-themeColor font-[500] font-satoshi">
                          1 ETH
                        </p>
                      </div>
                    </div>
                    <div className="col-span-6">
                      {/* <!-- single_item  --> */}
                      <div className="mb-[17px] md:mb-[60px]">
                        <h6 className="mb-2 text-[16px] md:text-[21px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                          YOUR BALANCE
                        </h6>
                        <p className="text-[14px] md:text-[18px] text-themeColor font-[500] font-satoshi">
                          0 ETH
                        </p>
                      </div>
                      {/* <!-- single_item  --> */}
                      <div className="">
                        <h6 className="mb-2 text-[16px] md:text-[21px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                          MAX AMOUNT
                        </h6>
                        <p className="text-[14px] md:text-[18px] text-themeColor font-[500] font-satoshi">
                          5 ETH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ---finance-middle--  --> */}
              <div className="py-5 md:py-8">
                <div className="md:grid gap-10 xl:gap-28 grid-cols-12">
                  <div className="col-span-12 md:col-span-6">
                    <h6 className="text-[16px] md:text-[18px] text-[rgba(255,255,255,0.5)] font-[700] font-satoshi">
                      Progress ( 0.00%)
                    </h6>
                    <div className="my-5 max-w-full sm:max-w-[501px] h-[15px] bg-[#4D4F64] rounded-[11px] overflow-hidden w-full">
                      <div className="bg-themeColor h-full w-[54%] text-xs leading-none py-1 rounded-[11px]"></div>
                    </div>
                    <div className="max-w-full sm:max-w-[501px] flex justify-between w-full">
                      <h6 className="text-[18px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                        1 ETH
                      </h6>
                      <h6 className="text-[18px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                        100 ETH
                      </h6>
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <h6 className="mb-[10px] md:mb-[18px] text-[21px] text-[rgba(255,255,255,0.5)] font-[700] font-satoshi">
                      Sale Starts In :
                    </h6>
                    <p className="text-[14px] md:text-[23px] text-[rgb(255,255,255)] font-[700] font-satoshi">
                      26:19:40:25
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- ---finance-bottom--  --> */}
              <div className="mt-0 md:mt-8 grid gap-0 xl:gap-28 grid-cols-12">
                <div className="col-span-12 xl:col-span-6">
                  <h6 className="text-[14px] md:text-[19px] text-[rgb(255,255,255)] font-[700] font-satoshi">
                    Select The Amount
                  </h6>
                  <div className="flex items-center gap-[10px]">
                    <div className="p-[12px] h-[58px] md:h-[65px] flex items-center my-5 border-[1.5px] border-white rounded-[30px] overflow-hidden w-full">
                      <div className="flex items-center justify-between w-full">
                        <input
                          className="w-[75%] px-5 py-5 h-full text-[19px] text-[rgba(255,255,255,0.6)] placeholder:text-[14px] md:placeholder:text-[19px] placeholder:text-[rgba(255,255,255,0.6)] focus:outline-none focus:border-none bg-transparent"
                          type="text "
                          placeholder="ETH"
                        />
                        <div className="">
                          <button className="py-[8px] px-[24px] md:px-[39px] rounded-[30px] bg-themeColor text-[12px] md:text-[16px] text-[#000] font-[500] font-inter hover:bg-white transition-all">
                            MAX
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <button className="py-[18px] px-[83.5px] rounded-[30px] bg-themeColor text-[20px] text-[#000] font-[500] font-inter hover:bg-white transition-all">
                        BUY
                      </button>
                    </div>
                  </div>

                  <div className="block md:hidden">
                    <button className="mb-4 w-full md:w-[94%] py-[12px] px-[83.5px] rounded-[30px] bg-themeColor text-[14px] text-[#000] font-[500] font-inter">
                      BUY
                    </button>
                  </div>

                  <h6 className="text-[16px] md:text-[21px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                    Balance :
                    <span className="text-[16px] md:text-[18px] text-[rgb(255,255,255)] font-[700] font-satoshi">
                      0.0000 ETH
                    </span>
                  </h6>
                </div>
                <div className="text-center md:text-left col-span-12 mt-6 md:mt-10 xl:mt-0 xl:col-span-6">
                  <h6 className="text-[19px] text-[rgb(255,255,255)] font-[700] font-satoshi">
                    Share Affiliate link and win 3% Rewards
                  </h6>
                  <div className="flex items-center gap-[10px]">
                    <div className="p-[8px] md:p-[12px] h-[65px] flex items-center my-5 border-[1.5px] border-white rounded-[30px] overflow-hidden">
                      <div className="flex items-center justify-between">
                        <input
                          className="w-[70%] sm:w-[65%] px-3 md:px-5 py-5 h-full text-[19px] text-[rgb(255,255,255)] placeholder:text-[15px] sm:placeholder:text-[17px] placeholder:text-[rgb(255,255,255)] focus:outline-none focus:border-none bg-transparent"
                          type="text "
                          placeholder="https://Brainz.com/finance/user"
                        />
                        <div className="w-[30%] sm:w-[35%] text-right">
                          <button className="py-[8px] px-[5px] md:px-[10px] rounded-[30px] bg-white text-[11px] sm:text-[16px] text-[#000] font-[500] font-inter hover:bg-themeColor hover:text-black transition-all">
                            Copy Affiliate link
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h6 className="text-[16px] md:text-[21px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                    Number of referrals :
                    <span className="text-[16px] md:text-[18px] text-[rgb(255,255,255)] font-[700] font-satoshi">
                      0
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--======== Finance  section End =========--> */}

        {/* <!--======== connect section Start =========--> */}

        <section className="pt-8 md:pt-12">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            {/* <!-- connect inner  --> */}
            <div
              className="pt-[40px] md:pt-[78px] pb-[58px] px-5 sm:px-[42px] rounded-[12px] bg-cover"
              style={{
                backgroundImage: `url(${FinanceBg})`,
              }}
            >
              {/* <!-- ---connect-top--  --> */}
              <div>
                <h2 className="mb-[29px] text-[20px] sm:text-[30px] text-center text-[#fff] font-[500] font-satoshi leading-normal md:leading-[46px]">
                  Connect your wallet and claim your rewards
                </h2>

                <div className="flex justify-center">
                  <a
                    href="#"
                    className="w-full md:w-auto text-center text-[20px] py-[13px] md:py-[15px] px-7 md:px-[87px] text-themeColor font-inter font-[500] inline-flex items-center group justify-center border-[1px] border-themeColor rounded-[30px] transition hover:bg-themeColor hover:text-[#000]"
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
              </div>
              {/* <!-- ---connect-bottom--  --> */}
              <div className="mt-[53px] grid grid-cols-12">
                <div className="col-span-12 md:col-span-6 pb-12 md:pb-0 border-b-[1px] border-r-0 border-b-[rgba(255,255,255,0.1) md:border-r-[1px] md:border-r-[rgba(255,255,255,0.5) md:border-b-0">
                  <div className="text-center md:text-left w-full md:w-max mx-auto">
                    <h6 className="mb-[8px] text-[21px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                      Total amount of $brainz to claim
                    </h6>

                    <h2 className="text-[30px] text-[#90FF9C] font-[700] font-satoshi">
                      0 $Brainz
                    </h2>

                    <button className="mt-[22px] md:mt-[43px] w-[192px] py-[14px] px-[50.5px] rounded-[30px] bg-[#90FF9C] text-[13px] md:text-[20px] text-[#000] font-[500] font-inter  hover:bg-themeColor transition-all">
                      CLAIM
                    </button>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 pt-12 md:pt-0">
                  <div className="text-center md:text-left w-full md:w-max mx-auto">
                    <h6 className="mb-[8px] text-[21px] text-[rgba(255,255,255,0.5)] font-[500] font-satoshi">
                      Total Affiliate Earnings
                    </h6>

                    <h2 className="text-[30px] text-themeColor font-[700] font-satoshi">
                      0 $Brainz
                    </h2>

                    <button className="mt-[22px] md:mt-[43px] w-[192px] py-[14px] px-[50.5px] rounded-[30px] bg-themeColor text-[13px] md:text-[20px] text-[#000] font-[500] font-inter hover:bg-themeColor2 transition-all">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--======== connect section End =========--> */}
      </main>
    </>
  );
};

export default PreSale;
