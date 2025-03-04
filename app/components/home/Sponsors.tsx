"use client";
import { useEffect, useRef } from "react";
import Section from "../ui/Section";
import Image from "next/image";

const sponsors = [
  { name: "Company 1", url: "/images/logo.png" },
  { name: "Company 2", url: "/images/logo.png" },
  { name: "Company 3", url: "/images/logo.png" },
  { name: "Company 4", url: "/images/logo.png" },
  { name: "Company 5", url: "/images/logo.png" },
  { name: "Company 6", url: "/images/logo.png" },
];

export default function Sponsors() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const speed = 1; // Pixels per frame
    
    const animate = () => {
      if (!scrollContainer) return;

      scrollContainer.scrollLeft += speed;

      // Reset when we've scrolled one set of sponsors
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <Section
      title="Our Sponsors"
      className="mb-24"
      aria-labelledby="sponsors-section"
    >
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden py-8 px-4 whitespace-nowrap"
          role="list"
          aria-label="Sponsor logos"
        >
          {/* Duplicate the sponsors array twice to ensure smooth infinite scroll */}
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 w-48 h-24 bg-amber-900/30 rounded-lg border border-amber-500/20 backdrop-blur-sm p-4 flex items-center justify-center group hover:border-amber-500/40 transition-all duration-300"
              role="listitem"
            >
              <Image
                src={sponsor.url}
                alt={`Logo of ${sponsor.name}`}
                className="max-w-full max-h-full opacity-75 group-hover:opacity-100 transition-opacity"
                width={200}
                height={80}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/images/default-logo.png";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}