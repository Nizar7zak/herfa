import Logo from "@/public/logo-herfa.svg";
import Image from "next/image";
import { useI18n } from "@/app/providers/I18nProvider";

const MainSec = () => {
    const { t } = useI18n();
    return (
        <section id="home" className="h-screen w-full flex items-center justify-center flex-col">
            <Image src={ Logo } alt="Logo-herfa" width={ 350 } height={ 350 } className="w-[350px] h-[350px] mb-6 lg:hidden"  />
            <h1 className="text-lg font-bold text-white lg:hidden">
                {t('common.motto')}
            </h1>
        </section>
    );
};

export default MainSec;
