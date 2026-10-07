export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
};

export const experiences: Experience[] = [
  {
    id: "vedant-infoedge",
    role: "Full Stack Developer",
    company: "Vedant Infoedge India LLP",
    location: "Pune, India",
    startDate: "Sep 2025",
    endDate: "Mar 2026",
    description: [
      "[TODO: add real metric] Developed and maintained web applications using React.js and Python.",
      "[TODO: add real metric] Integrated RESTful APIs with frontend interfaces to deliver dynamic user experiences.",
      "Collaborated with cross-functional teams to design scalable backend architectures using FastAPI and PostgreSQL.",
    ],
  },
];
