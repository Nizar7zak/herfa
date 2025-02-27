"use client";
import { useSectionStore } from "@/lib/store";
import ArtSide from "@/public/Union.svg";
import ArtSide2 from "@/public/art2.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const FloatingArt = () => {
  const { activeSection } = useSectionStore();

  return (
    <div className={ `fixed top-0 h-screen overflow-hidden flex flex-col ${activeSection === "خدماتنا" ? "left-0" : "right-0"}` }>
      <motion.div
        className="flex flex-col"
        animate={ { y: [ "0%", "-50%" ] } }
        transition={ {
          duration: 50,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        } }
      >
        {
          activeSection === "خدماتنا" ?
            <>
              <Image alt="زخرفة 1" src={ ArtSide2 } />
              <Image alt="زخرفة 2" src={ ArtSide2 } />
            </> :
            <>
              <Image alt="زخرفة 1" src={ ArtSide } />
              <Image alt="زخرفة 2" src={ ArtSide } className="-my-6" />
            </>
        }
      </motion.div>
    </div>
  );
};

export default FloatingArt;
