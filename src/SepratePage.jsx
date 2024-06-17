import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import data from "../Data/data";
import InteriorDesign from "./InteriorDesign";
import PaymentTerm from "./PaymentTerm";
import MapSection from "./MapSection";
import PaymentPlan from "./PaymentPlan";
import RegisterYourInterest from "./ContactUsSection";
import Amenities from "./Ammentites";
import SubscribeNewsletter from "./Newsletter";
 
const SepratePage = () => {
  const { Id } = useParams();
  console.log(data);
  console.log(Id);
  const Property = data.find((find) => find.id === Id);
  const { ...key } = Property;
  console.log(key.mainFeature.image);
  // const Hotel = data.find((find) => find.id === Id);
  // console.log(Hotel);
  const [compressing, setCompressing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCompressing(true);
    }, 1000); // Delay for 2 seconds before starting the compression animation

    return () => clearTimeout(timer);
  }, []);
console.log(key.features[0].image)
  return (
    <>
      <motion.div
        className="bg-[url('https://richlanddubai.com/wp-content/uploads/2017/07/cover-2.jpg')]  mx-auto  w-full h-screen flex items-center justify-center  bg-center  bg-no-repeat "
        style={{
          width: compressing ? "90%" : "100%",

          marginTop: compressing ? "10px" : "0px",
          transition: "width  1s",
        }}
      >
        <div className="flex  items-center justify-center">
          <h2 className=" text-center text-7xl text-white hover:underline">
            {Property.name}
          </h2>
        </div>
      </motion.div>
      <div>
        <section className=" flex flex-col items-center gap-2 mx-auto my-36 sm:w-[100%] font-sans">
          <div className="w-[90%]">
            <div className="flex flex-col items-center justify-center sm:flex-row   ">
              <p className="text-wrap text-4xl leading-normal text-left">
                {key.mainFeature.overview}
              </p>

              <p className="text-wrap text-[14px] font-sans leading-9 ">
                {key.mainFeature.text}
              </p>
            </div>
            <div className="my-10">
           
              <img
                src={key.mainFeature.image}
                alt=""
                className="block mx-auto  transition ease-out duration-500 transform  "
              />
            </div>
            <div>
              <p className="font-sans text-center font-semibold tracking-widest my-10 text-4xl">
                FEATURES
              </p>
              <div className="text-wrap text-[14px] font-sans sm:leading-6 md:leading-7 lg:leading-9">
                <div className="flex flex-col gap-16 md:flex-row items-start justify-center pb-24">
                  <div className="w-full lg:w-1/2 p-2 ">
                    <img
                      src={key.features[0].image}
                      alt="Dubai view"
                      className="w-full h-auto shadow-md"
                    />
                  </div>
                  <div className="w-full lg:w-1/3 p-2">
                    <p className="">{key.features[0].text}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-16 md:flex-row items-start justify-center pb-24">
                  <div className="w-full lg:w-1/3 p-2 order-2 md:order-1">
                    <p className="">{key.features[1].text}</p>
                  </div>
                  <div className="w-full lg:w-1/2 p-2 order-1 md:order-2">
                    <img
                      src={key.features[1].image}
                      alt="Dubai view"
                      className="w-full h-auto shadow-md"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-16 md:flex-row items-start justify-center pb-24 ">
                  <div className="w-full lg:w-1/2 p-2">
                    <img
                      src={key.features[2].image}
                      alt="Dubai view"
                      className="w-full h-auto shadow-md"
                    />
                  </div>
                  <div className="w-full lg:w-1/3 p-2">
                    <p className="">{key.features[2].text}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-16 md:flex-row items-start justify-center pb-24 ">
                  <div className="w-full lg:w-1/3 p-2 order-2 md:order-1">
                    <p className="">{key.features[3].text}</p>
                  </div>
                  <div className="w-full lg:w-1/2 p-2 order-1 md:order-2">
                    <img
                      src={key.features[3].image}
                      alt="Dubai view"
                      className="w-full h-auto shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Amenities {...key} />
            <InteriorDesign {...key} />
            {/* <PaymentTerm {...key}  /> */}
            <PaymentPlan />
            <MapSection {...key} />
          </div>
        </section>

        <div className="w-full  ">
          <RegisterYourInterest />

          <SubscribeNewsletter />
        </div>
      </div>
    </>
  );
};

export default SepratePage;
