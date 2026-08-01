export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  type: "hackathon" | "club" | "leadership" | "certification";
  date: string;
}

export const achievements: Achievement[] = [
  {
    id: "hackathon",
    title: "Hackathon Winner",
    subtitle: "Hackzion v.1 Hackathon",
    description: "Won first prize for designing and developing an innovative open-source project under competitive constraints.",
    type: "hackathon",
    date: "2023"
  },
  {
    id: "jester",
    title: "Co-Founder",
    subtitle: "Jester's Club",
    description: "Co-founded the college club, organized and led cultural events, managing budgeting and coordination.",
    type: "leadership",
    date: "2020 – 2024"
  },
  {
    id: "rotary",
    title: "Active Member",
    subtitle: "Rotary Club",
    description: "Participated in community service projects, fostering teamwork and local impact.",
    type: "club",
    date: "2021 – Present"
  },
  {
    id: "certification",
    title: "Java Full Stack Development",
    subtitle: "KodNest Technologies Pvt Ltd",
    description: "Completed intensive Java, Spring Boot, and Web development certification program.",
    type: "certification",
    date: "Jun 2024 – Jan 2025"
  }
];
