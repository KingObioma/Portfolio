"use client";

import { FileCode2, Monitor, Server, Database, Cloud, Package } from "lucide-react";
import { techStack } from "@/data/techStack";
import type { LucideIcon } from "lucide-react";

const categoryIcons: Record<string, LucideIcon> = {
  Languages: FileCode2,
  "Frontend Frameworks": Monitor,
  "Backend Frameworks": Server,
  Databases: Database,
  "Cloud & DevOps": Cloud,
  "Tools & Libraries": Package,
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="section">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technologies, frameworks, and tools I use to
            build modern, scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, index) => {
            const Icon = categoryIcons[category.name] ?? Package;
            return (
              <div
                key={category.name}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group reveal"
                style={{ transitionDelay: `${index * 0.07}s` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.name}</h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item.name}
                      className="px-3 py-1.5 text-xs rounded-lg bg-background border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
