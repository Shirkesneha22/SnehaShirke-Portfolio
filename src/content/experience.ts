import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Vedant Infoedge",
    role: "Full Stack Developer",
    startDate: "2023",
    endDate: "Present",
    location: "Pune, India",
    description: [
      "Built reusable React components and added lazy loading/memoization, reducing page load time by 40%.",
      "Deployed serverless backend on AWS Lambda + DynamoDB with S3/CloudFront delivery serving 10,000+ daily active users.",
      "Wrote comprehensive unit tests and resolved production issues, reducing recurring defects by 30%.",
      "Collaborated in an Agile/Scrum environment, participating in daily stand-ups, sprint planning, and code reviews to ensure timely delivery of features."
    ],
    technologies: ["React", "AWS", "Python", "Node.js", "DynamoDB"]
  }
];
