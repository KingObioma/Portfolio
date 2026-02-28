import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, ArrowRight } from "lucide-react";
import { getProjectBySlug, getAllProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | King Obioma",
    };
  }

  return {
    title: `${project.title} | King Obioma`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="section">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12 reveal">
          {/* Project Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Project Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {project.featured && (
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-white">
                  Featured Project
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Site
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </a>
              )}
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="max-w-4xl reveal" style={{ transitionDelay: "0.1s" }}>
          <h2 className="text-2xl font-bold mb-4">About This Project</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {project.longDescription}
          </p>
        </div>

        {/* Project Gallery */}
        {project.images.length > 1 && (
          <div className="mt-16 reveal" style={{ transitionDelay: "0.15s" }}>
            <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-border reveal"
                  style={{ transitionDelay: `${0.2 + index * 0.08}s` }}
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA + Navigation */}
        <div className="mt-20 pt-12 border-t border-border reveal" style={{ transitionDelay: "0.2s" }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Conversion CTA */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Like what you see?</h2>
              <p className="text-muted-foreground mb-6">
                I&apos;m available for new projects. Whether you need a full product
                built from scratch or want to level up an existing one — let&apos;s talk.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/projects"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Projects
                </Link>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <p className="text-2xl font-bold gradient-text">50+</p>
                <p className="text-xs text-muted-foreground mt-1">Projects Shipped</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <p className="text-2xl font-bold gradient-text">20+</p>
                <p className="text-xs text-muted-foreground mt-1">Happy Clients</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <p className="text-2xl font-bold gradient-text">4+</p>
                <p className="text-xs text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <p className="text-2xl font-bold gradient-text">24h</p>
                <p className="text-xs text-muted-foreground mt-1">Response Time</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
