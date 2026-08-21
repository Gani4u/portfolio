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
    architecture: string;
    databaseDesign: string;
    challenges: string;
    solution: string;
    learnings: string;
  };
}

export interface BusinessSolution {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  problem: string;
  solution: string;
  impact: string[];
}

export const projects: Project[] = [
  {
    id: "learnsphere",
    title: "LearnSphere",
    subtitle: "E-Learning Management Platform",
    description: "Designed a full-stack educational system featuring role-based dashboards, course management modules, and automated student grading systems.",
    longDescription: "LearnSphere is an interactive online educational portal bridging the gap between trainers and students. Designed with a robust Spring Boot backend and React SPA, it features secure course authoring, module trackers, dynamic assignments, and a streamlined evaluation dashboard for instructors.",
    techStack: ["Spring Boot", "React.js", "MySQL", "JWT Authentication", "Spring Security", "Tailwind CSS", "REST APIs", "Maven"],
    features: [
      "Role-based portals with customized interfaces for students, trainers, and administrators",
      "Dynamic course building with interactive lesson steps and assignment attachments",
      "Secure student submission tracking with instant trainer grading inputs",
      "Automated course progress tracking and lesson completion calculators",
      "Analytics dashboards mapping class grades and submission ratios for trainers"
    ],
    role: "Lead Full Stack Engineer",
    metrics: [
      { label: "API Endpoints", value: "35+" },
      { label: "Query Speeds", value: "~32ms" },
      { label: "Grade Accuracy", value: "100%" }
    ],
    githubUrl: "https://github.com/Gani4u/LearnSphear",
    liveUrl: "https://gani4u.github.io/LearnSphear/",
    caseStudy: {
      problem: "Traditional educational software systems are clunky, lack mobile-first responsiveness, and experience server latency bottlenecks during bulk file uploads for assignments.",
      architecture: "React SPA Frontend communicating via secure REST APIs with a Spring Boot Service Layer, backed by a relational MySQL DB and optimized disk streaming buffers.",
      databaseDesign: "MySQL schema containing Course, Module, Lesson, Assignment, Submission, and User tables. Fully indexed on user and course foreign keys to optimize pagination speeds.",
      challenges: "High JVM memory footprint when processing concurrent ZIP archive downloads, leading to database connection timeouts and OutOfMemory errors.",
      solution: "Implemented chunked resource streaming utilizing Spring HttpMessageConverters to write data streams directly to client network outputs without buffering files in memory.",
      learnings: "Mastered token signatures in Spring Security, optimized heavy file I/O workflows, and refined microservice schema segregation."
    }
  },
  {
    id: "tsd",
    title: "TSD World",
    subtitle: "Full-Stack E-Commerce & Desktop Admin Panel",
    description: "Designed a centralized full-stack e-commerce system featuring a React customer store, PHP REST APIs, Razorpay and shipping integrations, and a Tauri desktop administration application.",
    longDescription: "TSD World is a complete tech and audio accessories e-commerce ecosystem consisting of a React-based customer store and a secure Tauri desktop admin application, both interacting with a centralized PHP REST API and MySQL database. The customer store features interactive shopping carts, Cash on Delivery, and Razorpay integrations. The admin app allows remote management of products, real-time stock levels, and product images without exposing database credentials.",
    techStack: ["React.js", "Tauri", "TypeScript", "PHP", "MySQL", "Razorpay API", "REST APIs", "Tailwind CSS"],
    features: [
      "Centralized PHP/MySQL database supporting synchronized customer and desktop admin systems",
      "Secure Tauri-based desktop administrator client for remote CRUD operations, stock management, and status configurations",
      "Server-side inventory validation and automated stock deduction to prevent overselling",
      "Secure online checkouts integrated with Razorpay PHP SDK containing server-side signature verification",
      "Product image gallery system managing remote Hostinger assets via API references"
    ],
    role: "Lead Full-Stack & Desktop Developer",
    metrics: [
      { label: "Tauri App Size", value: "~15MB" },
      { label: "Stock Sync Time", value: "Real-time" },
      { label: "CORS Endpoints", value: "Secured" }
    ],
    githubUrl: "https://github.com/Gani4u/tsd",
    liveUrl: "https://tsdworld.com",
    caseStudy: {
      problem: "The customer-facing React e-commerce site lacked integrated stock validation and a secure, non-technical dashboard to manage catalog updates, inventory, and multiple product images without risking direct database access.",
      architecture: "A shared REST API backend (PHP/MySQL) hosted on Hostinger serving both a customer web store and a Tauri+React native desktop admin app via CORS-enabled channels.",
      databaseDesign: "MySQL relational schema managing products, product_images, orders, and order_items tables, with relative file paths for remote assets to support portable host domain migrations.",
      challenges: "Securing inventory quantities against concurrent double-ordering on the web frontend, and allowing the desktop client to manage remote database assets securely without storing database credentials locally.",
      solution: "Implemented server-side validation during order placement with automatic stock decrements in the REST API, and built an HTTP-based service layer in Tauri that interacts strictly over CORS-configured PHP APIs.",
      learnings: "Mastered Tauri's desktop-to-web IPC/CORS communication, designed lightweight transactional REST APIs, and implemented robust server-side payment signature verification and stock safety mechanisms."
    }
  },
  {
    id: "riskmanagement",
    title: "Risk Audit Desktop",
    subtitle: "Tauri-based Risk Compliance Engine",
    description: "Built a native desktop compliance auditor featuring version history, risk scoring systems, and multi-user approval workflows.",
    longDescription: "Risk Audit Desktop is a native cross-platform application designed for risk auditing teams. Leveraging Tauri for low memory footprints, React for frontend layouts, and a secure local MySQL instance, it handles complex compliance ratings, tracks document history, and triggers granular approvals.",
    techStack: ["Rust", "Tauri", "React.js", "TypeScript", "MySQL", "Tailwind CSS", "Framer Motion"],
    features: [
      "Native desktop client utilizing Tauri for under 40MB memory footprints",
      "Dynamic version controller preserving audit histories with rollback indicators",
      "Compliance scoring formulas calculating portfolio risk values",
      "Multi-stage approval flows locking reports until supervisor verification"
    ],
    role: "Core Desktop Developer",
    metrics: [
      { label: "Memory Footprint", value: "< 40MB" },
      { label: "App Size", value: "~18MB" },
      { label: "Local Latency", value: "< 5ms" }
    ],
    githubUrl: "https://github.com/Akshay-Ak47/riskmanagement",
    liveUrl: "#",
    caseStudy: {
      problem: "Enterprise risk auditors required a secure, localized software application to compile vulnerability audits without sending sensitive compliance details outside the local subnet.",
      architecture: "Rust core managing secure native bindings, spawning Tauri webviews rendering React UI components, communicating directly with local sub-millisecond MySQL instances.",
      databaseDesign: "Relational schema using local MySQL, with specialized tables for RiskProfile, AuditTrail, ApprovalSign, and VersionControl.",
      challenges: "Native OS communication over Tauri IPC channels caused minor rendering lag when loading thousands of compliance rows.",
      solution: "Implemented React virtualized lists and serialized IPC payloads to fetch only visible elements, reducing list load times from 2s to sub-10ms.",
      learnings: "Gained hands-on experience in Rust memory safety concepts, native OS IPC boundaries, and building compact, high-efficiency desktop products."
    }
  }
];

export const businessSolutions: BusinessSolution[] = [
  {
    id: "talentconnect",
    title: "Bharath Talent Connect",
    description: "Designed a digital candidate-recruiter portal establishing online visibility, attracting local professionals, and showcasing placement portfolios.",
    techStack: ["React.js", "Java", "Spring Boot", "MySQL", "REST APIs", "CSS3"],
    githubUrl: "https://github.com/Gani4u/bharath-talent-connect",
    liveUrl: "https://gani4u.github.io/bharath-talent-connect",
    problem: "A regional recruitment consultancy lacked a reliable, structured digital presence, resulting in manual candidate intake forms, slow consultant response times, and limited candidate reach.",
    solution: "Designed and engineered a highly responsive placement interface, streamlining candidate registration and job search. Deployed a Java Spring Boot engine to automate application logging and data compilation.",
    impact: [
      "Establishes candidate trust with professional digital branding",
      "Fosters candidate reach, allowing registrations across multiple states",
      "Automates candidate records management, removing manual email checks",
      "Enables administrators to display active job vacancies in seconds"
    ]
  }
];
