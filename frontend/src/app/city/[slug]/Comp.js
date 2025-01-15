'use client'


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCountry } from "@/app/components/Store/Slices/countryslices";
import SearchplaceNew from '@/app/components/SearchPlaces/SearchplaceNew'
import TestiMonial from '@/app/components/testimonials/TestiMonial'

export default function Comp({slug}) {
    const dispatch = useDispatch();
    const  data = useSelector((state) => state.countryslices);
  
    useEffect(() => {
      dispatch(getCountry(slug.slug)); // Fetch data based on the slug
    }, [dispatch, slug]);
  

    
    console.log('24r42r42r42',data)
  
  return (
   <>
    <SearchplaceNew dataMine={data} />
  <TestiMonial/>

   </>
  )
}
