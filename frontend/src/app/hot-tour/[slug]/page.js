"use client";
import React, { useState } from "react";
import Link from "next/link";
import ServiceForm from "@/app/components/ServiceFrom";
import TourPackage from "@/app/components/TourPackage";
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
const Packagedata = {
  Tsomoriri: {
    banerImg: "/img/TsomoririBanner.webp",
    bannerHeading: "Tsomoriri Lake Tour",
    bannerPara:      "Tsomoriri Lake, situated in the heart of Ladakh, is one of the most picturesque destinations in India. ",
    contentImg:"/img/TsomoririContentimg.webp",
    packageName: "Tsomoriri Lake Tour",
    destination: "Tsomoriri Lake, Leh-Ladakh",
    duration: "5 Days, 4 Nights",
    price: "₹25,000",
    highlights: [
      "Visit to the serene Tsomoriri Lake",
      "Explore the local wildlife and bird watching",
      "Trekking around the lake and nearby hills",
      "Cultural experience with local nomadic tribes",
      "Camping by the lakeside under the stars",
    ],
    inclusions: [
      "Accommodation in tents and guesthouses",
      "All meals (breakfast, lunch, dinner)",
      "Transportation (from Leh to Tsomoriri and back)",
      "Experienced guide",
      "Entry permits and taxes",
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Additional activities or excursions not mentioned in the itinerary",
    ],
    bestTimeToVisit: "May to September",
    itinerary: [
      {
        day: 1,
        activity: "Arrival at Leh, transfer to the hotel, acclimatization.",
      },
      {
        day: 2,
        activity: "Drive to Tsomoriri Lake, enjoy the serene beauty.",
      },
      {
        day: 3,
        activity: "Trek around the lake and explore nearby hills.",
      },
      {
        day: 4,
        activity:
          "Cultural interaction with local tribes, enjoy a lakeside camping experience.",
      },
      {
        day: 5,
        activity: "Drive back to Leh, departure.",
      },
    ],
    faqdata: [
        {
          question: "What is the best time to visit Tsomoriri Lake?",
          answer:
            "The best time to visit is from May to September, when the weather is pleasant and the lake is most beautiful.",
        },
        {
          question: "Is there a guide for the tour?",
          answer:
            "Yes, an experienced guide will be provided throughout the tour to assist and ensure your safety.",
        },
        {
          question: "What type of accommodation is included?",
          answer:
            "Accommodation is provided in tents and guesthouses, offering basic amenities for a comfortable stay.",
        },
        {
          question: "Can I go trekking around Tsomoriri Lake?",
          answer:
            "Yes, the tour includes trekking around the lake and nearby hills for a scenic experience.",
        },
        {
          question: "Are meals included in the tour?",
          answer:
            "Yes, all meals (breakfast, lunch, and dinner) are included in the package.",
        },
        {
          question: "Is there a medical facility available?",
          answer:
            "There is no dedicated medical facility, but guides are trained in first aid, and Leh has the nearest medical center.",
        },
        {
          question: "What should I pack for the tour?",
          answer:
            "Pack warm clothing, trekking shoes, sunscreen, and personal items like medications.",
        },
        {
          question: "What is the cancellation policy?",
          answer:
            "Cancellation policies vary, but flexible bookings can usually be canceled up to 24 hours before the tour.",
        },
      ]
  },
  Ladakh: {
    banerImg: "/img/LadakhBanner.webp",
    bannerHeading: "Discover Ladakh Tour",
    bannerPara:
      "Ladakh, the Land of High Passes, is known for its breathtaking landscapes, ancient monasteries, and thrilling adventure routes. Explore serene lakes, vast valleys, and the majestic Nubra Valley on this unforgettable 7N/8D journey.",
    contentImg:"/img/ladkhContentimg.webp",
    packageName: "Discover Ladakh",
    destination: "Ladakh, India",
    duration: "7 Days, 6 Nights",
    price: "₹35,000",
    highlights: [
      "Visit the iconic Pangong Lake and Nubra Valley",
      "Explore the ancient monasteries and palaces",
      "Stunning views of the Himalayas and high-altitude deserts",
      "Adventure activities like trekking, camel ride in Nubra Valley",
      "Cultural experiences with the locals",
    ],
    inclusions: [
      "Accommodation in hotels and guesthouses",
      "All meals (breakfast, lunch, dinner)",
      "Transportation (including airport transfers and sightseeing)",
      "Experienced guide and driver",
      "Entry permits and taxes",
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Additional activities or excursions not mentioned in the itinerary",
    ],
    bestTimeToVisit: "May to September",
    itinerary: [
      {
        day: 1,
        activity: "Arrival in Leh, transfer to the hotel for acclimatization.",
      },
      {
        day: 2,
        activity: "Visit Shanti Stupa and Leh Palace, local sightseeing.",
      },
      {
        day: 3,
        activity:
          "Drive to Nubra Valley via Khardung La Pass, explore the sand dunes and ride a Bactrian camel.",
      },
      {
        day: 4,
        activity:
          "Visit the Diskit Monastery and enjoy the scenic beauty of Nubra Valley.",
      },
      {
        day: 5,
        activity:
          "Drive to Pangong Lake, enjoy the stunning views of the lake.",
      },
      {
        day: 6,
        activity:
          "Return to Leh, visit the Hemis Monastery and Thiksey Monastery.",
      },
      {
        day: 7,
        activity: "Departure from Leh, transfer to the airport.",
      },
    ],
    faqdata: [
        {
          question: "What is the best time to visit Ladakh?",
          answer:
            "The best time to visit Ladakh is between May and September when the weather is most favorable for sightseeing and adventure activities.",
        },
        {
          question: "Is there a guide for the tour?",
          answer:
            "Yes, a local guide will accompany you to help you explore Ladakh's culture, history, and hidden gems safely.",
        },
        {
          question: "What type of accommodation is included?",
          answer:
            "Accommodation is provided in hotels, guesthouses, and camps, offering a range of comfort levels depending on the location.",
        },
        {
          question: "Can I go trekking in Ladakh?",
          answer:
            "Yes, Ladakh offers several trekking options like the Markha Valley trek, Nubra Valley trek, and others, all included in some tours.",
        },
        {
          question: "Are meals included in the tour?",
          answer:
            "Yes, all meals (breakfast, lunch, and dinner) are provided during the tour, and the cuisine will include both local and Indian dishes.",
        },
        {
          question: "Is there a medical facility available?",
          answer:
            "While Ladakh has basic healthcare facilities, it is advisable to carry any necessary medications. Leh, the main town, has a hospital for emergencies.",
        },
        {
          question: "What should I pack for the Ladakh tour?",
          answer:
            "Make sure to pack warm clothes, sunscreen, trekking shoes, a hat, sunglasses, and any personal medications.",
        },
        {
          question: "What is the cancellation policy?",
          answer:
            "Cancellation policies depend on the booking type, but flexible bookings typically allow cancellations up to 24 hours before the start of the tour.",
        },
      ]
  },
  Sham: {
    banerImg: "/img/Sham.webp",
    bannerHeading: "Sham Trek Tour",
    bannerPara:"The Sham Trek in Ladakh takes you through scenic valleys, ancient monasteries, and stunning landscapes. This 3N/4D adventure unveils the hidden beauty of Ladakh’s rural villages and untouched nature.",
    contentImg:"/img/Shamcontentimg.webp",

    packageName: "Sham Trek Tour",
    destination: "Ladakh, India",
    duration: "8 Days, 7 Nights",
    price: "₹40,000",
    highlights: [
      "Trek through the stunning Sham Valley, also known as the 'Chilling to Leh' trek",
      "Experience the untouched beauty of Ladakhi villages",
      "Visit the ancient monasteries of Alchi, Likir, and Spituk",
      "Walk through the remote and peaceful landscapes",
      "Camping and homestay experiences in the Ladakhi villages",
    ],
    inclusions: [
      "Accommodation in guesthouses, tents, and homestays",
      "All meals (breakfast, lunch, dinner)",
      "Trekking permits and taxes",
      "Experienced trekking guide and support staff",
      "Transportation for trek transfers",
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Additional activities or excursions not mentioned in the itinerary",
      "Medical expenses or evacuation",
    ],
    bestTimeToVisit: "June to September",
    itinerary: [
      {
        day: 1,
        activity: "Arrival in Leh, acclimatization, and local sightseeing.",
      },
      {
        day: 2,
        activity:
          "Drive to the starting point of the trek at Spituk. Begin trek to Zingchen (3-4 hours).",
      },
      {
        day: 3,
        activity:
          "Trek from Zingchen to Yurutse (5-6 hours). Enjoy views of the Indus Valley.",
      },
      {
        day: 4,
        activity: "Trek to Rumbak Village via Stok La (6-7 hours).",
      },
      {
        day: 5,
        activity:
          "Trek to Ganda La Base (4-5 hours). Enjoy scenic views of the surrounding mountains.",
      },
      {
        day: 6,
        activity:
          "Cross the Ganda La pass, descend to Skiu village (5-6 hours).",
      },
      {
        day: 7,
        activity:
          "Trek to Likir and visit the Likir Monastery. Return to Leh (3 hours).",
      },
      {
        day: 8,
        activity: "Departure from Leh, transfer to the airport.",
      },
    ],
    faqdata:  [
        {
          question: "What is the best time to go for the Sham Trek?",
          answer:
            "The best time to go for the Sham Trek is from June to September, when the weather is ideal for trekking and exploring the scenic valleys.",
        },
        {
          question: "Is there a guide for the trek?",
          answer:
            "Yes, an experienced guide will be provided to ensure your safety and help you navigate through the trails and remote areas.",
        },
        {
          question: "What type of accommodation is included?",
          answer:
            "Accommodation is provided in guesthouses and camps along the trek, offering basic amenities for a comfortable stay.",
        },
        {
          question: "Can I go trekking in the Sham Valley?",
          answer:
            "Yes, the Sham Trek includes trekking through the Sham Valley, offering a unique opportunity to explore Ladakh’s rural villages and beautiful landscapes.",
        },
        {
          question: "Are meals included in the trek?",
          answer:
            "Yes, all meals (breakfast, lunch, and dinner) are included in the trek package, providing a variety of local and vegetarian options.",
        },
        {
          question: "Is there a medical facility available during the trek?",
          answer:
            "While there are no dedicated medical facilities in remote areas, guides are trained in basic first aid, and Leh has the nearest medical center.",
        },
        {
          question: "What should I pack for the Sham Trek?",
          answer:
            "Pack warm clothing, trekking shoes, a water bottle, sunscreen, a hat, and personal medications for the trek. It’s also recommended to carry a small backpack for day hikes.",
        },
        {
          question: "What is the cancellation policy for the Sham Trek?",
          answer:
            "Cancellation policies vary depending on the booking, but flexible bookings usually allow cancellations up to 24 hours before the start of the trek.",
        },
      ]
  },
  Manali: {
   banerImg: "/img/manalibannern.webp",
bannerHeading: "Manali Tour",
bannerPara:  "Manali, a beautiful hill station in Himachal Pradesh, offers stunning views of snow-capped peaks, lush valleys, and vibrant local culture. Embark on a refreshing journey through scenic landscapes, adventure activities, and peaceful retreats in this charming town.",
contentImg:"/img/ManalicontentImg.webp",

    packageName: "Manali to Leh Bike Tour",
    destination: "Manali, Himachal Pradesh to Leh, Ladakh, India",
    duration: "12 Days, 11 Nights",
    price: "₹50,000",
    highlights: [
      "Ride through the scenic and rugged terrains from Manali to Leh",
      "Experience the thrill of high-altitude biking on famous mountain passes like Rohtang Pass, Baralacha La, and Tanglang La",
      "Cross the challenging and beautiful landscapes of Leh and Ladakh",
      "Visit iconic places like Pangong Lake, Nubra Valley, and Khardung La",
      "Stay in camps, guesthouses, and homestays, experiencing the local Ladakhi culture",
    ],
    inclusions: [
      "Bike rental and fuel for the entire tour",
      "Accommodation in guesthouses, camps, and homestays",
      "All meals (breakfast, lunch, dinner)",
      "Experienced tour leader and support staff",
      "Backup vehicle for luggage and medical assistance",
      "Trekking permits and taxes",
      "Transportation for airport transfers",
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Fuel for personal use or deviations",
      "Any additional activities or excursions not mentioned in the itinerary",
      "Medical expenses or evacuation",
    ],
    bestTimeToVisit: "June to September",
    itinerary: [
      {
        day: 1,
        activity:
          "Arrival in Manali, briefing about the tour, bike handover, and acclimatization.",
      },
      {
        day: 2,
        activity: "Ride from Manali to Jispa (140 km, 6-7 hours).",
      },
      {
        day: 3,
        activity:
          "Ride from Jispa to Sarchu (90 km, 5-6 hours), crossing Baralacha La.",
      },
      {
        day: 4,
        activity:
          "Ride from Sarchu to Leh (250 km, 8-9 hours), crossing the Gata Loops and Tanglang La.",
      },
      {
        day: 5,
        activity:
          "Rest day in Leh for acclimatization and local sightseeing (Thiksey Monastery, Shanti Stupa).",
      },
      {
        day: 6,
        activity:
          "Ride from Leh to Nubra Valley via Khardung La (130 km, 5-6 hours).",
      },
      {
        day: 7,
        activity:
          "Explore Nubra Valley, visit Diskit Monastery, and enjoy the camel ride in Hunder.",
      },
      {
        day: 8,
        activity:
          "Ride from Nubra Valley to Pangong Lake (160 km, 6-7 hours), crossing the Shyok River.",
      },
      {
        day: 9,
        activity:
          "Explore Pangong Lake, enjoy the stunning views, and ride back to Leh (160 km, 6-7 hours).",
      },
      {
        day: 10,
        activity: "Ride from Leh to Tso Moriri Lake (240 km, 8-9 hours).",
      },
      {
        day: 11,
        activity: "Return ride to Leh (240 km, 8-9 hours).",
      },
      {
        day: 12,
        activity: "Departure from Leh, transfer to the airport.",
      },
    ],
    faqdata:[
        {
          question: "What is the best time to take the Manali to Leh bike tour?",
          answer:
            "The best time for the Manali to Leh bike tour is from June to September when the weather is favorable and the roads are open, offering clear views of the landscapes.",
        },
        {
          question: "Is a guide provided during the bike tour?",
          answer:
            "Yes, an experienced guide is included to ensure safety and offer local insights during the entire tour. They will lead you along the route and assist with any challenges.",
        },
        {
          question: "What kind of bike is provided for the tour?",
          answer:
            "A Royal Enfield bike is typically provided for the tour, which is known for its durability and comfort in mountain terrains. Helmets and other biking gear are also included.",
        },
        {
          question: "Are meals included in the Manali to Leh bike tour?",
          answer:
            "Yes, all meals (breakfast, lunch, and dinner) are included during the tour. You’ll get to taste local delicacies as well as some standard options.",
        },
        {
          question: "Is there a backup vehicle available during the bike tour?",
          answer:
            "Yes, a backup vehicle is available throughout the tour to carry luggage, provide support, and assist in case of bike breakdowns or emergencies.",
        },
        {
          question: "What should I pack for the Manali to Leh bike tour?",
          answer:
            "Pack warm clothing, riding gloves, a good pair of riding shoes, sunscreen, personal medications, and a camera. Don't forget your valid driver's license and any necessary permits.",
        },
        {
          question: "Are there any medical facilities available during the tour?",
          answer:
            "There are no dedicated medical facilities in remote areas, but the guide is trained in first aid, and Leh has the nearest medical center. You should also carry a first-aid kit with you.",
        },
        {
          question: "What is the cancellation policy for the bike tour?",
          answer:
            "Cancellation policies vary based on the booking, but flexible bookings usually allow cancellation up to 24 hours before the start of the tour.",
        },
      ]
  },
  Shang: {
   banerImg: "/img/shang.webp",
bannerHeading: "Stok Matho Shang Trek Tour",
bannerPara:
  "The Stok Matho Shang Trek in Ladakh offers an exciting adventure through rugged landscapes, high-altitude passes, and remote monasteries. ",
    contentImg:"/img/stockMatho.webp",

    packageName: "Stok Matho Shang Trek Tour",
    destination: "Leh, Ladakh, India",
    duration: "9 Days, 8 Nights",
    price: "₹40,000",
    highlights: [
      "Trek through the pristine landscapes of Leh and Ladakh",
      "Experience the unique culture and heritage of local villages",
      "Visit Stok, Matho, and Shang, the three prominent monasteries of Ladakh",
      "Breathtaking views of the Zanskar range and the Indus River valley",
      "Explore beautiful alpine meadows, rivers, and valleys during the trek",
      "Visit ancient Buddhist monasteries and interact with local monks",
    ],
    inclusions: [
      "Accommodation in guesthouses, tents, and homestays during the trek",
      "All meals (breakfast, lunch, dinner) during the trek",
      "Trekking permits and taxes",
      "Experienced trek leader and support staff",
      "Transportation for airport transfers",
      "All required trekking gear (if needed)",
      "Emergency medical assistance and first-aid kit",
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Beverages and snacks during the trek",
      "Any additional activities or excursions not mentioned in the itinerary",
      "Medical expenses or evacuation",
    ],
    bestTimeToVisit: "June to September",
    itinerary: [
      {
        day: 1,
        activity:
          "Arrival in Leh, acclimatization, and briefing about the trek.",
      },
      {
        day: 2,
        activity:
          "Rest day in Leh for acclimatization, local sightseeing (Shanti Stupa, Leh Palace).",
      },
      {
        day: 3,
        activity:
          "Drive from Leh to Stok village (15 km) and begin the trek to Stok Kangri base camp (6-7 hours).",
      },
      {
        day: 4,
        activity:
          "Trek from Stok Kangri base camp to Shang village (7-8 hours), enjoying panoramic views of the surrounding peaks.",
      },
      {
        day: 5,
        activity:
          "Trek from Shang to Matho village (5-6 hours), passing through beautiful valleys and alpine meadows.",
      },
      {
        day: 6,
        activity:
          "Visit the Matho Monastery, trek through picturesque landscapes, and interact with local villagers.",
      },
      {
        day: 7,
        activity:
          "Trek from Matho to Stok village (6-7 hours), exploring the local flora and fauna.",
      },
      {
        day: 8,
        activity:
          "Drive back to Leh, rest day for shopping and exploring the local market.",
      },
      {
        day: 9,
        activity: "Departure from Leh, transfer to the airport.",
      },
    ],
    faqdata: [
        {
          question: "What is the best time to go on the Stok Matho Shang Trek?",
          answer:
            "The best time to undertake the Stok Matho Shang Trek is between June and September, when the weather is favorable for trekking and the trails are accessible.",
        },
        {
          question: "Is a guide included in the Stok Matho Shang Trek tour?",
          answer:
            "Yes, an experienced trek guide will be with you throughout the journey to ensure safety, navigate the trails, and provide valuable information about the region.",
        },
        {
          question: "What kind of accommodation is included in the trek?",
          answer:
            "Accommodation during the trek is provided in tents and guesthouses. These offer basic facilities and comfort for an authentic camping experience in the mountains.",
        },
        {
          question: "How difficult is the Stok Matho Shang Trek?",
          answer:
            "The Stok Matho Shang Trek is moderately challenging, with steep ascents and high altitudes. It requires a basic level of fitness, but previous trekking experience will be helpful.",
        },
        {
          question: "Are meals included in the trek package?",
          answer:
            "Yes, all meals (breakfast, lunch, and dinner) are included during the trek. Meals are prepared fresh and include local Ladakhi cuisine as well as some standard options.",
        },
        {
          question: "What should I pack for the Stok Matho Shang Trek?",
          answer:
            "Pack warm clothing, trekking shoes, a hat, sunglasses, sunscreen, and personal items like medications. Don’t forget a good quality camera to capture the breathtaking views.",
        },
        {
          question: "Is there a medical facility available during the trek?",
          answer:
            "There are no medical facilities available along the trek route, but the guide is trained in first aid. Leh, the nearest town, has a medical center for emergencies.",
        },
        {
          question: "What is the cancellation policy for the Stok Matho Shang Trek tour?",
          answer:
            "Cancellation policies depend on the booking terms. Flexible bookings generally allow cancellation up to 24 hours before the trek starts, with some conditions for refunds.",
        },
      ]
  },
  Nubra: {
    banerImg: "/img/Nubra.webp",
bannerHeading: "Nubra Valley Tour",
bannerPara:
  "Nubra Valley, a hidden gem in Ladakh, offers breathtaking landscapes, lush greenery, and unique monasteries. Explore the enchanting dunes of Hunder, the tranquil Panamik hot springs.",
  contentImg:"/img/nubraValley (1).webp",

    packageName: "Nubra Valley Tour",
    destination: "Nubra Valley, Leh-Ladakh",
    duration: "6 Days, 5 Nights",
    price: "₹30,000",
    highlights: [
      "Explore the stunning Nubra Valley and its unique landscapes",
      "Camel ride at the famous Hunder sand dunes",
      "Visit the Diskit Monastery and the giant Buddha statue",
      "Cultural interaction with local monks and villagers",
      "Camping under the stars in the serene desert surroundings",
    ],
    inclusions: [
      "Accommodation in guesthouses and tents",
      "All meals (breakfast, lunch, dinner)",
      "Transportation (from Leh to Nubra Valley and back)",
      "Experienced guide",
      "Entry permits and taxes",
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Additional activities or excursions not mentioned in the itinerary",
    ],
    bestTimeToVisit: "May to September",
    itinerary: [
      {
        day: 1,
        activity: "Arrival at Leh, transfer to the hotel, acclimatization.",
      },
      {
        day: 2,
        activity:
          "Drive to Nubra Valley, visit Hunder sand dunes for camel rides.",
      },
      {
        day: 3,
        activity: "Visit Diskit Monastery and the giant Buddha statue.",
      },
      {
        day: 4,
        activity: "Explore local villages and enjoy cultural interactions.",
      },
      {
        day: 5,
        activity: "Camping under the stars in Nubra Valley.",
      },
      {
        day: 6,
        activity: "Drive back to Leh, departure.",
      },
    ],
    faqdata:  [
        {
          question: "What is the best time to visit Nubra Valley?",
          answer:
            "The best time to visit Nubra Valley is between May and September, when the weather is mild and the valley is accessible for sightseeing and outdoor activities.",
        },
        {
          question: "Is a guide included in the Nubra Valley tour?",
          answer:
            "Yes, an experienced guide will accompany you throughout the tour, providing insights into the local culture, history, and ensuring your safety during the journey.",
        },
        {
          question: "What kind of accommodation is provided during the Nubra Valley tour?",
          answer:
            "Accommodation is provided in comfortable guesthouses or camps, offering a rustic yet cozy experience with basic amenities.",
        },
        {
          question: "What are the main attractions in Nubra Valley?",
          answer:
            "The main attractions in Nubra Valley include the Nubra River, Diskit Monastery, Hunder Sand Dunes, the famous Bactrian camels, and the picturesque Panamik hot springs.",
        },
        {
          question: "Are meals included in the Nubra Valley tour package?",
          answer:
            "Yes, all meals (breakfast, lunch, and dinner) are included in the tour. Meals typically consist of local Ladakhi cuisine as well as some international options.",
        },
        {
          question: "How long is the journey to Nubra Valley from Leh?",
          answer:
            "The journey from Leh to Nubra Valley takes about 5 to 6 hours by road, depending on the weather and road conditions. The route offers breathtaking views of the landscape.",
        },
        {
          question: "What should I pack for the Nubra Valley tour?",
          answer:
            "Pack warm clothing, comfortable shoes, sunglasses, sunscreen, a hat, and personal items like medications. It's also advisable to carry a camera to capture the scenic beauty.",
        },
        {
          question: "Is there a medical facility in Nubra Valley?",
          answer:
            "There are no medical facilities in Nubra Valley itself, but the nearest medical center is in Leh. The guides are trained in first aid for emergencies.",
        },
        {
          question: "What is the cancellation policy for the Nubra Valley tour?",
          answer:
            "Cancellation policies vary depending on the booking terms. Flexible bookings generally allow cancellation up to 24 hours before the tour with some conditions for refunds.",
        },
      ]
  },
};


const page = ({ params: { slug } }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const curentPackage = Packagedata[slug];
  return (
    <div className="tour-package-single">
      <section className="hotel-booking-banner relative h-[350px] md:h-[60vh] w-full overflow-hidden">
        <img
          src={curentPackage.banerImg}
          alt="Hotel Booking"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-16 text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            {curentPackage.bannerHeading}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-6">
            {curentPackage.bannerPara}
          </p>
        </div>
      </section>

      <div className="conetent-section">
        <div className="grid xl:grid-cols-3 lg:gap-10 gap-12  px-5 md:px-16 xl:px-32 my-5 lg:my-16">
          <div className="xl:col-span-2 shadow-l">
          <div className="package-content bg-white p-5 md:p-6 shadow-lg rounded-md">
      <div className="mb-6">
        <img src={curentPackage.contentImg} alt={curentPackage.packageName} className="w-full h-64 object-cover rounded-md" />
      </div>
      <h3 className="font-bold text-xl lg:text-2xl text-gray-800 mb-4">
        {curentPackage.bannerHeading}
      </h3>
      <p className="text-gray-700 mb-6">{curentPackage.bannerPara}</p>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800">Package Details</h4>
        <p><strong>Destination:</strong> {curentPackage.destination}</p>
        <p><strong>Duration:</strong> {curentPackage.duration}</p>
        <p><strong>Price:</strong> {curentPackage.price}</p>

        <h4 className="text-lg font-semibold text-gray-800">Highlights</h4>
        <ul className="list-disc pl-5 text-gray-700">
          {curentPackage.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>

        <h4 className="text-lg font-semibold text-gray-800">Inclusions</h4>
        <ul className="list-disc pl-5 text-gray-700">
          {curentPackage.inclusions.map((inclusion, index) => (
            <li key={index}>{inclusion}</li>
          ))}
        </ul>

        <h4 className="text-lg font-semibold text-gray-800">Exclusions</h4>
        <ul className="list-disc pl-5 text-gray-700">
          {curentPackage.exclusions.map((exclusion, index) => (
            <li key={index}>{exclusion}</li>
          ))}
        </ul>

        <h4 className="text-lg font-semibold text-gray-800">Best Time to Visit</h4>
        <p className="text-gray-700">{curentPackage.bestTimeToVisit}</p>

        <h4 className="text-lg font-semibold text-gray-800">Itinerary</h4>
        <ol className="list-decimal pl-5 text-gray-700">
          {curentPackage.itinerary.map((day, index) => (
            <li key={index}>
              <strong>Day {day.day}: </strong>{day.activity}
            </li>
          ))}
        </ol>
      </div>
    </div>
          </div>
          <div className="right hidden md:block">
          <TourPackage/>
          </div>
        </div>
      </div>

      <div className="form-section my-5 lg:my-16">
        <div className="flex flex-col lg:grid xl:grid-cols-3 gap-10 lg:gap-0 px-5 md:px-16 xl:px-32 my-5 md:my-16">
                                 {/* for mobile  */}
        <div className="md:hidden order-2">
           <TourPackage/>
        </div>
          <div className="xl:col-span-2 space-y-5 lg:space-y-2 order-2  ">
            <div className=" shadow-md  md:p-6 rounded-lg md:max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
              Frequently Asked Questions
            </h2>
              <div className="space-y-4">
                {curentPackage.faqdata.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg p-4 cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-base md:text-lg">{item.question}</h3>
                      <span>
                        {activeIndex === index ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20 12H4"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        )}
                      </span>
                    </div>
                    {activeIndex === index && (
                      <p className="text-gray-600 mt-2">{item.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="map-container  h-[250px] lg:h-[450px]"
              style={{ width: "100%",  }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.22709340513!2d76.68831206468506!3d30.732254422013508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1735187168734!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="lg:order-3">
            <div className="sticky top-10">
              <ServiceForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
