"use client";

import Link from "next/link";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import seaarchData from "./SearachPlacesData";
import SearchPlaceCard from "./SearchPlaceCard";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../Store/Slices/countryslices";
import { storageurl } from "../Store/Rooturl";

export default function SearchplaceNew({ dataMine }) {
  // const [loadMore, setLoadMore] = useState(8);
  const [filterValue, setFilterValue] = useState(""); 
  const [cardbtnFilter, setCardbtnFilter] = useState("all tours");
  const [filterCard,setFilterCard]= useState( )
  const cardBtns = [
    "All tours",
    "Sightseeing ",
    "Adventure ",
    "Cultural & historical",
    "Specialty ",
    "Package",
  ];

  useEffect(()=>{
    if(cardbtnFilter.toLowerCase()=="all tours"){
      setFilterCard(dataMine.data)
    }
    else if(cardbtnFilter){
      
         const filterCard=dataMine?.data?.filter((elm)=>{
      
          return elm.tour_type.toLowerCase().trim().includes(cardbtnFilter.toLowerCase().trim())
         })
        
  
         setFilterCard(filterCard)
    }
    else{
      setFilterCard(dataMine.data)  
    }
      
  },[cardbtnFilter])

  
  const handleFilterChange = (e) => {
    const value = e.target.value.toLowerCase();
    setFilterValue(value);

    const filtered = dataMine.data.filter((elm) =>
      elm.cityname.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="SearchPlace bg-[#E7F4F6] mt-10 py-10 overflow-hidden">
      <div className="mx-auto mb-4 w-full max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 lg:text-4xl">
          Explore Package
        </h2>
        <span className="mt-2 block text-base font-normal text-neutral-500 dark:text-neutral-400 sm:text-lg md:mt-3">
          Discover great places near where you live
        </span>
      </div>

      <div className="px-5 md:px-16 xl:px-32 py-2">
        <div className="navigation-links-parent  flex justify-between flex-col items-center gap-5  lg:flex-row ">
          <div className="w-full xl:w-[30%] relative flex flex-col ">
            <div className="w-full  z-40   text-black bg-white py-2 flex items-center gap-5 rounded-full px-5 shadow-md">
              <label htmlFor="searchPlace">
                <GiAirplaneDeparture className="text-[#E96525] text-xl " />
              </label>
              <input
                className="w-[100%] h-full border-0 outline-none"
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

            {/* {inpuValue  && flagsData&&<div className={`SearchReasult absolute z-20  w-full  flex flex-col gap-1   bg-white rounded rounded-tl-2xl rounded-tr-2xl ${flagsData.length && "pt-20 pb-5"} `}>
            { dataMine && dataMine.map((elm)=>{
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
         }  */}
          </div>
          <div className="card-navigation-btns w-[80%] lg:w-[60%] xl:w-[60%] ">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                310: {
                  slidesPerView: 2,
                },
                420: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
                1199: {
                  slidesPerView: 6,
                },
              }}
              className="mySwiper"
            >
              {cardBtns.map((elm, index) => (
                <SwiperSlide
                onClick={()=>{setCardbtnFilter(elm)}}
                  key={index}
                  className="bg-white cursor-pointer w-[150px] text-center rounded-3xl py-2 text-xs text-zinc-600 capitalize shadow-sm hover:bg-zinc-100 transition"
                >
                  <button>{elm}</button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="cards-parent">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 py-10">
            {filterCard && filterCard.length > 0 ? (
              filterCard.map((elm) => (
                <SearchPlaceCard key={elm.id} cardElment={elm} />
              ))
            ) : (
              <div>No Data Found</div>
            )}
          </div>
        </div>
        {/* {filterCard && mainindex  <filterCard.length &&
        <div className={` flex justify-center`}>
          <button onClick={()=>setmainindex(mainindex+8)}>load more</button>
        </div>
        } */}
      </div>
    </div>
  );
}
