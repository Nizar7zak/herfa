import { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Description from "../Description";
import Title from "../Title";
import Card from "../Card";

import Fifth from '@/public/howwework/fifth.svg';
import First from '@/public/howwework/first.svg';
import Fourth from '@/public/howwework/fourth.svg';
import Right from '@/public/howwework/right.svg';
import Second from '@/public/howwework/second.svg';
import Seventh from '@/public/howwework/seventh.svg';
import Sixth from '@/public/howwework/sixth.svg';
import Third from '@/public/howwework/third.svg';

interface SliderItem {
  content: string;
  src: StaticImageData;
}

const initialSliderContent: SliderItem[] = [
  { content: "فهم ومعرفة الفكرة", src: First },
  { content: "التحليل العميق", src: Second },
  { content: "التخطيط المنظم", src: Third },
  { content: "التصميم والبناء", src: Fourth },
  { content: "التنفيذ", src: Fifth },
  { content: "الاختبـــار", src: Sixth },
  { content: "المتابعة والتقيم", src: Seventh },
];

const HowWeWork = () => {
  const [ sliderContent, setSliderContent ] = useState( initialSliderContent );

  const handleImageClick = () => {
    setSliderContent( ( prev ) => {
      const [ first, ...rest ] = prev;
      return [ ...rest, first ];
    } );
  };
  let titleColor = "text-secondary lg:text-active"
  let descriptionColor = "text-active lg:text-primary"

  return (
    <section id="آلية-عملنا"
      className=" bg-primary mt-60 rounded-[3rem] lg:rounded-none
      h-[65vh] lg:h-screen w-full lg:w-[184vw] xl:w-[178vw] 2xl:w-[158vw] 3xl:w-[151vw] lg:bg-transparent
      flex justify-start lg:justify-center items-center gap-16 lg:gap-10 xl:gap-16 2xl:gap-24 3xl:gap-48 flex-col lg:flex-row py-16 lg:py-0 ">
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

        <div className="flex flex-col p-3">
          <motion.div
            className="flex justify-between items-center gap-6 xl:gap-8 2xl:gap-10 -mt-6"
            layout
            transition={ { type: "spring", stiffness: 100, damping: 10 } }
          >
            { sliderContent.map( ( { content, src } ) => (
              <motion.div
                key={ content }
                layout
                initial={ { opacity: 1 } }
                animate={ { opacity: [ 1, 0, 0.1, 1 ] } }
                transition={ { duration: 2 } }
              >
                <Card text={ content } srcImage={ src } isService={ false } />
              </motion.div>
            ) ) }
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
