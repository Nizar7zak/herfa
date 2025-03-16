import ServiceSection from "../Services";

const MarketingServices = () => {
    const marketingCards = [
        { label: "التسويق عبر المؤثرين", id: "1", src: "/marketing/first.gif" },
        { label: "التسويق عبر محركات الـ SEO", id: "2", src: "/marketing/second.gif" },
        { label: "كتابة المحتوى", id: "3", src: "/marketing/third.gif" },
        { label: "إدارة حسابات التواصل الاجتماعي", id: "4", src: "/marketing/fourth.gif" },
        { label: "إطلاق وإدارة الحملات الإعلانية", id: "5", src: "/marketing/fifth.gif" },
    ];

    return (
        <ServiceSection
            id="الخدمات-التسويقية"
            title="الخدمات التسويقية"
            description='أي نشاط تجاري "منتجات أو خدمات" تحتاج إلى تنفيذ استراتيجيات تسويقية وترويجية استثنائية "خارج الصندوق"، لذلك نقدم لكم مجموعة متكاملة من الخدمات التسويقية تشمل:'
            cards={ marketingCards }
        />
    );
};

export default MarketingServices;
