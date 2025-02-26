import ContactButton from "./components/ContactButton/ContactButton";
import { ME as data } from "@/data/me";

export default function Home() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16">
      <div className="max-w-3xl mx-auto p-4 bg-white dark:bg-gray-950">
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
      </div>
    </main>
  );
}
