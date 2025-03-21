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


const models = [
    { id: 1, content: "Experience 1" },
    { id: 2, content: "Experience 2" },
    { id: 3, content: "Experience 3" },
    { id: 4, content: "Experience 4" }
];

const experinces = [
    { id: 1, src: naksha, alt: "naksha" },
    { id: 2, src: basma, alt: "basma" },
    { id: 3, src: ghoraz, alt: "ghoraz" },
    { id: 4, src: gheraz, alt: "gheraz" },
    { id: 5, src: sheem, alt: "sheem" },
    { id: 6, src: crete, alt: "crete" },
    { id: 7, src: owhag, alt: "owhag" },
    { id: 8, src: moonTouch, alt: "moontouch" },
    { id: 9, src: kharoufAlreef, alt: "kharuof al reef" },
    { id: 10, src: amantak, alt: "amantak" },
    { id: 11, src: mentad, alt: "mentad" },
]

const OurExperince = () => {
    const [ hoveredModel, setHoveredModel ] = useState<typeof models[ number ] | null>( null );
    const [ selectedModel, setSelectedModel ] = useState<typeof models[ number ] | null>( null );

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

                <div className="w-[30vw] h-[48vh] xl:h-[49vh] bg-teal-400 rounded-xl justify-center items-center p-5 hidden xl:flex">
                    { hoveredModel ? (
                        <p className="text-lg font-semibold">{ hoveredModel.content }</p>
                    ) : (
                        <p className="text-gray-500">Hover over an item to see details</p>
                    ) }
                </div>
                <div className=" flex flex-col justify-center items-center gap-5 lg:hidden mb-5 w-[90%]">
                    <Title text="خبراتــنا" />
                    <Description textPosition="center" text="فريق مبدع ومحترف في الدعاية، الإعلان، والتسويق، يجمعنا الشغف والالتزام بتحقيق أهدافكم بحلول مبتكرة ومتكاملة." />
                </div>

                <div className="flex justify-center items-center  flex-col flex-wrap gap-10
                    w-[90%] lg:w-[65%] lg:h-[55vh] xl:w-[40%] xl:h-[58vh] lg:gap-6 xl:gap-7 ">
                    { models.map( ( model ) => (
                        <div
                            key={ model.id }
                            className="w-full h-[35vh] md:w-[75vw] md:h-[45vh] lg:w-[30vw] lg:h-[25vh] xl:w-[18vw] xl:h-[23vh] space-y-6 lg:space-y-0
                             bg-slate-200 rounded-lg transition duration-300 hover:bg-slate-300 cursor-pointer"
                            onMouseEnter={ isLgScreen ? () => setHoveredModel( model ) : undefined }
                            onMouseLeave={ isLgScreen ? () => setHoveredModel( null ) : undefined }
                            onClick={ isLgScreen ? () => setSelectedModel( model ) : undefined }
                        ></div>
                    ) ) }
                </div>

                <AnimatePresence>
                    { selectedModel && (
                        <motion.div
                            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
                            initial={ { opacity: 0 } }
                            animate={ { opacity: 1 } }
                            exit={ { opacity: 0 } }
                            onClick={ () => setSelectedModel( null ) }
                        >
                            <motion.div
                                className="bg-white p-5 rounded-2xl w-[60vw] h-[60vh] xl:w-[47vw] xl:h-[75vh] flex flex-col justify-center items-center relative shadow-lg z-50"
                                initial={ { opacity: 0, scale: 0.8 } }
                                animate={ { opacity: 1, scale: 1 } }
                                exit={ { opacity: 0, scale: 0.8 } }
                                transition={ { duration: 0.3, ease: "easeOut" } }
                                onClick={ ( e ) => e.stopPropagation() }
                            >
                                <button
                                    className="absolute top-1 right-3 text-6xl font-base text-gray-700 hover:text-active"
                                    onClick={ () => setSelectedModel( null ) }
                                >
                                    &times;
                                </button>
                                <p className="text-lg font-semibold">{ selectedModel.content }</p>
                            </motion.div>
                        </motion.div>
                    ) }
                </AnimatePresence>
            </div>

            <div className="flex lg:w-[70%] xl:w-[85%] items-center justify-center lg:gap-6 xl:gap-10 gap-x-5 gap-y-3 md:gap-x-16 md:gap-y-6 flex-wrap w-[85%]">
                { experinces.map( ( { id, src, alt } ) => <Image key={ id } alt={ alt } src={ src } className="w-[12%] md:w-[7%] lg:w-[5%]" /> ) }
            </div>
        </section>
    );
};

export default OurExperince;
