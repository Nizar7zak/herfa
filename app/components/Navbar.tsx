"use client";
import { useSectionStore } from "@/lib/store";
import Animation from '@/public/Vector.svg';
import Image from "next/image";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";

const sections = [
    { id: "الرئيسية", label: "الرئيسية" },
    { id: "من-نحن", label: "من نحن" },
    { id: "آلية-عملنا", label: "آلية عملنا" },
    {
        id: "الخدمات-التسويقية",
        label: "خدماتنا",
        subSections: [
            { id: "الخدمات-التسويقية", label: "الخدمات التسويقية" },
            { id: "الخدمات-الإبداعية", label: "الخدمات الإبداعية" },
            { id: "الخدمات-التقنية", label: "الخدمات التقنية" }
        ]
    },
    { id: "فريق-العمل", label: "فريق العمل" },
    { id: "خبراتنا", label: "خبراتنا" },
    { id: "تواصل-معنا", label: "تواصل معنا" },
];

const Navbar = () => {
    const { activeSection, isHome, setActiveSection } = useSectionStore();
    const [ isOpen, setIsOpen ] = useState( false );

    const handleClick = ( id: string ) => {
        const index = sections.findIndex( ( section ) => section.id === id || ( section.subSections?.some( sub => sub.id === id ) ) );

        if ( index !== -1 ) {
            document.getElementById( id )?.scrollIntoView( { behavior: "smooth" } );
            setActiveSection( sections[ index ].id );
            setIsOpen( false );
        }
    };

    const isServicesActive = [ "الخدمات-التسويقية", "الخدمات-الإبداعية", "الخدمات-التقنية" ].includes( activeSection );

    return (
        <nav className="fixed lg:top-[5.25rem] left-0 w-full z-50 px-[6.3rem]">
            <div
                className={ `fixed transition-all duration-500 hidden lg:block ${isHome
                        ? "-top-[12rem] -left-[12rem] transform opacity-100 animate-floatRotate"
                        : "-top-[25rem] -left-[25rem] transform opacity-0"
                    }` }
            >
                <Image src={ Animation } alt="Logo-herfa" className="transition-all duration-500" />
            </div>

            <div className="lg:hidden fixed top-9 right-6 z-50">
                <button onClick={ () => setIsOpen( !isOpen ) } className="text-white text-3xl">
                    { isOpen ? <FaTimes /> : <CgMenuGridO size={ 45 } /> }
                </button>
            </div>

            <ul className="hidden lg:flex gap-4 2xl:gap-6">
                { sections.map( ( section ) => (
                    <li key={ section.id }>
                        <button
                            onClick={ () => handleClick( section.id ) }
                            className={ `transition-all text-sm 2xl:text-lg ${activeSection === section.id || ( section.id === "الخدمات-التسويقية" && isServicesActive )
                                    ? "text-active font-bold"
                                    : "text-white"
                                }` }
                        >
                            { section.label }
                        </button>
                    </li>
                ) ) }
            </ul>

            <div
                className={ `fixed inset-0 bg-secondary bg-opacity-[0.97] flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    } lg:hidden` }
            >
                { sections.map( ( section ) => (
                    <button
                        key={ section.id }
                        onClick={ () => handleClick( section.id ) }
                        className={ `text-lg transition-all ${activeSection === section.id ? "text-active font-bold" : "text-primary"
                            }` }
                    >
                        { section.label }
                    </button>
                ) ) }
            </div>
        </nav>
    );
};

export default Navbar;
