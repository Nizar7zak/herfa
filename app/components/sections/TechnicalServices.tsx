import Card from "../Card"
import Description from "../Description"
import Title from "../Title"

const TechnicalServices = () => {

    const technicalCards = [
        { label: "تطوير وبناء المواقع والمتاجر الالكترونية", id: "1", src: "/technical/first.gif" },
        { label: "تصميم تجربة وواجهة المستخدم UI/UX", id: "2", src: "/technical/second.gif" },
        { label: "بناء وتطوير تطبيقات الموبايل", id: "3", src: "/technical/third.gif" },

    ]

    return (
        <section id="الخدمات-التقنية" className="h-screen flex flex-col justify-center items-center  gap-10 xl:gap-14 2xl:gap-16">
            <div className="space-y-4 w-[75%] lg:w-[42%] flex flex-col justify-center items-center">
                <Title text="الخــدمــات التقنيــــة" />
                <Description
                    textPosition="center"
                    text={ `لأن كل نشاط تجاري غير موجود على الانترنت، فهو ذاهب للتلاشي لا محالة... نقدم خدماتنا التقنية التالية:` } />
            </div>

            <div className="flex justify-between items-center  gap-4 xl:gap-6 2xl:gap-10 border-4 border-active rounded-lg ">
                { technicalCards.map( ( { id, label, src } ) => <Card key={ id } text={ label } srcImage={ src } isService /> ) }

            </div>

        </section>
    )
}

export default TechnicalServices