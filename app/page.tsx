"use client"

import { useState } from "react";
import FloatingArt from "./components/FloatingArt";
import Icons from "./components/Icons";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";
import PageIndicator from "./components/PageIndicator";
import ScrollNavigator from "./components/ScrollNavigator";
import AboutUs from "./components/sections/AboutUs";
import ContactUs from "./components/sections/ContactUs";
import CreativeService from "./components/sections/CreativeServices";
import HowWeWork from "./components/sections/HowWeWork";
import MainSec from "./components/sections/MainSec";
import MarketingServices from "./components/sections/MarketingServices";
import OurExperince from "./components/sections/OurExperince";
import TechnicalServices from "./components/sections/TechnicalServices";
import LoadingScreen from "./components/LoadingScreen";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <div className="relative overflow-x-hidden">
          <Navbar />
          <PageIndicator />
          <ScrollNavigator />
          <FloatingArt />
          <Icons />
          <Logos />
          
          <MainSec />
          <AboutUs />
          <HowWeWork />
          <MarketingServices />
          <CreativeService />
          <TechnicalServices />
          <OurExperince />
          <ContactUs />
        </div>
      )}
    </>
  );
}
