interface Props {
    text: string;
    textPosition: string
}
const Description = ( { text, textPosition }: Props ) => {
    
    return (
        <h1 className={`text-white font-normal text-${textPosition} md:text-[0.8rem] xl:text-base leading-7 xl:leading-[2.1rem]`}>{ text }</h1>
    )
}

export default Description