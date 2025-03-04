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
import Image, { StaticImageData } from "next/image";
import Card from "../Card";
import { useState } from "react";
import { motion } from "framer-motion";

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
  const [sliderContent, setSliderContent] = useState(initialSliderContent);

  const handleImageClick = () => {
    setSliderContent((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first]; // Moves the first item to the end
    });
  };

  return (
    <section id="آلية-عملنا" className="h-screen w-[135vw] flex justify-center items-center bg-secondary gap-32">
      <div>
        <div className="w-full flex flex-col space-y-4">
          <Title text="آليــة عملنـــا" />
          <Description text="المسار الفعلي الذي نسيره معاً للوصول إلى الهدف" />
        </div>
      </div>

      <Image 
        src={Right} 
        alt="right" 
        className="cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={handleImageClick}
      />

      <div className="flex flex-col p-2 border-2 border-active rounded-lg">
        <motion.div 
          className="flex justify-between items-center gap-12 -mt-6"
          layout
          transition={{ type: "spring", stiffness: 300, damping: 100 }}
        >
          {sliderContent.map(({ content, src }) => (
            <motion.div
              key={content}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 100 }}
            >
              <Card text={content} srcImage={src} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;
