import wave from "../assets/wave.gif";
import { FaReact } from "react-icons/fa";
import { GiBattery100 } from "react-icons/gi";
import { MdGpsFixed } from "react-icons/md";
import { FaChargingStation } from "react-icons/fa";

const ServiceData = [
    {
      title: "BATTERY",
      content: "40-100km",
      description: " Two type of battery,Removebal and in frame Range-100KM ",
      icon: <GiBattery100 
      className=" text-7xl" />,
  
      aosDelay: "500",
    },
    {
      title: "GPS",
      content: "",
      description: "GPS tracking, Navigation ",
      icon: <MdGpsFixed className=" text-7xl" />,
      aosDelay: "500",
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
const HeroCard = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                    >
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              <img
                src={wave}
                alt=""
                className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;