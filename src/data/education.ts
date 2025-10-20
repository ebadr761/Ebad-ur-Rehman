export interface EducationItem {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  details: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const EDUCATION: EducationItem[] = [
  {
    school: "University of Calgary",
    degree: "Bachelor of Science",
    field: "Software Engineering",
    startDate: "Sep 2021",
    endDate: "Apr 2028",
    details: [
      "3rd Year (as of Oct 2025)",
      "Relevant Coursework: Programming in C/C++, OOP in C++ & Java, Full Stack Web Development, Data Structures & Algorithms, Embedded Systems, Networked Systems, Applied Operating Systems (Linux), Software Design",
      "Self-Learning: AWS Solutions Architect certification track (exam scheduled Jan 2026)",
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "AI Developer Intern",
    company: "Quest",
    location: "Remote",
    startDate: "May 2025",
    endDate: "Aug 2025",
    description: "Architected and deployed production AI chatbot systems using LangChain/LangGraph and n8n workflow automation. Improved deployment reliability and handled system design for high-throughput query processing.",
    achievements: [
      "Built and deployed multi-agent weather chatbot processing 2,500+ queries/day from IoT sensors with <2s response time, using LangChain/LangGraph agent orchestration and n8n workflow automation",
      "Architected EV advisor chatbot aggregating real-time pricing from 5 charging networks, reducing user research time by 80% and serving 300+ active users within first month of production deployment",
      "Improved deployment reliability from 60% to 95% by implementing CI/CD pipelines and comprehensive testing framework, participating in 20+ code reviews over 2 months",
    ],
    technologies: [
      "Python",
      "Flask",
      "LangChain",
      "LangGraph",
      "n8n",
      "REST APIs",
      "AWS",
      "Linux/UNIX",
      "Git",
    ],
  },
  {
    title: "Manager & Web Designer",
    company: "Designmen Consulting",
    location: "Remote",
    startDate: "Aug 2023",
    endDate: "Jan 2025",
    description: "Led end-to-end development of business websites, managing databases and implementing SEO strategies. Responsible for client relations, project delivery, and optimization.",
    achievements: [
      "Led end-to-end development of 3 business websites generating $45K+ in client revenue since 2023, managing SQL databases with 10K+ records and implementing SEO strategies that increased organic traffic by 240%",
      "Analyzed Google Search Console data to optimize site performance, improved search rankings for 4 keywords to first-page results, with organic traffic now accounting for 60% of user acquisition for top site",
    ],
    technologies: ["React", "JavaScript", "SQL", "SEO", "Google Analytics", "Database Design"],
  },
];