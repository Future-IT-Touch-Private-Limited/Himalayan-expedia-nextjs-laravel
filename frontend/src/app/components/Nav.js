"use client";

import { useState, useEffect, useRef } from "react";
import { LuMenu } from "react-icons/lu";
import { BsBuildings } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MdOutlineSupportAgent, MdOutlineErrorOutline } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaPhoneAlt, FaMapMarkerAlt, FaVoicemail } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getHomeInfo } from "./Store/Slices/homeSlice";
import { storageurl } from "./Store/Rooturl";

const Navbar = () => {
  const [toggler, setToggler] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showRentalDropdown, setShowRentalDropdown] = useState(false);
 const state= useSelector(state=>state.homeSlice)



  const sidebarRef = useRef(null);
const dispach=useDispatch()
  useEffect(() => {
dispach(getHomeInfo())

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setToggler(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => setToggler(false);
  const toggleRentalDropdown = () => setShowRentalDropdown(!showRentalDropdown);


  return (
    <>
      {/* Navbar */}
      <div
        className={`sticky top-0 left-0 w-full py-3 ${
          isScrolled ? "bg-white border-b border-gray-200 shadow-lg" : "bg-white"
        } transition-all duration-300 ease-in-out z-50`}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-24 lg:py-2 pt-0 md pb-0 md flex justify-between items-center">
          <Link href={"/"}>
            <figure>
              <img
                className="w-[228px]"
                src={`${storageurl}/${state?.info?.logo}`}
                width={100}
                height={100}
                alt="Site Logo"
              />
            </figure>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 items-center">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li className="relative group">
                <Link href="/contact" className="hover:text-gray-700">
                   Services
                </Link>
                <div className="absolute md:w-max lg:w-[220px] md:-right-10 lg:left-0 mt-2 space-y-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 ease-in-out">
                  <Link href="/Coach-Rental" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:shadow-md rounded-lg">
                  Car and Coach Rental
                  </Link>
                  <Link href="/hotel-booking" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:shadow-md rounded-lg">
                 Hotel Booking
                  </Link>
                </div>
              </li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            <div className="lg:flex gap-4 hidden">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300">
                <img
                  className="w-7 h-7"
                  src="/img/asset 2.svg"
                  width={120}
                  height={120}
                  alt="Chat Icon"
                />
                <a href="#" className="text-gray-700">Chat</a>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300">
                <img
                  className="w-5 h-7"
                  src="/img/asset 3.svg"
                  width={120}
                  height={120}
                  alt="Phone Icon"
                />
                <a href={`tel:${state?.info?.mobile_number}`} className="text-gray-700">{state?.info?.mobile_number}</a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setToggler(!toggler)}
              className="bg-white text-black text-2xl p-3 rounded-full shadow-md focus:outline-none"
            >
              <LuMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-screen bg-gray-100 text-gray-800 shadow-2xl z-50 transform ${
          toggler ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out md:rounded-l-2xl p-6`}
      >
        <div className="flex justify-end mb-4">
          <button
            onClick={closeMenu}
            className="text-3xl font-bold text-black hover:text-gray-800"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col gap-5">
          {/* Menu Links */}
          <div className="flex items-center gap-2 cursor-pointer p-3 border-b-2 hover:bg-gray-200 transition">
            <IoNewspaperOutline className="text-2xl" />
            <Link href="/" onClick={closeMenu} className="flex justify-between items-center w-full">
              <span>Home</span>
              <IoIosArrowForward className="text-lg" />
            </Link>
          </div>

          <div className="flex items-center gap-2 cursor-pointer p-2 border-b-2 hover:bg-gray-200 transition">
            <MdOutlineErrorOutline className="text-2xl" />
            <Link href="/about" onClick={closeMenu} className="flex justify-between items-center w-full">
              <span>About Us</span>
              <IoIosArrowForward className="text-lg" />
            </Link>
          </div>

          {/* Rental Services with Dropdown */}
          <div className="flex flex-col">
            <div
              className="flex items-center gap-2 cursor-pointer p-2 border-b-2 hover:bg-gray-200 transition"
              onClick={toggleRentalDropdown}
            >
              <BsBuildings className="text-2xl" />
              <div className="flex justify-between items-center w-full">
                <span>Services</span>
                {showRentalDropdown ? (
                  <IoIosArrowDown className="text-lg" />
                ) : (
                  <IoIosArrowForward className="text-lg" />
                )}
              </div>
            </div>

            {/* Dropdown Items */}
            {showRentalDropdown && (
              <div className="ml-8 flex flex-col gap-3">
                <Link href="/Coach-Rental" onClick={closeMenu} className="cursor-pointer  p-2 hover:bg-gray-200 transition">
                Car and Coach Rental
                </Link>
                <Link href="/hotel-booking" onClick={closeMenu} className="cursor-pointer p-2 hover:bg-gray-200 transition">
                Hotel Booking

                </Link>
               
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 cursor-pointer p-2 border-b-2 hover:bg-gray-200 transition">
            <BsBuildings className="text-2xl" />
            <Link href="/contact" onClick={closeMenu} className="flex justify-between items-center w-full">
              <span>Contact Us</span>
              <IoIosArrowForward className="text-lg" />
            </Link>
          </div>

          {/* Footer with Contact Info */}
          <div className="mt-auto flex flex-col items-center md:items-start mb-4">
            <div className="text-center md:text-left bg-gray-200 p-4 rounded-lg text-gray-600">
              <div className="flex md:flex-row md:justify-center items-center gap-3 mb-3">
                <FaPhoneAlt className="text-2xl" />
                <span>{state?.info?.mobile_number}</span>
              </div>
              <div className="flex md:flex-row md:justify-center items-center gap-3">
                <FaVoicemail className="text-2xl" />
               <span>Email :lorem123@gmail.com </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
