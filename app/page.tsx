import ContactButton from "./components/ContactButton/ContactButton";
import { Badge } from "../components/ui/badge";
import { ME as data } from "../data/me";

export default function Home() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto print:p-11 md:p-16">
      <div className="flex flex-col gap-8 max-w-3xl mx-auto p-4 bg-white dark:bg-gray-950">
        <section className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{data.name}</h1>
          <p className="text-gray-600 dark:text-gray-400">{data.summary}</p>
          <div className="flex gap-4">
            {data.contact.map((contact) => (
              <ContactButton
                key={contact.name}
                name={contact.name}
                href={contact.href}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Work Experience</h2>
          <div className="flex flex-col gap-4">
            {data.workExperince.map((work) => (
              <div key={work.key}>
                <div className="flex justify-between">
                  <a
                    className="hover:underline"
                    href={work.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${work.company} company website`}
                  >
                    {work.company}
                  </a>
                  <p className="text-gray-600 dark:text-gray-400">
                    {work.period.start} -{" "}
                    {work.period.end ? work.period.end : "Present"}
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-1">{work.description}</p>
                <ul className="list-disc text-sm text-gray-600 dark:text-gray-400">
                  {work.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="list-inside list-disc">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Education</h2>
          <div className="flex flex-col gap-1">
            {data.education.map((edu) => (
              <div key={edu.institution}>
                <div className="flex justify-between">
                  <a
                    className="hover:underline"
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${edu.institution} institution website`}
                  >
                    {edu.institution}
                  </a>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.period.start} -{" "}
                    {edu.period.end ? edu.period.end : "Present"}
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-1">{edu.degree}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="flex flex-col md:grid md:grid-cols-3 md:gap-6 gap-2">
            {data.workProjectExperience.map((project) => (
              <a
                className="group flex flex-col w-full md:h-60 justify-between md:rounded-lg md:border pb-2 md:p-3 cursor-pointer sm:border-b border-b"
                key={project.project}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.project} institution website`}
              >
                <div className="flex justify-between">
                  <p className="group-hover:underline">{project.project}</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.company}
                  </p>
                </div>
                <p className="text-sm text-gray-600 my-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:flex group-hover:flex md:hidden md:group-hover:flex">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
