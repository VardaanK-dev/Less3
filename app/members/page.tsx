"use client";

import { useState, useEffect } from "react";
import "./members.css";

const members = [
  {
    name: "Jastina",
    role: "Vision Vault",
    emojis: ["🎨", "✨", "🖌️"],
    image: "/assets/jastina.jpg",
    icon: "🎨",
  },
  {
    name: "Hemendra",
    role: "Idea Wizard",
    emojis: ["💡", "🤔", "✨"],
    image: "/assets/hemendra.jpg",
    icon: "💡",
  },
  {
    name: "Vardaan",
    role: "Tech Strategist",
    emojis: ["💻", "⚙️", "🚀"],
    image: "/assets/vardaan.jpg",
    icon: "💻",
  },
];

function useWin2KClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function MembersPage() {
  const clock = useWin2KClock();

  return (
    <>
      {/* ── Desktop background ── */}
      <div className="win2k-desktop">
        {/* ── Application Window ── */}
        <div className="win2k-window">

          {/* Title bar */}
          <div className="win2k-titlebar">
            <div className="win2k-titlebar-left">
              <span className="win2k-titlebar-icon">👥</span>
              <span className="win2k-titlebar-text">Team Members — Less³ Explorer</span>
            </div>
            <div className="win2k-titlebar-buttons">
              <button className="win2k-btn-chrome" aria-label="Minimize">_</button>
              <button className="win2k-btn-chrome" aria-label="Maximize">□</button>
              <button className="win2k-btn-chrome win2k-btn-close" aria-label="Close">✕</button>
            </div>
          </div>

          {/* Menu bar */}
          <div className="win2k-menubar" role="menubar">
            {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((item) => (
              <span key={item} className="win2k-menu-item" role="menuitem">
                <u>{item[0]}</u>{item.slice(1)}
              </span>
            ))}
          </div>

          {/* Toolbar */}
          <div className="win2k-toolbar" role="toolbar" aria-label="Navigation toolbar">
            <button className="win2k-toolbar-btn" aria-label="Back">◄ Back</button>
            <button className="win2k-toolbar-btn" aria-label="Forward">Forward ►</button>
            <div className="win2k-toolbar-separator" aria-hidden="true" />
            <button className="win2k-toolbar-btn" aria-label="Refresh">↺ Refresh</button>
            <button className="win2k-toolbar-btn" aria-label="Home">🏠 Home</button>
            <div className="win2k-toolbar-separator" aria-hidden="true" />
            <button className="win2k-toolbar-btn" aria-label="Search">🔍 Search</button>
            <button className="win2k-toolbar-btn" aria-label="Favorites">⭐ Favorites</button>
          </div>

          {/* Content */}
          <div className="win2k-content">
            <div className="win2k-groupbox">
              <span className="win2k-groupbox-label">Members — 3 object(s)</span>
              <div className="win2k-cards">
                {members.map((m) => (
                  <MemberCard key={m.name} {...m} />
                ))}
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="win2k-statusbar" role="status" aria-label="Status bar">
            <div className="win2k-status-panel">3 object(s)</div>
            <div className="win2k-status-panel-sm">Local intranet</div>
          </div>
        </div>
      </div>

      {/* ── Windows Taskbar ── */}
      <div className="win2k-taskbar" role="navigation" aria-label="Windows taskbar">
        <button className="win2k-start-btn" aria-label="Start menu">
          <span>🪟</span> Start
        </button>
        <div className="win2k-taskbar-task" aria-current="true">
          👥 Team Members — Less³
        </div>
        <div className="win2k-taskbar-clock" aria-live="polite" aria-label={`Current time: ${clock}`}>
          {clock}
        </div>
      </div>
    </>
  );
}

function MemberCard({
  name,
  role,
  emojis,
  image,
  icon,
}: {
  name: string;
  role: string;
  emojis: string[];
  image: string;
  icon: string;
}) {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; emoji: string }[]
  >([]);

  const spawnParticles = () => {
    const newParticles = Array.from({ length: 10 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1200);
  };

  return (
    <article
      className="win2k-card"
      onMouseEnter={spawnParticles}
      aria-label={`${name}, ${role}`}
    >
      {/* Card title bar */}
      <div className="win2k-card-titlebar">
        <div className="win2k-card-titlebar-text">
          <span aria-hidden="true">{icon}</span>
          {name}.exe — Properties
        </div>
        <div style={{ display: "flex", gap: "2px" }}>
          <button
            className="win2k-btn-chrome"
            aria-label={`Minimize ${name}`}
            style={{ width: 14, height: 12, fontSize: 8 }}
          >_</button>
          <button
            className="win2k-btn-chrome win2k-btn-close"
            aria-label={`Close ${name}`}
            style={{ width: 14, height: 12, fontSize: 8 }}
          >✕</button>
        </div>
      </div>

      {/* Photo */}
      <div className="win2k-card-img-wrapper">
        <img src={image} alt={`Photo of ${name}`} />
      </div>

      {/* Info fields */}
      <div className="win2k-card-info">
        <div className="win2k-card-label">Full Name:</div>
        <div className="win2k-card-value-box">{name}</div>
        <div className="win2k-card-label">Role:</div>
        <div className="win2k-card-value-box">{role}</div>
        <button className="win2k-card-btn">
          View Profile
        </button>
      </div>

      {/* Emoji particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="emoji-particle animate-confetti"
          aria-hidden="true"
          style={
            {
              "--x": `${p.x}px`,
              "--y": `${p.y}px`,
            } as React.CSSProperties
          }
        >
          {p.emoji}
        </span>
      ))}
    </article>
  );
}
