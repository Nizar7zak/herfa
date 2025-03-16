import Card from "../Card"
import Description from "../Description"
import Title from "../Title"

const MarketingServices = () => {

    const marketingCards = [
        { label: "التسويق عبر المؤثرين", id: "1", src: "/marketing/first.gif" },
        { label: "التسويق عبر محركات الـ SEO", id: "2", src: "/marketing/second.gif" },
        { label: "كتابة المحتوى", id: "3", src: "/marketing/third.gif" },
        { label: "إدارة حسابات التواصل الاجتماعي", id: "4", src: "/marketing/fourth.gif" },
        { label: "إطلاق وإدارة الحملات الإعلانية", id: "5", src: "/marketing/fifth.gif" }
    ]

    return (
        <section id="الخدمات-التسويقية" className="h-screen flex flex-col justify-center items-center gap-10 xl:gap-14 2xl:gap-16">
            <div className="space-y-4  w-[90%] lg:w-[42%] flex flex-col justify-center items-center">
                <Title text="الخدمات التسويقية" />
                <Description 
                    textPosition="center"
                    text={ `أي نشاط تجاري" منتجات أو خدمات" تحتاج إلى تنفيذ استراتيجيات تسويقية وترويجية استثنائية "خارج الصندوق"، لذلك نقدم لكم مجموعة متكاملة من الخدمات التسويقية تشمل:` } />
            </div>

            <div className="flex justify-between items-center  gap-4 xl:gap-6 2xl:gap-10 border-4 border-active rounded-lg ">
                { marketingCards.map( ( { id, label, src } ) => <Card key={ id } text={ label } srcImage={ src } isService /> ) }

            </div>

        </section>
    )
}

export default MarketingServices