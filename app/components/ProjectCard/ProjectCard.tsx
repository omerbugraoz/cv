import { IProjectCard } from "./ProjectCard.type";
import { Badge } from "../../../components/ui/badge"; // Import shadcn Badge component

const ProjectCard: React.FC<IProjectCard> = ({
  company,
  url,
  description,
  technologies,
  project,
}) => {
  return (
    <div className="flip-card w-full md:h-48">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <a
            className="flex group flex-col w-full h-full justify-between md:rounded-lg md:border pb-2 md:p-3 cursor-pointer sm:border-b border-b bg-white dark:bg-gray-950"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project} project website`}
          >
            <div className="flex justify-between">
              <p className="font-medium group-hover:underline">{project}</p>
              <p className="text-gray-600 dark:text-gray-400">{company}</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {description}
            </p>
          </a>
        </div>

        <div className="hidden group cursor-pointer sm:flex flex-col justify-between flip-card-back md:rounded-lg md:border pb-2 md:p-3 sm:border-b border-b bg-white dark:bg-gray-950">
          <div className="flex justify-between mb-2">
            <p className="font-medium group-hover:underline">{project}</p>
            <p className="text-gray-600 dark:text-gray-400">{company}</p>
          </div>
          <div className="flex flex-wrap gap-2 content-center">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
