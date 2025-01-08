'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import About from "../components/About";
import Faq from "../components/Faq";
import Counter from "../components/Counter";
import TestiMonial from "../components/testimonials/TestiMonial";
import Vision from "../components/Vision";
import axios from "axios";
import { rooturl, storageurl } from "../components/Store/Rooturl";
const Page = () => {
const [data,setData]=useState();

useEffect(()=>{
const fetchapi=async()=>{
  const info= await axios.get(`${rooturl}/about`)
  setData(info.data);
}
fetchapi()

},[ ])





  return (
    <>{ data && <>
    <div className="about-banner relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
  {/* Background Image */}
  <img
    src={`${storageurl}/${data.banner_img}`}
    alt="About Us"
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  {/* Overlay (Optional for text or effect) */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content Section */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-16 text-white">
    <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">
    {data.banner_text}
    </h1>
    <p className="text-lg md:text-xl max-w-3xl mb-6">
    {data.banner_des}
    </p>
    {/* <button className="bg-[#56CECB] hover:bg-opacity-80 text-white px-6 py-3 rounded-md font-semibold transition">
      Learn More
    </button> */}
  </div>
</div>


      <div className="space-y-5 md:space-y-10 ">
        <Vision  data={data.our_vission}/>
        <About  text={data.about_text} img={data.about_img}  />

        <Faq  />
        <Counter />
        <TestiMonial />
      </div>
      </>
}
    </>
  );
};

export default Page;
