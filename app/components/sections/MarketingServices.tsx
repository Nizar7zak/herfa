import ServiceSection from "../Services";
import { useI18n } from "@/app/providers/I18nProvider";

const MarketingServices = () => {
    const { t } = useI18n();
    const marketingCards = [
        { label: t('marketing.cards.1'), id: "1", src: "/marketing/first.gif" },
        { label: t('marketing.cards.2'), id: "2", src: "/marketing/second.gif" },
        { label: t('marketing.cards.3'), id: "3", src: "/marketing/third.gif" },
        { label: t('marketing.cards.4'), id: "4", src: "/marketing/fourth.gif" },
        { label: t('marketing.cards.5'), id: "5", src: "/marketing/fifth.gif" },
    ];

    return (
        <ServiceSection
            id="marketing-services"
            title={t('marketing.title')}
            description={t('marketing.desc')}
            cards={ marketingCards }
        />
    );
};

export default MarketingServices;
