import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import { storageurl } from './Store/Rooturl';

const Vision = ({data}) => {
  return (<>
  {data &&
    <div className='px-5 md:px-16 xl:px-32 my-5 md:mt-20 space-y-5'>
{data?.map((info,index)=>(
  <section className={`flex flex-col-reverse  ${index %2==0?"lg:flex-row":"lg:flex-row-reverse"} md:gap-10 items-center `}>
     
     <div className="lg:w-1/2 flex  relative w-full h-64 lg:h-[380px]">
       <img
           src={`${storageurl}/${info.image}`}
         alt="Our Mission"
         layout="fill"
         objectFit="contain"
         className="rounded-lg w-full h-full "
       />
     </div>

   
     <div className="lg:w-1/2 ">
       <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
       <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
       {info.text}
       </p>
     </div>
   </section>
))}


        
   {/* <section className="flex flex-col-reverse lg:flex-row-reverse  md:gap-10  items-center ">
     
      <div className="lg:w-1/2 relative w-full h-64 lg:h-[380px]">
        <img
         src="/img/conatct1.webp"
          alt="Our Mission"
          layout="fill"
          objectFit="contain"
          className="rounded-lg w-full h-full"
        />
      </div>

    
      <div className="lg:w-1/2 px-4 lg:px-8 py-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
        Our vision is to become the leading self-drive car rental service, known for our unwavering dedication to customer satisfaction and quality. We aim to empower people with the freedom to explore, travel, and discover new destinations on their terms. By continually enhancing our fleet, services, and technology, we aspire to set new standards in the car rental industry, making mobility easier, safer, and more enjoyable for all.
        </p>
      </div>
    </section> */}
    </div>

}</>
  );
}

export default Vision;
