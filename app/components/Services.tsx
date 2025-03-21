import { motion, useMotionValue } from "framer-motion";
import Card from "./Card";
import Description from "./Description";
import Title from "./Title";
import { useState } from "react";

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  cards: { label: string; id: string; src: string }[];
  isTechnical?: boolean;
}

const ServiceSection = ( { id, title, description, cards, isTechnical = false }: ServiceSectionProps ) => {
  const [ xOffset, setXOffset ] = useState( 0 );
  const x = useMotionValue( xOffset );
  return (
    <section id={ id } className="h-[63vh] lg:h-screen flex flex-col justify-center items-center gap-10 xl:gap-14 2xl:gap-16">
      <div className="space-y-4 w-[90%] md:w-[75%] lg:w-[42%] flex flex-col justify-center items-center">
        <Title text={ title } />
        <Description textPosition="center" text={ description } />
      </div>

      <div className="hidden md:flex justify-between items-center  md:px-0 md:gap-8 2xl:gap-10 border-4 border-active rounded-lg md:w-auto">
        { cards.map( ( { id, label, src } ) => (
          <Card key={ id } text={ label } srcImage={ src } isService />
        ) ) }
      </div>

      <div className="md:hidden border-4 border-active rounded-lg">
        <motion.div
          className="flex justify-between items-center "
          drag="x"
          style={ { x } }
          dragConstraints={ { left: isTechnical ? -100 : -300, right: isTechnical ? 100 : 300 } }
          onDragEnd={ () => setXOffset( x.get() ) }
          whileTap={ { cursor: "grabbing" } }
          transition={ { ease: "easeOut", duration: 0.4 } }
        >
          { cards.map( ( { id, label, src } ) => (
            <Card key={ id } text={ label } srcImage={ src } isService />
          ) ) }
        </motion.div>

      </div>

    </section>
  );
};

export default ServiceSection;
