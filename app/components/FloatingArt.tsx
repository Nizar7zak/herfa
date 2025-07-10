"use client";
import ArtSide from "@/public/Union.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const FloatingArt = () => {
  return (
    <div className={ `fixed top-0 h-screen overflow-hidden hidden lg:flex flex-col right-0` }>
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
        <Image alt="زخرفة 1" src={ ArtSide } />
        <Image alt="زخرفة 2" src={ ArtSide } className={ "-my-3" }  />
      </motion.div>
    </div>
  );
};

export default FloatingArt;
