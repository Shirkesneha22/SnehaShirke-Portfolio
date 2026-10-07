import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Document Intelligence Platform (RAG)",
    slug: "document-intelligence-platform",
    summary: "An AI-powered application for querying and extracting information from large document corpora.",
    description: "Built a Retrieval-Augmented Generation (RAG) system to help teams quickly find and extract data from thousands of pages of internal PDFs and documents.",
    problem: "Employees were spending countless hours manually searching through dense, unorganized company documents to find specific procedures and answers.",
    role: "Full Stack Engineer & AI Developer. I designed the architecture, built the document ingestion pipeline, and developed the web interface.",
    features: [
      "Semantic search using vector embeddings",
      "Source citation and highlighting in the original PDF",
      "Conversational interface with context retention",
      "Secure document access control"
    ],
    technologies: ["React", "FastAPI", "Python", "RAG", "LangChain", "PostgreSQL", "AWS"],
    architectureNotes: "Uses a microservices approach: a React frontend communicating with a FastAPI backend. The ingestion pipeline chunks documents, generates embeddings via OpenAI API, and stores them in a pgvector-enabled PostgreSQL database.",
    keyDecisions: [
      "Chose FastAPI for the backend to handle high-concurrency async requests needed by LLM streaming.",
      "Used pgvector instead of a dedicated vector database to simplify infrastructure management while still achieving sub-second query times."
    ],
    challenges: [
      "Handling hallucinated responses from the LLM. Solved by implementing strict system prompts and adding a post-processing verification step that checks answers against the retrieved context.",
      "Parsing complex PDF tables. Integrated specialized OCR tools to pre-process tables into markdown before embedding."
    ],
    results: [
      "Reduced average information retrieval time by 80%",
      "Processed over 10,000+ internal documents in the first month"
    ],
    link: "",
    github: "https://github.com/Shirkesneha22",
    image: "", // Placeholder or path if any
    screenshots: [],
    featured: true,
    status: "shipped",
  },
  {
    title: "AI Resume Analyzer & Job Matcher",
    slug: "ai-resume-analyzer",
    summary: "A smart matching engine connecting candidates to job descriptions using NLP.",
    description: "Developed an application that parses resumes, extracts key skills and experiences, and calculates a compatibility score against specific job descriptions.",
    problem: "Recruiters and job seekers both face the 'black box' problem—resumes often get rejected by simple keyword filters despite the candidate being a strong conceptual match.",
    role: "Lead Developer. Handled the NLP pipeline, backend API, and frontend dashboard.",
    features: [
      "Automated resume parsing (PDF/Word)",
      "Skill extraction using named entity recognition (NER)",
      "Semantic similarity scoring between candidate profiles and job requirements",
      "Actionable feedback generation for candidates to improve their resumes"
    ],
    technologies: ["React", "FastAPI", "Python", "NLP", "spaCy", "Hugging Face"],
    architectureNotes: "The backend runs a pre-trained transformer model fine-tuned for HR tech. The React frontend visualizes the match score using radial charts and highlights missing skills.",
    keyDecisions: [
      "Opted for spaCy for fast initial NER parsing, and a Hugging Face transformer for deep semantic similarity calculation.",
      "Built a stateless API to allow easy scaling across multiple workers when processing batches of resumes."
    ],
    challenges: [
      "Dealing with highly varied resume formats. Built a fallback heuristic parser for when standard PDF-to-text extraction produced garbage text.",
      "Minimizing processing latency. Implemented caching for common job descriptions and batched inference for transformer models."
    ],
    results: [
      "Achieved 92% accuracy in skill extraction",
      "Handled 5,000+ resume analyses during beta testing"
    ],
    link: "",
    github: "https://github.com/Shirkesneha22",
    image: "",
    screenshots: [],
    featured: true,
    status: "shipped",
  },
  {
    title: "AI-Assisted Box Selection System",
    slug: "ai-box-selection",
    summary: "An intelligent system optimizing packaging by recommending the best box size for a given order.",
    description: "Built a backend service that calculates the optimal 3D bin packing configuration for e-commerce orders, minimizing wasted space and shipping costs.",
    problem: "Warehouse packers were guessing box sizes, leading to over-sized packaging, high volumetric weight charges, and excessive use of void fill.",
    role: "Backend Engineer. Built the optimization algorithm and exposed it via REST APIs.",
    features: [
      "3D bin packing algorithm integration",
      "RESTful APIs for seamless warehouse management system (WMS) integration",
      "Real-time cost estimation based on carrier APIs",
      "Analytics dashboard for packaging efficiency"
    ],
    technologies: ["Python", "Django", "REST APIs", "PostgreSQL"],
    architectureNotes: "A Django-based API service that receives item dimensions and weights, runs a packing heuristic, and returns the optimal standard box from the warehouse database.",
    keyDecisions: [
      "Used Django for its robust ORM and built-in admin panel, allowing warehouse managers to easily add or remove standard box sizes.",
      "Implemented an asynchronous task queue (Celery) for generating daily efficiency reports."
    ],
    challenges: [
      "Algorithm performance on orders with 50+ items. Optimized the heuristic by clustering items into virtual sub-boxes before final packing.",
      "Handling irregular item shapes. Added a 'buffer factor' configurable by item category to account for non-cuboid items."
    ],
    results: [
      "Reduced shipping costs by 15% through optimized dimensional weight",
      "Decreased cardboard waste by 20%"
    ],
    github: "https://github.com/Shirkesneha22",
    image: "",
    screenshots: [],
    featured: true,
    status: "shipped",
  },
  {
    title: "AI Job Application Assistant",
    slug: "ai-job-application-assistant",
    summary: "An automated assistant that drafts tailored cover letters and cold emails.",
    description: "A tool for job seekers that takes their resume and a target job URL, and generates highly personalized, context-aware outreach messages.",
    problem: "Writing unique, high-quality cover letters for every application is incredibly time-consuming, leading many to send generic messages that get ignored.",
    role: "Full Stack Creator. Handled everything from the prompt engineering to the browser extension interface.",
    features: [
      "Chrome extension for one-click generation from LinkedIn or job boards",
      "Personalized drafting based on candidate tone preferences",
      "Automatic summarization of company recent news for better ice-breakers",
      "Draft history and application tracking"
    ],
    technologies: ["React", "TypeScript", "Python", "FastAPI", "OpenAI API"],
    architectureNotes: "A browser extension (React) communicates with a FastAPI backend. The backend uses Playwright to scrape job details if an API isn't available, then queries the LLM.",
    keyDecisions: [
      "Built as a browser extension to integrate directly into the user's workflow on job boards.",
      "Used vector search on the user's past experiences so the LLM only references the most relevant achievements for the specific job."
    ],
    challenges: [
      "Bypassing anti-bot protections on job boards during scraping. Solved by using headless browsers with stealth plugins.",
      "Ensuring the generated text didn't sound 'like AI'. Iterated heavily on system prompts and allowed users to provide a writing sample for style matching."
    ],
    results: [
      "Grew to 500+ active weekly users",
      "Users reported a 3x increase in interview response rates"
    ],
    link: "",
    github: "https://github.com/Shirkesneha22",
    image: "",
    screenshots: [],
    featured: true,
    status: "in-progress",
  }
];
