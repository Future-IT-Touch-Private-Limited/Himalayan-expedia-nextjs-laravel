'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { rooturl } from './Store/Rooturl';

const Faq = () => {
  const [faq,setData]=useState();
  
  useEffect(() => {
    const fetchapi = async () => {
      try {
        const info = await axios.get(`${rooturl}/about`);
        setData(info?.data?.faq);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchapi();
  }, []);
  

  // State for managing opened FAQ
  const [openedIndex, setOpenedIndex] = useState(null); // No question open by default

  const toggleQuestion = (index) => {
    setOpenedIndex(openedIndex === index ? null : index); // Toggle open/close
  };

  return (
    <section className="bg-[#f9f9f9] py-5 lg:py-10 px-5 md:px-16 xl:px-32 my-5 md:my-10 lg:my-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Ask Frequently</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Get answers to common questions and gain clarity.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between  gap-10">
        {/* Left Side: Image */}
        <div className="w-[100%] flex justify-center md:w-[100%] lg:w-1/2">
          <img
            src="/img/our-features.webp"
            alt="FAQ Image"
            className="w-full h-auto rounded-lg max-w-[100%] md:max-w-[60%] lg:max-w-[80%] "
          />
        </div>

        {/* Right Side: FAQ */}
        <div className="lg:w-1/2">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faq?.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  className="w-full flex items-center justify-between text-left text-lg font-medium text-gray-800 focus:outline-none"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openedIndex === index}
                >
                  <span>{faq.question}</span>
                  {openedIndex === index ? (
                    <FaMinus className="text-gray-500" />
                  ) : (
                    <FaPlus className="text-gray-500" />
                  )}
                </button>
                {openedIndex === index && (
                  <p className="text-gray-600 mt-3 pl-0">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
