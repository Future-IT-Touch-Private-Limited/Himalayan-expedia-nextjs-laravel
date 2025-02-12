"use client"

import React,{useEffect} from 'react';
import Link from 'next/link';

import { useDispatch, useSelector } from "react-redux";
import { getpopularCity } from "./Store/Slices/popularcities";
import { storageurl } from "./Store/Rooturl";
const locations = [
  {
    title: 'New York',
    image: 'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    distance: '19 minutes drive',
    link: 'https://chisfis-nextjs.vercel.app/listing-stay-map',
    badge: '1,882',
  },
  {
    title: 'Singapore',
    image: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    distance: '19 minutes drive',
    link: 'https://chisfis-nextjs.vercel.app/listing-stay-map',
    badge: '8,288',
  },
  {
    title: 'Paris',
    image: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    distance: '19 minutes drive',
    link: 'https://chisfis-nextjs.vercel.app/listing-stay-map',
    badge: '1,288',
  },
  {
    title: 'Paris',
    image: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    distance: '19 minutes drive',
    link: 'https://chisfis-nextjs.vercel.app/listing-stay-map',
    badge: '1,288',
  },

  {
    title: 'Paris',
    image: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    distance: '19 minutes drive',
    link: 'https://chisfis-nextjs.vercel.app/listing-stay-map',
    badge: '1,288',
  },

  {
    title: 'Paris',
    image: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    distance: '19 minutes drive',
    link: 'https://chisfis-nextjs.vercel.app/listing-stay-map',
    badge: '1,288',
  },

  {
    title: 'Paris',
    image: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    distance: '19 minutes drive',
    link: 'https://chisfis-nextjs.vercel.app/listing-stay-map',
    badge: '1,288',
  },

  {
    title: 'Paris',
    image: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    distance: '19 minutes drive',
    link: 'https://chisfis-nextjs.vercel.app/listing-stay-map',
    badge: '1,288',
  },
];

const Explore = () => {
  const dispatch=useDispatch()
  const popularcities =useSelector(state=>state.popularcities)

  useEffect(()=>{
 
    dispatch(getpopularCity())


  },[])

  console.log('popularcities',popularcities)


  return (
    <>
      <div className="nc-SectionGridCategoryBox relative my-5 md:my-10 lg:my-16">
        <div className="nc-Section-Heading relative mb-10 text-neutral-900 dark:text-neutral-50">
          <div className="mx-auto mb-4 w-full max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 lg:text-4xl">Explore nearby</h2>
            <span className="mt-2 block text-base font-normal text-neutral-500 dark:text-neutral-400 sm:text-lg md:mt-3">
              Discover great places near where you live
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8 px-5 md:px-16 xl:px-32 py-3">
          {popularcities?.data?.map((location, index) => (
           <>
            <Link
              key={index}
              href={`city/${location.slug}`}
              className="nc-CardCategoryBox1 nc-box-has-hover nc-dark-box-bg-has-hover relative flex flex-col md:flex-row items-center p-3 sm:p-6 border border-gray-350 rounded-2xl text-center md:text-start"
            
            >

            
             
              <div className="relative h-22 w-22 flex-shrink-0 overflow-hidden rounded-full">
                <img
                  alt={`Image of ${location.cityname}`}
                  src={`${storageurl}/${location.img}`}
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <div className="ms-4 flex-grow overflow-hidden">
                <h2 className="text-base font-medium">
                  <span className="line-clamp-1">{location.cityname}</span>
                </h2>
                {/* <span className="mt-2 block text-sm text-neutral-500 dark:text-neutral-400">
                19 minutes drive
                </span> */}
              </div>
            </Link>
           </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Explore;
