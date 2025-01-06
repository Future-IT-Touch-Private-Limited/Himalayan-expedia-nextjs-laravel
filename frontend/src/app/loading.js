import React from "react"

export default function loading() {
  return (
    <div className='h-screen w-screen bg-white fixed z-50 flex justify-center items-center'>
    <img src="/loader.png" className='h-[10rem] animate-spin w-[10rem]' />
  </div>
  )
}
