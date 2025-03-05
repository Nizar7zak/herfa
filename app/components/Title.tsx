
interface Props {
    text: string
}
const Title = ( { text }: Props ) => {
    return (
        <h1 className="text-[20px] lg:text-[28px] xl:text-[36px] 2xl:[2.5rem] text-active font-semibold">{ text }</h1>
    )
}

export default Title