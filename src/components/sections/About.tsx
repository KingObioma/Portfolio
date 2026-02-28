"use client";

import Image from "next/image";
import Link from "next/link";
import { Code2, Users, Zap, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const statsData = [
  { target: 4, suffix: "+", label: "Years Experience" },
  { target: 50, suffix: "+", label: "Projects Shipped" },
  { target: 15, suffix: "+", label: "Technologies" },
  { target: 20, suffix: "+", label: "Happy Clients" },
];

const traits = [
  {
    icon: Code2,
    title: "Product Thinker",
    description:
      "I understand why something is being built before I build it. Business logic, user goals, and technical execution are one thought process — not separate concerns.",
  },
  {
    icon: Users,
    title: "Full Ownership",
    description:
      "From database schema to final pixel, I take complete responsibility for what I ship. Delivery isn't the finish line — the product working in production is.",
  },
  {
    icon: Zap,
    title: "Built to Scale",
    description:
      "I build lean and build right. Clean architecture, modular systems, zero shortcuts that create debt. What I deliver today holds up under the growth that comes tomorrow.",
  },
];

function StatCounter({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1800;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="text-center p-4 rounded-xl bg-background border border-border"
    >
      <p className="text-2xl font-bold gradient-text">
        {count}
        {suffix}
      </p>
      <p className="text-xs text-muted-foreground mt-1 leading-snug">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: B&W portrait + stats */}
          <div className="relative reveal">
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-accent/5 rounded-3xl blur-3xl opacity-50 -z-10" />

            <div className="relative rounded-2xl overflow-hidden border border-border">
              <Image
                src="/images/profile-pic.jpg"
                alt="King Obioma"
                width={500}
                height={600}
                className="object-cover object-center w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card/80 to-transparent" />
              <div className="absolute top-8 left-0 bottom-8 w-1 bg-gradient-to-b from-primary via-accent to-primary/20 rounded-r-full" />
            </div>

            {/* Animated stats grid */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {statsData.map((stat) => (
                <StatCounter
                  key={stat.label}
                  target={stat.target}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>

            {/* Availability */}
            <div className="mt-3 p-4 rounded-xl bg-background border border-emerald-500/20 flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-60" />
              </div>
              <div>
                <p className="font-semibold text-sm">Currently Available</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Open to full-time &amp; freelance opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              I Build Products,{" "}
              <span className="gradient-text">Not Just Code.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="leading-relaxed">
                I&apos;m King Obioma — a full-stack developer, mobile app developer,
                and UI/UX designer with 4+ years and 50+ shipped products across
                web, mobile, fintech, and enterprise. I work across the entire stack:
                backend architecture, frontend engineering, mobile development,
                UI/UX design, and production operations. I don&apos;t hand off and
                disappear. I build things that run.
              </p>
              <p className="leading-relaxed">
                My work includes a scratch card distribution platform serving real
                students, an enterprise task management system, operational dashboards
                for active businesses, and e-commerce platforms built to convert.
                Every product designed, built, and delivered end-to-end — using
                Laravel, Vue.js, React, Next.js, PHP, and the infrastructure that ties
                it all together.
              </p>
              <p className="leading-relaxed">
                What clients consistently say: I think like a business owner, not just
                a developer. I understand that code exists to solve problems — and the
                measure of good work is whether it actually does that. That mindset is
                what turns a project into a product, and a client into a long-term
                partner.
              </p>
            </div>

            {/* Trait cards */}
            <div className="space-y-3 mb-8">
              {traits.map((trait) => (
                <div
                  key={trait.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <trait.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{trait.title}</h3>
                    <p className="text-muted-foreground text-sm mt-0.5 leading-relaxed">
                      {trait.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                Let&apos;s Work Together
              </Link>
              <Link href="/#projects" className="btn-secondary inline-flex items-center gap-2">
                See My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
