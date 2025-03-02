import Description from "../Description"
import Title from "../Title"

import First from '@/public/howwework/first.svg'
import Second from '@/public/howwework/second.svg'
import Third from '@/public/howwework/third.svg'
import Fourth from '@/public/howwework/fourth.svg'
import Fifth from '@/public/howwework/fifth.svg'
import Sixth from '@/public/howwework/sixth.svg'
import Seventh from '@/public/howwework/seventh.svg'
import Card from "../Card"

const HowWeWork = () => {

    const sliderContent = [
        { content: "فهم ومعرفة الفكرة", src: First },
        { content: "التحليل العميق", src: Second },
        { content: "التخطيط المنظم", src: Third },
        { content: "التصميم والبناء", src: Fourth },
        { content: "التنفيذ", src: Fifth },
        { content: "الاختبـــار", src: Sixth },
        { content: "المتابعة والتقيم", src: Seventh },
    ]
    return (

        <section id="آلية-عملنا" className="h-screen flex justify-center items-center bg-secondary">

            <div className="w-[25%] flex justify-center items-center">
                <div className="w-full flex flex-col space-y-4">
                    <Title text="آليــة عملنـــا" />
                    <Description
                        text="المسار الفعلي الذي نسيره معاً للوصول إلى الهدف"
                    />
                </div>
            </div>
            
            <div className="flex flex-col  p-2 border-2 border-active rounded-lg">
                <div className="flex justify-between items-center gap-6 -mt-6">
                    { sliderContent.map( ( { content, src }, index ) => <Card key={ index } text={ content } srcImage={ src } /> ) }
                </div>
            </div>

        </section>
    )
}

export default HowWeWork

// transform -translate-x-[28%]