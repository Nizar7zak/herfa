import Image, { StaticImageData } from "next/image";

interface Props {
    text: string;
    srcImage: StaticImageData | string;
    isService: boolean;
    mobileSrc?: StaticImageData | string;
}

const Card = ( { text, srcImage, isService, mobileSrc }: Props ) => {
    const bgColor = isService ? 'bg-[rgba(217,217,217,0.05)] backdrop-blur-[10px] inset-[0_0_7.8px_rgba(217,217,217,0.078)] scale-110' : 'bg-secondary lg:bg-primary';
    const textColor = `text-primary ${isService ? "" : "lg:text-secondary"}`;
    const cardApperance = isService ? "block" : "hidden lg:block"

    return (
        <div className={ `${bgColor} 
            w-[36vw] h-[26vh] mx-5 md:mx-0
            ${isService ? " md:w-[15vw] md:h-[20vh] " : "md:w-[11vw]  md:h-[15vh]" }
            lg:w-[11vw] lg:h-[20vh] xl:h-[29vh] 2xl:w-[11vw] 2xl:h-[32vh]  
            rounded-lg flex flex-col justify-center items-center gap-6 xl:gap-8 2xl:gap-10 py-14 `}>

            <Image
                alt="service"
                src={ srcImage }
                width={ 30 } height={ 30 }
                className={ `w-[60%] lg:w-[55%] xl:w-[67%] 2xl:w-[62%] h-auto ${cardApperance}` }

                
            />
            {
                !isService &&
                <Image
                    alt="icon How We Work"
                    src={ mobileSrc! }
                    width={ 30 } height={ 30 }
                    className="w-[60%] md:w-[50%] lg:w-[55%] xl:w-[67%] 2xl:w-[62%] h-auto lg:hidden block"
    
                    
                />

            }

            <h1 className={ `text-[12px] xl:text-base  text-center ${textColor} w-[90%] flex-1` }>{ text }</h1>
        </div>
    )
}

export default Card