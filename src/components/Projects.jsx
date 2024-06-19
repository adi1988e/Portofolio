import ProjectsCard from "./ProjectsCard";
import { projects } from "../assets/data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="py-20 pt-10 align-element bg-rose-50" id="projects">
      <SectionTitle text="web creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-2 gap-8 ">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
