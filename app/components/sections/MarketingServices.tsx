import Card from "../Card"
import Description from "../Description"
import Title from "../Title"

const MarketingServices = () => {

    const marketingCards = [
        { label: "التسويق عبر المؤثرين", id: "1", src: "/marketing/first.mp4" },
        { label: "التسويق عبر محركات الـ SEO", id: "2", src: "/marketing/second.mp4" },
        { label: "كتابة المحتوى", id: "3", src: "/marketing/third.mp4" },
        { label: "إدارة حسابات التواصل الاجتماعي", id: "4", src: "/marketing/fourth.mp4" },
        { label: "إطلاق وإدارة الحملات الإعلانية", id: "5", src: "/marketing/fifth.mp4" }
    ]

    return (
        <section id="الخدمات-التسويقية" className="h-screen flex flex-col justify-center items-center bg-accent gap-16">
            <div className="space-y-4 w-[35%] flex flex-col justify-center items-center">
                <Title text="الخدمات التسويقية" />
                <Description text={ `أي نشاط تجاري" منتجات أو خدمات" تحتاج إلى تنفيذ استراتيجيات تسويقية وترويجية استثنائية "خارج الصندوق"، لذلك نقدم لكم مجموعة متكاملة من الخدمات التسويقية تشمل:` } />
            </div>

            <div className="flex justify-between items-center gap-12">
                { marketingCards.map( ( { id, label, src } ) => <Card key={ id } text={ label } srcVideo={ src } /> ) }

            </div>

        </section>
    )
}

export default MarketingServices