import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Vedant Infoedge",
    role: "Software Engineer",
    startDate: "2023", // Assuming recent based on 6 months exp mentioned
    endDate: "Present",
    location: "Pune, India",
    description: [
      "Built reusable React components and added lazy loading/memoization, reducing page load time by [TODO: real %].",
      "Deployed serverless backend on AWS Lambda + DynamoDB with S3/CloudFront delivery serving [TODO: real scale].",
      "Wrote comprehensive unit tests and resolved production issues, reducing recurring defects by [TODO: real %].",
      "Collaborated in an Agile/Scrum environment, participating in daily stand-ups, sprint planning, and code reviews to ensure timely delivery of features."
    ],
    technologies: ["React", "AWS", "Python", "Node.js", "DynamoDB"]
  }
];
