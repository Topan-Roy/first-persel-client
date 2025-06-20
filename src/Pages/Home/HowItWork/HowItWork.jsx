import React from "react";
import { FaMoneyBillWave, FaClipboardCheck, FaTruckPickup, FaBuilding } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaMoneyBillWave className="text-4xl text-teal-600" />,
    title: "Cash On Delivery Booking",
    description:
      "Book your orders with flexible cash on delivery payment options for your convenience.",
  },
  {
    id: 2,
    icon: <FaClipboardCheck className="text-4xl text-teal-600" />,
    title: "Pick & Drop Delivery",
    description:
      "We offer reliable pick-up and drop-off delivery services to ensure your packages reach safely.",
  },
  {
    id: 3,
    icon: <FaTruckPickup className="text-4xl text-teal-600" />,
    title: "Hub Booking",
    description:
      "Easily book slots at our delivery hubs for quick processing and shipment handling.",
  },
  {
    id: 4,
    icon: <FaBuilding className="text-4xl text-teal-600" />,
    title: "SME & Corporate",
    description:
      "Specialized logistics solutions tailored for SMEs and corporate clients to boost efficiency.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 rounded mt-5 px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">How it Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-teal-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
