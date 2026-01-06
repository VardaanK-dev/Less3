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
            className="showcase-card border rounded-lg shadow p-4 text-center bg-gray-100 text-black relative overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={a.image}
              alt={a.title}
              className="w-full h-32 object-cover rounded mb-3"
            />
            <h2 className="text-lg font-bold">{a.title}</h2>
            <a
              href={a.file}
              download
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
