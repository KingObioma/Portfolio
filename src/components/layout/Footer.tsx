import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/KingObioma", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kingobioma/", icon: Linkedin },
  { name: "Twitter", href: "https://x.com/iamKingObioma", icon: Twitter },
  { name: "Email", href: "mailto:kingobioma8@gmail.com", icon: Mail },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-primary">King</span>
              <span>Obioma</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-xs text-sm leading-relaxed">
              Full-stack developer. Mobile app developer. UI/UX designer.
              4+ years. 50+ products shipped — end to end.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Connect
            </h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-background border border-border hover:border-primary hover:text-primary transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Open for new projects, freelance work, and full-time roles.
              Response time: 24 hours.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; {currentYear} King Obioma. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with{" "}
            <span className="text-primary">Next.js</span>,{" "}
            <span className="text-primary">TypeScript</span> &{" "}
            <span className="text-primary">TailwindCSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
