import Title from '../Title'
import Description from '../Description'
import Form from '../Form'
import SocialIcons from '../SocialIcons'
import { useI18n } from '@/app/providers/I18nProvider'

const answersKeys = [
    'contact.answers.0',
    'contact.answers.1',
    'contact.answers.2',
]

const ContactUs = () => {
    const { t } = useI18n();
    return (
        <section id="contact" className=" flex justify-center items-center flex-col lg:flex-row gap-6 xl:gap-12 2xl:gap-20">
            <div className='w-[90%] lg:w-1/3 flex flex-col justify-center items-start gap-5 lg:gap-7'>
                <Title text={t('contact.title')} />
                <Description
                    textPosition='right'
                    text={t('contact.desc')} />
                <ul className='flex flex-col justify-center items-start gap-1 lg:gap-2'>
                    <Description
                        textPosition='right'
                        text={t('contact.helpQuestion')} />
                    { answersKeys.map( ( key, index ) =>
                        <li key={ index } className='flex  justify-center items-center gap-4'>
                            <div className={ `w-2 h-2 rounded-full transition-all cursor-pointer bg-primary` } />
                            <Description textPosition='right' text={ t(key) } />
                        </li>
                    ) }
                </ul>
            </div>
            <div className='w-[90%] lg:w-1/3'>
                <Form />
            </div>

            <div className='my-8 flex flex-col gap-4 lg:hidden'>
                <SocialIcons />
                <h3 className='text-center text-[12px]'>
                {t('contact.rights')}
                </h3>
            </div>
        </section>
    )
}

export default ContactUs

