import { Result } from "../../types/sanityTypes";
import { ProjectCard } from "./ProjectCard";

interface ProjectTypes {
  projects: Result[];
}

export const Projects: React.FC<ProjectTypes> = ({ projects }) => {
  return (
    <div className="mx-auto">
      <h1 className="md:text-left italic font-black mb-4 w-full">Projects</h1>
      {/* md:grid-cols-2 */}
      <div className="gap-6 grid grid-cols-1 max-w-6xl mx-auto">
        {projects.map((project, i) => {
          return (
            <div key={i}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
