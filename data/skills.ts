export interface Skill {
  name: string;
  category: "languages" | "frameworks" | "desktop" | "database" | "cloud" | "tools" | "build_tools" | "concepts";
}

export const skills: Skill[] = [
  // Languages
  { name: "Java", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "SQL", category: "languages" },
  
  // Frameworks
  { name: "Spring Boot", category: "frameworks" },
  { name: "NestJS", category: "frameworks" },
  { name: "React.js", category: "frameworks" },
  { name: "Next.js", category: "frameworks" },
  { name: "Node.js", category: "frameworks" },
  { name: "Express.js", category: "frameworks" },
  
  // Desktop
  { name: "Rust", category: "desktop" },
  { name: "Tauri", category: "desktop" },
  
  // Database
  { name: "MySQL", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Prisma", category: "database" },
  { name: "Hibernate", category: "database" },
  { name: "JPA", category: "database" },
  
  // Cloud
  { name: "AWS EC2", category: "cloud" },
  { name: "AWS RDS", category: "cloud" },
  { name: "AWS S3", category: "cloud" },
  { name: "GitHub Actions", category: "cloud" },
  
  // Tools
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "IntelliJ IDEA", category: "tools" },
  { name: "Jira", category: "tools" },
  
  // Build Tools
  { name: "Maven", category: "build_tools" },
  { name: "Gradle", category: "build_tools" },
  { name: "npm", category: "build_tools" },
  
  // Concepts
  { name: "REST APIs", category: "concepts" },
  { name: "Authentication", category: "concepts" },
  { name: "JWT", category: "concepts" },
  { name: "RBAC", category: "concepts" },
  { name: "System Design", category: "concepts" },
  { name: "Microservices", category: "concepts" },
  { name: "Responsive Design", category: "concepts" },
  { name: "Performance Optimization", category: "concepts" },
  { name: "Deployment", category: "concepts" },
  { name: "ORM", category: "concepts" },
  { name: "API Integration", category: "concepts" },
  { name: "Animations", category: "concepts" }
];
