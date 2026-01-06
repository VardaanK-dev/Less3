"use client";
import { useState } from "react";
import "./showcase.css";

export default function ShowcasePage() {
  const [query, setQuery] = useState("");

  const assets = [
    {
      title: "Ratan Tata: When Less becomes More",
      file: "/assets/RatanTATA.pptx",
      image: "/assets/RatanTata.jpg",
    },
    {
      title: "Design Overview",
      file: "/assets/design.pptx",
      image: "/assets/mem_placeholder.png",
    },
    {
      title: "Final Report",
      file: "/assets/report.pptx",
      image: "/assets/mem_placeholder.png",
    },
  ];

  const filtered = assets.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="p-4 sm:p-8 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Showcase</h1>

      {/* Search bar */}
      <form className="form mb-8 w-full max-w-md">
        <label htmlFor="search" className="w-full">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

            {/* Bottom caption bar */}
            <div className="caption-bar">
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-blue-400 truncate">
                {a.title}
              </h2>
              <a
                href={a.file}
                download
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-xs sm:text-sm"
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
