"use client"

import FloatingArt from "./components/FloatingArt";
import Icons from "./components/Icons";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";
import PageIndicator from "./components/PageIndicator";
import ScrollNavigator from "./components/ScrollNavigator";
import AboutUs from "./components/sections/AboutUs";
import HowWeWork from "./components/sections/HowWeWork";
import MainSec from "./components/sections/MainSec";


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

      <section id="خدماتنا" className="h-screen flex justify-center items-center bg-accent">
        <h1 className="text-4xl">خدماتنا</h1>
      </section>

   

      <section id="فريق-العمل" className="h-screen flex justify-center items-center bg-secondary">
        <h1 className="text-4xl">فريق العمل</h1>
      </section>

      <section id="خبراتنا" className="h-screen flex justify-center items-center bg-secondary">
        <h1 className="text-4xl">خبراتنا </h1>
      </section>

      <section id="تواصل-معنا" className="h-screen flex justify-center items-center bg-secondary">
        <h1 className="text-4xl">تواصل معنا</h1>
      </section>
    </div>
  );
}
