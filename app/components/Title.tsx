
interface Props {
    text: string
}
const Title = ( { text }: Props ) => {
    return (
        <h1 className="text-[32px] text-active font-bold">{ text }</h1>
    )
}

export default Title