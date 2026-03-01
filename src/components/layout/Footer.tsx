import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

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
