"use client"

import { configureStore } from "@reduxjs/toolkit"
import countryslices from "./Slices/countryslices"
import singleCountryvisa from "./Slices/singlecountryvisa"
import singlecountry from "./Slices/singlecountryslice"
import testimonial from "./Slices/testimonialslice"
import allBlog from "./Slices/allBlogslice"
import homeSlice from "./Slices/homeSlice"
import popularcities from "./Slices/popularcities"
export const store=configureStore({
    reducer:{countryslices,singleCountryvisa,singlecountry,testimonial,allBlog,homeSlice,popularcities},
   
})

