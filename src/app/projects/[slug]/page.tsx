import { projects } from "@/content/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg mb-8">{project.description}</p>
      <div className="flex gap-2 mb-8">
        {project.technologies.map(tech => (
          <span key={tech} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      {/* Add project content here */}
    </div>
  );
}
