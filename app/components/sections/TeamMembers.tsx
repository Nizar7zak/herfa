
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
import { useI18n } from "@/app/providers/I18nProvider";

const TeamMembers = () => {
    const { t, lang } = useI18n();

    const members = [
        { 
            fullName: lang === 'ar' ? "أحمد العسقلاني" : "Ahmad Al-Asqalani", 
            src: Master, jobDescription: lang === 'ar' ? "موشن جرافيك | UI/UX | مونتاج" : "Motion Graphics | UI/UX | Video Editing", 
            skillsIcons: [ 
                Fifth, 
                Fourth, 
                Third, 
                Second, 
            ] 
        },
        { 
            fullName: lang === 'ar' ? "سامر البرقوني" : "Samer Al-Barqouni", 
            src: Wa6n, 
            jobDescription: lang === 'ar' ? "تصميم الجرافيكي | تصميم المطبوعات" : "Graphic Design | Print Design", 
            skillsIcons: [ 
                Fifth, 
                Second, 
                First, 
                Fourth, 
                Third, 
            ] 
        },
        { 
            fullName: lang === 'ar' ? "نـــزار زقـــوت" : "Nezar Zaqout", 
            src: Nezar, 
            jobDescription: lang === 'ar' ? "برمجة مواقع ويب | متخصص كلاود" : "Web Development | Cloud Specialist", 
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
            fullName: lang === 'ar' ? "سليم الحسنات" : "Saleem Al-Hasanat", 
            src: Salim, 
            jobDescription: lang === 'ar' ? "تصوير | تسويق إلكتروني" : "Photography | Digital Marketing", 
            skillsIcons: [ 
                Fifth, 
                Second, 
                First,
            ] 
        },
    ]
    return (
        <section id="team" className=" lg:h-screen flex flex-col justify-center items-center gap-8 md:gap-12 lg:gap-16 ">
            <Title text={t('team.title')} />

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