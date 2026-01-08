// app/credits/page.tsx
export default function CreditsPage() {
  return (
    <main id="credits" className="min-h-screen bg-black text-white relative flex flex-col items-center justify-center">
      {/* Scroll message badge */}
      <div className="badge">
        Scroll Down for the magic to begin
        <span></span>
      </div>

      {/* Example credits content (hidden until you scroll) */}
      <section className="pt-32 space-y-32 w-full max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <img
            src="/credits_assests/github.png"
            alt="GitHub"
            className="h-28 w-28 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.25)]"
          />
          <div>
            <h2 className="text-2xl font-semibold">GitHub</h2>
            <p className="text-gray-400">Version control & collaboration</p>
          </div>
        </div>
      </section>
    </main>
  );
}
