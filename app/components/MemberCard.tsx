import Image, { StaticImageData } from "next/image";

interface Props {
  fullName: string;
  jobDescription: string;
  src: StaticImageData | string;
  skillsIcons: StaticImageData[]
}

const MemberCard = ( { fullName, src, jobDescription, skillsIcons }: Props ) => {
  return (
    <div className="flex w-[35%] justify-center items-center ">
      <div className="w-[14vw] h-[14vw] xl:w-[12vw] xl:h-[12vw] rounded-full bg-slate-300 overflow-hidden ml-4 xl:ml-6">
        <Image alt="team member picture" src={ src } />
      </div>
      <div className="flex flex-col w-[57%] gap-y-5">
        <h1 className="text-active text-2xl font-medium">{ fullName }</h1>
        <h1 className="text-primary text-base font-light pb-3 border-b-[0.75px] border-primary">{ jobDescription }</h1>
        <div className="flex items-center justify-start gap-2">
          { skillsIcons.map( ( item, index ) => <Image key={ index } src={ item } alt="skill" /> ) }
        </div>
      </div>


    </div>
  )
}

export default MemberCard