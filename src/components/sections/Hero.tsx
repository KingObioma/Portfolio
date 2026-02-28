"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Twitter, ChevronDown } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/KingObioma", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kingobioma/", icon: Linkedin },
  { name: "Twitter", href: "https://x.com/iamKingObioma", icon: Twitter },
];

export default function Hero() {
  return (
    <section id="hero" className="relative section min-h-screen flex items-center hero-bg-pattern overflow-hidden">

      {/* Radial vignette over the dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,#0a0a0a_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-in-up">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-primary font-medium text-sm">Available for Work · Full-Stack · Mobile · UI/UX</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                I don&apos;t just write code.{" "}
                <br />
                I ship{" "}
                <span className="gradient-text">products.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                Full-stack developer, mobile app developer, and UI/UX designer
                with 4+ years and 50+ products shipped. From scratch card
                platforms to enterprise dashboards — I turn complex ideas into
                clean, scalable software.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/#projects"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  See My Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/#contact"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Let&apos;s Work Together
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground text-sm">Connect:</span>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-50" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 animate-pulse-glow" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30">
                <Image
                  src="/images/portrait-image-red.jpg"
                  alt="King Obioma"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground animate-bounce">
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
