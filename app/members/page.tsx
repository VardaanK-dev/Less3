// app/members/page.tsx
"use client";

import { useState } from "react";
import "./members.css";

const members = [
  { name: "Jastina", role: "Art", emojis: ["🎨", "✨", "🖌️"], image: "/assets/jastina.jpg" },
  { name: "Hemendra", role: "Ideas & Brainstorming", emojis: ["💡", "🤔", "✨"], image: "/assets/hemendra.jpg" },
  { name: "Vardaan", role: "Tech", emojis: ["💻", "⚙️", "🚀"], image: "/assets/vardaan.jpg" },
];

export default function MembersPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-4 sm:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Members</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {members.map((m) => (
          <MemberCard key={m.name} {...m} />
        ))}
      </div>
    </section>
  );
}

function MemberCard({ name, role, emojis, image }: { name: string; role: string; emojis: string[]; image: string }) {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; rotation: number; emoji: string }[]
  >([]);

  const spawnParticles = () => {
    const newParticles = Array.from({ length: 10 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 150 - 75, // spread horizontally
      y: Math.random() * 150 - 75, // spread vertically
      rotation: Math.random() * 360,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setParticles(newParticles);

    // Clear after animation duration
    setTimeout(() => setParticles([]), 1200);
  };

  return (
    <div
      className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
      onMouseEnter={spawnParticles}
    >
      <img src={image} alt={name} className="w-32 h-32 rounded-full object-cover mb-4" />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-400">{role}</p>

      {/* Emoji particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute text-2xl animate-confetti"
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg)`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
