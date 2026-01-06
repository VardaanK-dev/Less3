"use client";
import { useState } from "react";
import "./showcase.css";

export default function ShowcasePage() {
  const [query, setQuery] = useState("");

  // Assets list (files inside /public/assets/)
  const assets = [
    {
      title: "Ratan Tata: When Less becomes More",
      file: "/assets/RatanTATA.pptx",
      image: "/assets/RatanTata.jpg",
    },
  ];

  // Filter assets by search query
  const filtered = assets.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="p-8 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Showcase</h1>

      {/* Search bar */}
      <form className="form mb-8">
        <label htmlFor="search">
          <input
            className="input"
            type="text"
            placeholder="Search assets"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <div className="fancy-bg"></div>
          <div className="search">🔍</div>
          <button
            className="close-btn"
            type="reset"
            onClick={() => setQuery("")}
          >
            ✖
          </button>
        </label>
      </form>

      {/* Assets grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((a) => (
          <div
            key={a.title}
            className="showcase-card relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            {/* Background image */}
            <img
              src={a.image}
              alt={a.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Black overlay with glow */}
            <div className="absolute inset-0 bg-black/70 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.7)]"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
              <h2 className="text-xl font-bold text-blue-400 mb-3 text-center">
                {a.title}
              </h2>
              <a
                href={a.file}
                download
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
