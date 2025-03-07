import Image, { StaticImageData } from "next/image";

interface Props {
    text: string;
    srcImage: StaticImageData | string;
    isService: boolean;
}

const Card = ( { text, srcImage, isService }: Props ) => {
    const bgColor = isService ? 'bg-[rgba(217,217,217,0.05)] backdrop-blur-[10px] inset-[0_0_7.8px_rgba(217,217,217,0.078)] scale-110 mb-4' : 'bg-primary';
    const color = isService ? "text-primary" : "text-secondary";

    return (
        <div className={ `${bgColor} 
        w-[13vw] h-[25vh] xl:h-[29vh] 2xl:w-[11vw] 2xl:h-[32vh] 3xl:w-[13vw] 3xl:h-[35vh] rounded-lg flex flex-col justify-center items-center gap-5 xl:gap-8 2xl:gap-6 3xl-gap-8 py-8 `}>
            <Image alt="icon How We Work" src={ srcImage } width={ 30 } height={ 30 } className=" w-[65%] xl:w-[75%] 2xl:w-[70%] h-auto" unoptimized />
            <h1 className={`text-sm xl:text-base  text-center ${color}  w-[90%]  flex-1`}>{ text }</h1>
        </div>
    )
}

export default Card