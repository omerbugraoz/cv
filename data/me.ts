export const ME = {
  name: "Ömer Buğra ÖZ",
  title: "Fullstack Developer",
  contact: [
    // {
    //   name: "website",
    //   href: "",
    // },
    {
      name: "email",
      href: "mailto:oomerbugraoz@gmail.com",
    },
    {
      name: "phone",
      href: "tel:+905067907173",
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/omerbugraoz/",
    },
    {
      name: "github",
      href: "https://github.com/omerbugraoz",
    },
  ],
  personalInfo: {
    dateOfBirth: "04/05/1994",
    nationality: "Turkish",
  },
  summary:
<<<<<<< Updated upstream
    "Experienced Frontend Developer with expertise in Vue, React, Next.js and Nuxt.js. Skilled in building dynamic, interactive web applications with a focus on modularity, maintainability, and user experience.",
  workExperince: [
=======
    "Fullstack Developer with a strong frontend background in Vue, React, Next.js and Nuxt.js, extending into Spring Boot, PostgreSQL and AWS. Experienced in building real-time, data-intensive web applications with a focus on modularity, maintainability, and user experience.",
  workExperience: [
    {
      key: 'aegean',
      position: 'Fullstack Developer',
      company: 'AegeanLabs',
      period: {
        start: "2025",
        end: ""
      },
      website: "https://www.aegeanlabs.com/",
      description:
        "Fullstack development of real-time financial platforms, from Vue/React frontends to Spring Boot backends and AWS infrastructure.",
      responsibilities: [
        "Built and maintained real-time financial monitoring and reporting applications using Vue 3, React, WebSocket, and Spring Boot",
        "Designed and evolved PostgreSQL schemas with JPA, including migrations, constraints, and relational integrity across alerting and user management modules",
        "Implemented object-level authorization in Spring Boot to prevent IDOR/BOLA vulnerabilities",
        "Deployed and operated client environments on AWS (EC2, RDS, ALB), configuring Apache reverse proxies, WebSocket tunneling, and SPA routing",
        "Built and deployed the company website on Vercel with transactional email integration (Resend, SPF/DKIM DNS setup)",
        "Collaborated with designers and backend developers within a development → QA → production branching workflow with code reviews",
      ],
    },
>>>>>>> Stashed changes
    {
      key: "brew",
      position: "Frontend Developer",
      company: "Brew Interactive",
      period: {
        start: "2021",
        end: "2025",
      },
      website: "https://brewww.com/",
      description:
        "Over 4 years, I made significant contributions to the development of multiple large-scale projects",
      responsibilities: [
        "Followed the innovations in frontend technologies, integrated them into projects and improved the user experience.",
        "Collaborated with cross-functional teams (designers, backend developers, QA) to design and implement features that improve the user experience.",
        "Provided feedback to my teammates by conducting code reviews and supported a culture of continuous improvement.",
      ],
    },
  ],
  workProjectExperience: [
    {
<<<<<<< Updated upstream
=======
      position: "Fullstack Developer",
      project: "Echo",
      company: "AegeanLabs",
      description:
        "Multi-tenant, real-time financial reporting and monitoring platform for trading clients, covering PnL tracking, commission analysis, and rule-based alerting.",
      responsibilities: [
        "Developed real-time PnL and trading dashboards streaming live data over WebSocket, with token-based socket authentication",
        "Built REST endpoints and data models in Spring Boot with JPA on PostgreSQL (AWS RDS)",
        "Designed the alert rules/conditions schema and managed database migrations with proper foreign key ordering",
        "Implemented object-level authorization to prevent IDOR/BOLA vulnerabilities",
        "Architected multi-tenant deployment with isolated per-client environments and databases",
        "Implemented path-based routing under a single domain using AWS ALB, migrating DNS from direct IPs to the load balancer",
        "Configured production servers with Apache reverse proxy, WebSocket tunneling, SPA routing, and Windows service management (NSSM)",
        "Set up multi-mode Vite builds and environment management to ship separate product variants from one codebase",
      ],
      technologies: [
        "Vue 3",
        "React",
        "TypeScript",
        "Pinia",
        "PrimeVue",
        "Vite",
        "PWA",
        "WebSocket",
        "Spring Boot",
        "JPA",
        "PostgreSQL",
        "AWS",
      ],
    },
    {
>>>>>>> Stashed changes
      position: "Frontend Developer",
      project: "VillaSepeti",
      company: "Brew",
      url: "https://www.villasepeti.com",
      description:
        " Villa Sepeti realizes the reservation and marketing of thousands of villas in Turkey and abroad.",
      responsibilities: [
        "Developed a dynamic and interactive frontend using React and Next.js",
        "Used GraphQL for efficient data querying and manipulation between frontend and backend",
        "Used Zustand for state management and data flow",
      ],
      technologies: [
        "React",
        "Next.js",
        "Zustand",
        "Hasura",
        "GraphQL",
        "Directus CMS",
      ],
    },
    {
      position: "Frontend Developer",
      project: "Sensat",
      company: "Brew",
      url: "https://www.sensat.com",
      description:
        "Second-hand vehicles buying and selling - Sensat.com - Web platform that relates buying and selling cars.",
      responsibilities: [
        "Developed a dynamic and interactive frontend using Vue and Nuxt.js",
        "Used LESS CSS pre-processor for creating modular and maintainable stylesheets with variables and mixins",
        "Used Storybook to develop, test, and document reusable components, making our codebase modular and easy to maintain",
      ],
      technologies: ["Vue", "Nuxt.js", "LESS", "Storybook"],
    },
    {
      position: "Frontend Developer",
      project: "Maxitech",
      url: "https://maxitech.com/",
      company: "Brew",
      description:
        "Maxitech offers capital and market validation to help enterprise clients grow rapidly.",
      websiteUrl: "https://maxitech.com/",
      responsibilities: [
        "Developed a web application using React, Remix.js.",
        "Implemented Tailwind for styling",
        "Utilized Storybook for developing, testing, and documenting reusable components",
        "Integrated Framer Motion for smooth animations and transitions",
      ],
      technologies: [
        "React",
        "Remix.js",
        "TailwindCSS",
        "Storybook",
        "Framer Motion",
      ],
    },
    {
      position: "Frontend Developer",
      project: "DOD",
      company: "Brew",
      url: "https://dod.com.tr/",
      description:
        "Second-hand vehicles buying and selling platform that relates buying and selling cars.",
      responsibilities: [
        "Developed a dynamic and interactive frontend using Vue and Nuxt.js",
        "Styled based on Ant Design",
        "Used Storybook to develop, test, and document reusable components, making our codebase modular and easy to maintain",
      ],
      technologies: ["Vue", "Nuxt.js", "Ant Design", "Storybook", "Less"],
    },
    {
      position: "Frontend Developer",
      project: "Mobilet",
      company: "Brew",
      url: "https://www.mobilet.com",
      description:
        "Mobilet is a social discovery and sharing platform that redefines the ticket buying experience.",
      responsibilities: [
        "Developed a dynamic and interactive frontend using React and Next.js",
        "Used GraphQL for efficient data querying and manipulation between frontend and backend",
        "Used Redux Toolkit for state management and data flow",
      ],
      technologies: ["React", "Next.js", "Redux Toolkit", "Hasura", "GraphQL"],
    },
  ],
  education: [
    {
      institution: "Izmir Institute of Technology",
      degree: "Computer Engineering",
      period: {
        start: "2018",
        end: "2023",
      },
      location: "İzmir, Türkiye",
      website: "https://en.iyte.edu.tr/",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "Sass",
    "Less",
    "Styled Components",
    "Tailwind",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Vue",
    "Nuxt.js",
    "Next.js",
    "Remix.js",
    "Git",
    "Jira",
    "Bitbucket",
    "Hasura",
    "GraphQL",
    "REST",
    "Node.js",
    "Fastify",
    "Zustand",
    "Directus CMS",
    "Drizzle",
    "MySQL",
<<<<<<< Updated upstream
=======
    "Prettier",
    "Webpack",
    "AntDesign",
    "PrimeVue",
    "HeroUI",
    "Pinia",
    "Websocket",
    "Java",
    "Spring Boot",
    "JPA / Hibernate",
    "PostgreSQL",
    "AWS (EC2, RDS, ALB)",
    "Apache",
    "Vercel"
>>>>>>> Stashed changes
  ],
  languages: [
    {
      name: "Turkish",
      level: "Native",
    },
    {
      name: "English",
      level: "B2",
    },
  ],
};