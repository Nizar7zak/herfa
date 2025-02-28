"use client"

import FloatingArt from "./components/FloatingArt";
import Icons from "./components/Icons";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";
import PageIndicator from "./components/PageIndicator";
import ScrollNavigator from "./components/ScrollNavigator";
import AboutUs from "./components/sections/AboutUs";
import CreativeService from "./components/sections/CreativeServices";
import HowWeWork from "./components/sections/HowWeWork";
import MainSec from "./components/sections/MainSec";
import MarketingServices from "./components/sections/MarketingServices";
import TeamMembers from "./components/sections/TeamMembers";
import TechnicalServices from "./components/sections/TechnicalServices";


export default function Home() {
  return (
    <div className="relative bg-gray-900 text-white">
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
      <section id="خبراتنا" className="h-screen flex justify-center items-center bg-secondary">
        <h1 className="text-4xl">خبراتنا </h1>
      </section>

      <section id="تواصل-معنا" className="h-screen flex justify-center items-center bg-secondary">
        <h1 className="text-4xl">تواصل معنا</h1>
      </section>
    </div>
  );
}
