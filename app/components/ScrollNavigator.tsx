"use client";
import { useEffect, useState } from "react";
import { useSectionStore } from "@/lib/store";

const sections = ["home", "about", "process", "marketing-services", "creative-services", "technical-services", "team", "experience", "contact"];

const ScrollNavigator = () => {
  const { activeSection, setActiveSection } = useSectionStore();
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isDesktop || isLocked) return;

    const currentIndex = sections.indexOf(activeSection);

    const moveToSection = (direction: "up" | "down") => {
      const nextIndex = direction === "down" ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex >= 0 && nextIndex < sections.length) {
        const nextSection = sections[nextIndex];
        
        setIsLocked(true);
        setTimeout(() => setIsLocked(false), 500);

        document.getElementById(nextSection)?.scrollIntoView({ behavior: "smooth" });

        setActiveSection(nextSection as "home" | "about" | "process" | "marketing-services" | "creative-services" | "technical-services" | "team" | "experience" | "contact");
      }
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (isLocked) return;

      moveToSection(event.deltaY > 0 ? "down" : "up");
    };

    let startY = 0;
    const handleTouchStart = (event: TouchEvent) => {
      startY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isLocked) return;
      const deltaY = startY - event.touches[0].clientY;

      if (Math.abs(deltaY) > 50) {
        event.preventDefault();
        moveToSection(deltaY > 0 ? "down" : "up");
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeSection, setActiveSection, isDesktop, isLocked]);

  return null;
};

export default ScrollNavigator;
