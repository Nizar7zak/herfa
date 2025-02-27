"use client";
import { useEffect } from "react";
import { useSectionStore } from "@/lib/store";

const sections = [ "الرئيسية", "من-نحن", "آلية-عملنا", "خدماتنا", "فريق-العمل", "خبراتنا", "تواصل-معنا" ];

const ScrollNavigator = () => {
  const { setActiveSection } = useSectionStore();

  useEffect( () => {
    let isScrolling = false;
    let currentIndex = 0;

    const handleScroll = ( event: WheelEvent ) => {
      if ( isScrolling ) return;
      isScrolling = true;

      setTimeout( () => {
        isScrolling = false;
      }, 800 );

      const direction = event.deltaY > 0 ? "down" : "up";
      const nextIndex = direction === "down" ? currentIndex + 1 : currentIndex - 1;

      if ( nextIndex >= 0 && nextIndex < sections.length ) {
        currentIndex = nextIndex;
        const nextSection = sections[ currentIndex ];

        document.getElementById( nextSection )?.scrollIntoView( { behavior: "smooth" } );
        setActiveSection( nextSection );
      }
    };

    window.addEventListener( "wheel", handleScroll );
    return () => window.removeEventListener( "wheel", handleScroll );
  }, [ setActiveSection ] );

  return null;
};

export default ScrollNavigator;
