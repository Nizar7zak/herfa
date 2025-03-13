import Title from '../Title'
import Description from '../Description'
import Form from '../Form'

const answers = [
    "اســـــتفســــارات حـــــــول خــــدمـاتنــــا",
    "طـــلــــب عـــرض ســـعـــر مـــخصـــص",
    "مشاريع خاصة أو استشارات إبداعية",
]

const ContactUs = () => {
    return (
        <section id="تواصل-معنا" className="h-screen flex justify-center items-center flex-col lg:flex-row gap-6 xl:gap-12 2xl:gap-20">
            <div className='w-[75%] lg:w-1/3 flex flex-col justify-center items-start gap-5 lg:gap-7'>
                <Title text="تواصل معنا" />
                <Description text='نحن هنا لتحويل أفكــارك إلى واقـــع ملــمـوس! سـواء كـنت تبحــث عـــن تصميـم إبــداعي يجـــذب الأنـــظار أو مونتــــاج احــــترافي يـــروي قصتـــك بأفضـــل طـــريقة، فريقنا جاهز للعمل معك خطوة بخطوة.' />
                <ul className='flex flex-col justify-center items-start gap-1 lg:gap-2'>
                    <Description text='كيف يمكننا مساعدتك؟' />
                    { answers.map( ( item, index ) =>
                        <li key={ index } className='flex  justify-center items-center gap-4'>
                            <div className={ `w-2 h-2 rounded-full transition-all cursor-pointer bg-primary` } />
                            <Description text={ item } />
                        </li>
                    ) }
                </ul>
            </div>
            <div className='w-[75%] lg:w-1/3'>

                <Form />

            </div>
        </section>
    )
}

export default ContactUs

