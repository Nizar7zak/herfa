"use client";
import { useEffect, useState } from "react";
import { useSectionStore } from "@/lib/store";

const sections = [
  "الرئيسية",
  "من-نحن",
  "آلية-عملنا",
  "الخدمات-التسويقية",
  "الخدمات-الإبداعية",
  "الخدمات-التقنية",
  "فريق-العمل",
  "خبراتنا",
  "تواصل-معنا"
];

const ScrollNavigator = () => {
  const { activeSection, setActiveSection } = useSectionStore();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreenSize(); // Check on mount
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // Don't apply scroll behavior on mobile

    let isScrolling = false;
    let currentIndex = sections.indexOf(activeSection);

    const handleScroll = (event: WheelEvent) => {
      if (isScrolling) return;
      isScrolling = true;

      setTimeout(() => {
        isScrolling = false;
      }, 800);

      const direction = event.deltaY > 0 ? "down" : "up";
      const nextIndex = direction === "down" ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex >= 0 && nextIndex < sections.length) {
        const nextSection = sections[nextIndex];

        document.getElementById(nextSection)?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(nextSection);

        setTimeout(() => {
          currentIndex = nextIndex;
        }, 800);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [activeSection, setActiveSection, isDesktop]);

  return null;
};

export default ScrollNavigator;
