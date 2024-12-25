import React from "react";
import { GiBattery100 } from "react-icons/gi";
import { MdGpsFixed } from "react-icons/md";
import { FaChargingStation } from "react-icons/fa";
import wave from "../assets/wave.gif";

const ServiceData = [
  {
    title: "BATTERY",
    content: "50-100km",
    description: " Two type of battery,Removebal and in frame Range-100KM ",
    icon: <GiBattery100 className=" text-7xl" />,

    aosDelay: "300",
  },
  {
    title: "GPS",
    content: "",
    description: "GPS tracking, Navigation ",
    icon: <MdGpsFixed className=" text-7xl" />,
    aosDelay: "400",
  },
  {
    title: "CHARGING STATION",
    content: "2 - 4Hr",
    description:
      "Lithium-ion batteries with fast-charging capabilities, Full Bettary Charge ",
    icon: <FaChargingStation className=" text-7xl" />,
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <div className="bg-black text-white relative z-50 ">
      <div className="container">
        <div className="min-h-[400px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-50">
            {ServiceData.map((data, index) => (
              <div data-aos="fade-up" data-aos-delay={data.aosDelay}
              className="min-h-[180px] flex flex-col gap-2 justify-center items-center bg-sky-900/60 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto">
                {data.icon}
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <p className="text-sm">{data.description}</p>
              </div>
            ))}
          </div>
          <img
            src={wave}
            alt=""
            className="h-[200px] w-full object-cover mix-blend-screen-translate-y-24 relative z-[0] "
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
