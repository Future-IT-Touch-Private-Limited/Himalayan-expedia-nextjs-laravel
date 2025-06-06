import React from "react";
import Image from "next/image";
import { BiRupee } from "react-icons/bi";
import Link from "next/link";
import { storageurl } from "../Store/Rooturl";
import { FaStar } from "react-icons/fa";

const SearchPlaceCard = ({ cardElment }) => {

  
  const {
    cover_img,
    countrystatus = 0,
    Countryname,
    visa,
    title,
    price,
    days,
    slug,
    ratting,
    GetVisaInDays,
    taxprice = 343,
  } = cardElment;

  const priceNum = +price;
  const oldPrice = priceNum + 1000;
  // const calculatedValue = (discountedPrice * (+price / 100)).toFixed(4);
  const calulcateDiscount = Math.floor(
    ((oldPrice - priceNum) / oldPrice) * 100
  );
  return (
    <Link
      href={`/${slug}`}
      className="group  card bg-white rounded-xl flex flex-col gap-2 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
    >
      <figure className="relative">
        <img
          className="w-full h-60 rounded-t-xl object-cover"
          src={`${storageurl}/${cover_img}`}
          width={600}
          height={600}
          alt="Singapore"
        />
        <span className="bg-[white] backdrop:blur-[3px] h-10 w-10 flex justify-center items-center text-green-500 absolute z-10 top-2 right-2 rounded-full  font-bold text-xs shadow-md">
          {/* {imgText} */}
          <span>-{calulcateDiscount}%</span>
        </span>
        <span className="bg-[white] backdrop:blur-[3px]  text-green-500 absolute z-10 bottom-0 left-0 px-4 rounded-tr-full  font-bold text-xs group-hover:text-gray-400 ">
          {/* {imgText} */}
          <span>{countrystatus && countrystatus[0]}</span>
        </span>
      </figure>
      <div className="px-5 py-4 lg:py-2 flex flex-col  lg:gap-2">
        <div className="flex justify-between items-center">
          <h5 className="text-lg font-bold text-slate-700"> {title}</h5>
          {/* <span className="text-xs bg-[#E7F4F6] px-3 py-1 rounded-full shadow-sm">
            {countrystatus && countrystatus[0]}
          </span> */}
          <span className="flex items-center">
            <FaStar className="text-yellow-500" /> {ratting} 
          </span>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-gray-300 to-transparent"></div>
        <div>
          <div className="flex flex-col bg-white rounded-lg  text-sm text-gray-700">
            <span className="text-lg font-semibold text-green-600">
              Rs {price}/-
            </span>
            <span className="text-gray-500">Price starts from</span>
      
            <span className="text-gray-600">
              Munnar - Thekkady - Alleppey - Cochin
            </span>
            <span className="mt-2 text-gray-500">{Number(days)-1>9?Number(days)-1:`0${Number(days)-1}`} Nights / {days>9?days:`0${days}`} Days</span>
          </div>

          <div className="flex justify-between items-center mt-1">
            <div>
              <div className="flex items-center ">
                <h5 className="text-lg font-bold text-gray-800 flex  items-center">
                  {/* <BiRupee /> */}
                  {/* <span>{price}</span> */}
                </h5>
                <h5 className="text-xs pt-3 font-bold text-gray-500 flex  items-center">
                  {/* <BiRupee /> */}
                  {/* <span><del>{oldPrice}</del></span> */}
                </h5>
              </div>
              {/* <div className="text-sm text-gray-600" >+ ₹{taxprice} (Fees+Tax)</div> */}
            </div>
            {/* <h5 className="text-lg font-bold text-gray-800">{GetVisaInDays} Days </h5> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchPlaceCard;
