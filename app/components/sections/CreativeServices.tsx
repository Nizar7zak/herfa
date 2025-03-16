import ServiceSection from "../Services";

const CreativeService = () => {
    const creativeCards = [
        { label: "تصميم الجرافيك ", id: "1", src: "/creative/first.gif" },
        { label: "بناء الهوية البصرية", id: "2", src: "/creative/second.gif" },
        { label: "الموشن جرافيك", id: "3", src: "/creative/third.gif" },
        { label: "مونتاج الفيديو", id: "4", src: "/creative/fourth.gif" },
        { label: "التصوير الابداعي", id: "5", src: "/creative/fifth.gif" },
    ];

    return (
        <ServiceSection
            id="الخدمات-الإبداعية"
            title="الخدمـات الإبداعيـــة"
            description="في ظل انتشار المحتوى المرئي بشكل واسع على الانترنت، والنتائج التي تحققها على الجمهور، لذلك نقدم خدماتنا الإبداعية التالية:"
            cards={ creativeCards }
        />
    );
};

export default CreativeService;
