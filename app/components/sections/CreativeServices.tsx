import Card from "../Card"
import Description from "../Description"
import Title from "../Title"
import First from '@/public/creative/first.svg'
import Second from '@/public/creative/second.svg'
import Third from '@/public/creative/third.svg'
import Fourth from '@/public/creative/fourth.svg'
import Fifth from '@/public/creative/fifth.svg'

const CreativeService = () => {

    const creativeCards = [
        { label: "تصميم الجرافيك ", id: "1", src: First },
        { label: "بناء الهوية البصرية", id: "2", src: Second },
        { label: "الموشن جرافيك", id: "3", src: Third },
        { label: "مونتاج الفيديو", id: "4", src: Fourth },
        { label: "التصوير الابداعي", id: "5", src: Fifth }
    ]

    return (
        <section id="الخدمات-الإبداعية" className="h-screen flex flex-col justify-center items-center bg-accent gap-12">
            <div className="space-y-4 w-[35%] flex flex-col justify-center items-center">
                <Title text="الخدمـات الإبداعيـــة" />
                <Description text={ `في ظل انتشار المحتوى المرئي بشكل واسع على الانترنت، والنتائج التي تحققها على الجمهور، لذلك نقدم خدماتنا الإبداعية التالية:` } />
            </div>

            <div className="flex justify-between items-center gap-6">
                { creativeCards.map( ( service ) => <Card key={ service.id } text={ service.label } src={ service.src } /> ) }

            </div>

        </section>
    )
}

export default CreativeService