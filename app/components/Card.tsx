
interface Props {
    text: string;
    src: string;
}

const Card = ( { text, src }: Props ) => {
    return (
        <div className="w-[168px] h-[240px] bg-primary rounded-lg flex flex-col justify-center items-center gap-4 py-7">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-[75%] h-auto"
            >
                <source src={ src } type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h1 className="text-base text-center text-secondary w-[85%] flex-1">{ text }</h1>
        </div>
    )
}

export default Card