"use client";
import { BsFillStarFill } from "react-icons/bs";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import TestMonialCard from "./TestMonialCard";
import { useDispatch, useSelector } from "react-redux";
import { gettestimonial } from "../Store/Slices/testimonialslice";

export default function TestiMonial() {
  const [reviewData, setreviewdata] = useState();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.testimonial);
  useEffect(() => {
    dispatch(gettestimonial());
  }, []);
  useEffect(() => {
    setreviewdata(state.data);
  }, [state]);

  return (
    <div className="TestiMonial bg-gradient-to-b from-[#FAFAFA] to-[#3879ab17] my-7 md:my-10 xl:my-0 py-10">
      <div className="px-5 md:px-16 xl:px-32">
        <div className="flex flex-col gap-5 lg:gap-8 items-center">
          <div className="text-3xl lg:text-6xl text-[#FFD216] flex gap-3 lg:gap-5">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </div>
          <div className="text-xl md:text-3xl lg:text-5xl font-semibold">
            <h2>The 5 star Trip Planner</h2>
          </div>
          <div className=" hidden  md:flex flex-col justify-start md:flex-row items-center text-xl font-light gap-2">
            <h6 className="flex items-center text-xl font-light gap-2 text-center">
              Visit Zanskar Ladakh is a top-rated Trip Planner,  on <span className="md:hidden">Google</span>  &nbsp;
              <img
                className="h-5 w-5 hidden md:block"
                src="/img/asset-9.png"
                width={120}
                height={120}
                alt="Wait for image"
              />
              reviews.
            </h6>
          </div>
        </div>

        {/* reviews  */}
        <div className="ReviwsSwiper mt-10 md:mt-20">
          <Swiper
            className="mySwipersss"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {reviewData &&
              reviewData.map((elm, index) => {
                return (
                  <SwiperSlide key={index}>
                    <TestMonialCard elm={elm} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
