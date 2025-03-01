"use client";

import ContactButton from "./components/ContactButton/ContactButton";
import { Badge } from "../components/ui/badge";
import { ME as data } from "../data/me";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";
import PDFResume from "./components/Pdf/Pdf";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const MainContent = () => (
  <main className="container relative mx-auto overflow-auto md:p-16 print:hidden">
    <div className="flex flex-col gap-8 max-w-3xl mx-auto p-3 md:p-6">
      <div className="flex absolute md:fixed top-3 right-4">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer"
          onClick={() => window.print()}
        >
          <Download />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
      <section className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold dark:text-gray-100">{data.name}</h1>
        <p className="text-gray-600 dark:text-gray-300">{data.summary}</p>
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
        <h2 className="text-xl font-bold dark:text-gray-100">
          Work Experience
        </h2>
        <div className="flex flex-col gap-4">
          {data.workExperience.map((work) => (
            <div key={work.key}>
              <div className="flex justify-between">
                <a
                  className="hover:underline dark:text-blue-300"
                  href={work.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${work.company} company website`}
                >
                  {work.company}
                </a>
                <p className="text-gray-600 dark:text-gray-300">
                  {work.period.start} -{" "}
                  {work.period.end ? work.period.end : "Present"}
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {work.description}
              </p>
              <ul className="list-disc text-sm text-gray-600 dark:text-gray-300">
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
        <h2 className="text-xl font-bold dark:text-gray-100">Education</h2>
        <div className="flex flex-col gap-1">
          {data.education.map((edu) => (
            <div key={edu.institution}>
              <div className="flex justify-between">
                <a
                  className="hover:underline dark:text-blue-300"
                  href={edu.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${edu.institution} institution website`}
                >
                  {edu.institution}
                </a>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.period.start} -{" "}
                  {edu.period.end ? edu.period.end : "Present"}
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {edu.degree}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-bold dark:text-gray-100">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="text-sm text-gray-600 dark:text-gray-200 dark:border-gray-700 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md hover:scale-105"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-bold dark:text-gray-100">Projects</h2>
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-6 gap-2">
          {data.workProjectExperience.map((project) => (
            <a
              className="group flex flex-col w-full md:h-60 justify-between md:rounded-xl md:border dark:md:border-gray-700 pb-2 md:p-3 cursor-pointer sm:border-b border-b dark:border-gray-700"
              key={project.project}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.project} institution website`}
            >
              <div className="flex justify-between">
                <p className="group-hover:underline dark:text-blue-300">
                  {project.project}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.company}
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 my-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 sm:flex group-hover:flex md:hidden md:group-hover:flex transform transition-transform duration-1000 group-hover:-translate-y-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="dark:text-gray-200 dark:border-gray-700"
                  >
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

export default function Home() {
  return (
    <>
      <MainContent />
      <div className="hidden print:block">
        <PDFResume />
      </div>
    </>
  );
}
