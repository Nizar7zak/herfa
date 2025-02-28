import Image, { StaticImageData } from "next/image";

interface Props {
    text: string;
    src: StaticImageData | string;
}

const Card = ( { text, src }: Props ) => {
    return (
        <div className="w-[168px] h-[240px] bg-primary rounded-lg flex flex-col justify-center items-center gap-7 pt-8">
            <Image src={ src } alt="Our Services"/>
            <h1 className="text-base text-center text-secondary w-[85%] flex-1">{ text }</h1>
        </div>
    )
}

export default Card