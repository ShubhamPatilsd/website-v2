import { Result } from "../../types/sanityTypes";
import { ProjectCard } from "./ProjectCard";

interface ProjectTypes {
  projects: Result[];
}

export const Projects: React.FC<ProjectTypes> = ({ projects }) => {
  return (
    <div>
      <h3 className="text-secondary mb-2">Projects</h3>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, i) => {
          return (
            <div key={i}>
              <ProjectCard project={project} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};
