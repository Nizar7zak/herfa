
import Nezar from "@/public/members/nezar.jpg"
import MemberCard from "../MemberCard"
import Title from "../Title"
import First from "@/public/team/first.svg"
import Second from "@/public/team/second.svg"
import Third from "@/public/team/third.svg"
import Fourth from "@/public/team/fourth.svg"
import Fifth from "@/public/team/fifth.svg"


const TeamMembers = () => {

    const members = [
        { 
            fullName: "أحمد العسقلاني", 
            src: Nezar, jobDescription: "موشن جرافيك | UI\UX | مونتاج", 
            skillsIcons: [ 
                Fifth, 
                Fourth, 
                Third, 
                Second, 
            ] 
        },
        { 
            fullName: "سامر البرقوني", 
            src: Nezar, 
            jobDescription: "تصميم الجرافيكي | تصميم المطبوعات", 
            skillsIcons: [ 
                Fifth, 
                Second, 
                First, 
                Fourth, 
                Third, 
            ] 
        },
        { 
            fullName: "نـــزار زقـــوت", 
            src: Nezar, 
            jobDescription: "برمجة مواقع ويب | متخصص كلاود", 
            skillsIcons: [ 
                First, 
                Second, 
                Third, 
                Fourth, 
                Fifth 
            ] 
        },
        { 
            fullName: "سليم الحسنات", 
            src: Nezar, 
            jobDescription: "تصميم الجرافيكي | تصميم المطبوعات", 
            skillsIcons: [ 
                Fifth, 
                Second, 
                First,
            ] 
        },
    ]
    return (
        <section id="فريق-العمل" className="h-screen bg-secondary flex flex-col justify-center items-center gap-16 ">
            <Title text="فريـــق العمـــل" />

            <div className="flex justify-center items-center gap-x-8 gap-y-16 flex-wrap ">
                { members.map( (
                    { src, fullName, skillsIcons, jobDescription }, index
                    ) => <MemberCard
                            key={ index }
                            fullName={ fullName }
                            src={ src }
                            jobDescription={ jobDescription }
                            skillsIcons={ skillsIcons }
                        />
                    )
                }
            </div>
        </section>
    )
}

export default TeamMembers