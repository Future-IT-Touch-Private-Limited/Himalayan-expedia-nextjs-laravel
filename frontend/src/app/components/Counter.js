"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const [happyUsers, setHappyUsers] = useState(0);
  const [casesResolved, setCasesResolved] = useState(0);
  const [expertLawyers, setExpertLawyers] = useState(0);
  const [specialities, setSpecialities] = useState(0);

  useEffect(() => {
    const duration = 2000; // Duration for the animation

    const incrementCounter = (setCounter, targetValue, startValue = 0) => {
      const incrementTime = Math.floor(duration / (targetValue - startValue));
      const counterInterval = setInterval(() => {
        startValue += 1;
        setCounter(startValue);
        if (startValue >= targetValue) {
          clearInterval(counterInterval);
        }
      }, incrementTime);
    };

    // Increment counters with the specified target values
    incrementCounter(setHappyUsers, 600, 0); // From 0 to 600
    incrementCounter(setCasesResolved, 500, 0); // From 0 to 500
    incrementCounter(setExpertLawyers, 400, 0); // From 0 to 400
    incrementCounter(setSpecialities, 300, 0); // From 0 to 300
  }, []);
  const state= useSelector(state=>state.homeSlice)
  // bg-[#52C9B7]
  
  return (
    <>
      <div className="py-6 sm:py-8 lg:py-12 mt-0">
        <div className=" " style={{background:state?.info?.color}}>
          <div className="max-w-screen-xl px-4 md:px-8 mx-auto relative top-16">
            <div className="flex flex-col sm:flex-row justify-between items-center border rounded-lg shadow-lg p-8 bg-gray-50">
              <div className="text-center p-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000]">
                  {happyUsers.toLocaleString()}+
                </h2>
                <p className="text-xs sm:text-sm lg:text-base text-gray-500">
                Happy Customers
                </p>
              </div>
              <div className="hidden sm:block h-16 border-l border-gray-300"></div>
              <div className="text-center p-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000]">
                  {casesResolved.toLocaleString()}+
                </h2>
                <p className="text-xs sm:text-sm lg:text-base text-gray-500">
                Kilometers Driven
                </p>
              </div>
              <div className="hidden sm:block h-16 border-l border-gray-300"></div>
              <div className="text-center p-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000]">
                  {expertLawyers}+
                </h2>
                <p className="text-xs sm:text-sm lg:text-base text-gray-500">
                Customer Satisfaction Rate
                </p>
              </div>
              <div className="hidden sm:block h-16 border-l border-gray-300"></div>
              <div className="text-center p-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000]">
                  {specialities}+
                </h2>
                <p className="text-xs sm:text-sm lg:text-base text-gray-500">
                Vehicles Available
                </p>
              </div>
              <div className="text-center p-4 flex items-center">
                <img
                    src="/img/google.webp"
                  alt="Google Logo"
                  className="h-12 sm:h-14 lg:h-16"
                />
                <div className="ml-4 text-left">
                  <div className="flex items-center">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000]">
                      4.4/5
                    </h2>
                    <div className="ml-2 flex">
                     
                      <svg
                        className="w-5 sm:w-6 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.375 2.454a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.538 1.118l-3.375-2.454a1 1 0 00-1.176 0l-3.375 2.454c-.783.57-1.838-.197-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.535 9.384c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.957z" />
                      </svg>
                      <svg
                        className="w-5 sm:w-6 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.375 2.454a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.538 1.118l-3.375-2.454a1 1 0 00-1.176 0l-3.375 2.454c-.783.57-1.838-.197-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.535 9.384c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.957z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-500">
                    16k+ Happy Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
