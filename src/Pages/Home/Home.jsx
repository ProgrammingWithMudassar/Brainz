import React, { useRef } from "react";

import ShapeLeft from "../../assets/img/bg/shape_left.png";
import ShapeRight from "../../assets/img/bg/shape_right.png";
import YellowBigStar from "../../assets/img/icons/yellow_big_star.svg";
import YellowMediumStar from "../../assets/img/icons/yellow_medium_star.svg";
import WhiteSmallStar from "../../assets/img/icons/whiite_small_star.svg";
import ThumImage from "../../assets/img/thumbs/we_are_thum.png";
import PowerArrow from "../../assets/img/icons/power_arrow.svg";
import GreenStarBig from "../../assets/img/icons/green_star_big.svg";
import GreenStarSmall from "../../assets/img/icons/green_star_small.svg";
import LinkButtonRightArrow from "../../assets/img/icons/link_btn_right_arrow.svg";
import GetStartThum from "../../assets/img/thumbs/get_start_thum.png";
import WhyThum from "../../assets/img/thumbs/why-thum.png";
import RoadLeftShape from "../../assets/img/bg/road_left_shape.png";
import RoadRightShape from "../../assets/img/bg/road_right_shape.png";
// import GetStartedBg from "../../assets/img/bg/Get Started_bg.png";
import SingleRoadMapBg from "../../assets/img/bg/single_Road_ map_bg.png";
import RoadMapBgRight from "../../assets/img/bg/road_map_bg_right.png";
import LineLeft from "../../assets/img/icons/line_left.svg";
import LineRight from "../../assets/img/icons/line_right.svg";
import SliderArrow from "../../assets/img/icons/Slider arrow.svg";
import WeAreBg from "../../assets/img/bg/we_are_bg.png";
import GetStartedToday from "../../assets/img/bg/Get_Started_bg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Home = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const howtoCarouselRef = useRef(null);
  const howtoHandleNext = () => {
    if (howtoCarouselRef.current) {
      howtoCarouselRef.current.next();
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
  return (
    <>
      {/* <div style={{ position: "relative" }}> */}

      <main class="main overflow-hidden relative z-10">
        <img src={ShapeLeft} class="absolute top-0 left-0 -z-10" alt="" />

        <img src={ShapeRight} class="absolute top-0 right-0 -z-10" alt="" />
        <section class="bg-transparent mt-16 md:mt-28 lg:mt-[150px] pt-28 md:pt-[150px] pb-[50px] md:pb-[200px] relative">
          <div className="hidden md:block">
            <img
              className="absolute top-[10%] left-[90%]"
              data-aos="fade-left"
              data-aos-duration="1300"
              src={YellowBigStar}
              alt=""
            />
            <img
              className="absolute top-[10%] left-[60%]"
              data-aos="fade-in"
              data-aos-duration="1300"
              src={YellowMediumStar}
              alt=""
            />
            <img
              className="absolute top-[15%] left-[15%]"
              data-aos="fade-right"
              data-aos-duration="1300"
              src={YellowMediumStar}
              alt=""
            />

            <img
              className="absolute top-[60%] left-[5%]"
              data-aos="fade-right"
              data-aos-duration="1300"
              src={WhiteSmallStar}
              alt=""
            />
            <img
              className="absolute bottom-[10%] left-[50%]"
              data-aos="fade-up"
              data-aos-duration="1300"
              src={YellowMediumStar}
              alt=""
            />
          </div>
          <div className="block md:hidden">
            <img
              className="absolute -z-10 top-7 right-10"
              src={YellowBigStar}
              alt=""
            />
            <img
              className="absolute -z-10 top-20 left-0"
              src={YellowMediumStar}
              alt=""
            />
          </div>
          <div className="container">
            <div
              className="hero_content z-20"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="hero-text max-w-[786px] mx-auto">
                <h1 className="text-[32px] md:text-[48px] text-[#fff] text-center font-[600] font-clash tracking-[0.96px]">
                  <span className="text-themeColor">The first meme coin</span>{" "}
                  to harness the power of Liquidity Staking Derivative Protocol
                </h1>
                <p className="text-[20px] md:text-[26px] py-[35px] text-[#ADAEB9] text-center font-[400] font-inter tracking-[0.26px]">
                  Accelerate Your Financial Journey: Staking Success Awaits with
                  Brainz Finance!
                </p>
              </div>
              {/* --hero-btns--  */}
              <div className="flex gap-10 justify-center">
                {/* --solid-btn--  */}
                <Link
                  to="/staking"
                  className="text-[15px] md:text-[20px] text-[#000] leading-none bg-themeColor py-[12px] px-[24px] md:py-[15px] md:px-[35px] hover:text-themeColor font-inter font-[500] inline-block border-[1px] border-themeColor rounded-[30px] hover:border-[1px] hover:border-themeColor hover:rounded-[30px] transition hover:bg-transparent"
                >
                  Launch dApp
                </Link>
                {/* --link-btn--  */}
                <a
                  href="https://brainzfinance.gitbook.io/whitepaper/"
                  className="flex gap-3 items-center text-[15px] md:text-[20px] leading-none py-[12px] md:py-[15px] text-themeColor font-inter font-[500] transition hover:text-white"
                >
                  Learn more
                  <img src={LinkButtonRightArrow} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-20 md:py-95  h-full w-full bg-cover"
          style={{
            backgroundImage: `url(${WeAreBg})`,
          }}
        >
          <div className="container">
            <div className="grid grid-cols-12 gap-0 lg:gap-16">
              <div
                className="mb-7 lg:mb-0 col-span-12 lg:col-span-5"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                <img className="mx-auto lg:mx-0" src={ThumImage} alt="" />
              </div>
              <div className="col-span-12 lg:col-span-7">
                <h2 className="text-left mb-[22px] text-[32px] md:text-[45px] text-[#fff] font-[600] font-clash">
                  Who we are ?
                </h2>

                <div className="">
                  <p className="text-left mb-4 text-[20px] md:text-[24px] text-[#ADAEB9] font-[400] font-satoshi tracking-[0.24px] leading-[34px]">
                    The first meme coin to harness the power of Liquidity
                    Staking Derivative Protocol.
                  </p>
                  <p className="text-left text-[20px] md:text-[24px] text-[#ADAEB9] font-[400] font-satoshi tracking-[0.24px] leading-[34px]">
                    Our project merges the playful nature of meme coins with the
                    intelligent strategies of smart investors, creating an
                    innovative and rewarding experience. In this white paper, we
                    will delve into the unique features of Brainz.Finance,
                    including our lucrative rewards system, dynamic yield model,
                    and automatic repeat feature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-10 md:mb-0 pt-[80px] md:pt-[90px]">
          <div className="container">
            <div
              className="flex flex-wrap gap-0 sm:gap-7 lg:gap-[40px] xl:gap-[60px] items-center"
              data-aos="fade-up"
              data-aos-duration="1300"
            >
              <div className="order-2 lg:order-1 w-full lg:w-[55%]">
                <div className="relative pt-5 pb-14">
                  <div className="hidden md:block">
                    <img
                      className="absolute right-[-10px] top-[40%]"
                      src={YellowBigStar}
                      alt=""
                    />

                    <img
                      className="absolute left-[10%] top-[5%]"
                      src={YellowMediumStar}
                      alt=""
                    />
                    <img
                      className="absolute left-[40%] top-0"
                      src={YellowMediumStar}
                      alt=""
                    />
                    <img
                      className="absolute left-[35%] bottom-[5%]"
                      src={YellowMediumStar}
                      alt=""
                    />
                  </div>
                  <h2 className="text-center md:text-left text-[32px] md:text-[35px] leading-[49px] md:leading-[60px] text-themeColor font-[600] font-clash">
                    Unleash the Power of Your Investments with Brainz Finance -
                    Transforming Ordinary into Extraordinary!
                  </h2>
                </div>

                <div className="w-full lg:max-w-[708px]">
                  <p className="mb-5 text-[21px] text-[#ADAEB9] font-[400] font-satoshi leading-[30px]">
                    Our rewards system is designed to make your heart race with
                    excitement. By staking your ETH or stETH,
                  </p>
                  <p className="text-center md:text-left mb-5 text-[21px] text-[#ADAEB9] font-[400] font-satoshi leading-[30px]">
                    Our rewards system is designed to make your heart race with
                    excitement. By staking your ETH or stETH, you stand a chance
                    to earn a jaw-dropping APY ranging from 0% to a
                    mind-boggling 2500%! Imagine the thrill of hitting the
                    jackpot and seeing your assets multiply exponentially. But
                    wait, there's more!
                  </p>

                  <p className="text-center md:text-left mb-5 text-[21px] text-[#ADAEB9] font-[400] font-satoshi leading-[30px]">
                    We guarantee a solid 20% APY in $Brainz rewards, ensuring a
                    steady stream of earnings.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2 w-full lg:w-[40%] mb-6 lg:mb-0">
                <div className="mx-auto lg:mx-0 relative flex justify-between h-[342px] w-[310px] sm:w-[480px]">
                  <div className="shrink-0 flex items-end">
                    <div className="">
                      <h6 className="text-[20px] sm:text-[26.933px] text-[#AB0202] font-[700] font-clash tracking-[0.26px]">
                        0%
                      </h6>
                      <p className="text-[16px] sm:text-[21.546px] text-white font-[400] font-clash tracking-[0.215px]">
                        jaw-dropping <br />
                        APY ranging from
                      </p>
                    </div>
                  </div>
                  <img
                    className="absolute top-[30%] left-[12%] sm:left-[27%]"
                    data-aos="zoom-in"
                    data-aos-duration="1300"
                    src={PowerArrow}
                    alt=""
                  />
                  <div className="shrink-0 relative">
                    <img
                      className="absolute top-[-4%] right-0"
                      src={GreenStarBig}
                      alt=""
                    />
                    <img
                      className="absolute top-[-4%] left-[2%]"
                      src={GreenStarSmall}
                      alt=""
                    />

                    <h6 className="text-[20px] sm:text-[26.933px] text-[#90FF9C] font-[700] font-clash tracking-[0.26px]">
                      2500%!
                    </h6>
                    <p className="text-[16px] sm:text-[21.546px] text-white font-[400] font-clash tracking-[0.215px]">
                      mind-boggling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="right_fixd_carousel py-[47px] md:py-[80px] ">
          <div className="relative">
            <div className="container ">
              <h2 className="mb-10 md:mb-14 text-[23px] md:text-[45px] text-[#fff] font-[600] font-clash">
                How to stake
              </h2>
            </div>

            <div className="container ">
              <OwlCarousel
                ref={howtoCarouselRef}
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
                //   transform: `translate3d(-514px, 0px, 0px)`,
                //   transition: `all 0s ease 0s`,
                // }}
              >
                <div className="min-h-[416px] p-10 border-[1px] border-themeColor rounded-[16px] bg-[#141735]">
                  <div className="flex-col-reverse gap-8 md:gap-0 md:flex-row flex pb-8 sm:pb-11 md:items-center md:justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                    <h3 className="text-[20px] md:text-[26px] text-[#fff] font-[700] font-clash">
                      Connect Your Ethereum Wallet
                    </h3>
                    <span className="text-[20px] md:text-[27px] flex justify-center items-center text-[#fff] font-[700] bg-themeColor font-clash w-[35px] md:w-[50px] h-[35px] md:h-[50px] rounded-full flex-shrink-0">
                      1
                    </span>
                  </div>
                  {/* <!-- --card-body--  --> */}
                  <p className="mt-[32px] md:mt-[44px] text-[17px] md:text-[23px] text-[#fff] font-[400] font-inter leading-[32px]">
                    Strap on your investing boots and connect your Ethereum
                    wallet to the Brainz Finance platform. It's time to level up
                    your financial game with a touch of wit and wisdom.
                  </p>
                </div>
                {/* <!-- --single_items--  --> */}
                <div className="min-h-[416px] p-10 border-[1px] border-themeColor rounded-[16px] bg-[#141735]">
                  {/* <!-- --card-heading- --> */}
                  <div className="flex-col-reverse gap-8 md:gap-0 md:flex-row flex pb-8 sm:pb-11 md:items-center md:justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                    <h3 className="text-[20px] md:text-[26px] text-[#fff] font-[700] font-clash">
                      Deposit 0.1ETH/stETH and Above
                    </h3>
                    <span className="text-[20px] md:text-[27px] flex justify-center items-center text-[#fff] font-[700] bg-themeColor font-clash w-[35px] md:w-[50px] h-[35px] md:h-[50px] rounded-full flex-shrink-0">
                      2
                    </span>
                  </div>
                  {/* <!-- --card-body--  --> */}
                  <p className="mt-[32px] md:mt-[44px] text-[17px] md:text-[23px] text-[#fff] font-[400] font-inter leading-[32px]">
                    Make a bold move and stake a minimum of 0.1ETH/stETH and
                    above. We're talking about serious investments here, not
                    mere pocket change. Prepare to set the stage for some
                    exciting opportunities.
                  </p>
                </div>
                {/* <!-- --single_items--  --> */}
                <div className="min-h-[416px] p-10 border-[1px] border-themeColor rounded-[16px] bg-[#141735]">
                  {/* <!-- --card-heading- --> */}
                  <div className="flex-col-reverse gap-8 md:gap-0 md:flex-row flex pb-8 sm:pb-11 md:items-center md:justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                    <h3 className="text-[20px] md:text-[26px] text-[#fff] font-[700] font-clash">
                      Connect Your Ethereum Wallet
                    </h3>
                    <span className="text-[20px] md:text-[27px] flex justify-center items-center text-[#fff] font-[700] bg-themeColor font-clash w-[35px] md:w-[50px] h-[35px] md:h-[50px] rounded-full flex-shrink-0">
                      3
                    </span>
                  </div>
                  {/* <!-- --card-body--  --> */}
                  <p className="mt-[32px] md:mt-[44px] text-[17px] md:text-[23px] text-[#fff] font-[400] font-inter leading-[32px]">
                    Strap on your investing boots and connect your Ethereum
                    wallet to the Brainz Finance platform. It's time to level up
                    your financial game with a touch of wit and wisdom.
                  </p>
                </div>
                {/* <!-- --single_items--  --> */}
                <div className="min-h-[416px] p-10 border-[1px] border-themeColor rounded-[16px] bg-[#141735]">
                  {/* <!-- --card-heading- --> */}
                  <div className="flex-col-reverse gap-8 md:gap-0 md:flex-row flex pb-8 sm:pb-11 md:items-center md:justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                    <h3 className="text-[20px] md:text-[26px] text-[#fff] font-[700] font-clash">
                      Deposit 0.1ETH/stETH and Above
                    </h3>
                    <span className="text-[20px] md:text-[27px] flex justify-center items-center text-[#fff] font-[700] bg-themeColor font-clash w-[35px] md:w-[50px] h-[35px] md:h-[50px] rounded-full flex-shrink-0">
                      4
                    </span>
                  </div>
                  {/* <!-- --card-body--  --> */}
                  <p className="mt-[32px] md:mt-[44px] text-[17px] md:text-[23px] text-[#fff] font-[400] font-inter leading-[32px]">
                    Make a bold move and stake a minimum of 0.1ETH/stETH and
                    above. We're talking about serious investments here, not
                    mere pocket change. Prepare to set the stage for some
                    exciting opportunities.
                  </p>
                </div>
                {/* <!-- --single_items--  --> */}
                <div className="min-h-[416px] p-10 border-[1px] border-themeColor rounded-[16px] bg-[#141735]">
                  {/* <!-- --card-heading- --> */}
                  <div className="flex-col-reverse gap-8 md:gap-0 md:flex-row flex pb-8 sm:pb-11 md:items-center md:justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                    <h3 className="text-[20px] md:text-[26px] text-[#fff] font-[700] font-clash">
                      Randomly Selecting Winners
                    </h3>
                    <span className="text-[20px] md:text-[27px] flex justify-center items-center text-[#fff] font-[700] bg-themeColor font-clash w-[35px] md:w-[50px] h-[35px] md:h-[50px] rounded-full flex-shrink-0">
                      5
                    </span>
                  </div>
                  {/* <!-- --card-body--  --> */}
                  <p className="mt-[32px] md:mt-[44px] text-[17px] md:text-[23px] text-[#fff] font-[400] font-inter leading-[32px]">
                    At Brainz Finance, our commitment to fairness and
                    transparency is unmatched. We leave the selection of winners
                    entirely to chance - an automatic and secure random process.
                    Get ready for the thrill of anticipation and let the
                    surprises unfold!
                  </p>
                </div>
                {/* <!-- --single_items--  --> */}
                <div className="min-h-[416px] p-10 border-[1px] border-themeColor rounded-[16px] bg-[#141735]">
                  {/* <!-- --card-heading- --> */}
                  <div className="flex-col-reverse gap-8 md:gap-0 md:flex-row flex pb-8 sm:pb-11 md:items-center md:justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                    <h3 className="text-[20px] md:text-[26px] text-[#fff] font-[700] font-clash">
                      Reap Rewards and Keep Your Investment Intact
                    </h3>
                    <span className="text-[20px] md:text-[27px] flex justify-center items-center text-[#fff] font-[700] bg-themeColor font-clash w-[35px] md:w-[50px] h-[35px] md:h-[50px] rounded-full flex-shrink-0">
                      6
                    </span>
                  </div>
                  {/* <!-- --card-body--  --> */}
                  <p className="mt-[32px] md:mt-[44px] text-[17px] md:text-[23px] text-[#fff] font-[400] font-inter leading-[32px]">
                    Whether you're the lucky winner or not, rest assured that
                    you'll continue earning those sweet $Brainz rewards. We're
                    all about smart investing, where you can grow your wealth
                    without parting ways with your initial staked ETH/stETH
                    tokens.
                  </p>
                </div>
              </OwlCarousel>
              <div className="flex justify-center mt-4 absolute top-[0px] right-[170px] max-[1000px]:hidden">
                <button
                  className="focus:outline-none"
                  onClick={howtoHandleNext}
                >
                  <img src={SliderArrow} alt="Next" className="" />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <!--======== How to stake  section End =========--> */}

        {/* <!--========   Possibilities  section Start =========--> */}
        <section className="py-[47px] md:py-[100px]">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            <h2 className="max-w-[1204px] mx-auto text-center text-[32px] md:text-[40px] leading-[60px] text-white font-[600] font-clash">
              Imagine The Possibilities: Picture 1ETH/stETH soaring with a
              staggering 2500% increase!
            </h2>

            <p className="py-[43px] max-w-[1044px] mx-auto text-center text-[20px] md:text-[24px] text-[#ADAEB9] font-[500] font-inter leading-[32px]">
              Don't miss out on this extraordinary opportunity to stake and earn
              with Brainz Finance. Connect your wallet, make your deposit, and
              let your investments skyrocket. Get ready to experience a new
              realm of financial possibilities!
            </p>

            <div className="hidden md:flex justify-center">
              {/* <!-- --solid-btn--  --> */}
              <Link
                to="staking"
                className="text-[20px] text-[#000] bg-themeColor py-[15px] px-[35px] hover:text-themeColor font-inter font-[500] inline-block border-[1px] border-themeColor rounded-[30px] hover:border-[1px] hover:border-themeColor hover:rounded-[30px] transition hover:bg-transparent"
              >
                Launch dApp
              </Link>
            </div>
            <div className="block md:hidden">
              <div className="flex gap-10 justify-center">
                {/* <!-- --solid-btn--  --> */}
                <Link
                  to="/staking"
                  className="text-[15px] md:text-[20px] text-[#000] leading-none bg-themeColor py-[12px] px-[24px] md:py-[15px] md:px-[35px] hover:text-themeColor font-inter font-[500] inline-block border-[1px] border-themeColor rounded-[30px] hover:border-[1px] hover:border-themeColor hover:rounded-[30px] transition hover:bg-transparent"
                >
                  Launch dApp
                </Link>
                {/* <!-- --link-btn--  --> */}
                <a
                  href="https://brainzfinance.gitbook.io/whitepaper/"
                  className="flex gap-3 items-center text-[15px] md:text-[20px] leading-none py-[12px] md:py-[15px] text-themeColor font-inter font-[500] transition hover:text-white"
                >
                  Learn more
                  <img src={LinkButtonRightArrow} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!--========   Possibilities  section End =========--> */}

        {/* <!--========  Road map section Start =========--> */}
        <section className="relative z-10 py-[50px] md:py-[100px] bg-[#121533] bg-h-full bg-w-full bg-cover">
          {/* <!-- --shape--  --> */}
          <img
            className="absolute bottom-0 left-0 -z-10"
            src={RoadLeftShape}
            alt=""
          />
          <img
            className="absolute top-0 right-0 -z-10"
            src={RoadRightShape}
            alt=""
          />
          <div className="container">
            <h2 className="mb-[60px] text-[20px] sm:text-[32px] text-center text-[#fff] font-[600] font-clash">
              Road map
            </h2>

            <div className="max-w-[1200px] mx-auto">
              {/* <!-- --timeline--  --> */}
              <div className="relative after:absolute after:top-[130px] sm:after:top-[150px] after:left-8 lg:after:left-1/2 after:-z-0 after:w-1 after:h-[75%] after:bg-[#15BFFD] p-0 lg:p-4">
                {/* <!-- --single_timeline--left  --> */}
                <div className="pl-[15%] pr-[5%] py-3 lg:pl-16 w-full lg:w-1/2 relative">
                  {/* <!-- --timeline-number--for largre screen  --> */}
                  <div className="hidden absolute w-6 h-6 lg:flex justify-center items-center rounded-full top-1/2 translate-y-[-50%] lg:-right-[14px] bg-[#15BFFD] z-10"></div>
                  {/* <!-- --timeline-number--for small screen  --> */}
                  <div className="lg:hidden absolute w-6 h-6 flex justify-center items-center rounded-full top-1/2 translate-y-[-50%] left-[21px] lg:-left-6 bg-[#15BFFD] z-10"></div>
                  {/* <!-- --single_timeline-content--  --> */}
                  <div
                    className="relative p-3 max-w-[510px]"
                    data-aos="fade-right"
                    data-aos-duration="1300"
                  >
                    <img
                      src={SingleRoadMapBg}
                      alt=""
                      className="hidden md:block absolute right-0 top-0 h-full"
                    />

                    <img
                      src={RoadMapBgRight}
                      alt=""
                      className="block md:hidden absolute left-0 top-0 h-full"
                    />

                    <div className="p-6 bg-[rgba(255,255,255,0.05)] border-[1px] border-themeColor rounded-[8px]">
                      <h4 className="mb-3 text-[12px] sm:text-[20px] leading-[30px] text-white font-[500] font-clash">
                        PHASE 1
                      </h4>
                      <li className="list-none mb-2 text-[12px] sm:text-[20px] text-white font-[500] font-clash">
                        1. Website launch
                      </li>
                      <li className="list-none mb-2 text-[12px] sm:text-[20px] text-white font-[500] font-clash">
                        2. dApp Test
                      </li>
                      <li className="list-none mb-2 text-[12px] sm:text-[20px] text-white font-[500] font-clash">
                        3. dApp launch
                      </li>
                      <li className="list-none mb-2 text-[12px] sm:text-[20px] text-white font-[500] font-clash">
                        4. Private round
                      </li>
                    </div>

                    {/* <!-- --timeline-arrow--large screen  --> */}

                    <span className="hidden lg:block absolute top-1/2 translate-y-[-50%] right-[-13.5%]">
                      <img src={LineLeft} alt="" />
                    </span>
                    {/* <!-- --timeline-arrow--small screen  --> */}
                    <span className="block lg:hidden absolute top-1/2 translate-y-[-50%] left-[-14%]">
                      <img src={LineRight} alt="" />
                    </span>
                  </div>
                </div>

                {/* <!-- --single_timeline--right  --> */}
                <div className="left-0 lg:left-1/2 pl-[15%] pr-[5%] py-3 lg:pl-16 w-full lg:w-1/2 relative">
                  {/* <!-- --timeline-number--  --> */}
                  <div className="absolute w-6 h-6 flex justify-center items-center rounded-full left-[21px] top-1/2 lg:-left-[10px] translate-y-[-50%] bg-[#15BFFD] z-10"></div>

                  {/* <!-- --single_timeline-content--  -->
              <!-- --single_timeline-content--  --> */}
                  <div
                    className="relative p-3 max-w-[510px]"
                    data-aos="fade-left"
                    data-aos-duration="1300"
                  >
                    <img
                      src={RoadMapBgRight}
                      alt=""
                      className="absolute left-0 top-0 h-full"
                    />

                    <div className="p-6 bg-[rgba(255,255,255,0.05)] border-[1px] border-themeColor rounded-[8px]">
                      <h4 className="mb-3 text-[12px] sm:text-[20px] leading-[30px] text-white font-[500] font-clash">
                        PHASE 2
                      </h4>
                      <li className="list-none mb-2 text-[12px] sm:text-[20px] text-white font-[500] font-clash">
                        1.Presale
                      </li>
                      <li className="list-none mb-2 text-[12px] sm:text-[20px] text-white font-[500] font-clash">
                        2. Launch
                      </li>
                      <li className="list-none mb-2 text-[12px] sm:text-[20px] text-white font-[500] font-clash">
                        3. Airdrop
                      </li>
                    </div>

                    {/* <!-- --timeline-arrow--  --> */}

                    <span className="absolute top-1/2 translate-y-[-50%] left-[-14%]">
                      <img src={LineRight} alt="" />
                    </span>
                  </div>
                </div>

                {/* <!-- --single_timeline--left  --> */}
                <div className="pl-[15%] pr-[5%] py-3 lg:pl-16 w-full lg:w-1/2 relative">
                  {/* <!-- --timeline-number--for largre screen  --> */}
                  <div className="hidden absolute w-6 h-6 lg:flex justify-center items-center rounded-full top-1/2 translate-y-[-50%] lg:-right-[14px] bg-[#15BFFD] z-10"></div>
                  {/* <!-- --timeline-number--for small screen  --> */}
                  <div className="lg:hidden absolute w-6 h-6 flex justify-center items-center rounded-full top-1/2 translate-y-[-50%] left-[21px] lg:-left-6 bg-[#15BFFD] z-10"></div>
                  {/* <!-- --single_timeline-content--  --> */}
                  <div
                    className="relative p-3 max-w-[510px]"
                    data-aos="fade-right"
                    data-aos-duration="1300"
                  >
                    <img
                      src={SingleRoadMapBg}
                      alt=""
                      className="hidden md:block absolute right-0 top-0 h-full"
                    />

                    <img
                      src={RoadMapBgRight}
                      alt=""
                      className="block md:hidden absolute left-0 top-0 h-full"
                    />

                    <div className="p-6 bg-[rgba(255,255,255,0.05)] border-[1px] border-themeColor rounded-[8px]">
                      <h4 className="mb-3 text-[12px] sm:text-[20px] leading-[30px] text-white font-[500] font-clash">
                        PHASE 3
                      </h4>
                      <li className="list-none mb-2 text-[12px] sm:text-[20px] text-white font-[500] font-clash">
                        1. Coinmarketcap/Coingecko
                      </li>
                      <li className="list-none mb-2 text-[12px] sm:text-[20px] text-white font-[500] font-clash">
                        2. Community Partnerships
                      </li>
                      <li className="list-none mb-2 text-[12px] sm:text-[20px] text-white font-[500] font-clash">
                        3. CEX listings
                      </li>
                    </div>

                    {/* <!-- --timeline-arrow--large screen  --> */}

                    <span className="hidden lg:block absolute top-1/2 translate-y-[-50%] right-[-13.5%]">
                      <img src={LineLeft} alt="" />
                    </span>
                    {/* <!-- --timeline-arrow--small screen  --> */}
                    <span className="block lg:hidden absolute top-1/2 translate-y-[-50%] left-[-14%]">
                      <img src={LineRight} alt="" />
                    </span>
                  </div>
                </div>

                {/* <!-- --single_timeline--right  --> */}
                <div className="left-0 lg:left-1/2 pl-[15%] pr-[5%] py-3 lg:pl-16 w-full lg:w-1/2 relative">
                  {/* <!-- --timeline-number--  --> */}
                  <div className="absolute w-6 h-6 flex justify-center items-center rounded-full left-[21px] top-1/2 lg:-left-[10px] translate-y-[-50%] bg-[#15BFFD] z-10"></div>

                  {/* <!-- --single_timeline-content--  -->
              <!-- --single_timeline-content--  --> */}
                  <div
                    className="relative p-3 max-w-[510px]"
                    data-aos="fade-left"
                    data-aos-duration="1300"
                  >
                    <img
                      src={RoadMapBgRight}
                      alt=""
                      className="absolute left-0 top-0 h-full"
                    />

                    <div className="p-6 bg-[rgba(255,255,255,0.05)] border-[1px] border-themeColor rounded-[8px]">
                      <h4 className="mb-3 text-[12px] sm:text-[20px] leading-[30px] text-white font-[500] font-clash">
                        PHASE 4
                      </h4>
                      <li className="list-none mb-2 text-[12px] sm:text-[20px] text-white font-[500] font-clash">
                        Coming soon ...
                      </li>
                    </div>

                    {/* <!-- --timeline-arrow--  --> */}

                    <span className="absolute top-1/2 translate-y-[-50%] left-[-14%]">
                      <img src={LineRight} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--========  Road map  section Start =========-->

    <!--========  Why Choose section Start =========--> */}
        <section className="relative z-10 py-[50px] md:py-[150px]">
          {/* <!-- --shape--  --> */}
          <img
            className="absolute bottom-0 left-0 -z-10"
            src={RoadLeftShape}
            alt=""
          />
          <img
            className="absolute top-0 right-0 -z-10"
            src={RoadRightShape}
            alt=""
          />
          <div className="container">
            <div className="grid grid-cols-12 lg:gap-[53px]">
              <div
                className="col-span-12 lg:col-span-6"
                data-aos="fade-up"
                data-aos-duration="1300"
              >
                <div className="mb-7 max-w-[616px] lg:mb-[105px]">
                  <h2 className="mb-[24px] text-center sm:text-left text-[32px] sm:text-[45px] text-[#fff] font-[600] font-clash">
                    Why Choose Brainz?
                  </h2>

                  <p className="text-center sm:text-left text-[20px] sm:text-[24px] text-[#FFFFFF] font-[500] font-inter leading-[32px]">
                    the first meme coin to harness the power of Liquidity
                    Staking Derivative Protocol. Our project merges the playful
                    nature of meme coins with the intelligent strategies of
                    smart investors.
                  </p>
                </div>
                <div className="block lg:hidden my-16">
                  <img src={WhyThum} alt="" />
                </div>

                {/* <!-- --single_items--  --> */}
                <div className="min-h-[322px] max-w-[616px] p-11 border-[1px] border-themeColor bg-[#141735] rounded-[16px]">
                  {/* <!-- --card-heading- --> */}
                  <div className="flex pb-11 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                    <h3 className="text-[19px] sm:text-[26px] mx-auto sm:mx-0 text-[#fff] font-[700] font-clash">
                      High Earning Potential
                    </h3>
                  </div>
                  {/* <!-- --card-body--  --> */}
                  <p className="mt-[44px] text-[17px] sm:text-[21px] text-center sm:text-left text-[#fff] font-[500] font-satoshi leading-[32px]">
                    Our staking mechanism ensures competitive APY returns,
                    giving you the opportunity to maximize your earnings over
                    time.
                  </p>
                </div>
                {/* <!-- --single_items--  --> */}
                <div className="min-h-[322px] max-w-[616px] mt-7 p-11 border-[1px] border-themeColor bg-[#141735] rounded-[16px]">
                  {/* <!-- --card-heading- --> */}
                  <div className="flex pb-11 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                    <h3 className="text-[19px] sm:text-[26px] mx-auto sm:mx-0 text-[#fff] font-[700] font-clash">
                      Fair and Transparent
                    </h3>
                  </div>
                  {/* <!-- --card-body--  --> */}
                  <p className="mt-[44px] text-[17px] sm:text-[21px] text-center sm:text-left text-[#fff] font-[500] font-satoshi leading-[32px]">
                    Our staking mechanism ensures competitive APY returns,
                    giving you the opportunity to maximize your earnings over
                    time.
                  </p>
                </div>
              </div>
              <div
                className="col-span-12 lg:col-span-6"
                data-aos="fade-up"
                data-aos-duration="1300"
              >
                <div className="hidden lg:block">
                  <img className="" src={WhyThum} alt="" />
                </div>
                {/* <!-- --single_items--  --> */}
                <div className="min-h-[322px] max-w-[616px] mt-7 p-11 border-[1px] border-themeColor bg-[#141735] rounded-[16px]">
                  {/* <!-- --card-heading- --> */}
                  <div className="flex pb-11 items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.20)]">
                    <h3 className="text-[19px] sm:text-[26px] mx-auto sm:mx-0 text-[#fff] font-[700] font-clash">
                      No risk to your Staked ETH
                    </h3>
                  </div>
                  {/* <!-- --card-body--  --> */}
                  <p className="mt-[44px] text-[17px] sm:text-[21px] text-center sm:text-left text-[#fff] font-[500] font-satoshi leading-[32px]">
                    Our staking mechanism ensures competitive APY returns,
                    giving you the opportunity to maximize your earnings over
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--========  Why Choose section End =========-->

    <!--========  Get Started  section Start =========--> */}
        <section className="py-[50px] md:py-[110px]">
          <div className="container">
            <div
              data-aos="fade-up"
              data-aos-duration="1300"
              className="flex flex-wrap gap-[31px] py-[50px] sm:py-[100px] px-[22px] sm:px-[75px] rounded-[16px] h-full lg:h-[528px] max-w-[1233px] bg-cover mx-auto"
              style={{
                backgroundColor: "yellow",
                backgroundImage: `url(${GetStartedToday})`,
              }}
            >
              <div className="w-[100%] lg:w-[55%] order-2 lg:order-1">
                <h2 className="text-center sm:text-left text-[32px] sm:text-[35px] text-[#fff] font-[600] font-clash">
                  Get Started Today!
                </h2>

                <p className="my-[43px] text-center sm:text-left text-[20px] sm:text-[24px] text-[#FFFFFF] font-[500] font-inter leading-[32px]">
                  the first meme coin to harness the power of Liquidity Staking
                  Derivative Protocol. Our project merges the playful nature of
                  meme coins with the intelligent strategies of smart investors.
                </p>

                <div className="flex gap-7 sm:gap-10 justify-center sm:justify-start">
                  <a
                    href="staking.html"
                    className="text-[15px] md:text-[20px] text-[#000] leading-none bg-themeColor py-[12px] px-[15px] sm:px-[24px] md:py-[15px] md:px-[35px] hover:text-themeColor font-inter font-[500] inline-block border-[1px] border-themeColor rounded-[30px] hover:border-[1px] hover:border-themeColor hover:rounded-[30px] transition hover:bg-transparent"
                  >
                    Launch dApp
                  </a>

                  <a
                    href="https://brainzfinance.gitbook.io/whitepaper/"
                    className="flex gap-2 sm:gap-3 items-center text-[15px] md:text-[20px] leading-none py-[12px] md:py-[15px] text-themeColor font-inter font-[500] transition hover:text-white"
                  >
                    Learn more
                    <img src={LinkButtonRightArrow} alt="" />
                  </a>
                </div>
              </div>
              <div className="w-[210px] mx-auto opacity-70 md:opacity-100 lg:w-[39%] mb-5 lg:mb-0 order-1 lg:order-2">
                <img className="mx-auto" src={GetStartThum} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!--========  Get Started  section End =========--> */}
      </main>
      {/* </div> */}
    </>
  );
};

export default Home;
