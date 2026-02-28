import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Emmanuel Edeh",
    role: "CEO, DEGEM Clothings",
    image: "/images/testimonials/Emmanuel.jpeg",
    quote:
      "Working with him on the DEGEM dashboard was one of the best decisions I made for my business. He built a complete system where I can track my tailors, monitor orders in real time, and clearly see revenue and profit without guessing. The dashboard didn't just meet my expectations — it went far beyond what I imagined. He thinks deeply about business problems, not just code. That's rare.",
    rating: 5,
  },
  {
    name: "Mr. Wilson Othuke",
    role: "CEO & Founder, BuyPIN",
    image: "/images/testimonials/Wilson.png",
    quote:
      "He is the brain behind BuyPIN's development. From the UI to the frontend and backend architecture, he handled everything professionally. He understands fintech systems and builds with structure and scalability in mind. What I respect most is that he doesn't disappear after delivery — BuyPIN runs smoothly because of his consistency. If you're looking for a serious developer who takes ownership, he's your guy.",
    rating: 5,
  },
  {
    name: "Mr. Bright Chimezie",
    role: "CEO, Bright Communications",
    image: "/images/testimonials/Bright.png",
    quote:
      "I needed a website that would not just look fine but actually bring customers. What he built for Bright Communications is clean, fast, and designed to convert visitors into buyers. Since launching the site, customers understand our phone and laptop offers better and inquiries have increased. He understands business positioning, not just design — he built the website with strategy in mind. I'm very satisfied.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real words from real clients who trusted me with their products.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="card card-static p-8 flex flex-col reveal"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              {/* Decorative quote mark */}
              <div className="text-7xl font-bold leading-none text-primary/20 mb-2 select-none">
                &ldquo;
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed flex-1 mb-6 text-sm">
                {t.quote}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="border-t border-border pt-5 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/30">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
