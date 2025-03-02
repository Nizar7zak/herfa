import Image, { StaticImageData } from "next/image";

interface Props {
    text: string;
    srcVideo?: string;
    srcImage?: StaticImageData;
}

const Card = ( { text, srcVideo, srcImage }: Props ) => {
    return (
        <div className="w-[168px] h-[240px] bg-primary rounded-lg flex flex-col justify-center items-center gap-4 py-8">
            { srcVideo ?
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[75%] h-auto"
                >
                    <source src={ srcVideo } type="video/mp4" />
                    Your browser does not support the video tag.
                </video> :
                srcImage && <Image alt="icon How We Work" src={ srcImage } />
            }

            <h1 className="text-base text-center text-secondary w-[85%] flex-1">{ text }</h1>
        </div>
    )
}

export default Card