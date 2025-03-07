import Image, { StaticImageData } from "next/image";

interface Props {
    text: string;
    srcImage: StaticImageData | string;
}

const Card = ( { text, srcImage }: Props ) => {
    return (
        <div className="w-[13vw] h-[25vh] xl:h-[29vh] 2xl:w-[11vw] 2xl:h-[32vh]  rounded-lg flex flex-col justify-center items-center gap-5 xl:gap-8 2xl:gap-6 py-8">
            <Image alt="icon How We Work" src={ srcImage } width={ 30 } height={ 30 } className=" w-[65%] xl:w-[75%] 2xl:w-[70%] h-auto" />
            <h1 className="text-sm xl:text-base 2xl:text-lg text-center text-primary w-[90%]  flex-1">{ text }</h1>
        </div>
    )
}

export default Card