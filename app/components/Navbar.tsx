"use client";
import { useSectionStore } from "@/lib/store";
import { useI18n } from "@/app/providers/I18nProvider";
import Animation from '@/public/Vector.svg';
import Image from "next/image";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

const sections = [
    { id: "home", labelKey: "navbar.home" },
    { id: "about", labelKey: "navbar.about" },
    { id: "process", labelKey: "navbar.process" },
    {
        id: "marketing-services",
        labelKey: "navbar.services",
        subSections: [
            { id: "marketing-services", labelKey: "navbar.marketing" },
            { id: "creative-services", labelKey: "navbar.creative" },
            { id: "technical-services", labelKey: "navbar.technical" }
        ]
    },
    { id: "team", labelKey: "navbar.team" },
    { id: "experience", labelKey: "navbar.experience" },
    { id: "contact", labelKey: "navbar.contact" },
];

const Navbar = () => {
    const { activeSection, isHome, setActiveSection } = useSectionStore();
    const { t, toggleLanguage, lang, toggleTheme, theme } = useI18n();
    const [ isOpen, setIsOpen ] = useState( false );

    const handleClick = ( id: typeof sections[number]["id"] ) => {
        const index = sections.findIndex( ( section ) => section.id === id || ( section.subSections?.some( sub => sub.id === id ) ) );

        if ( index !== -1 ) {
            document.getElementById( id )?.scrollIntoView( { behavior: "smooth" } );
            setActiveSection( sections[ index ].id as "home" | "about" | "process" | "marketing-services" | "creative-services" | "technical-services" | "team" | "experience" | "contact" );
            setIsOpen( false );
        }
    };

    const isServicesActive = [ "marketing-services", "creative-services", "technical-services" ].includes( activeSection );

    return (
        <nav className="fixed lg:top-[5.25rem] left-0 w-full z-40 px-[6.3rem] ">
            <div
                className={ `fixed transition-all duration-500 hidden lg:block ${isHome
                    ? (lang==='ar' ? "-top-[12rem] -left-[12rem]" : "-top-[12rem] -right-[12rem]") + " transform opacity-100 animate-floatRotate"
                    : (lang==='ar' ? "-top-[25rem] -left-[25rem]" : "-top-[25rem] -right-[25rem]") + " transform opacity-0"
                    }` }
            >
                <Image src={ Animation } alt="Logo-herfa" className="transition-all duration-500" />
            </div>

            <div className={`lg:hidden fixed top-6 ${lang === 'ar' ? 'right-4' : 'left-4'} z-50 flex items-center gap-2`}>
                <button onClick={ () => setIsOpen( !isOpen ) } className="text-white text-3xl">
                    { isOpen ? <FaTimes /> : <CgMenuGridO size={ 35 } /> }
                </button>
            </div>

            <div className="lg:hidden fixed top-6 left-1/2 transform -translate-x-1/2 z-[60] flex items-center gap-2">
                <button onClick={() => toggleLanguage()} aria-label="Arabic" className={`p-1 rounded bg-white/20 backdrop-blur ${lang==='ar'?'ring-2 ring-white/70':''}`}>
                    <img src="https://flagcdn.com/w20/sa.png" alt="SA" width="20" height="15" />
                </button>
                <button onClick={() => toggleLanguage()} aria-label="English" className={`p-1 rounded bg-white/20 backdrop-blur ${lang==='en'?'ring-2 ring-white/70':''}`}>
                    <img src="https://flagcdn.com/w20/gb.png" alt="UK" width="20" height="15" />
                </button>
                <button onClick={toggleTheme} aria-label="Toggle theme" className="p-1 rounded bg-white/20 backdrop-blur">
                    {theme === 'dark' ? (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>
            </div>

            <ul className="hidden lg:flex gap-4 2xl:gap-6">
                { sections.map( ( section ) => (
                    <li key={ section.id }>
                        <button
                            onClick={ () => handleClick( section.id ) }
                            className={ `transition-all text-sm 2xl:text-lg ${activeSection === section.id || ( section.id === "marketing-services" && isServicesActive )
                                ? "text-active font-bold"
                                : "text-white"
                                }` }
                        >
                            { t(section.labelKey) }
                        </button>
                    </li>
                ) ) }

            </ul>

            <div
                className={ `fixed inset-0 bg-secondary  transition-transform flex flex-col items-center justify-between duration-300 py-10
                    ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden` }
            >
                <div className="flex flex-col items-center justify-center space-y-6 mt-36">

                    { sections.map( ( section ) => (
                        <button
                            key={ section.id }
                            onClick={ () => handleClick( section.id ) }
                            className={ `text-lg transition-all ${activeSection === section.id ? "text-active font-bold" : "text-primary"
                                }` }
                        >
                            { t(section.labelKey) }
                        </button>
                    ) ) }
                </div>
                <div className="mb-10">
                    <SocialIcons />
                </div>

            </div>
            <div className={`hidden lg:flex fixed top-6 ${lang==='ar' ? 'right-[3.0625rem]' : 'left-[3.0625rem]'} z-50 gap-2`}>
                <button onClick={() => toggleLanguage()} aria-label="Arabic" className={`p-1 rounded bg-white/20 backdrop-blur ${lang==='ar'?'ring-2 ring-white/70':''}`}>
                    <img src="https://flagcdn.com/w20/sa.png" alt="SA" width="20" height="15" />
                </button>
                <button onClick={() => toggleLanguage()} aria-label="English" className={`p-1 rounded bg-white/20 backdrop-blur ${lang==='en'?'ring-2 ring-white/70':''}`}>
                    <img src="https://flagcdn.com/w20/gb.png" alt="UK" width="20" height="15" />
                </button>
                <button onClick={toggleTheme} aria-label="Toggle theme" className="p-1 rounded bg-white/20 backdrop-blur">
                    {theme === 'dark' ? (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
