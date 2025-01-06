"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import axios from "axios";
import { rooturl, storageurl } from "./Store/Rooturl";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const HeroSection = () => {
  const [textdata, settextData] = useState();
  const [number, setPhone] = useState("");

  const handlePhoneChange = (value) => {
    setPhone(value);
    settextData({ ...textdata, number: number });
  };

  const handelchange = (e) => {
    settextData({ ...textdata, [e.target.name]: e.target.value });

  };

  useEffect(() => {
    let date = new Date(Date.now());
    date = `${date.getDay()}-${date.getMonth()+1}-${date.getFullYear()}`;
    settextData({ ...textdata, date });
  }, []);

  const state = useSelector((state) => state.homeSlice);

  const handelforSubmit = async (e) => {
    e.preventDefault();
  
    settextData({ ...textdata, number: number });




    const info = await axios.post(`${rooturl}/message`, textdata);
    if (info.data.success) {
      
      Swal.fire({
        title: "Success!",
        text: info.data.message,
        icon: "success",
        confirmButtonText: "ok",
      });



    }

    window.location.reload();
  };

  return (
    <div className=" relative  lg:mb-[100px]">
      <Swiper
         spaceBetween={0}
         slidesPerView={1}
         loop={true}
         autoplay={{
           delay: 300,
           disableOnInteraction: false, 
         }}
        navigation={{
          nextEl: ".swiper-button-next", // Custom next button
          prevEl: ".swiper-button-prev", // Custom prev button
        }}
      >
        {state?.info?.banner_imgs?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full relative h-[350px] md:h-[550px]">
              <img
                src={`${storageurl}/${image}`}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-transparent opacity-transparent z-20"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="px-5 z-40 relative">
        <div className="md:absolute mt-12  md:mt-0 bottom-5 lg:-bottom-16 md:right-[20%] lg:right-[6%] border z-[1] bg-white p-4 md:p-6 shadow-lg md:max-w-[60%] rounded-md lg:max-w-md w-full">
          <form
            className="space-y-4 md:space-y-2 lg:space-y-4"
            onSubmit={(e) => handelforSubmit(e)}
          >
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
                  name="to"
                  value={textdata?.to}
                  required
                  onChange={(e) => handelchange(e)}
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
                  name="from"
                  value={textdata?.from}
                  required
                  onChange={(e) => handelchange(e)}
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
                  name="name"
                  value={textdata?.name}
                  required
                  onChange={(e) => handelchange(e)}
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
                <span className="absolute left-3 top-2 text-gray-700">+91</span>
                {/* <input
                  id="phone"
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="w-full pl-12 pr-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
                  name="number"
                  value={textdata?.number}
                  required
                  onChange={(e) => handelchange(e)}
                /> */}
                <PhoneInput
        country={"in"} // Default country
        value={number}  // Bind state to the phone input
        onChange={handlePhoneChange} // Update state on change
        inputProps={{
          name: "number",
          required: true,
          autoFocus: true,
        }}
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
                I agree to get contacted by tripclap partners and get updates on
                WhatsApp as per{" "}
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
  );
};

export default HeroSection;
