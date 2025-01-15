

import SearchPlaces from '@/app/components/SearchPlaces/SearchPlaces'
import TestiMonial from '@/app/components/testimonials/TestiMonial'
import React from 'react'

import Comp from './Comp'
export default function page({params: slug}) {
  return (
  <>

   <Comp slug={slug}/>


  </>
  )
}
