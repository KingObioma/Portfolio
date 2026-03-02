export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "ATCS",
    slug: "atcs",
    description:
      "A modern, fully responsive frontend prototype for an enterprise employee task and workflow management system with dashboards, KPI tracking, and reporting.",
    longDescription:
      "ATCS is a comprehensive enterprise-grade UI prototype designed to streamline workflow management for organizations. The platform features an intuitive dashboard with real-time KPI metrics including tasks completed, pending tasks, performance scores, and team member counts. It includes a robust task management system with filtering by department, status, and employee, along with priority levels, deadline tracking, and proof-of-completion uploads. The staff management module allows administrators to oversee employee profiles and assignments, while the reporting section provides data-driven insights through interactive charts and visual analytics. Built with a dark-themed, modern UI that emphasizes clarity and usability across all device sizes.",
    image: "/images/projects/ATCS/ATCS1.png",
    images: [
      "/images/projects/ATCS/ATCS1.png",
      "/images/projects/ATCS/ATCS2.png",
      "/images/projects/ATCS/ATCS3.png",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://atcs-ui-prototype.vercel.app/",
    githubUrl: "https://github.com/KingObioma/ATCS-UI-Prototype",
    featured: true,
  },
  {
    id: "2",
    title: "DeGem Demo Dashboard",
    slug: "degem-dashboard",
    description:
      "A public prototype demo of a tailoring operations management dashboard — showcasing the UI and feature set of the system built for DEGEM Clothings. The live production version is private and not publicly hosted.",
    longDescription:
      "This is a front-end prototype demo built to showcase the design and feature set of the real DEGEM Clothings management system. The actual production dashboard — the one praised by Mr. Emmanuel Edeh (CEO, DEGEM Clothings) in his testimonial — is a fully private, operational system used daily by the DEGEM team. It is not publicly hosted for confidentiality reasons.\n\nThis demo gives a representative look at what was built: a centralized hub where the business owner can track revenue, monitor new client acquisitions, and oversee tailor workflows and order pipelines in real time. Features shown include daily revenue metrics, client growth trends, transaction logs, tailor management (availability, active projects, performance ratings), a collections gallery, measurement records, and order management with fittings scheduling. The interface uses a professional dark theme designed for clarity and daily operational use.",
    image: "/images/projects/DeGem/DeGem2.png",
    images: [
      "/images/projects/DeGem/DeGem2.png",
      "/images/projects/DeGem/DeGem1.png",
      "/images/projects/DeGem/DeGem3.png",
    ],
    technologies: ["HTML", "SCSS", "Less", "JavaScript"],
    liveUrl: "https://de-gem-dashboard.vercel.app/",
    githubUrl: "https://github.com/KingObioma/De-Gem-Dashboard",
    featured: false,
  },
  {
    id: "3",
    title: "Hennix Computers", 
    slug: "hennix-computers",
    description:
      "A sleek e-commerce demo site for a premium laptop retailer, featuring a product catalog, detailed specs, checkout flow, and nationwide delivery integration.",
    longDescription:
      "Hennix Computers is a polished e-commerce demo built for a trusted laptop dealer based in Computer Village, Nigeria. The landing page immediately establishes credibility with brand-name partnerships (Dell, HP, Alienware) and trust signals like verified testing, nationwide delivery, and warranty inclusion. The product catalog showcases laptops with detailed specifications including processor, RAM, storage, graphics, display, and battery life. Each product page features a streamlined checkout flow with delivery address input, payment method selection, and order summary with real-time pricing that highlights savings. The dark-themed design with orange accent colors creates a bold, tech-forward brand identity. The site is fully responsive and optimized for conversions with clear CTAs throughout.",
    image: "/images/projects/Hennix/Hennix1.png",
    images: [
      "/images/projects/Hennix/Hennix1.png",
      "/images/projects/Hennix/Hennix2.png",
      "/images/projects/Hennix/Hennix3.png",
    ],
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://hennix-computers-demo.vercel.app",
    githubUrl: "https://github.com/KingObioma/HennixComputers-Demo",
    featured: true,
  },
  {
    id: "4",
    title: "PayNest",
    slug: "paynest",
    description:
      "A modern, responsive bill payment platform demo featuring wallet management, airtime and data purchases, scratch cards, and transaction tracking.",
    longDescription:
      "PayNest is a feature-complete frontend prototype of a Nigerian bill payment and fintech platform. The dashboard presents a wallet balance card with quick actions for adding funds and transfers, alongside summary cards for total transactions, monthly spending, scratch card purchases, and savings. The quick actions grid provides one-tap access to airtime, data bundles, electricity, cable TV, scratch cards, and internet payments. Recent transactions and activity feeds keep users informed of their financial movements. The platform includes dedicated pages for wallet management, scratch card purchases (WAEC, NECO, NABTEB, NBAIS exam PINs), full transaction history with filtering and pagination, and user profile management. Built with a stunning purple-accented dark theme, responsive design for mobile and desktop, and dark mode support throughout.",
    image: "/images/projects/PayNest/PayNest1.png",
    images: [
      "/images/projects/PayNest/PayNest1.png",
      "/images/projects/PayNest/PayNest2.png",
      "/images/projects/PayNest/PayNest3.png",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React"],
    liveUrl: "https://pay-nest-nine.vercel.app/",
    githubUrl: "https://github.com/KingObioma/PayNest",
    featured: true,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const getAllProjects = () => projects;
