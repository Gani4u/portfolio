export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  role: string;
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: {
    problem: string;
    architecture: string; // Mermaid block or diagram explanation
    databaseDesign: string;
    challenges: string;
    solution: string;
    learnings: string;
  };
}

export const projects: Project[] = [
  {
    id: "ejtime",
    title: "eJTime",
    subtitle: "Enterprise SaaS Workforce Management",
    description: "A multi-tenant SaaS workforce management platform supporting web, desktop, and mobile workflows with secure JWT/OTP authentication, reporting, and automated time tracking.",
    longDescription: "eJTime is an enterprise-grade, multi-tenant SaaS platform built to streamline employee tracking, leave approvals, attendance auditing, and reporting. Designed with a robust backend using NestJS and Prisma ORM, it handles thousands of clock-in/out logs daily, resolves complex time zone offsets, and provides administrators with comprehensive reporting features.",
    techStack: ["Next.js", "NestJS", "Prisma ORM", "MySQL", "JWT", "OTP Authentication", "Tailwind CSS", "TypeScript"],
    features: [
      "Multi-tenant architecture separating corporate entities and data",
      "Secure double-factor authentication using JWT and OTP codes",
      "Dynamic session tracking and precise clock-in/out mechanics",
      "Comprehensive approval workflows for leaves and timesheets",
      "Automated PDF/CSV reporting and real-time activity dashboards",
      "Time-zone aware calculations resolving discrepancies across remote workers"
    ],
    role: "Full Stack Developer (at eJAmerica)",
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Sync Latency", value: "< 200ms" },
      { label: "Data Integrity", value: "100%" }
    ],
    githubUrl: "https://github.com/Gani4u/bharath-talent-connect", // mapping as part of experience/code references
    liveUrl: "#",
    caseStudy: {
      problem: "Enterprise clients needed a reliable, secure, and real-time mechanism to track remote/on-site employee hours without time zone mismatch bugs, double clock-ins, or slow reporting compilation.",
      architecture: `
\`\`\`mermaid
graph TD
    Client[Next.js Web / Desktop Client] -->|HTTPS / WSS| ALB[AWS Application Load Balancer]
    ALB -->|API Requests| NestJS[NestJS API Server]
    NestJS -->|JWT / OTP Guard| Auth[Authentication Service]
    NestJS -->|ORM Queries| Prisma[Prisma ORM Client]
    Prisma -->|Primary / Replica| DB[(MySQL Database)]
    NestJS -->|Caching| Redis[(Redis Session Cache)]
\`\`\``,
      databaseDesign: "Designed with a relational model including Tenant, User, Session, ClockLog, LeaveRequest, and Role tables. Handled via Prisma relations with strict foreign key constraints and indexes on userId and timestamp.",
      challenges: "Managing overlapping clock logs from multi-country teams with different timezone settings led to inaccurate hour reports. Integrating push notifications for approval requests had high delivery failure rates on mobile.",
      solution: "Standardized all database clock storage in UTC, calculating local times on the client side using UTC-offset mappings. Implemented a robust background worker retry system using bull queues for push notifications.",
      learnings: "Learned the critical value of timezone standardizations at the DB tier, multi-tenant database isolation strategies, and optimizing ORM query patterns under heavy write loads."
    }
  },
  {
    id: "aquatrack",
    title: "AquaTrack",
    subtitle: "Water Plant Management System",
    description: "An industrial water plant management system tracking stock, export, vending machine monitoring, and revenue analytics, backed by a Spring Boot engine deployed on AWS.",
    longDescription: "AquaTrack is an end-to-end industrial software designed for water processing plants. It connects physical vending machine data, tracks inventory levels of raw water, bottles, caps, and chemical logs, and delivers dynamic revenue reports for plant operators. Built to run reliably on AWS EC2, S3, and RDS.",
    techStack: ["Spring Boot", "JPA / Hibernate", "PostgreSQL", "AWS EC2", "AWS S3", "AWS RDS", "React", "Chart.js"],
    features: [
      "Real-time vending machine stock and status monitoring",
      "Inventory tracking for containers, chemical supplies, and finished products",
      "Automated billing, sales logging, and revenue analysis graphs",
      "AWS S3 integration for secure document and invoice archiving",
      "Role-based control panel (Plant Manager, Operator, Distributor)"
    ],
    role: "Backend Architect & Cloud Deployer",
    metrics: [
      { label: "Deployment", value: "AWS EC2/RDS" },
      { label: "Storage", value: "AWS S3" },
      { label: "Query Speed", value: "~45ms" }
    ],
    githubUrl: "https://github.com/Akshay-Ak47/riskmanagement", // pointing to relevant enterprise backend architecture
    liveUrl: "#",
    caseStudy: {
      problem: "Water plant operators lacked centralized visibility over disconnected vending machines and raw stock, leading to stockouts, lost sales records, and manual spreadsheet entries.",
      architecture: `
\`\`\`mermaid
graph TD
    WebUI[React Frontend Dashboard] -->|REST APIs| SB[Spring Boot Service]
    SB -->|Security| SpringSec[Spring Security + JWT]
    SB -->|JPA / Hibernate| PG[(AWS RDS PostgreSQL)]
    SB -->|File Uploads| S3[(AWS S3 Bucket)]
    VM[Water Vending IoT Clones] -->|Telemetry JSON| SB
\`\`\``,
      databaseDesign: "Utilized PostgreSQL with tables: VendingMachine, StockItem, Transaction, User, AlertLog. Relational joins mapped sales directly to machine inventories.",
      challenges: "Vending machines often went offline in remote areas, leading to missing telemetry data and out-of-sync inventory counts when they reconnected.",
      solution: "Developed an offline buffer synchronization queue on the simulated machine nodes. When reconnecting, they bulk upload historical JSON records, which are processed sequentially with lock-free transaction isolation levels in Spring Boot.",
      learnings: "Gained hands-on experience in AWS VPC setup, RDS backup configurations, and writing robust data synchronization algorithms for intermittently connected systems."
    }
  },
  {
    id: "learnsphere",
    title: "LearnSphere",
    subtitle: "E-Learning Management Platform",
    description: "A full-stack e-learning ecosystem featuring a student portal, trainer dashboard, course management, and assignments, secured with JWT and role-based permissions.",
    longDescription: "LearnSphere is an interactive online education platform that bridges the gap between students and trainers. Students can browse courses, submit assignments, and track their progress, while trainers manage modules, evaluate submissions, and view grade stats. The system utilizes Spring Boot REST APIs and a decoupled React SPA.",
    techStack: ["Spring Boot", "React", "JWT Authentication", "MySQL", "REST APIs", "Tailwind CSS", "Spring Security"],
    features: [
      "Role-based portals with customized UI for Students, Trainers, and Admins",
      "Course creation, lesson organization, and file upload systems",
      "Interactive assignment modules with submission portals and grades",
      "Automated student progress and lesson completion trackers",
      "Stat dashboards showing class averages and course performance for trainers"
    ],
    role: "Lead Full Stack Developer",
    metrics: [
      { label: "API Endpoints", value: "35+" },
      { label: "Auth Type", value: "JWT Tokens" },
      { label: "Database", value: "MySQL" }
    ],
    githubUrl: "https://github.com/Gani4u/LearnSphear",
    liveUrl: "https://github.com/Gani4u/LearnSphear",
    caseStudy: {
      problem: "Traditional educational software systems are overly complex, non-responsive on mobile screens, and struggle with fast, secure file transfers for assignments.",
      architecture: `
\`\`\`mermaid
graph TD
    ReactApp[React.js SPA] -->|API Calls + JWT| API[Spring Boot REST API]
    API -->|Spring Security| Security[Token Guard]
    API -->|Hibernate ORM| DB[(MySQL Database)]
    API -->|File Storage| LocalDisk[Secure Local Disk Cache]
\`\`\``,
      databaseDesign: "MySQL schema containing Course, Module, Lesson, Assignment, Submission, User, and Progress tables. Structured around clean relational integrity.",
      challenges: "High memory consumption when students downloaded large ZIP file assignments, causing the JVM to hit OutOfMemory exceptions.",
      solution: "Refactored the file download API from reading entire files into byte arrays to streaming files directly from disk to the client response output stream.",
      learnings: "Mastered Spring Security configuration patterns, JWT payload signatures, and learned how to optimize file I/O operations in high-concurrency environments."
    }
  }
];

export const secondaryProjects = [
  {
    title: "Bharath Talent Connect",
    description: "A professional talent recruitment platform connecting candidates with local recruiters. Built with React, Next.js, and Java backend to streamline matching.",
    techStack: ["React", "Java", "Spring Boot", "MySQL", "REST APIs"],
    githubUrl: "https://github.com/Gani4u/bharath-talent-connect"
  },
  {
    title: "Risk Management System",
    description: "An enterprise risk assessment tool modeling portfolio vulnerability, compliance tracking, and security posture ratings. Designed with highly scalable REST APIs.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Hibernate"],
    githubUrl: "https://github.com/Akshay-Ak47/riskmanagement"
  }
];
