import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaPhone,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  FaLocationArrow,
  FaLocationCrosshairs,
  FaLocationDot,
  FaLocationPin,
  FaMapLocation,
  FaPhoneFlip,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
const phoneNumber = "+91 8699285111";
const Newsletter = () => {
  return (
    <div className="py-12 ">
      <div className="flex flex-col items-center   gap-7">
        <div>
          <p className="font-sans text-base font-semibold  ">
            Blackleaf Properties, Office no 719, Imperial tower Cp67 ,Mohali
          </p>
        </div>
        <div className="flex items-center justify-center gap-10 ">
          <a
            className="text-gray-700 hover:text-orange-600"
            aria-label="Visit LinkedIn"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-8 w-8" />
          </a>
          <a
            className="text-gray-700 hover:text-orange-600"
            aria-label="Visit LinkedIn"
            href={`tel:${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhoneAlt className="h-7 w-8" />
          </a>
          <a
            className="text-gray-700 hover:text-orange-600"
            aria-label="Visit LinkedIn"
            href="https://www.google.com/maps/place/Imperial+Tower/@30.7109933,76.6841922,17z/data=!3m1!4b1!4m6!3m5!1s0x390fefbcd4da202b:0xc247869b64041b89!8m2!3d30.7109887!4d76.6867725!16s%2Fg%2F11tc__6_5m?entry=tts&g_ep=EgoyMDI0MDYxNS4xKgBIAVAD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLocationDot className="h-7 w-8   " />
          </a>

          <a
            className="text-gray-700 hover:text-orange-600"
            aria-label="Visit Facebook"
            href="https://wa.me/919815650378"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareWhatsapp className="h-8 w-8" />
          </a>
          <a
            className="text-gray-700 hover:text-orange-600"
            aria-label="Visit Instagram"
            href="https://www.instagram.com/blackleaf_properties/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
