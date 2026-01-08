// app/credits/page.tsx
import "./credits.css"
export default function CreditsPage() {
  return (
    <main id="credits" className="min-h-screen bg-black text-white relative flex flex-col items-center justify-center">
      {/* Scroll message badge */}
      <div className="badge">
        Scroll Down for the magic to begin
        <span></span>
      </div>
    </main>
  );
}
