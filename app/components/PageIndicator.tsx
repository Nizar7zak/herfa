"use client";
import { useSectionStore } from "@/lib/store";

const sections = [
    { id: "الرئيسية", label: "01" },
    { id: "من-نحن", label: "02" },
    { id: "آلية-عملنا", label: "03" },
    { id: "خدماتنا", label: "04" },
    { id: "فريق-العمل", label: "05" },
    { id: "خبراتنا", label: "06" },
    { id: "تواصل-معنا", label: "07" },
];

const PageIndicator = () => {
    const { activeSection, setActiveSection } = useSectionStore();
    let textColor = activeSection === "خدماتنا" ? "text-secondary" : "text-white";


    return (
        <div className="fixed right-[5.93rem] top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
            { sections.map( ( section ) => (
                <a
                    onClick={ () => setActiveSection( section.id ) }
                    key={ section.id }
                    href={ `#${section.id}` }
                    className={ `transition-all ${activeSection === section.id ? "text-active font-bold text-xl" : textColor
                        }` }
                >
                    { section.label }
                </a>
            ) ) }
        </div>
    );
};

export default PageIndicator;
