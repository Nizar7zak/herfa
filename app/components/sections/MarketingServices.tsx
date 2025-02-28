import Card from "../Card"
import Description from "../Description"
import Title from "../Title"
import First from '@/public/marketing/first.svg'
import Second from '@/public/marketing/second.svg'
import Third from '@/public/marketing/third.svg'
import Fourth from '@/public/marketing/fourth.svg'
import Fifth from '@/public/marketing/fifth.svg'

const MarketingServices = () => {

    const marketingCards = [
        { label: "التسويق عبر المؤثرين", id: "1", src: First },
        { label: "التسويق عبر محركات الـ SEO", id: "2", src: Second },
        { label: "كتابة المحتوى", id: "3", src: Third },
        { label: "إدارة حسابات التواصل الاجتماعي", id: "4", src: Fourth },
        { label: "إطلاق وإدارة الحملات الإعلانية", id: "5", src: Fifth }
    ]

    return (
        <section id="الخدمات-التسويقية" className="h-screen flex flex-col justify-center items-center bg-accent gap-12">
            <div className="space-y-4 w-[35%] flex flex-col justify-center items-center">
                <Title text="الخدمات التسويقية" />
                <Description text={ `أي نشاط تجاري" منتجات أو خدمات" تحتاج إلى تنفيذ استراتيجيات تسويقية وترويجية استثنائية "خارج الصندوق"، لذلك نقدم لكم مجموعة متكاملة من الخدمات التسويقية تشمل:` } />
            </div>

            <div className="flex justify-between items-center gap-6">
                { marketingCards.map( ( service ) => <Card key={ service.id } text={ service.label } src={ service.src } /> ) }

            </div>

        </section>
    )
}

export default MarketingServices