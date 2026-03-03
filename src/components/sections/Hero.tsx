"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Twitter, ChevronDown } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const WHATSAPP_HREF =
  "https://wa.me/2349132667481?text=Hi%20King%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20ready%20to%20move%20forward%20on%20a%20project.%20Your%20track%20record%20speaks%20for%20itself%20and%20I%20need%20a%20developer%20who%20actually%20delivers.%20Let%27s%20talk%20scope%2C%20timeline%2C%20and%20budget%20%E2%80%94%20I%27m%20ready%20to%20get%20started.";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/KingObioma", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kingobioma/", icon: Linkedin },
  { name: "Twitter", href: "https://x.com/iamKingObioma", icon: Twitter },
  { name: "WhatsApp", href: WHATSAPP_HREF, icon: WhatsAppIcon },
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
                <span className="text-primary font-medium text-sm">Available for Work · Full-Stack · Mobile · UI</span>
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
