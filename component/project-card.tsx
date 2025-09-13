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
    return(<div className="md:flex m-2 flex-row my-10">
          <div className="basis-1/4 text-sm pb-2 font-semibold">{timeRange}</div>
          <div className='md:px-5 basis-3/3'>
            <div className="font-bold text-white/90 ">{project}</div>
            <div className="font-semibold pb-2 text-white/60"> {position}, {company} </div>
            <div className="font-base"> {description} </div>
            {skills && <div className="font-base py-2">Skills: {skills}</div>}
          </div>
        </div>);
}
