import Card from "../Card"
import Description from "../Description"
import Title from "../Title"


const CreativeService = () => {

    const creativeCards = [
        { label: "تصميم الجرافيك ", id: "1", src: "/creative/first.gif" },
        { label: "بناء الهوية البصرية", id: "2", src: "/creative/second.gif" },
        { label: "الموشن جرافيك", id: "3", src: "/creative/third.gif" },
        { label: "مونتاج الفيديو", id: "4", src: "/creative/fourth.gif" },
        { label: "التصوير الابداعي", id: "5", src: "/creative/fifth.gif" }
    ]

    return (
        <section id="الخدمات-الإبداعية" className="h-screen flex flex-col justify-center items-center  gap-10 xl:gap-14 2xl:gap-16">
            <div className="space-y-4 w-[75%] lg:w-[42%] flex flex-col justify-center items-center">
                <Title text="الخدمـات الإبداعيـــة" />
                <Description text={ `في ظل انتشار المحتوى المرئي بشكل واسع على الانترنت، والنتائج التي تحققها على الجمهور، لذلك نقدم خدماتنا الإبداعية التالية:` } />
            </div>

            <div className="flex justify-between items-center  gap-4 xl:gap-6 2xl:gap-10 border-4 border-active rounded-lg ">
                { creativeCards.map( ( { id, label, src } ) => <Card key={ id } text={ label } srcImage={ src } isService/> ) }

            </div>

        </section>
    )
}

export default CreativeService