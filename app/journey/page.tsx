"use client";
import { useState } from "react";

export default function JourneyPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Our Journey</h1>

      {/* Month card */}
      <div className="mb-6">
        {/* Outer rectangle */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left px-6 py-3 bg-red-600 text-white font-semibold rounded shadow-lg hover:bg-red-700 transition"
        >
          December 2025
        </button>

        {/* Dropdown content */}
        {open && (
          <div className="mt-4 space-y-4">
            {/* Member 1 */}
            <div className="bg-gray-800 p-4 rounded shadow">
              <h2 className="text-lg font-bold text-blue-400">Hemendra</h2>
              <img
                src="/assets/memberA_presentation.png"
                alt="Member A Presentation"
                className="w-full max-w-md rounded mb-2"
              />
              <p className="text-gray-300">
                Hemendra focused about APJ Abdul Kalam and how he helped locally, nationally and gloablly
              </p>
            </div>

            {/* Member 2 */}
            <div className="bg-gray-800 p-4 rounded shadow">
              <h2 className="text-lg font-bold text-green-400">Jastina</h2>
              <img
                src="/assets/memberB_presentation.png"
                alt="Member B Presentation"
                className="w-full max-w-md rounded mb-2"
              />
              <p className="text-gray-300">
                Jastina focused on Mark Zuckerberg and how has helped his local, nation and his gloabl impacts.
              </p>
            </div>

            {/* Member 3 */}
            <div className="bg-gray-800 p-4 rounded shadow">
              <h2 className="text-lg font-bold text-purple-400">Vardaan</h2>
              <img
                src="/assets/RatanTata.jpg"
                alt="Ratan Tata image"
                className="w-full max-w-md rounded mb-2"
              />
              <p className="text-gray-300">
                Vardaan focused on Ratan Tata and how his ideas helped the people locally, nationally and globally.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
