import Image, { StaticImageData } from "next/image";

interface Props {
    text: string;
    srcImage: StaticImageData | string;
    isService: boolean;
    mobileSrc?: StaticImageData | string;
}

const Card = ( { text, srcImage, isService, mobileSrc }: Props ) => {
    const bgColor = isService ? 'bg-[rgba(217,217,217,0.05)] backdrop-blur-[10px] inset-[0_0_7.8px_rgba(217,217,217,0.078)] scale-110' : 'bg-secondary lg:bg-primary';
    const textColor = ` ${isService ? "text-active" : "text-primary lg:text-secondary"}`;
    const cardApperance = isService ? "block" : "hidden lg:block";

    return (
        <div className={ `${bgColor}
            w-[36vw] h-[26vh] mx-5 md:mx-0
            ${isService ? " md:w-[15vw] md:h-[20vh] " : "md:w-[13vw] md:h-[18vh]"}
            lg:w-[13vw] lg:h-[22vh] xl:h-[32vh] 2xl:w-[13vw] 2xl:h-[35vh]
            rounded-lg flex flex-col justify-center items-center gap-3 md:gap-4 xl:gap-5 py-4` }>

            <div className="flex-none flex items-center justify-center w-full">
                <Image
                    alt="service"
                    src={ srcImage }
                    width={ 30 } height={ 30 }
                    className={ `w-[60%] lg:w-[55%] xl:w-[67%] 2xl:w-[62%] h-auto ${cardApperance}` }
                />
                { !isService && (
                    <Image
                        alt="icon How We Work"
                        src={ mobileSrc! }
                        width={ 30 } height={ 30 }
                        className="w-[60%] md:w-[50%] lg:w-[55%] xl:w-[67%] 2xl:w-[62%] h-auto lg:hidden block"
                    />
                ) }
            </div>

            <h1 className={ `text-[12px] xl:text-base text-center ${textColor} font-semibold w-[90%] leading-snug break-words` }>
                { text }
            </h1>
        </div>
    );
}

export default Card