"use client";
import { useSectionStore } from "@/lib/store";
import ArtSide from "@/public/Union.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const specialSections = ["الخدمات-التسويقية", "الخدمات-الإبداعية", "الخدمات-التقنية"];

const FloatingArt = () => {
  const { activeSection } = useSectionStore();
  const isSpecial = specialSections.includes(activeSection);

  return (
    <div className={ `fixed top-0 h-screen overflow-hidden flex flex-col ${isSpecial ? "left-0" : "right-0"}` }>
      <motion.div
        className="flex flex-col"
        animate={ { y: ["0%", "-50%"] } }
        transition={ {
          duration: 50,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        } }
      >
        <Image alt="زخرفة 1" src={ ArtSide } />
        <Image alt="زخرفة 2" src={ ArtSide } className={ "-my-3" } />
      </motion.div>
    </div>
  );
};

export default FloatingArt;
