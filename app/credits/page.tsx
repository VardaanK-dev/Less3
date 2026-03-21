import "./showcase.css";
// app/credits/page.tsx (App Router)
export default function CreditsSection() {
  return (
    <section className="credits-container">
      <div className="credits-card">
        <div className="credit-item">
          <img src="/credits/github.png" alt="GitHub" />
          <span>GitHub</span>
        </div>
        <div className="credit-item">
          <img src="/credits/vercel.png" alt="Vercel" />
          <span>Vercel</span>
        </div>
        <div className="credit-item">
          <img src="/credits/flowbite.png" alt="Flowbite" />
          <span>Flowbite</span>
        </div>
        <div className="credit-item">
          <img src="/credits/uiverse.png" alt="UI Verse" />
          <span>UI Verse</span>
        </div>
        <div className="credit-item">
          <img src="/credits/copilot.png" alt="Copilot" />
          <span>Copilot</span>
        </div>
      </div>
    </section>
  );
}
