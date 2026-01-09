// app/credits/page.tsx
import "./credits.css";

export default function CreditsPage() {
  return (
    <main id="credits" className="min-h-screen bg-black text-white relative">
      {/* Fluid canvas background */}
      <canvas id="fluid"></canvas>

      {/* Floating centered message box */}
      <div className="badge floating-message">
        Scroll Down for the magic to begin
        <span></span>
      </div>

      {/* Credits content */}
      <section className="pt-32 space-y-32 w-full max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <img
            src="/credits_assests/uiverse.png"
            alt="UI Verse"
            className="h-28 w-28 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.25)]"
          />
          <div>
            <h2 className="text-2xl font-semibold">UI Verse</h2>
            <p className="text-gray-400">UI inspiration and assets</p>
          </div>
        </div>
      </section>
    </main>
  );
}
