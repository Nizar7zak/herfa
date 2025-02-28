import Image, { StaticImageData } from "next/image";

interface Props {
    fullName: string;
    jobDescription: string;
    src: StaticImageData | string;
}

const MemberCard = ({fullName, src, jobDescription} : Props) => {
  return (
    <div className="flex w-[35%] justify-center items-center ">
        <div className="w-[10vw] h-[10vw] rounded-full bg-slate-300 overflow-hidden ml-7">
            <Image alt="team member picture" src={src} />
        </div>
        <div className="flex flex-col w-[57%] space-y-8">
            <h1 className="text-active text-2xl font-medium">{fullName}</h1>
            <h1 className="text-primary text-xl font-light pb-6 border-b-2 border-primary">{jobDescription}</h1>
            {/* ICONS HERE */}


        </div>


    </div>
  )
}

export default MemberCard