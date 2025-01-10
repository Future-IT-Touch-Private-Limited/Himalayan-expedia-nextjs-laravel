

"use client";
import React, { useState,useEffect } from "react";
import ServiceFrom from "../components/ServiceFrom";
import Link from "next/link";
import TourPackage from "../components/TourPackage";
import axios from "axios";
import { rooturl, storageurl } from "../components/Store/Rooturl";



export default function Comp() {
    const [data,setDate]=useState();



  useEffect(()=>{
    const fetchapi=async()=>{
      const info= await axios.get(`${rooturl}/hotelbooking`)
      setDate(info.data)
    }
    fetchapi()
  },[])
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
   <>
     <div className="hotel-booking">
      <section className="hotel-booking-banner relative h-[350px] md:h-[60vh] w-full overflow-hidden">
     
        <img
          src={`${storageurl}/${data?.banner_img}`}
          alt="Hotel Booking"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

 
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-16 text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          {data?.banner_text}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-6">
          {data?.banner_des}
          </p>
        </div>
      </section>

      <section className="px-5 md:px-16 xl:px-32 my-5 md:my-16 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="hotel-booking  space-y-5">
            <h2 className="text-2xl text-start lg:text-3xl xl:text-4xl font-semibold text-gray-900 mb-4">
              Your Dream Vacation Awaits
            </h2>
            <div className="space-y-3">
<div dangerouslySetInnerHTML={{__html:data?.car_about}} className="text-justify  text-base md:text-lg text-gray-700 leading-relaxed"></div>
            </div>

            {/* <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-200 shadow-md">
              Book Now
            </button> */}
          </div>

          <div className="flex justify-center">
            <img
              src={`${storageurl}/${data?.car_img}`}
              alt="Snowy Hotel"
              className="rounded-lg shadow-2xl transform hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <section className="grid xl:grid-cols-3 lg:gap-10 gap-12  px-5 md:px-16 xl:px-32 my-5 lg:my-16">
        <div className="xl:col-span-2 shadow-lg">
          <div className="p-5 space-y-6 ">
            <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-start mb-6">
              Find the Best Tour for Your Next Journey
            </h5>

            <div dangerouslySetInnerHTML={{__html:data?.car_des}} className="text-justify  text-base md:text-lg text-gray-700 leading-relaxed"></div>
          </div>
        </div>
              {/* for desktop  */}
        <div className="hidden md:block">
         
          <TourPackage/>
        </div>
      </section>

      <div className="flex flex-col lg:grid xl:grid-cols-3 gap-16  px-5 md:px-16 xl:px-32 lg:gap-10 my-5 md:my-16">
                 {/* for mobile  */}
        <div className="md:hidden order-2">
         
          <TourPackage/>
        </div>
        <div className="xl:col-span-2 space-y-5 lg:space-y-2 order-2  ">
          <div className="md:shadow-lg md:p-6 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {data?.faq?.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-4 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-base md:text-lg">
                      {item.question}
                    </h3>
                    <span>
                      {activeIndex === index ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 12H4"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      )}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <p className="text-gray-600 mt-2">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            className="map-container h-[250px] lg:h-[450px]"
            style={{ width: "100%" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.22709340513!2d76.68831206468506!3d30.732254422013508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1735187168734!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="lg:order-3 ">
          <div className="sticky top-10">
            <ServiceFrom />
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
