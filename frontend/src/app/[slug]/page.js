// app/singleproperties/[slug]/page.tsx

import React from "react";
import axios from "axios";
import { Realpage } from "./realpage";
import { rooturl } from "../components/Store/Rooturl";
import Swal from "sweetalert2";




export default async function Page({ params: { slug } }) {
  try {
    const response = await axios.get(`${rooturl}/singletours/${slug}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const propertyData = response.data;

    if (!propertyData) {
      return <h1>Property not found</h1>;
    }

    return <Realpage slug={slug} propertyData={propertyData} />;
  } catch (error) {
    console.error("Error fetching property data:", error);
    return (
      <div>
        <h1>Error loading property data</h1>
        <p>Please try again later.</p>
      </div>
    );
  }
}