"use client";
import { useSectionStore } from "@/lib/store";

const sections = [
    { id: "الرئيسية", label: "01" },
    { id: "من-نحن", label: "02" },
    { id: "آلية-عملنا", label: "03" },
    {
        id: "الخدمات-التسويقية",
        label: "04",
        subSections: [
            { id: "الخدمات-التسويقية", label: "" },
            { id: "الخدمات-الإبداعية", label: "" },
            { id: "الخدمات-التقنية", label: "" }
        ]
    },
    { id: "فريق-العمل", label: "05" },
    { id: "خبراتنا", label: "06" },
    { id: "تواصل-معنا", label: "07" },
];

const PageIndicator = () => {
    const { activeSection, setActiveSection } = useSectionStore();

    const isServicesActive = ["الخدمات-التسويقية", "الخدمات-الإبداعية", "الخدمات-التقنية"].includes(activeSection);

    return (
        <div className="fixed right-[5.93rem] top-1/2 transform -translate-y-1/2  flex-col space-y-4 hidden lg:flex">
            {sections.map((section) => (
                <div key={section.id} className="flex flex-col items-center">
                    <a
                        onClick={() => setActiveSection(section.id)}
                        href={`#${section.id}`}
                        className={`transition-all ${
                            activeSection === section.id || (section.id === "الخدمات-التسويقية" && isServicesActive)
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
