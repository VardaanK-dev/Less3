// app/journey/page.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function JourneyPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const milestones = [
    {
      date: "December 2025",
      title: "Group Formed & Logo Created",
      desc: "We came together as a team, decided on the name Less³, designed our logo, built the website, and prepared prototype presentations.",
    },
    {
      date: "January 2026",
      title: "Chart Works",
      desc: "Focused on creating charts and visual data to support the project.",
    },
    {
      date: "February 2026",
      title: "Presentation Expansion",
      desc: "Added new content and refinements to the prototype presentations.",
    },
    {
      date: "March 2026",
      title: "Presentation Rectification",
      desc: "Reviewed and corrected the presentations, polishing them for final delivery.",
    },
    {
      date: "April 4, 2026",
      title: "Final Day",
      desc: "The official end of the project, marking the culmination of all our work.",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-white">Our Journey</h1>
      <ol className="relative border-l border-gray-700">
        {milestones.map((m, i) => (
          <li
            key={i}
            className="mb-12 ml-6"
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-1.5 border border-gray-900"></div>
            <h3 className="text-xl font-semibold text-white">
              {m.date} — {m.title}
            </h3>
            <p className="text-gray-400">{m.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
