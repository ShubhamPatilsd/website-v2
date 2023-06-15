import { Result } from "../../types/sanityTypes";
import { urlFor } from "../../util/client";
import { FaGithub } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";

interface ProjectCardProps {
  project: Result;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className={`w-full h-full flex lg:flex-row space-x-0 space-y-4 lg:space-y-0 lg:space-x-8 xl:space-x-8 flex-col p-6`}
    >
      <div>
        <img
          src={urlFor(project.image).url()}
          className="rounded-lg mx-auto lg:w-72 w-full md:w-[80%]"
        />
      </div>
      <div className="mx-auto space-y-5  flex-1">
        <div>
          <h3 className="text-paragraph text-2xl">{project.name}</h3>
          <p className="text-paragraph prose mt-1">{project.description}</p>
        </div>

        <div className="space-y-1 flex space-x-4 w-min">
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
      </div>
    </div>
  );
};
