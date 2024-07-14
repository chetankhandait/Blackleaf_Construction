import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import data from "../Data/data";
import InteriorDesign from "./InteriorDesign";
import PaymentTerm from "./PaymentTerm";
import MapSection from "./MapSection";
import PaymentPlan from "./PaymentPlan";
import RegisterYourInterest from "./ContactUsSection";
import Amenities from "./Ammentites";
import SubscribeNewsletter from "./Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./NavBar";
import Newsletter from "./Newsletter";

const SepratePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Easing function
      delay: 100,
    });
  }, []);
  const phoneNumber1 = "📞 +91 98156 50378";
  const phoneNumber2 = "📞 +91 98785 70378";
  const { Id } = useParams();
  console.log(data);
  console.log(Id);
  const Property = data.find((find) => find.name === Id);
  const { ...key } = Property;
  console.log(key);
  // const Hotel = data.find((find) => find.id === Id);
  // console.log(Hotel);
  const [compressing, setCompressing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCompressing(true);
    }, 1000); // Delay for 2 seconds before starting the compression animation

    return () => clearTimeout(timer);
  }, []);
  console.log(key.features[0].image);
  return (
    <>
      <div className="overflow-hidden">
        <div className="py-3">
          <div className="flex uppercase font-sans font-semibold justify-around text-black w-full static top-3  z-40 sm:top-6  ">
            <div className="flex justify-center items-center gap-2 cursor-pointer">
              <img src="/blackleaf.png" className="w-12" />
              <h2 className="text-[13px] hidden sm:block ">
                Blackleaf <br /> Properties
              </h2>
            </div>
            <div className="flex flex-col  text-[13px] gap-2  text-right  sm:flex-row sm:gap-6">
              <h3>
                <a href={`tel:${phoneNumber1}`}>{phoneNumber1}</a>
              </h3>
              <h3>
                <a href={`tel:${phoneNumber2}`} className="email-link">
                  {phoneNumber2}
                </a>
              </h3>
            </div>
            <a href="#contact"   >

            <button className="uppercase btn p-2 rounded-md text-sm">Contact Us</button>
            </a>
          </div>
        </div>
        <motion.div
          className="  mx-auto  w-full h-[600px]  flex items-center justify-center  bg-center  bg-no-repeat "
          style={{
            backgroundImage: `url(${Property.mainImage})`,

            width: compressing ? "85%" : "100%",

            marginTop: compressing ? "40px" : "0px",
            marginBottom: compressing ? "20px" : "0px",
            transition: "width  0.7s",
          }}
        >
          <div className="flex  items-center justify-center">
            <h2 className=" text-3xl text-center  text-white sm:text-7xl hover:underline">
              {Property.name}
            </h2>
          </div>
        </motion.div>
        <div>
          <section className=" flex flex-col items-center gap-2 mx-auto lg:my-36 sm:w-[100%] font-sans">
            <div className="w-[90%]">
              <div
                className="flex flex-col text-center md:flex-row mx-auto my-6 mb-12 gap-5 items-center justify-center md:text-left lg:w-[70%]   "
                data-aos="fade-up"
              >
                <p className="text-wrap text-4xl leading-normal uppercase font-serif">
                  {key.mainFeature.overview}
                </p>

                <p className="text-wrap text-[16px] font-sans leading-9 ">
                  {key.mainFeature.text}
                </p>
              </div>
              <div className="my-10" data-aos="zoom-out">
                <img
                  src={key.mainFeature.image}
                  alt=""
                  className="block mx-auto w-[750px] h-[300px] md:h-[450px]"
                />
              </div>
              <div className="mx-auto lg:w-[80%]">
                <p className="font-sans text-center font-semibold tracking-widest my-10 text-4xl">
                  FEATURES
                </p>
                <div className="text-wrap text-[14px] font-sans sm:leading-6 md:leading-7 lg:leading-9">
                  <div className="flex flex-col gap-8 md:flex-row items-start justify-center pb-24">
                    <div data-aos="fade-right" className="w-full lg:w-1/2 p-2 ">
                      <img
                        src={key.features[0].image}
                        alt="Dubai view"
                        className="sm:w-[365px] sm:h-[215px] lg:w-[445px] lg:h-[275px] shadow-md"
                      />
                    </div>
                    <div className="w-full lg:w-1/3  p-2" data-aos="fade-left">
                      <p className="">{key.features[0].text}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 md:flex-row items-start justify-center pb-24">
                    <div
                      className="w-full lg:w-1/3 p-2  order-2 md:order-1"
                      data-aos="fade-right"
                    >
                      <p className="">{key.features[1].text}</p>
                    </div>
                    <div
                      className="w-full lg:w-1/2 p-2 order-1 md:order-2"
                      data-aos="fade-left"
                    >
                      <img
                        src={key.features[1].image}
                        alt="Dubai view"
                        className="sm:w-[320px] sm:h-[200px] lg:w-[445px] lg:h-[275px] shadow-md"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 md:flex-row items-start justify-center pb-24 ">
                    <div className="w-full lg:w-1/2 p-2" data-aos="fade-right">
                      <img
                        src={key.features[2].image}
                        alt="Dubai view"
                        className="sm:w-[320px] sm:h-[200px] lg:w-[445px] lg:h-[275px] shadow-md"
                      />
                    </div>
                    <div className="w-full lg:w-1/3 p-2 " data-aos="fade-left">
                      <p className="">{key.features[2].text}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 md:flex-row items-start justify-center pb-24 ">
                    <div
                      className="w-full lg:w-1/3 p-2  order-2 md:order-1"
                      data-aos="fade-right"
                    >
                      <p className="">{key.features[3].text}</p>
                    </div>
                    <div
                      className="w-full lg:w-1/2 p-2 order-1 md:order-2"
                      data-aos="fade-left"
                    >
                      <img
                        src={key.features[3].image}
                        alt="Dubai view"
                        className="sm:w-[320px] sm:h-[200px] lg:w-[445px] lg:h-[275px] shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Amenities {...key} />
              <InteriorDesign {...key} />
              {/* <PaymentTerm {...key}  /> */}
              <PaymentPlan paymentPlan={key.paymentPlan} />
              <MapSection {...key} />
            </div>
          </section>

          <div id="contact" className="w-full  ">

            <RegisterYourInterest />

            <Newsletter />
          </div>
        </div>
      </div>
    </>
  );
};

export default SepratePage;
