export interface Skill {
  name: string;
  category: "backend" | "frontend" | "database" | "cloud_tools";
  iconName?: string; // mapping to simple icons if needed
}

export const skills: Skill[] = [
  // Backend
  { name: "Java", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "NestJS", category: "backend" },
  { name: "Hibernate", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "JWT", category: "backend" },
  { name: "Microservices", category: "backend" },
  
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  
  // Database
  { name: "MySQL", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Prisma ORM", category: "database" },
  
  // Cloud & Tools
  { name: "AWS EC2", category: "cloud_tools" },
  { name: "AWS RDS", category: "cloud_tools" },
  { name: "AWS S3", category: "cloud_tools" },
  { name: "GitHub", category: "cloud_tools" },
  { name: "Git", category: "cloud_tools" },
  { name: "Maven", category: "cloud_tools" },
  { name: "Jira", category: "cloud_tools" }
];
