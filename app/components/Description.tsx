
interface Props {
    text: string
}
const Description = ( { text }: Props ) => {
    return (
        <h1 className="text-primary font-light text-justify text-lg">{ text }</h1>
    )
}

export default Description