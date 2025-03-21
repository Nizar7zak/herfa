import Naksha from '@/public/aboveHowWeWork.svg';
import { motion, useMotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Card from "../Card";
import Description from "../Description";
import Title from "../Title";

import Fifth from '@/public/howwework/fifth.svg';
import First from '@/public/howwework/first.svg';
import Fourth from '@/public/howwework/fourth.svg';
import Right from '@/public/howwework/right.svg';
import Second from '@/public/howwework/second.svg';
import Seventh from '@/public/howwework/seventh.svg';
import Sixth from '@/public/howwework/sixth.svg';
import Third from '@/public/howwework/third.svg';

import MbFifth from '@/public/howwework/mobilefifth.svg';
import MbFirst from '@/public/howwework/mobilefirst.svg';
import MbFourth from '@/public/howwework/mobilefourth.svg';
import MbSecond from '@/public/howwework/mobilesecond.svg';
import MbSeventh from '@/public/howwework/mobileseventh.svg';
import MbSixth from '@/public/howwework/mobilesixth.svg';
import MbThird from '@/public/howwework/mobilethird.svg';


interface SliderItem {
  content: string;
  desktopSrc: StaticImageData;
  mobileSrc: StaticImageData;
}


const initialSliderContent: SliderItem[] = [
  { content: "فهم ومعرفة الفكرة", desktopSrc: First, mobileSrc: MbFirst },
  { content: "التحليل العميق", desktopSrc: Second, mobileSrc: MbSecond },
  { content: "التخطيط المنظم", desktopSrc: Third, mobileSrc: MbThird },
  { content: "التصميم والبناء", desktopSrc: Fourth, mobileSrc: MbFourth },
  { content: "التنفيذ", desktopSrc: Fifth, mobileSrc: MbFifth },
  { content: "الاختبـــار", desktopSrc: Sixth, mobileSrc: MbSixth },
  { content: "المتابعة والتقيم", desktopSrc: Seventh, mobileSrc: MbSeventh },
];

const HowWeWork = () => {
  const [ sliderContent, setSliderContent ] = useState( initialSliderContent );
  const [ xOffset, setXOffset ] = useState( 0 );
  const x = useMotionValue( xOffset );

  const handleImageClick = () => {
    setSliderContent( ( prev ) => {
      const [ first, ...rest ] = prev;
      return [ ...rest, first ];
    } );
  };
  const titleColor = "text-secondary lg:text-active"
  const descriptionColor = "text-secondary lg:text-primary"

  return (
    <section id="آلية-عملنا"
      className=" 
      shadow-2xl shadow-black/50 lg:shadow-none relative
    bg-primary mt-56 mb-16 rounded-[3rem] lg:rounded-none
      h-[65vh] lg:h-screen w-full lg:w-[175vw] xl:w-[157vw] 
      2xl:w-[158vw] 3xl:w-[151vw] lg:bg-transparent
      flex justify-start lg:justify-center items-center 
      gap-16 lg:gap-10 xl:gap-16 2xl:gap-24 3xl:gap-48
      flex-col lg:flex-row py-16 lg:py-0 ">
      <div className="absolute -top-80 -left-52 opacity-15 -z-10 lg:hidden">
        <Image alt="Naksha" src={ Naksha } />
      </div>
      <div>
        <div className="w-full flex flex-col space-y-4 justify-center items-center lg:justify-start lg:items-start">
          <Title text="آليــة عملنـــا" textColor={ titleColor } />
          <Description text="المسار الفعلي الذي نسيره معاً للوصول إلى الهدف"
            textPosition="right"
            textColor={ descriptionColor }
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-10">

        <Image
          src={ Right }
          alt="right"
          className="cursor-pointer transition-transform duration-100 hover:scale-120 hidden lg:block "
          onClick={ handleImageClick }
        />

        <div className="hidden md:flex flex-col p-3">
          <motion.div
            className="flex justify-between items-center gap-6 xl:gap-8 2xl:gap-10 -mt-6"
            layout
            transition={ { type: "spring", stiffness: 100, damping: 10 } }
          >
            { sliderContent.map( ( { content, desktopSrc, mobileSrc } ) => (
              <motion.div
                key={ content }
                layout
                initial={ { opacity: 1 } }
                animate={ { opacity: [ 1, 0, 0.1, 1 ] } }
                transition={ { duration: 2 } }
              >
                <Card text={ content } srcImage={ desktopSrc } mobileSrc={ mobileSrc } isService={ false } />
              </motion.div>
            ) ) }
          </motion.div>
        </div>
        <div className="md:hidden">
          <motion.div
            className="flex justify-between items-center "
            drag="x"
            style={ { x } }
            dragConstraints={ { left: -470, right: 470 } }
            onDragEnd={ () => setXOffset( x.get() ) }
            whileTap={ { cursor: "grabbing" } }
            transition={ { ease: "easeOut", duration: 0.4 } }
          >
            { initialSliderContent.map( ( { content, mobileSrc } ) => (
              <Card key={ content } text={ content } srcImage={ mobileSrc } mobileSrc={ mobileSrc } isService={ false } />
            ) ) }
          </motion.div>

        </div>



      </div>
    </section>
  );
};

export default HowWeWork;
