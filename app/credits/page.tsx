// app/credits/page.tsx
import "./credits.css";

export default function CreditsPage() {
  return (
    <main id="credits" className="min-h-screen bg-black text-white relative">
      {/* Scroll message badge */}
      <div className="badge">
        Scroll Down for the magic to begin
        <span></span>
      </div>

      {/* Credits content */}
      <section className="pt-32 space-y-32 w-full max-w-4xl mx-auto">
        {/* UI Verse first */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <img
            src="/credits_assests/uiverse.png"
            alt="UI Verse"
            className="h-28 w-28 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.25)]"
          />
          <div>
            <h2 className="text-2xl font-semibold">UI Verse</h2>
            <p className="text-gray-400">UI inspiration and assets</p>
            <a
              href="https://uiverse.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              Visit
            </a>
          </div>
        </div>

        {/* Flowbite */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <img
            src="/credits_assests/flowbite.png"
            alt="Flowbite"
            className="h-28 w-28 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.25)]"
          />
          <div>
            <h2 className="text-2xl font-semibold">Flowbite</h2>
            <p className="text-gray-400">Tailwind CSS components</p>
            <a
              href="https://flowbite.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              Visit
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <img
            src="/credits_assests/github.png"
            alt="GitHub"
            className="h-28 w-28 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.25)]"
          />
          <div>
            <h2 className="text-2xl font-semibold">GitHub</h2>
            <p className="text-gray-400">Version control & collaboration</p>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              Visit
            </a>
          </div>
        </div>

        {/* Vercel */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <img
            src="/credits_assests/vercel.png"
            alt="Vercel"
            className="h-28 w-28 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.25)]"
          />
          <div>
            <h2 className="text-2xl font-semibold">Vercel</h2>
            <p className="text-gray-400">Hosting & deployment</p>
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              Visit
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
