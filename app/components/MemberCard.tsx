import Image, { StaticImageData } from "next/image";

interface Props {
  fullName: string;
  jobDescription: string;
  src: StaticImageData | string;
  skillsIcons: StaticImageData[]
}

const MemberCard = ( { fullName, src, jobDescription, skillsIcons }: Props ) => {
  return (
    <div className="flex w-[80%] md:gap-5 lg:gap-0 md:w-[70%] lg:w-[35%] justify-center items-center ">
      <div className="w-[24vw] h-[24vw] lg:w-[14vw] lg:h-[14vw] xl:w-[12vw] xl:h-[12vw] rounded-full bg-slate-300 overflow-hidden ml-6">
        <Image alt="team member picture" src={ src } />
      </div>
      <div className="flex flex-col w-[57%] gap-y-2 xl:gap-y-3 2xl:gap-y-5 -mt-6">
        <h1 className="text-active text-base xl:text-xl 2xl:text-2xl font-medium">{ fullName }</h1>
        <h1 className="text-primary text-sm xl:text-base font-light pb-3 border-b-[0.75px] border-primary">{ jobDescription }</h1>
        <div className="flex items-center justify-start gap-2">
          { skillsIcons.map( ( item, index ) => <Image key={ index } src={ item } alt="skill" width={25}/> ) }
        </div>
      </div>


    </div>
  )
}

export default MemberCard