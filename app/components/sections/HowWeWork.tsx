import Description from "../Description"
import Title from "../Title"

const HowWeWork = () => {
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
            <div className="flex flex-col space-y-8 w-[35%] ">


            </div>

        </section>
    )
}

export default HowWeWork