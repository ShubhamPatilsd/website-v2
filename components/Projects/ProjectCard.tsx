import { Result } from "../../types/sanityTypes";
import { urlFor } from "../../util/client";
import { FaGithub } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";

interface ProjectCardProps {
  project: Result;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={`w-full h-full flex flex-col`}>
      <div>
        <img
          src={urlFor(project.image).width(500).height(300).url()}
          className="rounded-t-xl mx-auto shadow-xl"
        />
      </div>
      <div className="rounded-b-xl bg-white p-6 max-w-xl mx-auto shadow-xl space-y-4 flex-1">
        <div className="space-y-1 w-min">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex space-x-2 items-center text-paragraph hover:underline"
            >
              <BsLink45Deg className="text-paragraph" size={23} />
              <span>View</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex space-x-2 items-center text-paragraph hover:underline"
            >
              <FaGithub className="text-paragraph" size={23} />
              <span>Code</span>
            </a>
          )}
        </div>
        <h3 className="text-paragraph">{project.name}</h3>
        <p className="text-paragraph prose">{project.description}</p>
      </div>
    </div>
  );
};
