import { useSectionStore } from "@/lib/store";

interface Props {
    text: string
}
const Description = ( { text }: Props ) => {
    const { activeSection } = useSectionStore();

    const isSpecialSection = ["الخدمات-التسويقية", "الخدمات-الإبداعية", "الخدمات-التقنية"].includes(activeSection);
    const textColor = isSpecialSection ? "text-secondary" : "text-white";
    const textJustify = isSpecialSection ? "text-center" : "text-justify";
    
    return (
        <h1 className={`${textColor} font-normal ${textJustify} text-xl`}>{ text }</h1>
    )
}

export default Description