
import Nezar from "@/public/members/nezar.jpg"
import Master from "@/public/members/master.jpg"
import Wa6n from "@/public/members/wa6n.jpg"
import Salim from "@/public/members/salim.jpg"
import MemberCard from "../MemberCard"
import Title from "../Title"
import First from "@/public/team/first.svg"
import Second from "@/public/team/second.svg"
import Third from "@/public/team/third.svg"
import Fourth from "@/public/team/fourth.svg"
import Fifth from "@/public/team/fifth.svg"
import Aws from "@/public/team/aws.svg"
import Js from "@/public/team/js.svg"
import Ts from "@/public/team/ts.svg"
import Github from "@/public/team/github.svg"
import Sql from "@/public/team/sql.svg"
import React from "@/public/team/react.svg"

const TeamMembers = () => {

    const members = [
        { 
            fullName: "أحمد العسقلاني", 
            src: Master, jobDescription: "موشن جرافيك | UI\UX | مونتاج", 
            skillsIcons: [ 
                Fifth, 
                Fourth, 
                Third, 
                Second, 
            ] 
        },
        { 
            fullName: "سامر البرقوني", 
            src: Wa6n, 
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
                Aws, 
                React,
                Js, 
                Ts, 
                Sql, 
                Github,
            ] 
        },
        { 
            fullName: "سليم الحسنات", 
            src: Salim, 
            jobDescription: "تصميم الجرافيكي | تصميم المطبوعات", 
            skillsIcons: [ 
                Fifth, 
                Second, 
                First,
            ] 
        },
    ]
    return (
        <section id="فريق-العمل" className="h-[65vh] lg:h-screen flex flex-col justify-center items-center gap-8 md:gap-12 lg:gap-16 ">
            <Title text="فريـــق العمـــل" />

            <div className="flex justify-center items-center gap-x-8 gap-y-12 xl:gap-x-8 xl:gap-y-16 flex-wrap ">
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