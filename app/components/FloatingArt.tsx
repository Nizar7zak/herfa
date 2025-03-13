"use client";
import ArtSide from "@/public/Union.svg";
import { motion } from "framer-motion";
import Image from "next/image";


const FloatingArt = () => {
  return (
    <>
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
          <Image alt="زخرفة 2" src={ ArtSide } className={ "-my-3" } />
        </motion.div>
      </div>

      <div className={ `fixed -top-2 -right-10 h-screen flex lg:hidden flex-col rotate-90 origin-top-left` }>
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
        <Image alt="زخرفة 1" src={ ArtSide } className="h-[32%]" />
        <Image alt="زخرفة 2" src={ ArtSide } className={ "-my-3 h-[35%]" } />
      </motion.div>
    </div>
    </>
  );
};

export default FloatingArt;
