

import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaCalendarAlt,
  FaDollarSign,
  FaPen,
} from "react-icons/fa";

export default function ServiceForm() {
  return (
    <section>
      <div className=" p-4 md:p-6 shadow-2xl rounded-lg md:shadow-lg w-full">
        <h5 className="text-xl font-semibold mb-6 text-gray-800">
          Fill Your Details
        </h5>
        <form action="" className="space-y-5">
          {/* Hotel Destination */}
          <div className="flex flex-col">
            <label
              htmlFor="destination"
              className="text-gray-700 font-medium mb-2"
            >
              Hotel Destination
            </label>
            <div className="flex bg-white items-center border border-gray-300 rounded-md">
              <FaMapMarkerAlt className="text-gray-500 ml-4" />
              <input
                id="destination"
                type="text"
                placeholder="Hotel destination"
                className="w-full p-3 pl-2 border-0 focus:outline-none"
              />
            </div>
          </div>
          {/* check date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Check-in Date */}
          <div className="flex flex-col">
            <label htmlFor="checkin" className="text-gray-700 font-medium mb-2">
              Check-in Date
            </label>
            <div className="flex items-center border bg-white border-gray-300 rounded-md">
              <FaCalendarAlt className="text-gray-500 ml-4" />
              <input
                id="checkin"
                type="date"
                className="w-full p-3 pl-2 border-0 focus:outline-none"
              />
            </div>
          </div>

          {/* Check-out Date */}
          <div className="flex flex-col">
            <label
              htmlFor="checkout"
              className="text-gray-700 font-medium mb-2"
            >
              Check-out Date
            </label>
            <div className="flex items-center bg-white border border-gray-300 rounded-md">
              <FaCalendarAlt className="text-gray-500 ml-4" />
              <input
                id="checkout"
                type="date"
                className="w-full p-3 pl-2 border-0 focus:outline-none"
              />
            </div>
          </div>

        </div>
        
          {/* No. of Persons and No. of Rooms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="noOfPersons"
                className="text-gray-700 font-medium mb-2"
              >
                No. of Persons
              </label>
              <div className="flex items-center bg-white border border-gray-300 rounded-md">
                <FaUser className="text-gray-500 ml-4" />
                <input
                  id="noOfPersons"
                  type="number"
                  min="1"
                  placeholder="No. of persons"
                  className="w-full p-3 pl-2 border-0 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="noOfRooms"
                className="text-gray-700 font-medium mb-2"
              >
                No. of Rooms
              </label>
              <div className="flex items-center border bg-white border-gray-300 rounded-md">
                <FaUser className="text-gray-500 ml-4" />
                <input
                  id="noOfRooms"
                  type="number"
                  min="1"
                  placeholder="No. of rooms"
                  className="w-full p-3 pl-2 border-0 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Budget for Rooms */}
          <div className="flex flex-col">
            <label htmlFor="budget" className="text-gray-700 font-medium mb-2">
              Budget for Rooms
            </label>
            <div className="flex items-center border bg-white border-gray-300 rounded-md">
              <FaDollarSign className="text-gray-500 ml-4" />
              <input
                id="budget"
                type="number"
                min="0"
                placeholder="Budget for rooms"
                className="w-full p-3 pl-2 border-0 focus:outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="text-gray-700 font-medium mb-2"
            >
              Description (up to 2000 characters)
            </label>
            <div className="flex items-center border bg-white border-gray-300 rounded-md">
              <FaPen className="text-gray-500 ml-4" />
              <textarea
                id="description"
                rows="4"
                placeholder="Enter a description (up to 2000 characters)"
                className="w-full p-3 pl-2 border-0 focus:outline-none"
              />
            </div>
          </div>

          {/* Personal Information Section */}
          <h5 className="text-xl font-semibold mt-8 mb-6 text-gray-800">
            Your Personal Information
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <div className="flex items-center border bg-white border-gray-300 rounded-md">
                <FaUser className="text-gray-500 ml-4" />
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-3 pl-2 border-0 focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium mb-2">
                Your E-mail
              </label>
              <div className="flex items-center border bg-white border-gray-300 rounded-md">
                <FaEnvelope className="text-gray-500 ml-4" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full p-3 pl-2 border-0 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Country */}
            <div className="flex flex-col">
              <label
                htmlFor="country"
                className="text-gray-700 font-medium mb-2"
              >
                Select Country
              </label>
              <div className="flex items-center border bg-white border-gray-300 rounded-md">
                <FaMapMarkerAlt className="text-gray-500 ml-4" />
                <input
                  id="country"
                  type="text"
                  placeholder="Enter your country"
                  className="w-full p-3 pl-2 border-0 focus:outline-none"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col">
              <label
                htmlFor="contact"
                className="text-gray-700 font-medium mb-2"
              >
                Contact/Mobile No.
              </label>
              <div className="flex items-center bg-white border border-gray-300 rounded-md">
                <FaPhone className="text-gray-500 ml-4" />
                <input
                  id="contact"
                  type="text"
                  placeholder="Enter your contact number"
                  className="w-full p-3 pl-2 border-0 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="w-full py-3  text-white rounded-md font-semibold bg-red-500  hover:bg-red-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
