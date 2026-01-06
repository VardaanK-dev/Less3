"use client";
import { useState } from "react";

export default function JourneyPage() {
  const [openMonth, setOpenMonth] = useState<string | null>(null);

  const toggleMonth = (month: string) => {
    setOpenMonth(openMonth === month ? null : month);
  };

  return (
    <main className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Our Journey</h1>

      {/* December tab */}
      <div className="mb-6">
        <button
          onClick={() => toggleMonth("December")}
          className="w-full text-left px-4 py-2 bg-red-600 text-white font-semibold rounded"
        >
          December 2025
        </button>

        {openMonth === "December" && (
          <div className="mt-4 bg-gray-800 p-4 rounded shadow">
            {/* Presentation preview */}
            <img
              src="/assets/december_presentation.png"
              alt="December Presentation"
              className="w-full max-w-md rounded mb-4"
            />

            {/* Description */}
            <p className="text-gray-300 mb-2">
              This presentation summarized our final showcase for the year,
              highlighting key milestones and lessons learned.
            </p>

            {/* Download button */}
            <a
              href="/assets/DecemberPresentation.pptx"
              download
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Download Presentation
            </a>
          </div>
        )}
      </div>

      {/* Add more months here with different colors */}
    </main>
  );
}
