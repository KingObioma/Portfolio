import Link from "next/link";
import { Globe, Smartphone, Layers, Check, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    badge: "Web Development",
    title: "Full-Stack Web Development",
    description:
      "From concept to deployment — I build performant, scalable web applications tailored to your goals, with clean architecture and exceptional user experience at every layer.",
    features: [
      "Custom React & Next.js Applications",
      "RESTful & GraphQL API Development",
      "Database Architecture & Integration",
      "Authentication & Security Systems",
      "Performance Optimization & Core Web Vitals",
      "Cloud Deployment & CI/CD Pipelines",
    ],
  },
  {
    icon: Smartphone,
    badge: "Mobile Development",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile experiences that feel truly native — built for iOS and Android, optimized for speed, usability, and seamless performance from day one.",
    features: [
      "Cross-Platform iOS & Android Apps",
      "Offline-First Architecture",
      "Push Notifications & Real-Time Data",
      "Secure Authentication & User Management",
      "App Store & Play Store Submission",
      "Ongoing Support & Maintenance",
    ],
  },
  {
    icon: Layers,
    badge: "UI/UX Design",
    title: "UI/UX & Product Design",
    description:
      "User-centred design that transforms ideas into beautiful, intuitive products. From wireframe to pixel-perfect interface — I craft experiences that people genuinely love.",
    features: [
      "User Research & Journey Mapping",
      "Wireframing & Interactive Prototyping",
      "High-Fidelity UI Design in Figma",
      "Design Systems & Component Libraries",
      "Responsive & Accessible Interfaces",
      "Usability Testing & Iteration",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services Built to{" "}
            <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you need a web app, a mobile product, or a design system — I
            bring the same obsession for quality and detail to every engagement.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.badge}
              className="relative card p-8 flex flex-col overflow-hidden group reveal"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-accent" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Badge */}
              <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-2">
                {service.badge}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Divider */}
              <div className="border-t border-border mb-6" />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center reveal">
          <p className="text-muted-foreground mb-6 text-lg">
            Have something specific in mind? Let&apos;s talk about it.
          </p>
          <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
            Book a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
