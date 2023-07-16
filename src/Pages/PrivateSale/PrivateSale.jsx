import React, { useRef, useState } from "react";

import ShapeLeft from "../../assets/img/bg/shape_left.png";
import ShapeRight from "../../assets/img/bg/shape_right.png";
import YellowBigStar from "../../assets/img/icons/yellow_big_star.svg";
import YellowMediumStar from "../../assets/img/icons/yellow_medium_star.svg";
import WhiteSmallStar from "../../assets/img/icons/whiite_small_star.svg";
import BigBlueStar from "../../assets/img/icons/big_blue_star.svg";
import SmallBlueStar from "../../assets/img/icons/small_blue_star.svg";
import MediumBlueStar from "../../assets/img/icons/medium_blue_star.svg";
import Line from "../../assets/img/icons/Line 99.svg";
import Thick from "../../assets/img/icons/thick.svg";
import HorizontalLine from "../../assets/img/icons/horihontal_line.svg";
import FinanceThum from "../../assets/img/thumbs/finance_thum.png";
import SliderArrow from "../../assets/img/icons/Slider arrow.svg";
import OpportunityBg from "../../assets/img/bg/opportunity_bg.png";
import FinanceBg from "../../assets/img/bg/Finance_bg.png";
// import from 'assets/img/icons/Slider arrow.svg'
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const PrivateSale = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const featuresCarouselRef = useRef(null);
  const smartmoveCarouselRef = useRef(null);
  const featuresHandleNext = () => {
    if (featuresCarouselRef.current) {
      featuresCarouselRef.current.next();
    }
  };
  const smartmoveHandleNext = () => {
    if (smartmoveCarouselRef.current) {
      smartmoveCarouselRef.current.next();
    }
  };
  let responsive = {
    0: {
      items: 1,
      dots: true,
      nav: false,
      stagePadding: 0,
    },
    600: {
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

  const responsive2 = {
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
    1024: {
      items: 2,
      nav: true,
      dots: false,
      loop: false,
      stagePadding: 0,
    },
    1400: {
      items: 2,
      nav: true,
      dots: false,
      loop: false,
      stagePadding: 0,
    },
  };

  return (
    <>
      <main className="main relative z-10 overflow-hidden">
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
        <section className="bg-transparent mt-16 md:mt-28 lg:mt-[150px] pt-28 md:pt-[150px] pb-[50px] md:pb-[200px] relative">
          {/* <!-- ---stars--  --> */}
          <div className="hidden md:block">
            <img
              className="absolute top-[10%] left-[90%]"
              data-aos="zoom-in"
              data-aos-duration="1300"
              src={BigBlueStar}
              alt=""
            />
            <img
              className="absolute top-[10%] left-[60%]"
              data-aos="zoom-in"
              data-aos-duration="1300"
              src={SmallBlueStar}
              alt=""
            />
            <img
              className="absolute top-[15%] left-[15%]"
              data-aos="zoom-in"
              data-aos-duration="1300"
              src={SmallBlueStar}
              alt=""
            />

            <img
              className="absolute top-[60%] left-[5%]"
              data-aos="zoom-in"
              data-aos-duration="1300"
              src={WhiteSmallStar}
              alt=""
            />
            <img
              className="absolute bottom-[10%] left-[50%]"
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
            <div className="hero_content z-20">
              <div
                className="hero-text max-w-[1035px] mx-auto"
                data-aos="fade-up"
                data-aos-duration="1300"
              >
                <h1 className="text-[32px] md:text-[48px] text-[#fff] text-center font-[600] font-clash tracking-[0.96px]">
                  Welcome to the Brainz Private sale ! Where Smart Investors
                  Make Their Move!
                </h1>
                <p className="text-[20px] md:text-[26px] py-[35px] text-[#ADAEB9] text-center font-[400] font-inter tracking-[0.26px]">
                  Congratulations! You've stumbled upon the secret entrance to
                  the Brainz Finance Private Sale, the playground for the
                  brainiest investors. Brace yourself for an exclusive
                  opportunity to unlock the smartest investment potential and
                  secure your share of Brainz tokens at a special price.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!--======== Hero Area End =========--> */}

        {/* <!--======== Features  section Start =========--> */}
        <section
          className="right_fixd_carousel py-[50px] md:py-[80px] bg-[url(assets/img/bg/feature_bg.png)] bg-cover"
          data-aos="fade-in"
          data-aos-duration="1300"
        >
          <div className="container relative">
            {/* <!-- --section-heading--  --> */}
            <h6 className="text-center md:text-left mb-3 text-[22px] text-[#207692] font-[700] font-satoshi">
              Features
            </h6>
            <h2 className="mb-14 text-center md:text-left text-[32px] md:text-[40px] text-[#fff] font-[700] font-clash relative">
              {/* <!-- --star--  --> */}
              <img
                className="hidden md:block absolute bottom-[-5%] left-[-5%]"
                src={MediumBlueStar}
                alt=""
              />
              Why Join the Brainz Finance Private Sale
            </h2>

            <OwlCarousel
              ref={featuresCarouselRef}
              items={2}
              loop={false}
              nav
              margin={35}
              dots={false}
              autoPlay={false}
              autoplayTimeout={3000}
              smartSpeed={1000}
              responsiveClass={true}
              responsive={responsive}
              // style={{
              //   transform: isClicked ? "translate3d(-514px, 0px, 0px)" : "none",
              //   transition: "all 0s ease 0s",
              // }}
            >
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[322px] p-10 border-[1px] border-themeColor rounded-[16px]">
                {/* <!-- --card-heading- --> */}
                <div className="flex pb-11 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                  <h3 className="text-[26px] text-[#fff] font-[500] font-clash">
                    First-ClassName Access
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="mt-[44px] text-[21px] text-[#fff] font-[500] font-satoshi leading-[32px]">
                  Skip the lines and gain early access to Brainz tokens before
                  the public stampede begins - the brainy way to invest.
                </p>
              </div>
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[322px] p-10 border-[1px] border-themeColor rounded-[16px]">
                {/* <!-- --card-heading- --> */}
                <div className="flex pb-11 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                  <h3 className="text-[26px] text-[#fff] font-[500] font-clash">
                    Brain-Powered Growth
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="mt-[44px] text-[21px] text-[#fff] font-[500] font-satoshi leading-[32px]">
                  Join the ranks of the brainiest investors as we revolutionize
                  the market with our innovative approach to finance.
                </p>
              </div>
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[322px] p-10 border-[1px] border-themeColor rounded-[16px]">
                {/* <!-- --card-heading- --> */}
                <div className="flex pb-11 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                  <h3 className="text-[26px] text-[#fff] font-[500] font-clash">
                    First-ClassName Access
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="mt-[44px] text-[21px] text-[#fff] font-[500] font-satoshi leading-[32px]">
                  Skip the lines and gain early access to Brainz tokens before
                  the public stampede begins - the brainy way to invest.
                </p>
              </div>
              {/* <!-- --single_items--  --> */}
              <div className="min-h-[322px] p-10 border-[1px] border-themeColor rounded-[16px]">
                {/* <!-- --card-heading- --> */}
                <div className="flex pb-11 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                  <h3 className="text-[26px] text-[#fff] font-[500] font-clash">
                    Brain-Powered Growth
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="mt-[44px] text-[21px] text-[#fff] font-[500] font-satoshi leading-[32px]">
                  Join the ranks of the brainiest investors as we revolutionize
                  the market with our innovative approach to finance.
                </p>
              </div>
            </OwlCarousel>
            <div className="flex justify-center mt-4 absolute top-[45px] right-[15px] max-[1000px]:hidden">
              <button
                className="focus:outline-none"
                onClick={featuresHandleNext}
              >
                <img src={SliderArrow} alt="Next" className="" />
              </button>
            </div>
          </div>
        </section>
        {/* <!--======== Features  section End =========--> */}

        {/* <!--======== Smart move  section Start =========--> */}
        <section
          className="right_fixd_carousel smart_move-section py-[50px] md:py-[80px]"
          data-aos="fade-in"
          data-aos-duration="1300"
        >
          <div className="container relative">
            {/* <!-- --section-heading--  --> */}

            <h2 className="mb-14 text-[26px] md:text-[42px] text-center md:text-left text-[#fff] font-[500] font-clash relative">
              {/* <!-- --star--  --> */}
              <img
                className="hidden md:block absolute top-[-5%] left-[-5%]"
                src={MediumBlueStar}
                alt=""
              />
              How to Make your Smart move
            </h2>

            <div className="hidden md:block">
              <OwlCarousel
                ref={smartmoveCarouselRef}
                items={2}
                nav
                dots={false}
                loop={false}
                margin={121}
                autoplay={false}
                autoplayTimeout={3000}
                smartSpeed={1000}
                responsiveClass
                responsive={responsive2}
                // style={{
                //   transform: `translate3d(-514px, 0px, 0px)`,
                //   transition: `all 0s ease 0s`,
                // }}
              >
                {/* <!-- --single_items--  --> */}
                <div className="relative min-h-[322px] p-10 border-[1px] border-themeColor rounded-[16px]">
                  {/* <!-- --card-heading- --> */}
                  <div className="flex pb-11 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                    <h3 className="text-[26px] text-[#fff] font-[500] font-clash">
                      Discover the Secret Portal
                    </h3>
                  </div>
                  {/* <!-- --card-body--  --> */}
                  <p className="mt-[44px] text-[22px] text-[#fff] font-[500] font-satoshi leading-[32px]">
                    Sneak your way to our private sale page and unlock the
                    hidden treasures that await.
                  </p>
                  {/* <!-- --card-number--  --> */}
                  <span className="absolute top-1/2 translate-y-[-50%] -right-[22px] w-11 h-11 flex justify-center items-center text-clash text-[22px] font-[700] bg-themeColor rounded-full text-white">
                    1
                  </span>
                  {/* <!-- ---arrow line --  --> */}
                  <div className="absolute top-1/2 translate-y-[-50%] -right-[17%] lg:-right-[23%] -z-10">
                    <img src={Line} alt="" />
                  </div>
                </div>
                {/* <!-- --single_items--  --> */}
                <div className="relative min-h-[322px] p-10 border-[1px] border-themeColor rounded-[16px]">
                  {/* <!-- --card-heading- --> */}
                  <div className="flex pb-11 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                    <h3 className="text-[26px] text-[#fff] font-[500] font-clash">
                      Activate Your Brain
                    </h3>
                  </div>
                  {/* <!-- --card-body--  --> */}
                  <p className="mt-[44px] text-[22px] text-[#fff] font-[500] font-satoshi leading-[32px]">
                    Show off your smart investment skills with a minimum
                    investment of 1ETH - it's time to make your move.
                  </p>
                  {/* <!-- --card-number--  --> */}
                  <span className="absolute top-1/2 translate-y-[-50%] -right-[22px] w-11 h-11 flex justify-center items-center text-clash text-[22px] font-[700] bg-themeColor rounded-full text-white">
                    2
                  </span>
                  {/* <!-- ---arrow line --  --> */}
                  <div className="absolute top-1/2 translate-y-[-50%] -right-[17%] lg:-right-[23%] -z-10">
                    <img src={Line} alt="" />
                  </div>
                </div>
                {/* <!-- --single_items--  --> */}
                <div className="relative min-h-[322px] p-10 border-[1px] border-themeColor rounded-[16px]">
                  {/* <!-- --card-heading- --> */}
                  <div className="flex pb-11 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                    <h3 className="text-[26px] text-[#fff] font-[500] font-clash">
                      Discover the Secret Portal
                    </h3>
                  </div>
                  {/* <!-- --card-body--  --> */}
                  <p className="mt-[44px] text-[22px] text-[#fff] font-[500] font-satoshi leading-[32px]">
                    Sneak your way to our private sale page and unlock the
                    hidden treasures that await.
                  </p>
                  {/* <!-- --card-number--  --> */}
                  <span className="absolute top-1/2 translate-y-[-50%] -right-[22px] w-11 h-11 flex justify-center items-center text-clash text-[22px] font-[700] bg-[#90FF9C] rounded-full text-white">
                    <img className="" src={Thick} alt="" />
                  </span>
                </div>
              </OwlCarousel>
              <div className="flex justify-center mt-4 absolute top-[0] right-[15px] max-[1000px]:hidden">
                <button
                  className="focus:outline-none"
                  onClick={smartmoveHandleNext}
                >
                  <img src={SliderArrow} alt="Next" className="" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-[126px] md:hidden">
              {/* <!-- --single_items--  --> */}
              <div className="relative min-h-[322px] p-10 border-[1px] border-themeColor rounded-[16px]">
                {/* <!-- --card-heading- --> */}
                <div className="flex pb-6 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                  <h3 className="text-center mx-auto text-[26px] text-[#fff] font-[500] font-clash">
                    Discover the Secret Portal
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="text-center mt-[24px] text-[20px] text-[#fff] font-[500] font-satoshi leading-[32px]">
                  Sneak your way to our private sale page and unlock the hidden
                  treasures that await.
                </p>
                {/* <!-- --card-number--  --> */}
                <span className="absolute right-1/2 translate-x-[50%] -bottom-[22px] w-11 h-11 flex justify-center items-center text-clash text-[22px] font-[700] bg-themeColor rounded-full text-white">
                  1
                </span>
                {/* <!-- ---arrow line --  --> */}
                <div className="absolute right-1/2 translate-x-[50%] -bottom-[39%] -z-10">
                  <img src={HorizontalLine} alt="" />
                </div>
              </div>
              {/* <!-- --single_items--  --> */}
              <div className="relative min-h-[322px] p-10 border-[1px] border-themeColor rounded-[16px]">
                {/* <!-- --card-heading- --> */}
                <div className="flex pb-6 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                  <h3 className="text-center text-[26px] text-[#fff] font-[500] font-clash">
                    Activate Your Brain
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="text-center mt-[24px] text-[20px] text-[#fff] font-[500] font-satoshi leading-[32px]">
                  Show off your smart investment skills with a minimum
                  investment of 1ETH - it's time to make your move.
                </p>
                {/* <!-- --card-number--  --> */}
                <span className="absolute right-1/2 translate-x-[50%] -bottom-[22px] w-11 h-11 flex justify-center items-center text-clash text-[22px] font-[700] bg-themeColor rounded-full text-white">
                  2
                </span>
                {/* <!-- ---arrow line --  --> */}
                <div className="absolute right-1/2 translate-x-[50%] -bottom-[37%] -z-10">
                  <img src={HorizontalLine} alt="" />
                </div>
              </div>
              {/* <!-- --single_items--  --> */}
              <div className="relative min-h-[322px] p-10 border-[1px] border-themeColor rounded-[16px]">
                {/* <!-- --card-heading- --> */}
                <div className="flex pb-6 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                  <h3 className="text-center text-[26px] text-[#fff] font-[500] font-clash">
                    Discover the Secret Portal
                  </h3>
                </div>
                {/* <!-- --card-body--  --> */}
                <p className="text-center mt-[24px] text-[20px] text-[#fff] font-[500] font-satoshi leading-[32px]">
                  Sneak your way to our private sale page and unlock the hidden
                  treasures that await.
                </p>
                {/* <!-- --card-number--  --> */}
                <span className="absolute right-1/2 translate-x-[50%] -bottom-[22px] w-11 h-11 flex justify-center items-center text-clash text-[22px] font-[700] bg-[#90FF9C] rounded-full text-white">
                  <img className="" src={Thick} alt="" />
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* <!--======== Smart move  section End =========--> */}

        {/* <!--======== opportunity  section Start =========--> */}
        <section className="py-[50px]">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            {/* <!-- opportunity-inner-  --> */}
            <div
              className="py-[50px] md:py-[204px] rounded-[10px]  bg-cover bg-center px-3"
              style={{
                backgroundImage: `url(${OpportunityBg})`,
              }}
            >
              <p className="max-w-[1051px] tracking-[0.26px] mx-auto text-center text-[20px] md:text-[26px] text-[#fff] font-[400] font-inter leading-10">
                Don't let this exclusive opportunity slip through your
                fingertips.
                <br />
                Join the
                <span className="text-themeColor">
                  Brainz Finance Private Sale
                </span>
                and let your investment prowess shine bright. It's time to
                outsmart the market and make
                <span className="text-themeColor"> your mark!</span>
              </p>
            </div>
          </div>
        </section>
        {/* <!--======== opportunity  section End =========--> */}

        {/* <!--======== Finance  section Start =========--> */}
        <section className="py-[20px] md:py-[50px]">
          <div
            className="container "
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            {/* <!-- finance_inner  --> */}
            <div
              className="pt-[20px] md:pt-[41px] pb-[28px] px-2 sm:pl-[47px] sm:pr-[38px] bg-transparent  bg-cover rounded-[12px]"
              style={{
                backgroundImage: `url(${FinanceBg})`,
              }}
            >
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
                      <div className="text-center md:text-left mb-[22px] md:mb-[60px]">
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
                      <div className="mb-[20px] md:mb-[60px]">
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
                      <div className="mb-[20px] md:mb-[60px]">
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
                          <button className="py-[8px] px-[24px] md:px-[39px] rounded-[30px] bg-themeColor text-[12px] md:text-[16px] text-[#000] font-[500] font-inter">
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

        <section
          className="pt-8 md:pt-12"
          data-aos="fade-up"
          data-aos-duration="1300"
        >
          <div className="container">
            {/* <!-- connect inner  --> */}
            <div
              className="pt-[40px] md:pt-[78px] pb-[58px] px-5 sm:px-[42px] rounded-[12px]  bg-cover"
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

                    <button className="mt-[22px] md:mt-[43px] w-[192px] py-[14px] px-[50.5px] rounded-[30px] bg-themeColor text-[13px] md:text-[20px] text-[#000] font-[500] font-inter  hover:bg-themeColor2 transition-all">
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

export default PrivateSale;
