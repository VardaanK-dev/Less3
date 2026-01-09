"use client";
import { useEffect } from "react";
import "./credits.css";

function useSmokeEffect(canvasId: string, color: string) {
  useEffect(() => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; alpha: number }[] = [];

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      particles.push({ x, y, alpha: 1 });
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        ctx.fillStyle = color.replace("ALPHA", p.alpha.toString());
        ctx.beginPath();
        ctx.arc(p.x, p.y, 40 * p.alpha, 0, Math.PI * 2);
        ctx.fill();
        p.alpha -= 0.02;
        if (p.alpha <= 0) particles.splice(i, 1);
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, [canvasId, color]);
}

export default function CreditsPage() {
  useSmokeEffect("smoke-ui", "rgba(128,0,255,ALPHA)");     // purple for UI Verse
  useSmokeEffect("smoke-flowbite", "rgba(0,200,200,ALPHA)"); // teal for Flowbite

  return (
    <main id="credits" className="min-h-screen bg-black text-white relative">
      {/* Floating message box stays unchanged */}
      <div className="badge floating-message">
        Scroll Down for the magic to begin
        <span></span>
      </div>

      {/* UI Verse section */}
      <section className="credits-section">
        <canvas id="smoke-ui" className="smoke-canvas"></canvas>
        <div className="content">
          <img src="/credits_assests/uiverse.png" alt="UI Verse" className="logo" />
          <h2>UI Verse</h2>
          <p>UI inspiration and assets</p>
        </div>
      </section>

      {/* Flowbite section */}
      <section className="credits-section">
        <canvas id="smoke-flowbite" className="smoke-canvas"></canvas>
        <div className="content">
          <img src="/credits_assests/flowbite.png" alt="Flowbite" className="logo" />
          <h2>Flowbite</h2>
          <p>Tailwind CSS components</p>
        </div>
      </section>
    </main>
  );
}
