import ServiceSection from "../Services";

const TechnicalServices = () => {
    const technicalCards = [
        { label: "تطوير وبناء المواقع والمتاجر الالكترونية", id: "1", src: "/technical/first.gif" },
        { label: "تصميم تجربة وواجهة المستخدم UI/UX", id: "2", src: "/technical/second.gif" },
        { label: "بناء وتطوير تطبيقات الموبايل", id: "3", src: "/technical/third.gif" },
    ];

    return (
        <ServiceSection
            id="الخدمات-التقنية"
            title="الخــدمــات التقنيــــة"
            description="لأن كل نشاط تجاري غير موجود على الانترنت، فهو ذاهب للتلاشي لا محالة... نقدم خدماتنا التقنية التالية:"
            cards={ technicalCards }
            isTechnical={true}
        />
    );
};

export default TechnicalServices;
