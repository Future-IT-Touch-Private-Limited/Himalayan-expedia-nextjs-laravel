"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getallBlog } from "../components/Store/Slices/allBlogslice";
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

export default function blogDetail() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.allBlog);
  const [blogdata, setblogdata] = useState([]);

  useEffect(() => {
    // dispatch(getallBlog());
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
      image: "/img/asset 13.png",
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
      <div className="guest-review-banner relative  lg:h-[60vh]  h-[40vh] md w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="/img/GuestReviews1.webp"
          alt="Guest Reviews"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-16 text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Guest Reviews
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-6">
            Hear what our valued guests have to say about their experiences with
            us. Our guest reviews showcase the exceptional hospitality, comfort,
            and service we strive to provide at every stay.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row px-0 lg:px-24 my-10 lg:my-20 lg:gap-20">
        <div className="lg:w-[60%] flex flex-col h-auto space-y-3 md:space-y-5 px-5 md:px-10 lg:px-0">
          <h2 className="text-[18px] md:text-[1.7rem] lg:text-[32px] font-bold leading-tight text-black">
            Guest Reviews
          </h2>

          <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
            Our guests love sharing their experiences with us. Read through the
            reviews to see why we are a preferred choice for travelers seeking
            comfort and quality.
          </p>

          <img
            src="/img/GuestReviews2.webp"
            className="h-auto w-full mx-auto"
          />

          <h2 className="font-bold text-xl md:text-2xl text-black">
            Anika Deshmukh's Experience
          </h2>
          <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
            "The wellness retreat at this hotel was amazing! The yoga sessions
            and spa treatments left me feeling completely rejuvenated."
          </p>

          <h2 className="font-bold text-xl md:text-2xl text-black">
            Ishaan Sharma's Review
          </h2>
          <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
            "The gourmet dining night was absolutely delicious! I enjoyed every
            bite, and the atmosphere was just perfect for a night out."
          </p>

          <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
            We value your feedback and encourage guests to leave reviews after
            their stay.
          </p>

          <h2 className="font-bold text-xl md:text-2xl text-black">
            Wellness and Spa Review Highlights
          </h2>
          <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
            Take a look at some highlights from our guests' experiences at our
            wellness retreats, yoga sessions, and spa services.
          </p>

          <ul className="space-y-2">
            <li className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify flex items-center gap-3">
              <FaCheck className="text-slate-800" />
              "The personalized spa treatments were a dream come true."
            </li>
            <li className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify flex items-center gap-3">
              <FaCheck className="text-slate-800" />
              "The guided meditation sessions really helped me relax and
              unwind."
            </li>
            <li className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify flex items-center gap-3">
              <FaCheck className="text-slate-800" />
              "Yoga classes were amazing, I felt so much more flexible and at
              peace."
            </li>
            <li className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify flex items-center gap-3">
              <FaCheck className="text-slate-800" />
              "The healthy meals were a great addition to my wellness
              experience."
            </li>
          </ul>

          <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify border-l-4 border-l-[#d3000a] p-7 bg-slate-50">
            Book your stay and experience these exceptional services yourself.
            Your feedback matters!
          </p>

          <h2 className="font-bold text-xl md:text-2xl text-black">
            Private Reviews and Events
          </h2>
          <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
            Guests can share reviews about their private events with us, such as
            birthday parties, anniversaries, and corporate meetings. We take
            pride in making every event a memorable one.
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
