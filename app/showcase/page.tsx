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
      type: "download", // local file
    },
    {
      title: "APJ Abdul Kalam",
      previewUrl: "https://www.canva.com/design/DAG9ja6IeVQ/xnv7qU6TgA5KHeBbHEcYKA/view?utm_content=DAG9ja6IeVQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he273073246", // Canva link
      image: "/assets/A.P.J ABDUL KALAM.png",
      type: "preview", // external preview
    },
    {
      title: "Mark Zuckerberg",
      previewUrl: "/assets/Mark.jpeg",
      image: "/assets/Mark.jpeg",
      type: "preview",
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

              {a.type === "download" ? (
                <a
                  href={a.file}
                  download
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-xs sm:text-sm"
                >
                  Download
                </a>
              ) : (
                <a
                  href={a.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-xs sm:text-sm"
                >
                  Preview
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
