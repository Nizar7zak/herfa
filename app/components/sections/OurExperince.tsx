import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import amantak from '@/public/experince/amantak.svg';
import basma from '@/public/experince/basma.svg';
import crete from '@/public/experince/cret.svg';
import gheraz from '@/public/experince/gheraz.svg';
import ghoraz from '@/public/experince/ghoraz.svg';
import kharoufAlreef from '@/public/experince/kharouf.svg';
import mentad from '@/public/experince/mentad.svg';
import moonTouch from '@/public/experince/moon.svg';
import naksha from '@/public/experince/naksha.svg';
import owhag from '@/public/experince/owhag.svg';
import sheem from '@/public/experince/shem.svg';
import Image from "next/image";
import Description from "../Description";
import Title from "../Title";


const projectsOnBehance = [
    { id: 1, src: "https://www.behance.net/embed/project/222240385?ilo0=1" },
    { id: 2, src: "https://www.behance.net/embed/project/222316393?ilo0=1" },
    { id: 3, src: "https://www.behance.net/embed/project/222330915?ilo0=1" },
    { id: 4, src: "https://www.behance.net/embed/project/222231623?ilo0=1" },
    { id: 5, src: "https://www.behance.net/embed/project/222234805?ilo0=1" },
    { id: 6, src: "https://www.behance.net/embed/project/222234805?ilo0=1" },
];

const experinces = [
    { id: 1, src: naksha, alt: "naksha" },
    { id: 2, src: ghoraz, alt: "ghoraz" },
    { id: 3, src: gheraz, alt: "gheraz" },
    { id: 4, src: sheem, alt: "sheem" },
    { id: 5, src: crete, alt: "crete" },
    { id: 6, src: owhag, alt: "owhag" },
    { id: 7, src: moonTouch, alt: "moontouch" },
    { id: 8, src: amantak, alt: "amantak" },
    { id: 9, src: basma, alt: "basma" },
    { id: 10, src: mentad, alt: "mentad" },
    { id: 11, src: kharoufAlreef, alt: "kharuof al reef" },
]

const OurExperince = () => {


    const [ isLgScreen, setIsLgScreen ] = useState( false );

    useEffect( () => {
        const updateSize = () => {
            setIsLgScreen( window.innerWidth >= 1024 );
        };

        updateSize();
        window.addEventListener( "resize", updateSize );

        return () => window.removeEventListener( "resize", updateSize );
    }, [] );


    return (
        <section id="خبراتنا" className="my-10 flex justify-center items-center space-y-10 flex-col md:mt-10 lg:mt-0">
            <div className="flex justify-center items-center xl:gap-10 w-full mt-4 flex-col lg:flex-row">

                <div className=" flex flex-col justify-center items-center gap-5 lg:hidden mb-5 w-[90%]">
                    <Title text="خبراتــنا" />
                    <Description textPosition="center" text="فريق مبدع ومحترف في الدعاية، الإعلان، والتسويق، يجمعنا الشغف والالتزام بتحقيق أهدافكم بحلول مبتكرة ومتكاملة." />
                </div>

                <div className="flex justify-center items-center  flex-col flex-wrap gap-10  lg:gap-6 xl:gap-7 
                    w-[90%] lg:w-[70%] lg:h-[55vh] xl:w-[70%] xl:h-[58vh]">
                    { projectsOnBehance.map( ( { id, src } ) => (
                        <div
                            key={ id }
                            className="w-full h-[35vh] md:w-[75vw] md:h-[45vh] lg:w-[23vw] lg:h-[20vh] xl:w-[22vw] xl:h-[24vh]
                            rounded-xl cursor-pointer overflow-hidden bg-slate-300"
                        >
                            <iframe
                                className="w-full h-full"
                                src={ src }
                                loading="lazy"
                                allowFullScreen
                            >
                            </iframe>
                        </div>


                    ) ) }
                </div>
            </div>

            <div className="flex lg:w-[70%] xl:w-[85%] items-center justify-center lg:gap-6 xl:gap-10 gap-x-5 gap-y-3 md:gap-x-16 md:gap-y-6 flex-wrap w-[85%]">
                { experinces.map( ( { id, src, alt } ) => <Image key={ id } alt={ alt } src={ src } className="w-[12%] md:w-[7%] lg:w-[5%] xl:w-[4%]" /> ) }
            </div>
        </section>
    );
};

export default OurExperince;
