import ServiceSection from "../Services";
import { useI18n } from "@/app/providers/I18nProvider";

const TechnicalServices = () => {
    const { t } = useI18n();
    const technicalCards = [
        { label: t('technical.cards.1'), id: "1", src: "/technical/first.gif" },
        { label: t('technical.cards.2'), id: "2", src: "/technical/second.gif" },
        { label: t('technical.cards.3'), id: "3", src: "/technical/third.gif" },
    ];

    return (
        <ServiceSection
            id="technical-services"
            title={t('technical.title')}
            description={t('technical.desc')}
            cards={ technicalCards }
            isTechnical={true}
        />
    );
};

export default TechnicalServices;
