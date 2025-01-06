"use client";
import React from "react";
import Link from "next/link";
import { storageurl } from "./Store/Rooturl";
const About = ({text,img}) => {
  return (
    <div className="About-Us AboutUs   ">
      <div className="px-5 py-10 md:px-16 xl:px-32    md:py-13">
        <div className="flex flex-col gap-5 md:gap-10  xl:flex-row justify-between items-center">
            <div className="w-[100%] xl:w-[50%] flex justify-center">
              {img &&
            <img
              src={`${storageurl}/${img}`}
              alt="Contact Us"
              className="w-full h-full lg:w-[70%] xl:w-[100%] lg:h-[90%] object-cover "
            />}
            </div>
          <div className="w-[100%] xl:w-[50%] flex flex-col gap-5 ">
            <div className="w-full ">
              <h3 className="text-xl md:text-3xl   text-zinc-500 font-bold text-justify  ">
                About Us
              </h3>
            </div>

            <div className="text-justify text-md flex flex-col gap-3">
        {text && <div dangerouslySetInnerHTML={{__html:text}}></div>}
            
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
