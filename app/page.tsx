import ContactButton from "./components/ContactButton/ContactButton";
import { ME as data } from "@/data/me";

export default function Home() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16">
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
          <div>
            {data.education.map((edu) => (
              <div>
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
      </div>
    </main>
  );
}
