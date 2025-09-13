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
    return(<div className="flex m-2 flex-row my-10">
          <div className="basis-1/4 text-sm font-semibold ">{timeRange}</div>
          <div className='basis-3/3 '>
            <div className="font-bold text-white/590">{project}</div>
            <div className="font-semibold"> {position}, {company} </div>
            <div className="font-base"> {description} </div>
            {skills && <div className="font-base">Skills: {skills}</div>}
          </div>
        </div>);
}
