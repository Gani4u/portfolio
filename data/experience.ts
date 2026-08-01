export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  points: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    id: "ejamerica",
    company: "eJAmerica",
    role: "Full Stack Developer",
    period: "09/2025 – Present",
    location: "Mysuru, Karnataka",
    description: "Worked on eJTime Workforce Management Platform",
    points: [
      "Developed eJTime, a multi-tenant SaaS workforce management platform supporting web, desktop, and mobile workflows.",
      "Built scalable frontend modules using Next.js, React, and TypeScript for dashboards, time tracking, and reporting.",
      "Designed and implemented REST APIs using NestJS, Prisma ORM, and MySQL for user, project, and session management.",
      "Implemented secure authentication using OTP, JWT, refresh tokens, and role-based access control.",
      "Developed core features including clock-in/out, session tracking, approvals, leave management, and reporting systems.",
      "Improved system reliability by resolving time zone issues, API failures, and frontend-backend integration bugs."
    ],
    techStack: ["Next.js", "NestJS", "Prisma ORM", "MySQL", "JWT", "OTP Authentication", "TypeScript", "Tailwind CSS", "Reporting", "Session Tracking"]
  },
  {
    id: "radixile",
    company: "Radixile Technologies Solutions",
    role: "Java Full Stack Developer Intern",
    period: "02/2025 – 08/2025",
    location: "Remote",
    description: "Developed modules for a Society Management System",
    points: [
      "Developed RESTful APIs for visitor tracking and resident communication systems.",
      "Built backend modules using Spring Boot and PostgreSQL for a society management platform.",
      "Collaborated in Agile development cycles to deliver features with improved code quality."
    ],
    techStack: ["Spring Boot", "Angular", "REST APIs", "PostgreSQL", "Java", "Hibernate", "Agile"]
  }
];
