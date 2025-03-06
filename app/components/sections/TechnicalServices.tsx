import Card from "../Card"
import Description from "../Description"
import Title from "../Title"

const TechnicalServices = () => {

    const technicalCards = [
        { label: "تطوير وبناء المواقع والمتاجر الالكترونية", id: "1", src: "/technical/first.mp4" },
        { label: "تصميم تجربة وواجهة المستخدم UI/UX", id: "2", src: "/technical/second.mp4" },
        { label: "بناء وتطوير تطبيقات الموبايل", id: "3", src: "/technical/third.mp4" },

    ]

    return (
        <section id="الخدمات-التقنية" className="h-screen flex flex-col justify-center items-center bg-accent gap-10 xl:gap-14 2xl:gap-16">
            <div className="space-y-4 w-[42%] flex flex-col justify-center items-center">
                <Title text="الخــدمــات التقنيــــة" />
                <Description text={ `لأن كل نشاط تجاري غير موجود على الانترنت، فهو ذاهب للتلاشي لا محالة... نقدم خدماتنا التقنية التالية:` } />
            </div>

            <div className="flex justify-between items-center  gap-4 xl:gap-6 2xl:gap-10">
                { technicalCards.map( ( { id, label, src } ) => <Card key={ id } text={ label } srcVideo={ src } /> ) }

            </div>

        </section>
    )
}

export default TechnicalServices