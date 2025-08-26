import Image from 'next/image'
import AboutUsPic from "@/public/aboutUs.png"
import Description from '../Description'
import Title from '../Title'
import { useI18n } from '@/app/providers/I18nProvider'

const AboutUs = () => {
  const { t } = useI18n();
  return (
    <section id="about" className="h-[80vh] lg:h-screen flex justify-center items-center gap-6 lg:gap-24 flex-col lg:flex-row mt-10 md:mt-0">

      <div className="w-[90%] lg:w-[25%] 2xl:w-[28%] flex justify-center items-center">
        <Image src={ AboutUsPic } alt="من نحن" />
      </div>
      <div className="flex flex-col space-y-8 w-[90%] lg:w-[35%] ">
        <div className="w-full flex flex-col space-y-4">
          <Title text={t('about.title')} />
          <Description
            textPosition='right'
            text={t('about.desc1')}
          />
          <Description
            textPosition='right'
            text={t('about.desc2')}
          />
        </div>
        <div className="w-full flex flex-col space-y-6">
          <Title text={t('about.visionTitle')} />
          <Description
            textPosition='right'
            text={t('about.visionDesc')}
          />
        </div>
      </div>

    </section>
  )
}

export default AboutUs