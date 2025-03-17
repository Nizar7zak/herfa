"use client";
import { useSectionStore } from "@/lib/store";
import Image from "next/image";
import { useEffect, useState } from "react";

import Line from "@/public/line.svg";
import Logo from "@/public/logo-herfa.svg";
import Vision from "@/public/vision.svg";

const Logos = () => {
    const { isHome } = useSectionStore();
    const [ showVision, setShowVision ] = useState( false );
    const [ showMobileElements, setShowMobileElements ] = useState( false );

    useEffect( () => {
        if ( !isHome ) {
            const timer = setTimeout( () => setShowVision( true ), 300 );
            return () => clearTimeout( timer );
        } else {
            setShowVision( false );
        }
    }, [ isHome ] );

    useEffect( () => {
        const handleScroll = () => {
            const secondSectionOffset = window.innerHeight * 0.7;
            setShowMobileElements( window.scrollY > secondSectionOffset );
        };

        window.addEventListener( "scroll", handleScroll );
        return () => window.removeEventListener( "scroll", handleScroll );
    }, [] );

    return (
        <>
            <div
                className={ `fixed transition-all duration-500 flex flex-col items-center space-y-2 xl:space-y-4 
                ${isHome
                        ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[4] hidden lg:flex"
                        : "top-[3.125rem] left-[5.8rem] scale-100 hidden lg:flex"
                    }` }
            >
                <div className="flex justify-between items-center">
                    { !isHome && (
                        <div className="flex justify-between items-center">
                            <Image
                                src={ Vision }
                                alt="Vision-2030"
                                className={ `transition-all duration-700 ease-in-out 
                                    ${showVision ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}` }
                            />
                            <Image src={ Line } alt="line" className="transition-all duration-500 mr-4 2xl:mr-8" />
                        </div>
                    ) }
                    <Image
                        src={ Logo }
                        alt="Logo-herfa"
                        width={ 100 }
                        height={ 100 }
                        className="lg:w-[85px] lg:h-[85px] 2xl:h-[100px] 2xl:w-[100px] transition-all duration-500"
                    />
                </div>

                <h1
                    className={ `text-[7px] xl:text-[8px] 2xl:text-[10px] font-extralight text-center transition-all duration-500
                        ${isHome ? "opacity-100 scale-100" : "opacity-0 scale-50"}
                    `}
                >
                    تـخـطـى حـدود <span className="font-bold mr-[2px]">الإبـداع</span>
                </h1>
            </div>

            <div className={`lg:hidden fixed bg-[rgba(217,217,217,0.1)] backdrop-blur-[30px] w-full h-[14vh] top-0 z-40
                ${showMobileElements ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}></div>
            <div
                className={ `fixed top-[1.2rem] left-[1.25rem] flex items-center gap-1 lg:hidden transition-opacity duration-500 z-50
                    ${showMobileElements ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
            >
                <Image src={ Vision } alt="Vision-2030" className="w-[60px] h-auto opacity-100 transition-all duration-700" />
                <Image src={ Line } alt="line" className="w-[30px] h-[10vh] opacity-100 transition-all duration-500" />
                <Image src={ Logo } alt="Logo-herfa" width={ 40 } height={ 40 } className="w-[30px] h-auto transition-all duration-500" />
            </div>
        </>
    );
};

export default Logos;
