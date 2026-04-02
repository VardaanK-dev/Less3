import "./credits.css";

export default function CreditsSection() {
  return (
    <section className="credits-container">
      <div className="credits-card">
        <div className="credit-item github">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src="/credits_assets/github.png" alt="GitHub" />
          </a>
          <span>GitHub</span>
        </div>
        <div className="credit-item vercel">
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" title="Vercel">
            <img src="/credits_assets/vercel.png" alt="Vercel" />
          </a>
          <span>Vercel</span>
        </div>
        <div className="credit-item flowbite">
          <a href="https://flowbite.com" target="_blank" rel="noopener noreferrer" title="Flowbite">
            <img src="/credits_assets/flowbite.png" alt="Flowbite" />
          </a>
          <span>Flowbite</span>
        </div>
        <div className="credit-item uiverse">
          <a href="https://uiverse.io" target="_blank" rel="noopener noreferrer" title="UI Verse">
            <img src="/credits_assets/uiverse.png" alt="UI Verse" />
          </a>
          <span>UI Verse</span>
        </div>
        <div className="credit-item copilot">
          <a href="https://copilot.microsoft.com" target="_blank" rel="noopener noreferrer" title="Copilot">
            <img src="/credits_assets/copilot.png" alt="Copilot" />
          </a>
          <span>Copilot</span>
        </div>
        <div className="credit-item nodejs">
          <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" title="Node.js">
            <img src="/credits_assets/nodejs.png" alt="Node.js" />
          </a>
          <span>Node.js</span>
        </div>
        <div className="credit-item nextjs">
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" title="Next.js">
            <img src="/credits_assets/nextjs.png" alt="Next.js" />
          </a>
          <span>Next.js</span>
        </div>
        <div className="credit-item react">
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer" title="React">
            <img src="/credits_assets/react.png" alt="React" />
          </a>
          <span>React</span>
        </div>
      </div>
    </section>
  );
}
