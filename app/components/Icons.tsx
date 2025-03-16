import Whatsapp from '@/public/whatsapp.svg'
import Image from 'next/image'
import { FaChevronDown } from 'react-icons/fa'
import SocialIcons from './SocialIcons'

const Icons = () => {


    return (
        <div className="fixed bottom-[2.5rem] left-0 w-full lg:flex hidden items-center justify-center px-[5.8rem] gap-4">
            <div className="flex-1 flex justify-start">
                <Image width={ 50 } alt="whatsapp" src={ Whatsapp } className='cursor-pointer' />
            </div>
            <FaChevronDown size={ 24 } className="text-white" />
            <div className="flex-1 flex justify-end">
                <SocialIcons />
            </div>
        </div> )
}

export default Icons