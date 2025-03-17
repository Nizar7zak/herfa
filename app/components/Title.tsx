
interface Props {
    text: string;
    textColor?: string;

}
const Title = ( { text, textColor }: Props ) => {
    return (
        <h1 className={`text-[20px] lg:text-[28px] xl:text-[36px] 2xl:[2.5rem] text-active font-semibold ${textColor}`}>{ text }</h1>
    )
}

export default Title