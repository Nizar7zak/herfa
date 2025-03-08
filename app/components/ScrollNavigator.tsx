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
  const {activeSection,setActiveSection } = useSectionStore();

  useEffect(() => {
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
        const prevSection = sections[currentIndex];
        const nextSection = sections[nextIndex];

        const prevElement = document.getElementById(prevSection);
        if (prevElement) {
          prevElement.style.transition = "opacity 0.3s ease";
          prevElement.style.opacity = "0";
          setTimeout(() => {
            prevElement.style.opacity = "1";
  
          }, 1000)
        }

        document.getElementById(nextSection)?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(nextSection);

        const nextElement = document.getElementById(nextSection);
        if (nextElement) {
          nextElement.style.transition = "opacity 0.3s ease";
          nextElement.style.opacity = "1";
        }

        setTimeout(() => {
          currentIndex = nextIndex;
        }, 800);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [activeSection, setActiveSection]);

  return null;
};

export default ScrollNavigator;