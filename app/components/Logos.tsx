"use client";
import { useEffect, useState } from "react";
import { useSectionStore } from "@/lib/store";
import Image from "next/image";

import Line from "@/public/line.svg";
import Logo from "@/public/logo-herfa.svg";
import Vision from "@/public/vision.svg";

const Logos = () => {
    const { isHome } = useSectionStore();
    const [showVision, setShowVision] = useState(false);

    useEffect(() => {
        if (!isHome) {
            // Delay vision appearance by 1 second when isHome becomes false
            const timer = setTimeout(() => setShowVision(true), 1000);
            return () => clearTimeout(timer); // Cleanup on re-render
        } else {
            setShowVision(false); // Hide immediately when isHome is true
        }
    }, [isHome]);

    return (
        <div
            className={`flex flex-col items-center space-y-2 xl:space-y-4
                    fixed transition-all duration-500 ${isHome
                    ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[4]"
                    : "top-[3.125rem] left-[5.8rem] scale-100"
                }`}
        >
            <div className="flex justify-between items-center">
                {!isHome && (
                    <div className="flex justify-between items-center">
                        {/* Vision Image - Appears AFTER 1 second, slides in from left */}
                        <Image
                            src={Vision}
                            alt="Vision-2030"
                            className={`transition-all duration-700 ease-in-out 
                                ${showVision ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
                            `}
                        />

                        {/* Line Image - Appears immediately */}
                        <Image
                            src={Line}
                            alt="line"
                            className="transition-all duration-500 mr-4 2xl:mr-8"
                        />
                    </div>
                )}

                <Image
                    src={Logo}
                    alt="Logo-herfa"
                    width={25}
                    height={25}
                    className="md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] xl:w-[85px] xl:h-[85px] 2xl:h-[100px] 2xl:w-[100px]
                     transition-all duration-500"
                />
            </div>
            
            <h1
                className={`text-[7px] xl:text-[8px] 2xl:text-[10px] font-extralight text-center transition-all duration-500 
                    ${isHome ? "opacity-100 scale-100" : "opacity-0 scale-50"}
                `}
            >
                تـخـطـى حـدود <span className="font-bold mr-[2px]">الإبـداع</span>
            </h1>
        </div>
    );
};

export default Logos;
