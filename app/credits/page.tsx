// app/credits/page.tsx
// Left at scrolling effect, Work on scrolling effect now
"use client";

export default function CreditsPage() {
  return (
    <main id="credits" className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-10">Credits</h1>
      <p className="text-gray-400 mb-6">
        This site wouldn’t have been possible without these amazing platforms and resources.
      </p>

      <ul className="space-y-4">
        <li>UI Verse — UI inspiration and assets</li>
        <li>Flowbite — Tailwind CSS components</li>
        <li>GitHub — Version control & collaboration</li>
        <li>Vercel — Hosting & deployment</li>
      </ul>
    </main>
  );
}
