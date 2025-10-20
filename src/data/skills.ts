export interface SkillCategory {
  category: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["C/C++", "Python", "Java", "JavaScript", "Go", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "HTML/CSS", "Tailwind CSS", "TypeScript", "Responsive Design"],
  },
  {
    category: "Backend & APIs",
    skills: ["Flask", "REST APIs", "Node.js", "LangChain", "LangGraph"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "Redis", "SQL Database Design", "Time-Series Data"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["AWS (EC2, Lambda, S3)", "Docker", "Kubernetes", "CI/CD Pipelines", "Linux/UNIX", "Git"],
  },
  {
    category: "Embedded Systems",
    skills: ["PIC24F", "ARM Cortex", "C Firmware", "I2C/SPI/UART", "Power Optimization", "PCB Design Basics"],
  },
  {
    category: "AI & ML Tools",
    skills: ["LangChain", "LangGraph", "n8n Workflows", "Multi-Agent Systems"],
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "Docker", "Testing (pytest, Jest)", "Code Reviews", "Agile Development"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Solutions Architect Associate",
    status: "In Progress",
    targetDate: "Jan 2026",
  },
];