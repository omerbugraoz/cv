import React from "react";
import { ME as data } from "../../../data/me";

const PDFResume = () => {
  return (
    <div className="w-full bg-white text-black p-8 max-w-4xl mx-auto">
      <header className="mb-5">
        <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{data.title}</h2>

        <p className="mb-4">{data.summary}</p>

        <div className="grid grid-cols-2 gap-2 text-sm">
          {data.contact.map((item, index: number) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className={`hover:underline ${index % 2 === 1 ? "text-right" : ""}`}
            >
              {item.value}
            </a>
          ))}
        </div>
      </header>

      {/* Work Experience */}
      <section className="mb-5">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          Work Experience
        </h2>
        {data.workExperience.map((work) => (
          <div key={work.key} className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <a
                href={work.website}
                className="hover:underline text-lg font-bold"
              >
                {work.company}
              </a>

              <div className="text-gray-600">
                {work.period.start} - {work.period.end || "Present"}
              </div>
            </div>
            <p className="mb-2 text-gray-700">{work.description}</p>
            <ul className="list-disc pl-5 text-gray-700">
              {work.responsibilities.map((responsibility, index: number) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-5">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Projects</h2>
        <div className="grid gap-6">
          {data.workProjectExperience.map((project) => (
            <div key={project.project}>
              <div className="flex justify-between items-center mb-1">
                <a
                  href={project.url}
                  className="text-lg font-bold hover:underline"
                >
                  {project.project}
                </a>
                <div className="text-gray-600">{project.company}</div>
              </div>
              <p className="mb-2 text-gray-700">{project.description}</p>
              <div className="mb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.responsibilities &&
                  project.responsibilities.length > 0 && (
                    <ul className="list-disc pl-5 text-gray-700 text-sm">
                      {project.responsibilities.map((resp, index: number) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-5">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Education</h2>
        {data.education.map((edu) => (
          <div key={edu.institution} className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <div>
                <a
                  href={edu.website}
                  className="text-lg font-bold hover:underline"
                >
                  {edu.institution}
                </a>

                <div className="text-gray-700">{edu.degree}</div>
                {edu.location && (
                  <div className="text-gray-600">{edu.location}</div>
                )}
              </div>
              <div className="text-gray-600">
                {edu.period.start} - {edu.period.end || "Present"}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-5">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 px-2 py-1 rounded-md text-gray-700 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Languages</h2>
        <div className="flex gap-6">
          {data.languages.map((lang) => (
            <div key={lang.name} className="flex gap-2">
              <span className="font-medium">{lang.name}:</span>
              <span className="text-gray-700">{lang.level}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PDFResume;
