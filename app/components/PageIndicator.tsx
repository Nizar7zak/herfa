"use client";
import { useSectionStore } from "@/lib/store";

type SectionId = "home" | "about" | "process" | "marketing-services" | "creative-services" | "technical-services" | "experience" | "contact";

const sections: { id: SectionId; label: string; subSections?: { id: SectionId; label: string }[] }[] = [
    { id: "home", label: "01" },
    { id: "about", label: "02" },
    { id: "process", label: "03" },
    {
        id: "marketing-services",
        label: "04",
        subSections: [
            { id: "marketing-services", label: "" },
            { id: "creative-services", label: "" },
            { id: "technical-services", label: "" }
        ]
    },
    { id: "experience", label: "05" },
    { id: "contact", label: "06" },
];

const PageIndicator = () => {
    const { activeSection, setActiveSection } = useSectionStore();

    const isServicesActive = ["marketing-services", "creative-services", "technical-services"].includes(activeSection);

    return (
        <div className={`fixed ${activeSection ? '' : ''} ${typeof window !== 'undefined' && document.documentElement.dir === 'rtl' ? 'right-[5.93rem]' : 'left-[5.93rem]'} top-1/2 transform -translate-y-1/2  flex-col space-y-4 hidden lg:flex`}>
            {sections.map((section) => (
                <div key={section.id} className="flex flex-col items-center">
                    <a
                        onClick={() => setActiveSection(section.id)}
                        href={`#${section.id}`}
                        className={`transition-all ${
                            activeSection === section.id || (section.id === "marketing-services" && isServicesActive)
                                ? "text-active font-bold text-xl"
                                : "text-primary"
                        }`}
                    >
                        {section.label}
                    </a>

                    {section.subSections && (
                        <div className="flex flex-col items-center space-y-4 mt-1">
                            {section.subSections.map((sub) => (
                                <a
                                    key={sub.id}
                                    onClick={() => setActiveSection(sub.id)}
                                    href={`#${sub.id}`}
                                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                                        activeSection === sub.id ? "bg-active" : "bg-white"
                                    }`}
                                >
                                    {sub.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PageIndicator;
