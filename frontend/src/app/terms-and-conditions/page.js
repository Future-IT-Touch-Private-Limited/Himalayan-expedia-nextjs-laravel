import React from "react";

export default function page() {
  return (
    <>
      <div className="relative bg-blue-500 text-white text-center py-16 px-6 mb-5">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/img/privcy.webp"
            alt="Banner Background"
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-black opacity-40" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-[200px] mt-[50px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight mb-4">
            Welcome to <span className="text-yellow-300">______</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-1xl mb-6 max-w-lg">
            Your one-stop solution for all your needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-[10%] py-10">
        <h1 className="text-3xl font-bold text-center mb-8">
        
Terms & Conditions
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Vehicle Period & Responsibility
          </h2>
          <p className="text-justify">
            The Declarant understands that during this period, it is solely
            responsible for the safety of the vehicle and any damage or injury
            caused to a person or a property by the declarant or their
            authorized representative. The declarant will financially compensate
            the owner and all affected persons within 24 hours of causing
            injury, damage, or losses including death. The damage assessment
            proposed by the owner will be final, and the owner holds the right
            to adjust the financial losses against any provided security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Responsibilities & Penalties
          </h2>
          <p className="text-justify">
            The declarant understands that they are responsible for any traffic
            violation or offenses during the period and must address them
            appropriately, including payment within 5 days of being notified by
            the owner or relevant authorities. The vehicle must be driven within
            speed limits stipulated by local authorities. Overspeeding will
            result in a deduction from the security amount.
          </p>
          <ul className="list-disc ml-5 mb-4">
            <li>
              Speed limit for 2 Wheelers: 45 km/hr (local) & 80 km/hr
              (outstation).
            </li>
            <li>
              Speed limit for 4 Wheelers: 60 km/hr (local) & 100 km/hr
              (outstation).
            </li>
            <li>Penalty for overspeeding: Rs 2000 deducted from security.</li>
          </ul>
          <p className="text-justify">
            The declarant will be solely responsible for any injury, loss, or
            death caused by the vehicle during the period. The owner reserves
            the right to withdraw the vehicle or take physical possession at any
            time in case of dispute without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Insurance & Repairs</h2>
          <p className="text-justify">
            In case of an insurance claim, the declarant is liable to pay rent
            until the vehicle is in repair at the agency, along with the
            settlement amount for damages. In cases where damage is below Rs 2
            Lakhs, the declarant must bear the cost in cash.
          </p>
          <p className="text-justify">
            If the vehicle breaks down within the first 50 km, the repair cost
            will be covered by the owner. Beyond 50 km, the repair cost must be
            borne by the declarant.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Rental Limits & Penalties
          </h2>
          <p className="text-justify">
            The km range is fixed per day: 200 km for 4 wheelers and 150 km for
            2 wheelers. Beyond this limit, charges will apply:
          </p>
          <ul className="list-disc ml-5">
            <li>Rs 5/km for 2 wheelers</li>
            <li>Rs 10/km for Hatchbacks & Compact SUVs</li>
            <li>Rs 15/km for SUVs</li>
          </ul>
          <p className="text-justify">
            Monthly kilometers are capped at 4000 km per month. Any excess
            kilometers will incur additional charges based on the rates provided
            above.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Additional Charges</h2>
          <ul className="list-disc ml-5">
            <li>
              Washing charges if vehicle is returned in dirty condition: Rs 120
              for 2 wheelers, Rs 250 for Hatchbacks/Sedans, Rs 350 for SUVs.
            </li>
            <li>
              Late drop charges: Rs 50 for Activa, Rs 100 for Bikes, Rs 150 for
              Hatchbacks, Rs 200 for Compact SUVs, Rs 250 for SUVs.
            </li>
            <li>Fastag and extra fuel charges are non-refundable.</li>
            <li>Security will be refunded after 48 hours of inspection.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Towing & Breakdown</h2>
          <p className="text-justify">
            The customer will arrange towing at their own expense in case of
            breakdown or accident. If the vehicle requires repair after the
            first 50 km, the cost of repairs will be the customer's
            responsibility.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Refund & Cancellation Policy
          </h2>
          <p className="text-justify">
            If the vehicle is returned before the scheduled return date, no
            refund will be issued for the remaining rental period. Security
            deposits will be refunded after a thorough inspection of the
            vehicle, ensuring no violations or damages.
          </p>
          <p className="text-justify">
            Extra funds in Fastag and extra fuel are non-refundable. If the
            vehicle is returned in a dirty condition, cleaning charges will
            apply as mentioned above.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Challans & Violations</h2>
          <p className="text-justify">
            In the event of any state-level traffic challans, the declarant must
            pay online from their own account. If unpaid, double the amount of
            the challan will be deducted from the security deposit.
          </p>
        </section>
      </div>
    </>
  );
}
