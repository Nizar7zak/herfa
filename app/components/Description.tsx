import { useSectionStore } from "@/lib/store";

interface Props {
    text: string
}
const Description = ( { text }: Props ) => {
    const { activeSection } = useSectionStore();

    const isSpecialSection = ["الخدمات-التسويقية", "الخدمات-الإبداعية", "الخدمات-التقنية"].includes(activeSection);
    const textJustify = isSpecialSection ? "text-center" : "text-justify";
    
    return (
        <h1 className={`text-white font-normal ${textJustify} md:text-[0.8rem] xl:text-base md:leading-3 lg:leading-7 xl:leading-[2.1rem] `}>{ text }</h1>
    )
}

export default Description