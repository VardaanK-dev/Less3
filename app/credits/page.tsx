import Spline from '@splinetool/react-spline/next';

export default function CreditsSection() {
  return (
    <section className="credits-slide">
      {/* Spline background */}
      <div className="spline-wrapper">
        <Spline
          scene="https://prod.spline.design/MBSPIE5IKU8O3zoE/scene.splinecode"
        />
      </div>

      {/* Overlay content */}
      <div className="credits-content">
        <h2 className="title">Credits</h2>
        <ul>
          <li>UI Verse – UI inspiration and assets</li>
          <li>Flowbite – Tailwind CSS components</li>
          <li>GitHub – Version control & collaboration</li>
          <li>Vercel – Hosting & deployment</li>
        </ul>
      </div>
    </section>
  );
}
