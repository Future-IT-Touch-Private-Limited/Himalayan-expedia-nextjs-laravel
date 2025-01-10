"use client";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaEnvelope, FaCar, FaBicycle, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useSelector } from "react-redux";
import { storageurl } from "./Store/Rooturl";
export default function Footer() {

  const state= useSelector(state=>state.homeSlice)


  return (
    <>
      <footer className="Footer bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 pb-5 mt-0 shadow-lg">
    

        <div className="px-5 md:px-8 lg:px-16 xl:px-32">
          <div className="grid gap-8 lg:grid-cols-3 xl:grid-cols-4">
        
            <div className="flex flex-col items-center lg:items-start gap-4">
              <Link href="/">
                <figure className="w-[100px] bg-white rounded-md p-2 transition hover:shadow-xl text-sm text-justify">
                  <img
                    className="rounded-md object-cover w-[120px]  sm-text-justify"
                    src={`${storageurl}/${state?.info?.logo}`}
                    width={100}
                    height={50}
                    alt="Site Logo"
                  />
                </figure>
              </Link>
              <p className="text-sm text-justify lg:text-left leading-relaxed text-gray-400">
                Discover your next adventure with our reliable hotels and  cars for every journey.
              </p>
   
            </div>

   
            <div className="flex flex-col gap-3">
              <h6 className="text-lg font-semibold border-l-4 border-yellow-500 pl-4 mb-2">
                Quick Links
              </h6>
              <Link
                href="/"
                className="flex items-center text-sm hover:underline hover:text-yellow-500 transition-all"
              >
                <FaHome className="mr-2 text-yellow-500" /> Home
              </Link>
              <Link
                href="/about"
                className="flex items-center text-sm hover:underline hover:text-yellow-500 transition-all"
              >
                <FaInfoCircle className="mr-2 text-yellow-500" /> About Us
              </Link>
              <Link
                href="/blog"
                className="flex items-center text-sm hover:underline hover:text-yellow-500 transition-all"
              >
                <FaInfoCircle className="mr-2 text-yellow-500" /> Blog
              </Link>
              <Link
                href="/contact"
                className="flex items-center text-sm hover:underline hover:text-yellow-500 transition-all"
              >
                <FaPhoneAlt className="mr-2 text-yellow-500" /> Contact Us
              </Link>
            
               
            </div>

         
            <div className="flex flex-col gap-3">
              <h6 className="text-lg font-semibold border-l-4 border-yellow-500 pl-4 mb-2">
                Contact Information
              </h6>
              <p className="text-sm flex items-center text-gray-400">
                <span className="mr-2 text-yellow-500">📍</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, obcaecati?
              </p>
              <p className="text-sm flex items-center text-gray-400">
                <span className="mr-2 text-yellow-500">📧</span>
                <a href={`mailto:${state?.info?.email}`} className="hover:underline">
                mailto:{state?.info?.email}
                </a>
              </p>
              <p className="text-sm flex items-center text-gray-400">
                <span className="mr-2 text-yellow-500">📞</span>
                <Link href={`tel:${state?.info?.mobile_number}`} className="hover:underline">
                {state?.info?.mobile_number}
                </Link>
              </p>
            </div>


            <div className="flex flex-col gap-4 text-center lg:text-left lg:items-start">
           
              <div className="flex flex-col gap-4  lg:text-left lg:items-start text-justify md">
              <h6 className="text-lg font-semibold mb-2">Follow Us</h6>
              <div className="flex items-center space-x-4 justify-start md lg:justify-start ">
                <Link href={`${state?.info?.facebooklink}`} target="_blank" className="hover:text-yellow-500 transition-all">
                  <FaFacebook size={24} />
                </Link>
                <Link href={`${state?.info?.instagramlink}`}>
                  <FaInstagram size={24} />
                </Link>
                <Link href={`${state?.info?.youtubelink}`} target="_blank" className="hover:text-yellow-500 transition-all">
                  <FaYoutube size={24} />
                </Link>
              </div>
            </div>
              <div className="mt-4 text-left lg:text-left">
                <h6 className="text-lg font-semibold mb-2">Contact Us</h6>
                <p className="text-sm text-gray-400">
                  We are here to assist you with any queries.
                </p>
                <Link href="/contact" className="text-yellow-500 hover:underline">
                  Reach out to us
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-600" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white">
  <p className="text-center md:text-left">
    © {new Date().getFullYear()} Booking. All rights reserved.
  </p>
  <p className="text-center mt-4 md:mt-0">
    Designed by <a href="https://www.futuretouch.in/" className="hover:underline text-white">Future IT Touch ❤</a>
  </p>
  <div className="flex flex-wrap justify-center space-x-4">
    <Link href="/privacy-policy" className="hover:underline">
      Privacy Policy
    </Link>
    <span>|</span>
    <Link href="/terms-and-conditions" className="hover:underline">
      Terms & Conditions
    </Link>
    <span>|</span>
    <Link href="/refund-policy" className="hover:underline">
      Refund Policy
    </Link>
  </div>

</div>



        </div>
      </footer>



      <div className="hidden main-icon-wstp">
        <Link href="tel:+91-9779774167"><button class="buttons">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 32 32" height="32" fill="none" class="svg-icon"><path strokeWidth="2" strokeLinecap="round" stroke="#fff" fillRule="evenodd" d="m24.8868 19.1288c-1.0274-.1308-2.036-.3815-3.0052-.7467-.7878-.29-1.6724-.1034-2.276.48-.797.8075-2.0493.9936-2.9664.3258-1.4484-1.055-2.7233-2.3295-3.7783-3.7776-.6681-.9168-.4819-2.1691.3255-2.9659.5728-.6019.7584-1.4748.4802-2.2577-.3987-.98875-.6792-2.02109-.8358-3.07557-.2043-1.03534-1.1138-1.7807-2.1694-1.77778h-3.18289c-.60654-.00074-1.18614.25037-1.60035.69334-.40152.44503-.59539 1.03943-.53345 1.63555.344 3.31056 1.47164 6.49166 3.28961 9.27986 1.64878 2.5904 3.84608 4.7872 6.43688 6.4356 2.7927 1.797 5.9636 2.9227 9.2644 3.289h.1778c.5409.0036 1.0626-.2 1.4581-.569.444-.406.6957-.9806.6935-1.5822v-3.1821c.0429-1.0763-.7171-2.0185-1.7782-2.2046z" clipRule="evenodd"></path></svg>
        </button></Link>

        <Link href="https://api.whatsapp.com/send?phone=9779774167&amp;text=">
          <button className="Btn">
            <span className="svgContainer">
              <svg
                viewBox="0 0 448 512"
                fill="white"
                height="1.6em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                ></path>
              </svg>
            </span>
            <span className="BG"></span>
          </button>
        </Link>

      </div>
    </>
  );
}
