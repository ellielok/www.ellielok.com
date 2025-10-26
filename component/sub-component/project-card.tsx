interface ProjectCardProps {
    timeRange?: string;
    project?: string;
    position?: string;
    company?: string;
    description?: string;
    skills?: string|React.ReactNode;
}

export default function ProjectCard({
    timeRange,
    project,
    position,
    company,
    description,
    skills
}: ProjectCardProps){
    return(<div className="md:flex flex-row gap-6 p-6
                          transition-all duration-300
                          group
                          hover:bg-gradient-to-b hover:from-white/5 hover:via-white/3 hover:to-white/0
                        ">
          <div className="basis-1/4 text-tiny pb-2 text-tiny/6 font-semibold">{timeRange}</div>
          <div className='md:px-5 basis-3/3'>
            <div className="font-bold text-white/90 group-hover:text-[#93f5fa] transition-colors duration-100">
              {project}
            </div>
            <div className="font-semibold pb-2 text-white/60"> {position}, {company} </div>
            <div className="font-base"> {description} </div>
            {skills && <div className="font-base py-2">Skills: {skills}</div>}
          </div>
        </div>);
}
