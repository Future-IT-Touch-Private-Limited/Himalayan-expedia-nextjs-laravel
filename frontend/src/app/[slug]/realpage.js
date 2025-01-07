"use client";
import React, { useEffect } from "react";
import { FaClock, FaPaw, FaUsers } from 'react-icons/fa';

import { IoMdStopwatch } from "react-icons/io";
import TouritsSingleProdcutVisa from "../components/TouritsSingleProdcutVisa";
import { useState } from "react";
import SingleProductFaq from "../components/SingleProductFaq";

import StepByStep from "./StepByStep";
import CheckList from "./CheckList";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCountryvisa } from "../components/Store/Slices/singlecountryvisa";
import { getsinglecountry } from "../components/Store/Slices/singlecountryslice";
import { rooturl, storageurl } from "../components/Store/Rooturl";
import { Link } from "react-scroll";
import Swal from "sweetalert2";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";
import TestiMonial from "../components/testimonials/TestiMonial";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export function Realpage({ slug }) {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const [userId, setuserId] = useState();
  const [formData, setFormData] = useState({
    user_id: "",
    country_id: "",
    visa_type_id: "",
    applied_at: "",
    status: "pending",
  });



  const [visaCardFilter, setvisaCardFilter] = useState();
  const [countrydata, setcountrydata] = useState();
  const [trouristCard, setTouristCard] = useState("all");
  const dispatct = useDispatch();
  const state = useSelector((state) => state.singleCountryvisa);
  const state2 = useSelector((state) => state.singlecountry);
  const route = useRouter();
  useEffect(() => {
    if (trouristCard === "all") {
      setvisaCardFilter(state.data);
    } else {
      const newdata = state.data?.filter((info) => {
        return info.visa_type.toLocaleLowerCase() == trouristCard.toLowerCase();
      });
      setvisaCardFilter(newdata);
    }
  }, [trouristCard, state.data]);

  useEffect(() => {
    dispatct(getsinglecountry(slug));
  }, []);

  useEffect(() => {
    if (countrydata) {
      dispatct(getSingleCountryvisa(slug));
    }
  }, [countrydata]);

  useEffect(() => {
    setvisaCardFilter(state.data);
  }, [state]);

  useEffect(() => {
    
      setcountrydata(state2.data);
    
  }, [state2]);

  const [number, setPhone] = useState("");

  const handlePhoneChange = (value) => {
    setPhone(value);
    settextData({ ...textdata, number: number });
  };

  

  const handleSubmit = async (e, me) => {
    const localUserId = window.localStorage.getItem("user_id");

    if (!localUserId) {
      route.push("/login");
      return;
    }

    e.preventDefault();

   
    const payload = {
      user_id: localUserId,
      country_id: countrydata?.id,
      visa_type_id: me,

      status: "pending",
    };

 

    try {
      const response = await axios.post(`${rooturl}/appliedvisas`, payload);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Visa application submitted successfully!",
      });

    } catch (err) {
      
    } finally {
      
    }
  };

  const nemw = [
    {
      id: 0,
    },
    {
      id: 2,
    },
  ];

  // if (visaCardFilter?.length > 0) {
    //

  //   let processingTime = visaCardFilter[0]?.processing_time || 30;
  //  

  //   let today = new Date(2024, 8, 29);
  // 

  //   let visaDate = new Date(today);
  //   visaDate.setDate(today.getDate() + 30);
  //
  //   var date = new Date();
  //   date.setDate(date.getDate() + processingTime);


  //   let options = { year: "numeric", month: "short", day: "numeric" };
  //   let formattedDate = visaDate.toLocaleDateString("en-GB", options);
  
  // } else {
  //  
  // }

  const currentDate = new Date();
  const visaDays = parseInt(countrydata?.GetVisaInDays);
  currentDate.setDate(currentDate.getDate() + visaDays); // Add days to current date

  // Format date to "6 Sep 2024"
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
const [textdata,settextData]=useState();

  const handelchange=(e)=>{
    settextData({...textdata,[e.target.name]:e.target.value})
  }

useEffect(()=>{
let date= new Date(Date.now())
 date=`${date.getDay()}-${date.getMonth()+1}-${date.getFullYear()}`
  settextData({...textdata,date,trip:slug})
},[])


  const handelforSubmit=async(e)=>{
    e.preventDefault()
        // console.log(textdata,"sadjkasdn")
        const info= await axios.post(`${rooturl}/message`,textdata) 
        if(info.data.success){
           Swal.fire({
                  title: "Success!",
                  text: info.data.message,
                  icon: "success",
                  confirmButtonText: "ok",
                });
                settextData()
        }
      }





  return (<>
    {countrydata && 
    <div className="SingleProductData ">
      <div className="h-full  px-5 md:px-16 xl:px-32 flex items-center justify-center my-5 mt-0 md">
        {/* Main Content */}
        <main className=" w-full h-full mt-5">
          <div className="grid grid-cols-3 md:grid-cols-2 gap-1 md:gap-6">
            {/* Left Side: Main Image */}
            <div className="col-span-2 md:col-span-1 bg-danger-400">
              <img
                 src={`${storageurl}/${countrydata?.img?.[0]}`} // Replace with actual image path
                alt="Main image"
                className="w-full h-full object-cover md:h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Side: Thumbnails */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {countrydata?.img?.map((imgsingle,index) => (
                index==0?"":
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md hover:scale-105 transform transition duration-300"
                >
                  <img
                    src={`${storageurl}/${imgsingle}`} // Replace with actual thumbnail paths
                    alt={`Thumbnail ${index + 2}`}
                    className="w-full h-full "
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <div className="grid xl:grid-cols-12 gap-4 mt-5 px-5 md:px-16 xl:px-32">
        <div className="lg:col-span-8">

        <div className="space-y-6 border border-gray-200 p-6 rounded-lg shadow-lg bg-white mb-5">

      <div className="flex flex-wrap items-center justify-between">
    <div className="grid  align-start grid-cols-1 sm:grid-cols-3 gap-6">
      
      <div className="flex items-center space-x-4">
        <div className="text-2xl text-blue-500">
          <FaClock className="lg:w-7 h-7" />
        </div>
        <div>
          <h5 className="text-base md:text-lg font-semibold text-gray-800">Duration</h5>
          <p className="text-gray-600">
            <span id="ContentPlaceHolder1_tour_time_period">{Number(countrydata?.days)-1>9?Number(countrydata?.days)-1:`0${Number(countrydata?.days)-1}`} NIGHTS / {countrydata?.days>9?countrydata?.days:`0${countrydata?.days}`} DAYS</span>
          </p>
        </div>
      </div>

      
      <div className="flex items-center space-x-4">
        <div className="text-2xl text-green-500">
          <FaPaw className="lg:w-7 h-7"  />
        </div>
        <div>
          <h5 className="text-base md:text-lg font-semibold text-gray-800">Tour Type</h5>
          <p className="text-gray-600">{countrydata?.tour_type}</p>
        </div>
      </div>

      
      <div className="flex items-center space-x-4">
        <div className="text-2xl text-orange-500">
          <FaUsers className="lg:w-7 h-7"  />
        </div>
        <div>
          <h5 className="text-base md:text-lg font-semibold text-gray-800">Group Size</h5>
          <p className="text-gray-600">{countrydata?.groupSize} People</p>
        </div>
      </div>
    </div>



   
    <div className="flex items-center space-x-4 mt-4 ">
      <button className="flex items-center space-x-2 text-sm text-neutral-700 hover:text-neutral-900">
        <svg className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
        </svg>
        <span>Share</span>
      </button>
      <button className="flex items-center space-x-2 text-sm text-neutral-700 hover:text-neutral-900">
        <svg className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        <span>Save</span>
      </button>
    </div>
    </div>

 
  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl xl:text-4xl">
   {countrydata?.title}
  </h2>
  <div className="flex items-center gap-x-4 text-gray-600">
    <div className="flex items-center space-x-1 text-sm">
      <svg className="h-[18px] w-[18px] text-orange-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" />
      </svg>
      <span className="font-medium">{countrydata?.ratting}</span>
      <span className="text-neutral-500">(112)</span>
    </div>
    <span>·</span>
    <div className="flex items-center">
      <svg className="h-5 w-5 text-blue-500" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
      <span className="ms-1">{countrydata?.city}, {countrydata?.country}</span>
    </div>
  </div>
        </div>

{countrydata?.stay_information?.map((info,index)=>(
  <div className="mb-5 space-y-6 p-6 bg-white text-black   rounded-lg shadow-md" key={index}>
      <h2 className="text-2xl font-semibold">Stay Information</h2>
      <div className="w-14 border-b-2 border-gray-200 "></div>
      <div className="text-black text-base text-justify  space-y-4">
       <div dangerouslySetInnerHTML={{__html:info.des}} ></div>
      </div>
        </div>
)) }

         
        
        


        
          <p>{countrydata && <CheckList data={countrydata} />}</p>

          











        </div>
        <div className="lg:col-span-4 sticky">
          <form className="space-y-4 border border-gray-300 p-4 rounded-lg m-3" onSubmit={(e)=>handelforSubmit(e)}>
            <div>
              <h1 class="font-semibold text-xl uppercase tracking-wider mb-5 text-green-600">
                Book Your Dream Trip!
              </h1>

              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="to"
              >
                To
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-red-500">
                <FaLocationDot />
                </span>
                  
                <input
                  id="to"
                  type="text"
                  placeholder="Search Destination"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
                  name="to"
                  value={textdata?.to}
                  required
                  onChange={(e)=>handelchange(e)}
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
              <div className="relative">
                <span className="absolute left-3 top-2 text-red-500">
                   <FaMapLocationDot />
                </span>
                <input
                  id="from"
                  type="text"
                  placeholder="Chandigarh"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
                  name="from"
                  value={textdata?.from}
                  required
                  onChange={(e)=>handelchange(e)}
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
              <div className="relative">
                <span className="absolute left-3 top-2 text-red-500">
                  <FaUser />
                </span>
                <input
                  id="text"
                  type="text"
                  placeholder="Enter Your Name "
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
                  name="name"
                value={textdata?.name}
                required
                onChange={(e)=>handelchange(e)}
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
                  onChange={(e)=>handelchange(e)}
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

            }
            </>
  );
}
