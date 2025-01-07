"use client";
import React, { useState } from "react";
import Link from "next/link";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import Slider from "react-slick";

import { EffectCoverflow, Autoplay, FreeMode } from "swiper/modules";
import { useSelector } from "react-redux";
import { storageurl } from "./Store/Rooturl";

import Slider from "react-slick";
const Whychoose = () => {
  const state = useSelector((state) => state.homeSlice);
  const images = [
    { id: 1, src: "/img/hp1.webp" },
    { id: 2, src: "/img/hp1.webp" },
    { id: 3, src: "/img/hp1.webp" },
    { id: 4, src: "/img/hp1.webp" },
    { id: 5, src: "/img/hp1.webp" },
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Start with the middle image

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="px-5 md:px-16 xl:px-32 my-5 md:my-10 lg:my-16">
      <div className="">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center  gap-5">
            <div className="w-full lg:w-1/2" data-aos="fade-up">
              <div className="mb-8 lg:mb-0">
                <div className="mb-4 md:mb-6 md:mt-9 ">
                  <h6 className="text-[#fb0142] text-sm  b-3 font-bold uppercase">
                    Why Choose Us
                  </h6>
                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-2 mb-3 leading-tight">
                    Unforgettable Journeys Await<span>.</span>
                  </h1>
                  <p className="text-gray-600 border-l-4 lg:hidden xl:block border-[#fb0142] text-[15px] md:text-base w-full md:w-[70%] my-5 pl-4 md:pl-8">
                    Explore breathtaking destinations with personalized travel
                    packages. From serene beaches to majestic mountains,
                    experience unforgettable adventures, hassle-free bookings,
                    and expert guidance for your dream vacation. Start your
                    journey with us today
                  </p>
                </div>

                <div className="mb-4 md:mb-6 mt-8 flex items-center">
                  <div className="flex-shrink-0 mb-4 md:mb-0 flex justify-center">
                    <img
                      src="/img/star.webp"
                      width={3000}
                      height={3000}
                      alt="Social Media Icon"
                      className="w-12 md:w-14 h-12 md:h-14 object-cover "
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg md:text-xl font-semibold">
                      <Link
                        href="service-details.html"
                        className="hover:text-[#fb0142] transition-colors"
                      >
                        Your Journey, Our Priority
                      </Link>
                    </h3>
                    <p className="mt-1 md:mt-2 text-gray-600 text-[15px]">
                      unforgettable experiences. Let’s make your dream trip a
                      reality
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-4 md:mb-6">
                  <div className="flex-shrink-0 mb-4 md:mb-0 flex justify-center">
                    <img
                      width={300}
                      height={300}
                      src="/img/24-hours.webp"
                      alt="Cloud Network Icon"
                      className="w-12 md:w-14 h-12 md:h-14 object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg md:text-xl font-semibold">
                      <Link
                        href="service-details.html"
                        className="hover:text-[#fb0142] transition-colors"
                      >
                        Top-Rated Services
                      </Link>
                    </h3>
                    <p className="mt-1 md:mt-2 text-gray-600 text-[15px]">
                      Discover top destinations with tailored travel plans
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div
                className="relative w-full"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <img
                  src="/img/tour.webp"
                  alt="Main Image"
                  className="w-full h-full  object-fill rounded-lg hidden lg:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      {/* <div className="w-full flex justify-center items-center mt-6 h-[500px]  ">

        <div className="flex justify-center items-center gap-8 " >

          <img className="w-[170px] h-[320px] rounded-[20px] cover" src='/img/hp1.webp' />
          <img className="w-[200px] h-[400px] rounded-[20px] cover"  src='/img/hp1.webp' />

          <img className="w-[230px] h-[450px] rounded-[20px] cover"  src='/img/hp1.webp' />

          <img className="w-[200px] h-[400px] rounded-[20px] cover"  src='/img/hp1.webp' />

          <img className="w-[170px] h-[320px] rounded-[20px] cover"  src='/img/hp1.webp' />

        
        </div>



      </div> */}

      <div className="w-full flex flex-col justify-center items-center mt-6 h-[500px]">
        <div className="relative w-full flex justify-center items-center overflow-hidden">
          <button
            className="absolute left-0 text-xl p-4  rounded-full"
            onClick={handlePrev}
          >
            ◀
          </button>
          <button
            className="absolute right-0 text-xl p-4  rounded-full"
            onClick={handleNext}
          >
            ▶
          </button>

          <div className="flex gap-4 items-center transition-transform duration-300 ease-in-out">
            {images.map((image, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index === (currentIndex - 1 + images.length) % images.length;
              const isNext = index === (currentIndex + 1) % images.length;

              return (
                <div className="w-full flex flex-col justify-center items-center mt-6 h-[500px]">
                  <div className="relative w-full flex justify-center items-center overflow-hidden">
                    <button
                      className="absolute left-0 text-xl p-4 rounded-full"
                      onClick={handlePrev}
                    >
                      ◀
                    </button>
                    <button
                      className="absolute right-0 text-xl p-4 rounded-full"
                      onClick={handleNext}
                    >
                      ▶
                    </button>

                    <div className="flex gap-4 items-center transition-transform duration-300 ease-in-out">
                      {images.map((image, index) => {
            
                        const isActive = index === currentIndex;
                        const isPrev =
                          index ===
                          (currentIndex - 1 + images.length) % images.length;
                        const isNext =
                          index === (currentIndex + 1) % images.length;

                        return (
                          <div
                            key={image.id}
                            className={`flex justify-center items-center transition-all duration-300 ${
                              isActive
                                ? "w-[250px] h-[450px]"
                                : isPrev || isNext
                                ? "w-[200px] h-[400px]"
                                : "w-[170px] h-[320px] opacity-50"
                            }`}
                          >
                            <img
                              src={image.src}
                              alt={`Slide ${index + 1}`}
                              className={`flex justify-center rounded-[20px] items-center transition-all duration-300 ${
                                isActive
                                  ? "w-[250px] h-[450px]"
                                  : isPrev || isNext
                                  ? "w-[200px] h-[400px]"
                                  : "w-[170px] h-[320px] opacity-50"
                              }`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div className=" my-5 lg:my-16  md:py-5">
        {state && (
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            // pagination={true}
            modules={[Autoplay, FreeMode]}
            className="mySwiper h-[20rem] overflow-hidden"
          >
            {state?.info?.slider_imgs?.map((img, index) => (
              <SwiperSlide key={index} className="rounded-md overflow-hidden">
                <img src={`${storageurl}/${img}`} className="w-full h-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
    
      </div> */}
    </div>
  );
};

export default Whychoose;
