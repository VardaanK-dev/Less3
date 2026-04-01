"use client";

import { useState } from "react";
import "./members.css";

const members = [
  { name: "Jastina", role: "Vision Vault", emojis: ["🎨", "✨", "🖌️"], image: "/assets/jastina.jpg", color: "red" },
  { name: "Hemendra", role: "Idea Wizard", emojis: ["💡", "🤔", "✨"], image: "/assets/hemendra.jpg", color: "blue" },
  { name: "Vardaan", role: "Tech Strategist", emojis: ["💻", "⚙️", "🚀"], image: "/assets/vardaan.jpg", color: "green" },
];

export default function MembersPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-4 sm:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Members</h1>

      <div className="cards">
        {members.map((m) => (
          <MemberCard key={m.name} {...m} />
        ))}
      </div>
    </section>
  );
}

function MemberCard({
  name,
  role,
  emojis,
  image,
  color,
}: {
  name: string;
  role: string;
  emojis: string[];
  image: string;
  color: string;
}) {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; emoji: string }[]
  >([]);

  const spawnParticles = () => {
    const newParticles = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 200 - 100, // random horizontal spread
      y: Math.random() * 200 - 100, // random vertical spread
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setParticles(newParticles);

    // Clear after animation duration
    setTimeout(() => setParticles([]), 1200);
  };

  return (
    <div
      className={`card ${color}`}
      onMouseEnter={spawnParticles}
    >
      <img src={image} alt={name} />
      <p className="tip">{name}</p>
      <p className="second-text">{role}</p>

      {/* Emoji particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="emoji-particle animate-confetti"
          style={{
            "--x": `${p.x}px`,
            "--y": `${p.y}px`,
          } as React.CSSProperties}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
