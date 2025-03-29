import Image from 'next/image'
import AboutUsPic from "@/public/aboutUs.png"
import Description from '../Description'
import Title from '../Title'

const AboutUs = () => {
  return (
    <section id="من-نحن" className="h-[80v] mt-10 md:mt-0 lg:h-screen flex justify-center items-center gap-6 lg:gap-24 flex-col lg:flex-row">

      <div className="w-[90%] lg:w-[25%] 2xl:w-[28%] flex justify-center items-center">
        <Image src={ AboutUsPic } alt="من نحن" />
      </div>
      <div className="flex flex-col space-y-8 w-[90%] lg:w-[35%] ">
        <div className="w-full flex flex-col space-y-4">
          <Title text="من نحن" />
          <Description
            textPosition='right'
            text="حِرْفَة هي شركة تستلهم أصالتها من التراث السعودي العـريق حيث تعكس الحرف السعــودية التقليدية في جوهرهــا مع لمسة عصري مبتكرة. "
          />
          <Description
            textPosition='right'
            text=" تم اختيار الشعــار البنفسجي المستــوحى من لــون الخزامــى الزهـــرة التي تمثل الأصالة والكرم في الثقافة السعودية ليكون رمزًا للتمــيز والإبــداع."
          />
        </div>
        <div className="w-full flex flex-col space-y-6">
          <Title text="رؤيتنــا" />
          <Description
            textPosition='right'
            text="أن نصبح روّادًا في تقــديم حلـــول إبداعيـــة تمزج بــين التراث العريق والابتكار الرقمي العصري."
          />
        </div>
      </div>

    </section>
  )
}

export default AboutUs