// app/journey/page.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function JourneyPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const milestones = [
    {
      date: "December 2025",
      title: "Group Formed & Logo Created",
      desc: "We came together as a team, decided on the name Less³, designed our logo, built the website, and prepared prototype presentations.",
      animation: "fade-up",
    },
    {
      date: "January 2026",
      title: "Chart Works",
      desc: "Focused on creating charts and visual data to support the project.",
      animation: "fade-right",
    },
    {
      date: "February 2026",
      title: "Presentation Expansion",
      desc: "Added new content and refinements to the prototype presentations.",
      animation: "zoom-in",
    },
    {
      date: "March 2026",
      title: "Presentation Rectification",
      desc: "Reviewed and corrected the presentations, polishing them for final delivery.",
      animation: "flip-up",
    },
    {
      date: "April 4, 2026",
      title: "Final Day",
      desc: "The official end of the project, marking the culmination of all our work.",
      animation: "fade-left",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white">
        Our Journey
      </h1>
      <div className="space-y-6 sm:space-y-8">
        {milestones.map((m, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 border border-gray-700"
            data-aos={m.animation}
            data-aos-delay={i * 200}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-400">
              {m.date}
            </h3>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 sm:mt-2">
              {m.title}
            </h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
