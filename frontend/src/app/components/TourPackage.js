import React from 'react'
import Link from 'next/link';
export default function TourPackage() {
    const tourPackage = [
        {
          img: "/img/Tso-Moriri.webp",
          name: "Tsomoriri Lake Tour",
          duration: "2 N / 3 D",
          link: "/hot-tour/Tsomoriri",
        },
        {
          img: "/img/Ladakh.webp",
          name: "Discover Ladakh Tour",
          duration: "7 N / 8 D",
          link: "/hot-tour/Ladakh",
        },
        {
          img: "/img/sham-valley.webp",
          name: "Sham Trek Tour",
          duration: "3 N / 4 D",
          link: "/hot-tour/Sham",
        },
        {
          img: "/img/manali-to-leh.webp",
          name: "Manali to Leh Bike Tour",
          duration: "10 N / 11 D",
          link: "/hot-tour/Manali",
        },
        {
          img: "/img/Stok-Matho.webp",
          name: "Stok Matho Shang Trek Tour",
          duration: "5 N / 6 D",
          link: "/hot-tour/Shang",
        },
        {
          img: "/img/Ladakh.webp",
          name: "Nubra Valley Tour",
          duration: "2 N / 3 D",
          link: "/hot-tour/Nubra",
        },
      ];
  return (
    <>
        <div className=" sticky top-10 p-3 md:p-6 rounded-lg shadow-lg xl:max-w-md xl:mx-auto">
            <h2 className="font-bold text-xl lg:text-2xl text-gray-800 mb-4">
              Hot Tour Packages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-baseline xl:grid-cols-1 space-y-2 md:space-y-4">
              {tourPackage.map((elm, index) => (
                <Link href={elm.link} key={index}>
                  <div className="flex cursor-pointer items-center gap-4 px-4 py-3  rounded-lg shadow-sm hover:shadow-xl transform transition-all duration-300 ease-in-out hover:bg-gray-100">
                    <img
                      src={elm.img}
                      alt={elm.name}
                      className="h-16 w-16 rounded-full object-cover border-2 border-gray-300"
                    />
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        {elm.name}
                      </p>
                      <span className="text-sm text-gray-500">
                        Duration: {elm.duration}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
    </>
  )
}
