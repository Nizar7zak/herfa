import Card from "./Card";
import Description from "./Description";
import Title from "./Title";

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  cards: { label: string; id: string; src: string }[];
}

const ServiceSection = ({ id, title, description, cards }: ServiceSectionProps) => {
  return (
    <section id={id} className="h-[65vh] lg:h-screen flex flex-col justify-center items-center gap-10 xl:gap-14 2xl:gap-16">
      <div className="space-y-4 w-[75%] lg:w-[42%] flex flex-col justify-center items-center">
        <Title text={title} />
        <Description textPosition="center" text={description} />
      </div>

      <div className="flex justify-between items-center px-32 md:px-0 gap-8 md:gap-8 2xl:gap-10 border-4 border-active rounded-lg">
        {cards.map(({ id, label, src }) => (
          <Card key={id} text={label} srcImage={src} isService />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
