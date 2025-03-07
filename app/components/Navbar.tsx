"use client";
import { useSectionStore } from "@/lib/store";
import Animation from '@/public/Vector.svg';
import Image from "next/image";

const sections = [
    { id: "الرئيسية", label: "الرئيسية" },
    { id: "من-نحن", label: "من نحن" },
    { id: "آلية-عملنا", label: "آلية عملنا" },
    { id: "خدماتنا", label: "خدماتنا" },
    { id: "فريق-العمل", label: "فريق العمل" },
    { id: "خبراتنا", label: "خبراتنا" },
    { id: "تواصل-معنا", label: "تواصل معنا" },
];

const Navbar = () => {
    const { activeSection, isHome, setActiveSection } = useSectionStore();

    const handleClick = ( id: string ) => {
        document.getElementById( id )?.scrollIntoView( { behavior: "smooth" } );
        setActiveSection( id );
    };

    const textColor = ["الخدمات-التسويقية", "الخدمات-الإبداعية", "الخدمات-التقنية"].includes(activeSection)
    ? "text-secondary"
    : "text-white";


    return (
        <nav className="fixed top-[5.25rem]  left-0 w-full z-50 px-[6.3rem]">

            <div
                className={ `fixed transition-all duration-500 ${isHome
                    ? "-top-[12rem] -left-[12rem] transform  opacity-100 animate-floatRotate "
                    : "-top-[25rem] -left-[25rem] transform opacity-0"
                    }` }
            >
                <Image src={ Animation } alt="Logo-herfa" className="transition-all duration-500" />
            </div>

            <ul className="flex gap-4 2xl:gap-6">
                { sections.map( ( section ) => (
                    <li key={ section.id }>
                        <button
                            onClick={ () => handleClick( section.id ) }
                            className={ `transition-all text-sm 2xl:text-lg ${activeSection === section.id ? "text-active font-bold" : "text-white"
                                }` }
                        >
                            { section.label }
                        </button>
                    </li>
                ) ) }
            </ul>
        </nav>
    );
};

export default Navbar;
