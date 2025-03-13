import Image from "next/image";
import Logo from "@/public/logo-herfa.svg";

const MainSec = () => {
    return (
        <section id="الرئيسية" className="h-screen w-full flex items-center justify-center flex-col">
            <Image src={Logo} alt="Logo-herfa" width={250} height={250} className="w-[250px] h-[250px] mb-6 lg:hidden" />
            <h1 className="text-lg font-bold text-white lg:hidden">
                تـخـطـى حـدود <span className="mr-[2px]">الإبـداع</span>
            </h1>
        </section>
    );
};

export default MainSec;
