// app/credits/page.tsx
import "./credits.css";
import { useEffect } from "react";

export default function CreditsPage() {
  useEffect(() => {
    // Attach smoke effect to each canvas
    const sections = document.querySelectorAll<HTMLCanvasElement>(".smoke-canvas");
    sections.forEach((canvas) => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const color = canvas.dataset.color || "rgba(255,255,255,0.3)";

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
          ctx.fillStyle = color.replace("0.3", p.alpha.toString());
          ctx.beginPath();
          ctx.arc(p.x, p.y, 30 * p.alpha, 0, Math.PI * 2);
          ctx.fill();
          p.alpha -= 0.02;
          if (p.alpha <= 0) particles.splice(i, 1);
        });
        requestAnimationFrame(animate);
      }
      animate();
    });
  }, []);

  return (
    <main id="credits" className="min-h-screen bg-black text-white relative">
      {/* Floating message box stays unchanged */}
      <div className="badge floating-message">
        Scroll Down for the magic to begin
        <span></span>
      </div>

      {/* Credits sections with smoke canvases */}
      <section className="credits-section">
        <canvas className="smoke-canvas" data-color="rgba(128,0,255,0.3)"></canvas>
        <div className="content">
          <img src="/credits_assests/uiverse.png" alt="UI Verse" className="logo" />
          <div>
            <h2>UI Verse</h2>
            <p>UI inspiration and assets</p>
          </div>
        </div>
      </section>

      <section className="credits-section">
        <canvas className="smoke-canvas" data-color="rgba(0,200,200,0.3)"></canvas>
        <div className="content">
          <img src="/credits_assests/flowbite.png" alt="Flowbite" className="logo" />
          <div>
            <h2>Flowbite</h2>
            <p>Tailwind CSS components</p>
          </div>
        </div>
      </section>

      {/* Add more sections for GitHub, Vercel, etc. */}
    </main>
  );
}
