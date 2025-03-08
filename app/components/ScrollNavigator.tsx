"use client";
import { useEffect } from "react";
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

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = (event: WheelEvent) => {
      if (isScrolling) return; 
      isScrolling = true;

      const currentIndex = sections.indexOf(activeSection);
      const direction = event.deltaY > 0 ? "down" : "up";
      const nextIndex = direction === "down" ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex >= 0 && nextIndex < sections.length) {
        const prevSection = sections[currentIndex];
        const nextSection = sections[nextIndex];

        const prevElement = document.getElementById(prevSection);
        const nextElement = document.getElementById(nextSection);

        if (prevElement) {
          prevElement.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          prevElement.style.opacity = "0";
          prevElement.style.transform = "translateY(-20px)";
        }

        setTimeout(() => {
          nextElement?.scrollIntoView({ behavior: "smooth" });
          setActiveSection(nextSection);

          if (nextElement) {
            nextElement.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            nextElement.style.opacity = "1";
            nextElement.style.transform = "translateY(0)";
          }
        }, 200); 

        setTimeout(() => {
          isScrolling = false;
        }, 700);
      } else {
        isScrolling = false; 
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [activeSection, setActiveSection]);

  return null;
};

export default ScrollNavigator;
