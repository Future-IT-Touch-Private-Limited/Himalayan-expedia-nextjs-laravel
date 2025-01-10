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
      <div className="hotel-news-banner relative h-[60vh]  w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="/img/hotelnews1.webp"
          alt="Hotel News"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-16 text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Hotel News
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-6">
            Stay updated with the latest news from our hotel. From exciting new
            services to upcoming events and promotions, our hotel news blog
            keeps you informed about everything that makes your stay even
            better.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row px-0 lg:px-24 my-10 lg:my-20 lg:gap-20">
        <div className="lg:w-[60%] flex flex-col h-auto space-y-3 md:space-y-5 px-5 md:px-10 lg:px-0">
          <h2 className="text-[18px] md:text-[1.7rem] lg:text-[32px] font-bold leading-tight text-black">
            Top Tips for Booking Your Next Hotel Stay
          </h2>

          <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
            Planning your next hotel stay can be an exciting yet daunting task.
            Whether you're traveling for business or leisure, it’s important to
            book your accommodation early and choose wisely. Consider factors
            like location, amenities, and reviews to ensure a memorable
            experience.
          </p>

          <img
            src="/img/hotelnews2.webp"
            className="h-auto w-full mx-auto"
          />

          <h2 className="font-bold text-xl md:text-2xl text-black">
            Choose the Right Location
          </h2>
          <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
            The location of your hotel is just as important as the amenities it
            offers. Choose a hotel close to the attractions or business centers
            you’ll be visiting. Check its proximity to transportation hubs to
            ensure easy access to all points of interest.
          </p>

          <h2 className="font-bold text-xl md:text-2xl text-black">
            Read Reviews and Ratings
          </h2>
          <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
            Don’t just rely on the hotel website for information. Read reviews
            on trusted platforms like TripAdvisor or Google Reviews. Guest
            experiences can give you insight into the quality of the service,
            cleanliness, and overall atmosphere.
          </p>

          <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
            Look for consistent feedback regarding customer service and
            cleanliness. A hotel with high ratings in these areas will likely
            provide a better overall experience.
          </p>

          <h2 className="font-bold text-xl md:text-2xl text-black">
            Consider Your Budget
          </h2>
          <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
            It’s easy to get carried away with luxurious options, but it’s
            important to stay within your budget. Choose a hotel that offers the
            best value for your money, considering all amenities, such as free
            Wi-Fi, breakfast, and parking.
          </p>

          <ul className="space-y-2">
            <li className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify flex items-center gap-3">
              <FaCheck className="text-slate-800" />
              Set a clear budget before you start booking.
            </li>
            <li className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify flex items-center gap-3">
              <FaCheck className="text-slate-800" />
              Compare prices on different booking platforms.
            </li>
            <li className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify flex items-center gap-3">
              <FaCheck className="text-slate-800" />
              Don’t forget to factor in hidden fees.
            </li>
            <li className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify flex items-center gap-3">
              <FaCheck className="text-slate-800" />
              Look for deals or packages to save money.
            </li>
          </ul>

          <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify border-l-4 border-l-[#d3000a] p-7 bg-slate-50">
            Remember that cheap doesn't always mean good. While it’s tempting to
            book the lowest-priced option, make sure you’re not compromising on
            comfort and quality just to save a few bucks. Sometimes spending a
            little extra can provide a much better experience.
          </p>

          <h2 className="font-bold text-xl md:text-2xl text-black">
            Check for Hotel Amenities
          </h2>
          <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
            Make sure to check if the hotel offers amenities that suit your
            needs. Common amenities to look for include a fitness center, a
            swimming pool, or business facilities. Some hotels also offer unique
            experiences like guided tours or spa services that can enhance your
            stay.
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
