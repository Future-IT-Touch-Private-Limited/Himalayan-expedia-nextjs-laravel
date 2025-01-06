"use client";
import React,{useEffect,useState} from "react"
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "./Store/Slices/countryslices";
import { storageurl } from "./Store/Rooturl";

import Link from "next/link";

const TravelDesination = () => {
  const[flagsData,setFlagsData]=useState()

  const [inpuValue,setInpuValue]=useState("")
  const dispatch=useDispatch()
  const state=useSelector(state=>state.countryslices)
 


  useEffect(()=>{

    dispatch(getCountry())
  },[])



  useEffect(()=>{
    let filterDataaa=state.data && state.data.filter((elm)=>{
  return   elm.Countryname.toLowerCase().includes(inpuValue.toLowerCase())
    })
  
    setFlagsData(filterDataaa)
   
  },[ inpuValue])


  return (
    <div className="TravelDesination  md:py-5 md:mt-5">
      <div className="bg-[#f4f4f4] px-5 py-10  border-8  border-white rounded-2xl flex flex-col gap-10 md:gap-5 lg:gap-0 lg:flex-row md:justify-between">
        <div className="flex flex-col gap-5 md:gap-11">
            <div className="flex flex-col gap-2 md:text-center lg:text-start">
            <h5 className="text-bold lg:text-2xl font-bold text-black">Ready to get started? Enter your travel destination</h5>
          <h5 className=" font-semibold text-slate-500 text-xs xl:text-base">
            Know your visa process • Get document checklist • FREE Sign up!
          </h5>
            </div>
            <div className="w-full  z-40 relative   text-black bg-white py-2 flex items-center gap-5 rounded-full px-5 shadow-md">
            <label htmlFor="searchPlace">
              <GiAirplaneDeparture className="text-[#E96525] text-xl " />
            </label>
            <input
              className="w-[100%] relative h-full border-0 outline-none"
              value={inpuValue}
              onChange={(e)=>{setInpuValue(e.target.value)}}
              maxLength="30"
              id="searchPlace"
              type="text"
              placeholder="Where to, captain?"
              autoComplete="off"
            />
            <label
              htmlFor="searchPlace"
              className="bg-[#E96525] p-3 rounded-full text-white"
            >
              <IoSearch className="" />
            </label>
          </div>
         {inpuValue  && flagsData&&<div className={`w-[38%] absolute z-20  top-[174px] left-[179px] flex flex-col gap-1   bg-white rounded rounded-tl-2xl rounded-tr-2xl ${flagsData.length && "pt-20 pb-5"} `}>
            { flagsData && flagsData.map((elm)=>{
              return(
                <>
               
                <Link  href={`/${elm.slug}`} className="flex justify-between px-5 hover:bg-zinc-100 py-3 duration-150">

                  <img className="w-10 h-10" src={`${storageurl}/${elm.flag}`} alt="" />

                  {elm.Countryname}
                </Link>
                </>
              )
            })}
             
          </div>
         } 
        </div>
        <div className="flex flex-col gap-3 md:items-end md:text-center lg:text-start ">
            <div className="bg-[#EAE8D7] text-black w-[100%] lg:w-[65%] h-[50%] px-5 py-3 rounded-xl">
                <p>Faster than 10-min grocery delivery</p>
            </div>
            <div className="bg-[#E3E0C6] text-black w-[100%]  lg:w-[65%] h-[50%] px-5 py-3 rounded-xl ">
                <p >Safer than a state-run bank</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDesination;
