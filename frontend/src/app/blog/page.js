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

export default function Page() {
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

  const blogData = [
    {
      category: "Hotel News",
      title: "Exclusive Deals for Your Stay: Book Early, Save Big!",
      description:
        "Unlock special discounts and perks when you book your stay at our luxury hotel in advance. Explore our exclusive offers and enjoy a memorable experience.",
      author: "Emma Smith",
      date: "May 15, 2024",
      image: "/img/img10.avif",
      authorImage: "/img/bloguser3.webp",
      slug: "/hotel-news",
    },
    {
      category: "Hotel Amenities",
      title: "Discover Our World-Class Spa and Wellness Center",
      description:
        "Indulge in a rejuvenating experience at our state-of-the-art spa. From massages to facials, unwind and refresh during your stay with us.",
      author: "John Doe",
      date: "May 20, 2024",
      image: "/img/img9.avif",
      authorImage: "/img/bloguser1.webp",
      slug: "/hotel-amenities",
    },
    {
      category: "Travel Tips",
      title: "Top 5 Must-Visit Attractions Near Our Hotel",
      description:
        "Looking to explore the city? Here are the top 5 attractions just a short distance from our hotel, perfect for your next adventure.",
      author: "Sophie Lee",
      date: "May 25, 2024",
      image: "/img/img5.avif",
      authorImage: "/img/bloguser2.webp",
      slug: "/travel-tips",
    },
    {
      category: "Hotel Events",
      title: "Hosting Your Special Event at Our Luxury Hotel",
      description:
        "Plan your next wedding, corporate event, or family gathering at our elegant venues. Learn how we can make your event unforgettable.",
      author: "Chris Brown",
      date: "June 5, 2024",
      image: "/img/img4.avif",
      authorImage: "/img/bloguser10.webp",
      slug: "/hotel-events",
    },
    {
      category: "Guest Reviews",
      title: "What Our Guests Are Saying: A Look at Recent Reviews",
      description:
        "Don’t just take our word for it. Read some of the glowing reviews from our guests who’ve had an unforgettable stay at our hotel.",
      author: "Rachel Green",
      date: "June 10, 2024",
      image: "/img/hp1.webp",
      authorImage: "/img/asset 10.png",
      slug: "/guest-review",
    },
  ];

  return (
    <>
      <div className="about-banner relative lg:h-[60vh] h-[40vh] md w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"
          alt="About Us"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-16 text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Blog
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-6">
            We offer an unparalleled hotel experience, combining luxury,
            comfort, and convenience. Our goal is to provide guests with an
            unforgettable stay.
          </p>
         
        </div>
      </div>

      <div className="flex flex-col lg:flex-row px-5 md:px-16 xl:px-32 my-10 lg:my-20 lg:gap-5">
        <div className=" lg:w-8/12 space-y-10 ">
          <h2 className="text-[18px] md:text-[1.7rem] lg:text-[32px] font-bold leading-tight text-black">
            Latest Blogs
          </h2>

          <p className="text-sm md:text-base text-[#5a5d63] leading-relaxed text-justify">
            Discover tips for choosing the perfect hotel for your next getaway.
            From luxury amenities to family-friendly options, find out how to
            make the most of your stay. Don't forget to check reviews, compare
            prices, and book early for the best deals.
          </p>

          <div className="blog-container grid grid-cols-1  gap-4 md:gap-8  ">
            {blogData.map((blog, index) => (
            <>
            <Link href={blog.slug}>
                <div
                  key={index}
                  className="blog bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-fit bg-[#FEE2E2] text-[#991B1B] px-6 py-2 rounded-full text-sm font-semibold">
                      {blog.category}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {blog.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <img
                        src={blog.authorImage}
                        alt={blog.author}
                        className="w-6 h-6 rounded-full"
                      />
                      <span>{blog.author}</span>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-[200px] object-cover rounded-md transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </Link>
            </>
            ))}
          </div>
        </div>

        {/* right card  */}
        <div className="flex flex-col w-full lg:w-1/3 px-5 md:px-10 lg:px-0 space-y-7">
          <div className="md:w-full flex flex-col h-auto shadow-md bg-slate-50 rounded-xl items-center py-10 px-5 md:px-10 space-y-3">
            <img src='/img/admin.webp' alt="Admin" className="w-12" />
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
