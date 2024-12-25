import React from "react";

const Hero = () => {
  return (
    <div className=" bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">
              A Great Choice For A Great Cyclist
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              E-Cycling refers to the responsible recycling and disposal of
              electronic devices to minimize environmental impact.
            </p>
            <button data-aos="fade-up" data-aos-delay="500"
             className="primary-button">Learn More</button>
          </div>
        </div>
        <div> </div>
      </div>
    </div>
  );
};

export default Hero;
