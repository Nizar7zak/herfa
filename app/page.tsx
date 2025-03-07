"use client"

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
import TeamMembers from "./components/sections/TeamMembers";
import TechnicalServices from "./components/sections/TechnicalServices";


export default function Home() {
  return (
    <div className="relative ">
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
      <TeamMembers />
      <OurExperince />
      <ContactUs />
    </div>
  );
}
