interface Props {
    text: string;
    textPosition: string;
    textColor?: string;
}
const Description = ( { text, textPosition, textColor}: Props ) => {
    
    
    return (
        <h1 className={`${textColor}
            font-normal text-${textPosition}  md:text-[0.8rem] xl:text-base leading-7 xl:leading-[2.1rem]`
        }>
            { text }
        </h1>
    )
}

export default Description