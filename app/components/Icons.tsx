import Whatsapp from '@/public/whatsapp.svg'
import Image from 'next/image'
import { FaChevronDown } from 'react-icons/fa'
import SocialIcons from './SocialIcons'
import { useI18n } from '@/app/providers/I18nProvider'

const Icons = () => {
    const { lang } = useI18n();

    return (
        <div className="fixed bottom-[2.5rem] left-12 lg:left-0 w-full flex items-center justify-center px-[5.8rem] gap-4 z-50">
            <div className={`flex-1 flex  justify-start`}>
                <a
                    href="https://wa.me/905376033936"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image width={ 50 } alt="whatsapp" src={ Whatsapp } className='cursor-pointer' />
                </a>
            </div>
            <FaChevronDown size={ 24 } className="text-white hidden lg:block" />
            <div className="flex-1 lg:flex justify-end hidden">
                <SocialIcons />
            </div>
        </div > )
}

export default Icons