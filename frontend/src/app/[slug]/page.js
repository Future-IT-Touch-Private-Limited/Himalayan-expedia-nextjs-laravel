// app/singleproperties/[slug]/page.tsx

import React from "react";
import axios from "axios";
import { Realpage } from "./realpage";
import { rooturl } from "../components/Store/Rooturl";
import Swal from "sweetalert2";

export default async function Page({ params: { slug } }) {
  try {
    // Fetch property data dynamically based on slug
    const response = await axios.get(`${rooturl}/singletours/${slug}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const propertyData = response.data;

    if (!propertyData) {
      // Show an alert if the property is not found
      Swal.fire({
        title: "Error",
        text: "Property not found",
        icon: "error",
        confirmButtonText: "OK",
      });
      return (
        <div>
          <h1>Property not found</h1>
        </div>
      );
    }

    return (
      <div>
        <Realpage slug={slug} propertyData={propertyData} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching property data:", error);

    // Handle error case
    return (
      <div>
        <h1>Error loading property data</h1>
        <p>Please try again later.</p>
      </div>
    );
  }
}
