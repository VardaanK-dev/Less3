// app/credits/page.tsx (App Router)
import "./credits.css";

export default function CreditsSection() {
  return (
    <section className="credits-container">
      <div className="credits-card">
        <div className="credit-item">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src="/credits/github.png" alt="GitHub" />
          </a>
          <span>GitHub</span>
        </div>
        <div className="credit-item">
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" title="Vercel">
            <img src="/credits/vercel.png" alt="Vercel" />
          </a>
          <span>Vercel</span>
        </div>
        <div className="credit-item">
          <a href="https://flowbite.com" target="_blank" rel="noopener noreferrer" title="Flowbite">
            <img src="/credits/flowbite.png" alt="Flowbite" />
          </a>
          <span>Flowbite</span>
        </div>
        <div className="credit-item">
          <a href="https://uiverse.io" target="_blank" rel="noopener noreferrer" title="UI Verse">
            <img src="/credits/uiverse.png" alt="UI Verse" />
          </a>
          <span>UI Verse</span>
        </div>
        <div className="credit-item">
          <a href="https://copilot.microsoft.com" target="_blank" rel="noopener noreferrer" title="Copilot">
            <img src="/credits/copilot.png" alt="Copilot" />
          </a>
          <span>Copilot</span>
        </div>
      </div>
    </section>
  );
}
