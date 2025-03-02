import Card from "../Card"
import Description from "../Description"
import Title from "../Title"


const CreativeService = () => {

    const creativeCards = [
        { label: "تصميم الجرافيك ", id: "1", src: "/creative/first.mp4" },
        { label: "بناء الهوية البصرية", id: "2", src: "/creative/second.mp4" },
        { label: "الموشن جرافيك", id: "3", src: "/creative/third.mp4" },
        { label: "مونتاج الفيديو", id: "4", src: "/creative/fourth.mp4" },
        { label: "التصوير الابداعي", id: "5", src: "/creative/fifth.mp4" }
    ]

    return (
        <section id="الخدمات-الإبداعية" className="h-screen flex flex-col justify-center items-center bg-accent gap-32">
            <div className="space-y-4 w-[35%] flex flex-col justify-center items-center">
                <Title text="الخدمـات الإبداعيـــة" />
                <Description text={ `في ظل انتشار المحتوى المرئي بشكل واسع على الانترنت، والنتائج التي تحققها على الجمهور، لذلك نقدم خدماتنا الإبداعية التالية:` } />
            </div>

            <div className="flex justify-between items-center gap-6">
                { creativeCards.map( ( { id, label, src } ) => <Card key={ id } text={ label } srcVideo={ src } /> ) }

            </div>

        </section>
    )
}

export default CreativeService