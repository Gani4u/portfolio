export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  impact: string[];
  features: string[];
  technologies: string[];
  value: string;
}

export const experiences: WorkExperience[] = [
  {
    id: "ejamerica",
    company: "eJAmerica",
    role: "Full Stack Developer",
    period: "09/2025 – Present",
    location: "Mysuru, Karnataka",
    summary: "Engineered eJTime, a multi-tenant enterprise SaaS workforce platform tracking employee attendance, leaves, and sessions.",
    impact: [
      "Optimized query response times by 35% through database indexing and indexing key session timestamp keys.",
      "Resolved cross-timezone logging sync discrepancies for international client teams, ensuring 100% database audit consistency.",
      "Improved system reliability by fixing race conditions in concurrent clock-in/out user routines."
    ],
    features: [
      "Role-Based Access Control (RBAC) separating tenant corporations, managers, and employees.",
      "Automated time-tracking engine logging clock-in/out records with secure OTP validations.",
      "Interactive supervisor approval interfaces for leaf requests and timesheet submissions.",
      "Dynamic CSV/PDF reporting module aggregating employee hour records for HR invoicing."
    ],
    technologies: ["Next.js", "NestJS", "Prisma ORM", "MySQL", "JWT", "OTP Auth", "TypeScript", "Tailwind CSS"],
    value: "Streamlined hour-tracking operations for mid-scale enterprise clients, reducing manual timesheet compilation by 25 hours per month."
  },
  {
    id: "radixile",
    company: "Radixile Technologies Solutions",
    role: "Java Full Stack Developer Intern",
    period: "02/2025 – 08/2025",
    location: "Remote",
    summary: "Designed and engineered visitor tracking and messaging systems for a localized society management project.",
    impact: [
      "Delivered high-performance RESTful APIs handling hundreds of daily visitor registrations with sub-50ms latency.",
      "Automated automated database backup scripts for PostgreSQL instances, eliminating manual maintenance routines.",
      "Reduced API integration friction by writing extensive OpenAPI/Postman documentation, cutting frontend sync delays."
    ],
    features: [
      "Visitor registration module tracking visitor entry checkpoints and generating passes.",
      "Real-time announcements and resident messaging module facilitating community alerts.",
      "Secure login controls protecting resident lists using JWT token guards."
    ],
    technologies: ["Spring Boot", "Angular", "REST APIs", "PostgreSQL", "Java", "Hibernate ORM", "Git", "Agile"],
    value: "Established secure visitor verification standards and digital resident communication boards, lowering offline gate logging issues."
  }
];
