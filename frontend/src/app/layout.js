
import { Inter } from "next/font/google";
import "./globals.css";
import "./common.css"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import WhatsapContact from "./components/WhatsapContact";
import Providers from "./components/Store/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Visit Zanskar, Ladakh - Explore the Untouched Paradise",
  description: "Discover exclusive Visit Zanskar Ladakh and packages for Zanskar, Ladakh. Plan your trip to the serene landscapes, majestic mountains, and cultural heritage of this remote Himalayan region.",
  keywords: [
    "Zanskar Visit Zanskar Ladakh",
    "Ladakh tourism",
    "Visit Zanskar",
    "Himalayan adventures",
    "Zanskar trekking",
    "Ladakh packages",
    "Zanskar valley tours",
    "Travel to Ladakh",
  ],
  author: "Zanskar Travels",
  og: {
    title: "Visit Zanskar, Ladakh - Explore the Untouched Paradise",
    description: "Plan your perfect getaway to Zanskar, Ladakh. Discover untouched beauty, cultural richness, and thrilling adventures in this Himalayan gem.",

    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visit Zanskar, Ladakh - Explore the Untouched Paradise",
    description: "Discover the best Visit Zanskar Ladakh and unforgettable experiences in Zanskar, Ladakh. Plan your adventure today!",

  },

};


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
     
<Providers>
      <Nav/>
      <div className="min-h-screen">{children}</div>
      

      <Footer/>
      </Providers>
      </body>
    
    </html>
  );
}
