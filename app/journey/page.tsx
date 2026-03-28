// app/journey/page.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function JourneyPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // 1s animation, run once
  }, []);

  const milestones = [
    { year: "2023", title: "Idea Born", desc: "Started brainstorming Less³ project." },
    { year: "2024", title: "First Prototype", desc: "Built initial credits section and showcase." },
    { year: "2025", title: "Launch", desc: "Deployed on Vercel with GitHub integration." },
    { year: "2026", title: "Expansion", desc: "Added Journey page and mobile nav fixes." },
  ];

  return (
    <section className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">Our Journey</h1>
      <ol className="relative border-l border-gray-700">
        {milestones.map((m, i) => (
          <li
            key={i}
            className="mb-10 ml-6"
            data-aos="fade-up" // 👈 AOS animation
          >
            <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-1.5 border border-gray-900"></div>
            <h3 className="text-lg font-semibold text-white">
              {m.year} — {m.title}
            </h3>
            <p className="text-gray-400">{m.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
