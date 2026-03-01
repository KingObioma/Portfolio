"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    // Small delay so Next.js finishes painting the new page DOM before we observe
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.remove("visible");
        observer.observe(el);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
