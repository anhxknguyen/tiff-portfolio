import ProjectItem from "../Components/ProjectItem";

const Portfolio = () => {
  return (
    <div className="flex items-start self-end justify-start w-1/2 h-full py-10 overflow-scroll no-scrollbar">
      <ul className="flex flex-col gap-12 pl-14">
        <ProjectItem projectTitle="Project Name" projectType="Project Type" />
        <ProjectItem projectTitle="Project Name" projectType="Project Type" />
        <ProjectItem projectTitle="Project Name" projectType="Project Type" />
        <ProjectItem projectTitle="Project Name" projectType="Project Type" />
        <ProjectItem projectTitle="Project Name" projectType="Project Type" />
        <ProjectItem projectTitle="Project Name" projectType="Project Type" />
        <ProjectItem projectTitle="Project Name" projectType="Project Type" />
        <ProjectItem projectTitle="Project Name" projectType="Project Type" />
        <ProjectItem projectTitle="Project Name" projectType="Project Type" />
        <ProjectItem projectTitle="Project Name" projectType="Project Type" />
        <ProjectItem projectTitle="Project Name" projectType="Project Type" />
      </ul>
    </div>
  );
};

export default Portfolio;
