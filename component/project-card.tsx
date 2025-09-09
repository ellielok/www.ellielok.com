interface ProjectCardProps {
    timeRange: string;
    project?: string;
    position: string;
    company: string;
    description: string;
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
    return(<div className="flex m-2 flex-row ">
          <div className="basis-1/4 border">{timeRange}</div>
          <div className='basis-3/3 border'>
            <div>{project}</div>
            <div> {position}, {company} </div>
            <div> {description} </div>
            <div> {skills} </div>
          </div>
        </div>);
}
