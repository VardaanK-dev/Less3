"use client";
import { useEffect } from "react";
import "./credits.css";

function SmokeSection({ id, color, logo, title, text }: any) {
  useEffect(() => {
    const section = document.getElementById(id);
    const smoke = section?.querySelector(".smoke") as HTMLDivElement | null;
    if (!section || !smoke) return;

    section.addEventListener("mousemove", (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      smoke.style.background = `radial-gradient(circle at ${x}px ${y}px, ${color}, transparent 60%)`;
    });

    section.addEventListener("mouseleave", () => {
      // Fade out the glow when cursor leaves
      smoke.style.background = "transparent";
    });
  }, [id, color]);

  return (
    <section id={id} className="credits-section">
      <div className="smoke"></div>
      <div className="content">
        <img src={logo} alt={title} className="logo" />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default function CreditsPage() {
  return (
    <main id="credits" className="min-h-screen bg-black text-white relative">
      {/* Floating message box stays unchanged */}
      <div className="badge floating-message">
        Scroll Down for the magic to begin
        <span></span>
      </div>

      {/* Sections */}
      <SmokeSection
        id="ui-verse"
        color="rgba(128,0,255,0.4)"
        logo="/credits_assests/uiverse.png"
        title="UI Verse"
        text="UI inspiration and assets"
      />
      <SmokeSection
        id="flowbite"
        color="rgba(0,200,200,0.4)"
        logo="/credits_assests/flowbite.png"
        title="Flowbite"
        text="Tailwind CSS components"
      />
      <SmokeSection
        id="github"
        color="rgba(200,200,200,0.4)"
        logo="/credits_assests/github.png"
        title="GitHub"
        text="Version control & collaboration"
      />
      <SmokeSection
        id="vercel"
        color="rgba(255,255,255,0.4)"
        logo="/credits_assests/vercel.png"
        title="Vercel"
        text="Hosting & deployment"
      />
    </main>
  );
}
