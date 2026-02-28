import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { getAllProjects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | King Obioma",
  description: "Browse my portfolio of web development projects showcasing expertise in React, Next.js, Node.js, and more.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="section">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            My Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive collection of my work — from enterprise dashboards
            to fintech platforms and e-commerce experiences.
          </p>
          <p className="text-muted-foreground/60 text-sm mt-3">
            {projects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card overflow-hidden group reveal"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-white">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-lg bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs rounded-lg bg-background text-muted-foreground">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-primary font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
