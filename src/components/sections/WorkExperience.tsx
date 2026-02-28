import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "UI/UX & Full-Stack Developer",
    company: "BuyPIN Nigeria",
    type: "Full-time",
    period: "Feb 2026 – Present",
    description:
      "Building and managing BuyPIN — a focused digital scratch card distribution platform for the Nigerian exam market. BuyPIN does one thing and does it well: instant, automated purchase of WAEC and NECO scratch cards. No airtime. No utilities. Just a clean, reliable, fintech-grade commerce engine built with discipline. Solely responsible for product design, frontend, backend, and ongoing operations.",
    achievements: [
      "Architected and built the full platform from scratch using Laravel, Vue 3, Inertia.js, Tailwind CSS, and Vite — covering everything from database design and API logic to a pixel-perfect, responsive UI",
      "Implemented a dual-layer product: a clean user-facing flow with wallet funding, instant card delivery, order history, and secure checkout — alongside a full admin control panel for revenue monitoring, stock management, pricing control, service toggling, account administration, and maintenance mode",
      "Designed the system with a modular, scalable architecture — lean and focused for current operations, built to expand into an enterprise-grade platform without structural rework",
    ],
    technologies: ["Vue 3", "Inertia.js", "Laravel", "Tailwind CSS", "Vite", "MySQL"],
    current: true,
  },
  {
    role: "Senior Full-Stack Developer",
    company: "Inmotion Hub",
    type: "Full-time",
    period: "Sept 2023 – July 2025",
    description:
      "Drove full-stack web development across a range of client-facing products over nearly two years. Owned both the frontend and backend sides of each project — from database schema design and Laravel API development to building responsive, polished interfaces in HTML, CSS, and JavaScript. Worked directly with stakeholders to translate business requirements into shipped, maintainable applications.",
    achievements: [
      "Architected and delivered multiple production web applications using PHP, Laravel, and MySQL — handling everything from initial data modelling to final deployment",
      "Built responsive, high-performance frontends with modern JavaScript, ensuring consistent cross-browser behaviour and strong Core Web Vitals scores",
      "Contributed to technical standards across the team, participating in code reviews and helping establish best practices for both backend structure and frontend delivery",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML", "CSS", "REST APIs"],
    current: false,
  },
  {
    role: "Senior Backend Developer",
    company: "Aide App Corporations",
    type: "Contract",
    period: "Dec 2023 – May 2024",
    description:
      "Sole backend engineer for an early-stage startup, brought in as the senior developer to build the server-side foundation from nothing. Operated as the primary technical decision-maker for all things backend — independently designing the architecture, selecting the data model, and delivering a production-ready system with no other backend resource on the team.",
    achievements: [
      "Designed and built the entire backend infrastructure from scratch, establishing the core architecture, API structure, and database design that the product is built on",
      "Served as the only backend engineer on the team, making all architectural and implementation decisions independently while keeping the codebase clean and scalable",
      "Worked directly with the founders to align technical delivery with product vision, consistently shipping milestones on schedule within a fast-moving startup environment",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "REST APIs", "Backend Architecture"],
    current: false,
  },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="section bg-card">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Work Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Professional{" "}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real companies. Real products. Shipped and running in production.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">

            {/* Vertical line */}
            <div className="absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-primary via-border to-transparent" />

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-14 reveal"
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-6 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
                      exp.current
                        ? "bg-primary border-primary shadow-[0_0_16px_rgba(196,18,48,0.45)]"
                        : "bg-background border-border"
                    }`}
                  >
                    <Briefcase
                      className={`w-3.5 h-3.5 ${exp.current ? "text-white" : "text-muted-foreground"}`}
                    />
                  </div>

                  {/* Card */}
                  <div className="bg-background border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">

                    {/* Top row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg font-bold">{exp.role}</h3>
                          {exp.current && (
                            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm mt-0.5">
                          {exp.company}
                          <span className="mx-2 text-border">·</span>
                          {exp.type}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-card border border-border rounded-lg px-3 py-1.5 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="mt-4 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm">
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-foreground/80">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-lg bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
