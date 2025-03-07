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

  return (
    <section id="آلية-عملنا" className="h-screen md:w-[182vw] xl:w-[178vw] 2xl:w-[168vw] 3xl:w-[164vw] flex justify-center items-center gap-10 xl:gap-16 2xl:gap-24 3xl:gap-32">
      <div>
        <div className="w-full flex flex-col space-y-4">
          <Title text="آليــة عملنـــا" />
          <Description text="المسار الفعلي الذي نسيره معاً للوصول إلى الهدف" />
        </div>
      </div>

      <Image
        src={ Right }
        alt="right"
        className="cursor-pointer transition-transform duration-300 hover:scale-115"
        onClick={ handleImageClick }
      />

      <div className="flex flex-col p-3 border-2 border-active rounded-lg">
        <motion.div
          className="flex justify-between items-center gap-6 xl:gap-8 2xl:gap-10 -mt-6"
          layout
          transition={ { type: "spring", stiffness: 200, damping: 50 } }
        >
          { sliderContent.map( ( { content, src } ) => (
            <motion.div
              key={ content }
              layout
              initial={ { opacity: 1 } }
              animate={ { opacity: [ 1, 0, 1 ] } }
              transition={ { duration: 1 } }
            >
              <Card text={ content } srcImage={ src } isService={ false } />
            </motion.div>
          ) ) }
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;
