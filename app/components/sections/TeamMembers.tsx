
import Nezar from "@/public/members/nezar.jpg"
import MemberCard from "../MemberCard"
import Title from "../Title"
const TeamMembers = () => {

    const members = [
        { fullName: "أحمد العسقلاني", src: Nezar, jobDescription: "موشن جرافيك | UI\UX | مونتاج" },
        { fullName: "سامر البرقوني", src: Nezar, jobDescription: "تصميم الجرافيكي | تصميم المطبوعات" },
        { fullName: "نـــزار زقـــوت", src: Nezar, jobDescription: "برمجة مواقع ويب | متخصص كلاود" },
        { fullName: "سليم الحسنات", src: Nezar, jobDescription: "تصميم الجرافيكي | تصميم المطبوعات" },
    ]
    return (
        <section id="فريق-العمل" className="h-screen bg-secondary flex flex-col justify-center items-center gap-16 ">
            <Title text="فريـــق العمـــل" />

            <div className="flex justify-center items-center gap-x-8 gap-y-16 flex-wrap ">
                { members.map( ( member, index ) => <MemberCard key={ index } fullName={ member.fullName } src={ member.src } jobDescription={ member.jobDescription } /> ) }

            </div>


        </section>
    )
}

export default TeamMembers