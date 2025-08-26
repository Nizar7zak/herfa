import ServiceSection from "../Services";
import { useI18n } from "@/app/providers/I18nProvider";

const CreativeService = () => {
    const { t } = useI18n();
    const creativeCards = [
        { label: t('creative.cards.1'), id: "1", src: "/creative/first.gif" },
        { label: t('creative.cards.2'), id: "2", src: "/creative/second.gif" },
        { label: t('creative.cards.3'), id: "3", src: "/creative/third.gif" },
        { label: t('creative.cards.4'), id: "4", src: "/creative/fourth.gif" },
        { label: t('creative.cards.5'), id: "5", src: "/creative/fifth.gif" },
    ];

    return (
        <ServiceSection
            id="creative-services"
            title={t('creative.title')}
            description={t('creative.desc')}
            cards={ creativeCards }
        />
    );
};

export default CreativeService;
