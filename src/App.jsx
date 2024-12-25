import React from "react";
import bgVideo from "./assets/E-cycle-video.mp4";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Banner from "./Components/Banner";
import Services from "./Components/Services";
import Banner2 from "./Components/Banner2";
import Footer from "./Components/Footer"
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  React.useEffect(() => {
    AOS.init({ 
    duration: 1200,
    easing: "ease-in-out",
  });
  });
  return (
    <div>
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700[px] w-full object-cover z[-1]"
        >
          <source src={bgVideo} type="video/mp4 " />
        </video>
        <Navbar />
        <Hero />
      </div>
      {/* Card Section */}
      <Services />
      <Banner />
      <Banner2/>
      <Footer />
    </div>
  );
};

export default App;
