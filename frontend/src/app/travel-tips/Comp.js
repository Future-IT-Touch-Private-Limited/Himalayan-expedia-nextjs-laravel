"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallBlog } from "../components/Store/Slices/allBlogslice";
import { storageurl } from "../components/Store/Rooturl";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaReplyAll } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

export default function Comp() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.allBlog);
  const [blogdata, setblogdata] = useState([]);

  useEffect(() => {
    dispatch(getallBlog());
  }, []);
  useEffect(() => {
    setblogdata(state.data);
  }, [state]);
  // const num=[Math.floor(Math.random()  (blogdata && blogdata.length)),Math.floor(Math.random()  (blogdata && blogdata.length)),Math.floor(Math.random()  (blogdata && blogdata.length)),Math.floor(Math.random()  (blogdata && blogdata.length))]

  const data = {
    tags: [
      { name: "vishal", link: "#" },
      { name: "vishal", link: "#" },
      { name: "vishal", link: "#" },
      { name: "vishal", link: "#" },
    ],
    adminInfo: {
      image: "/Images/blogdetails/profile.webp",
      name: "Rajveer Singhania",
      email: "mailto:vishalrajput21930@gmail.com",
      description:
        "Pack and Move Reliably - Smooth relocation solutions for you",
    },

    popularTags: [
      {
        id: 1,
        name: "Vishal",
        link: "#",
      },
      {
        id: 2,
        name: "vishal",
        link: "#",
      },
      {
        id: 3,
        name: "vishal",
        link: "#",
      },
      {
        id: 4,
        name: "vishal",
        link: "#",
      },
    ],
  };

  return (
    <>
     <div className="travel-tips-banner relative h-[60vh]  w-full overflow-hidden">
  {/* Background Image */}
  <img
    src="/img/travel-tips1.webp"
    alt="Travel Tips"
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content Section */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-16 text-white">
    <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">
      Travel Tips
    </h1>
    <p className="text-lg md:text-xl max-w-3xl mb-6">
      Get expert travel tips and advice to make your journeys smoother and more enjoyable. From packing hacks to navigating new destinations, we’ve got you covered!
    </p>
  </div>
</div>


      <div className="flex flex-col lg:flex-row px-0 lg:px-24 my-10 lg:my-20 lg:gap-20">
      <div className="lg:w-[60%] flex flex-col h-auto space-y-3 md:space-y-5 px-5 md:px-10 lg:px-0">
  <h2 className="text-[18px] md:text-[1.7rem] lg:text-[32px] font-bold leading-tight text-black">
    Top Travel Tips for Your Next Adventure
  </h2>

  <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
    Traveling can be an enriching experience, but it’s important to plan ahead. Whether you’re heading to a bustling city or a remote destination, these tips can help you make the most of your trip.
  </p>

  <img
    src="/img/travel-tips2.webp"
    className="h-auto w-full mx-auto"
  />

  <h2 className="font-bold text-xl md:text-2xl text-black">
    Plan Ahead for a Smooth Journey
  </h2>
  <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
    One of the most important travel tips is to plan your trip in advance. From booking your flights to researching accommodation options, having a clear itinerary can save you time and reduce stress.
  </p>

  <h2 className="font-bold text-xl md:text-2xl text-black">
    Pack Smart for Convenience
  </h2>
  <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
    Packing efficiently can make your trip much more comfortable. Be sure to pack light, but include all essentials like travel documents, comfortable clothes, and a power bank for your electronics.
  </p>

  <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
    A good tip is to make a checklist and start packing a few days before you leave. This will give you time to make adjustments if you forget something important.
  </p>

  <h2 className="font-bold text-xl md:text-2xl text-black">
    Stay Safe and Healthy on the Road
  </h2>
  <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
    Safety is key when traveling. Always keep your valuables secure, be aware of your surroundings, and stay informed about the health conditions at your destination. Carry necessary medications and a basic first-aid kit with you.
  </p>

  <ul className="space-y-2">
    <li className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify flex items-center gap-3">
      <FaCheck className="text-slate-800" />
      Carry a copy of important documents like your passport and insurance.
    </li>
    <li className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify flex items-center gap-3">
      <FaCheck className="text-slate-800" />
      Always keep emergency contacts handy.
    </li>
    <li className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify flex items-center gap-3">
      <FaCheck className="text-slate-800" />
      Stay hydrated and follow any local health advisories.
    </li>
    <li className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify flex items-center gap-3">
      <FaCheck className="text-slate-800" />
      Use reputable transportation options and avoid unsafe areas.
    </li>
  </ul>

  <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify border-l-4 border-l-[#d3000a] p-7 bg-slate-50">
    Always remember to travel responsibly. Consider the environmental impact of your actions and try to support local businesses to leave a positive mark on the places you visit.
  </p>

  <h2 className="font-bold text-xl md:text-2xl text-black">
    Enjoy Local Experiences
  </h2>
  <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
    Exploring local culture and traditions can make your trip more memorable. Try local foods, visit cultural landmarks, and engage with the community to get a real sense of the destination.
  </p>

  <div className="flex flex-col items-start space-y-4 justify-between border-b border-slate-200 pb-7">
    
    <div className="flex items-center gap-3">
      <h3 className="text-base md:text-lg font-semibold">Share:</h3>
      <Link
        href="https://www.facebook.com/"
        className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#d3000a] transform duration-300"
      >
        <BiLogoFacebook />
      </Link>
      <Link
        href="https://x.com/home"
        className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#d3000a] transform duration-300"
      >
        <FaXTwitter />
      </Link>
      <Link
        href="https://www.instagram.com/"
        className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#d3000a] transform duration-300"
      >
        <FaInstagram />
      </Link>
      <Link
        href="https://www.pinterest.com"
        className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#d3000a] transform duration-300"
      >
        <FaPinterestP />
      </Link>
    </div>
  </div>

  
</div>


        <div className="flex flex-col w-full lg:w-1/3 px-5 md:px-10 lg:px-0 space-y-7">
          <div className="md:w-full flex flex-col h-auto shadow-md bg-slate-50 rounded-xl items-center py-10 px-5 md:px-10 space-y-3">
            <img src={data.adminInfo.image} alt="Admin" className="w-12" />
            <h3 className="text-lg font-semibold">{data.adminInfo.name}</h3>

            <ul className="flex gap-1 text-yellow-400 text-base">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStarHalfAlt />
              </li>
              <li>
                <FaRegStar />
              </li>
            </ul>
            <p className="text-base text-gray-500 leading-relaxed text-center">
              {data.adminInfo.description}
            </p>
            <Link
              href={`mailto:${data.adminInfo.email}`}
              target="_blank"
              className="font-semibold text-sm hover:text-[#d3000a]"
            >
              {data.adminInfo.email}
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com/"
                className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#d3000a] transform duration-300"
              >
                <BiLogoFacebook />
              </Link>
              <Link
                href="https://x.com/home"
                className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#d3000a] transform duration-300"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://www.instagram.com/"
                className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#d3000a] transform duration-300"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.pinterest.com"
                className="bg-white border border-gray-300 p-2 rounded hover:text-white hover:bg-[#d3000a] transform duration-300"
              >
                <FaPinterestP />
              </Link>
            </div>
          </div>

          <div className="md:w-full h-auto shadow-md rounded-xl items-center py-7 px-5 md:px-10 space-y-6 mt-5 ">
            <h3 className="text-base font-semibold border-l-2 border-[#d3000a] pl-3 ">
              Popular Tags
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3  text-center gap-3  text-nowrap w-full">
              {data.popularTags.map((tag) => (
                <Link
                  href={tag.link}
                  key={tag.id}
                  className="text-sm md:text-base text-gray-500  py-3 px-2 bg-slate-100 rounded-xl hover:text-white hover:bg-[#d3000a] transform duration-300"
                  onClick={() => setActiveService(tag.id)}
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:sticky lg:top-28 lg:z-[-1px]">
            <form className="space-y-4 md:space-y-2 lg:space-y-4  border border-gray-200 p-4 rounded-lg">
              <div>
                <h1 class="font-semibold text-xl uppercase tracking-wider mb-3 md:mb-5 text-green-600">
                  Book Your Dream Trip!
                </h1>

                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="to"
                >
                  To
                </label>
                <div className="relative flex items-center border rounded-md gap-x-5 ">
                  <span className=" text-red-500 pl-3">
                    <FaLocationDot />
                  </span>
                  <input
                    id="to"
                    type="text"
                    placeholder="Search Destination"
                    className="w-full  pr-4 py-2 focus:outline-none "
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
                <div className="relative flex items-center border rounded-md gap-x-5 ">
                  <span className=" text-red-500 pl-3">
                    <FaMapLocationDot />
                  </span>
                  <input
                    id="from"
                    type="text"
                    placeholder="Chandigarh"
                    className="w-full  pr-4 py-2  focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="text"
                >
                  Name
                </label>
                <div className="relative flex items-center border rounded-md gap-x-5 ">
                  <span className=" text-red-500 pl-3">
                    <FaUser />
                  </span>
                  <input
                    id="text"
                    type="text"
                    placeholder="Enter Your Name "
                    className="w-full  pr-4 py-2   focus:outline-none "
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
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-700">
                    +91
                  </span>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Enter Your Phone Number"
                    className="w-full pl-12 pr-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
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
                  I agree to get contacted by tripclap partners and get updates
                  on WhatsApp as per{" "}
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
      </div>
    </>
  );
}
