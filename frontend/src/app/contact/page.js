"use client";
import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import axios from "axios";
import { rooturl, storageurl } from "../components/Store/Rooturl";



const ContactUsPage = () => {

const [data,setdata]=useState()

useEffect(()=>{
   const fatchapi=async()=>{
    const info= await axios.get( `${rooturl}/contact`)
    setdata(info.data);
   }
   fatchapi()

},[])





  return (
    <>{ data && <>
      <div className="contactBanner bg-[url('/img/contact-us.webp')] bg-cover bg-center text-white  py-16 px-6 text-center relative">
        {/* Overlay */}

       
        <div className="absolute inset-0 bg-black bg-opacity-50 w-full h-full z-0">
        <img src={`${storageurl}/${data?.banner_img}`} className="absolute inset-0   w-full h-full -z-10"  />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
          {data?.banner_text} 
          </h2>
          <p className="text-lg md:text-2xl mb-8">
{data?.banner_des}          </p>
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-700 transition-all shadow-lg">
            Contact Us
          </button>
        </div>
      </div>

      <div className="contactUs px-5 md:px-16 xl:px-32 my-5 md:my-16  bg-gray-50">
        <div className="grid  md:grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="bg-white xl:col-span-2 p-6 shadow-lg rounded-lg border border-gray-200">
            <img
              src={`${storageurl}/${data?.img}`}
              alt="Contact Us"
              className="rounded-lg w-full h-48 md:h-64 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <p className="text-base text-nowrap md:text-lg flex items-center gap-3">
                <FaEnvelope className="text-blue-600 text-xl" />
                <a
                  href={`mailto: ${data?.email}`}
                  className="text-gray-800 hover:text-blue-500 transition"
                >
                 {data?.email}
                </a>
              </p>
              <p className="text-base text-nowrap md:text-lg flex items-center gap-3">
                <FaWhatsapp className="text-green-600 text-xl" />
                WhatsApp us on:
                <a
                  href={`https://wa.me/${data?.whatsapp_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-green-500 transition"
                >
                 {data?.whatsapp_number}
                </a>
              </p>
              <p className="text-base text-nowrap md:text-lg flex items-center gap-3">
                <FaPhone className="text-blue-600 text-xl" />
                Call us on:
                <a
                  href={`tel:${data?.contect_number}`}
                  className="text-gray-800 hover:text-blue-500 transition"
                >
                  {data?.contect_number}
                </a>
              </p>
              <div className="mt-6">
                <h5 className="font-semibold text-base text-nowrap md:text-lg flex items-center gap-2 text-gray-800">
                  <FaMapMarkerAlt className="text-red-600 text-xl" />
                  Address
                </h5>
                <p className="text-base  md:text-lg text-gray-700 mt-1">
                 <div dangerouslySetInnerHTML={{__html:data?.address}}></div>
                </p>
              </div>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="bg-white xl:col-span-1 p-6 shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <h6 className="font-semibold text-xl uppercase tracking-wider mb-6 text-green-600">
              Book Your Dream Trip!
            </h6>
            <form className="space-y-4">
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="to"
                >
                  To
                </label>
                <div className="relative flex items-center border rounded-md">
                  <span className="text-red-500 pl-3">
                    <FaLocationDot />
                  </span>
                  <input
                    id="to"
                    type="text"
                    placeholder="Search Destination"
                    className="w-full px-4 py-2 focus:outline-none rounded-md"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="from"
                >
                  From
                </label>
                <div className="relative flex items-center border rounded-md">
                  <span className="text-red-500 pl-3">
                    <FaMapLocationDot />
                  </span>
                  <input
                    id="from"
                    type="text"
                    placeholder="Chandigarh"
                    className="w-full px-4 py-2 focus:outline-none rounded-md"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <div className="relative flex items-center border rounded-md">
                  <span className="text-red-500 pl-3">
                    <FaUser />
                  </span>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-2 focus:outline-none rounded-md"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <div className="relative flex items-center border rounded-md">
                  <span className="absolute left-3 top-2 text-gray-700">
                    +91
                  </span>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Enter Your Phone Number"
                    className="w-full pl-12 px-4 py-2 focus:outline-none rounded-md"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="agreement"
                  className="w-4 h-4 border-gray-300 rounded focus:ring focus:ring-red-300"
                />
                <label htmlFor="agreement" className="text-sm text-gray-600">
                  I agree to be contacted and receive updates on WhatsApp as per
                  the{" "}
                  <a href="#" className="text-red-500 underline">
                    terms
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-red-500 underline">
                    privacy policy
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
              >
                Plan My Holidays
              </button>
            </form>
          </div>
        </div>
        {/* map  */}

        <div className="map-container w-full h-80 md:h-96 lg:h-[450px] my-5 md:my-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.30354190985!2d76.6148174826163!3d30.732187287598904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1735017524813!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      </>
}
    </>
  );
};

export default ContactUsPage;
