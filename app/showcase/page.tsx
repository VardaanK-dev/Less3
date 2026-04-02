"use client";
import { useState } from "react";
import "./showcase.css";

export default function ShowcasePage() {
  const [query, setQuery] = useState("");

  const assets = [
    {
      title: "Ratan Tata: When Less becomes More",
      file: "/assets/Ratan_TATA.pptx",
      image: "/assets/RatanTata.jpg",
      type: "download", // local file
    },
    {
      title: "APJ Abdul Kalam",
      file: "assets/APJ Abdul Kalam.pptx",
      image: "/assets/A.P.J ABDUL KALAM.png",
      type: "download", // external preview
    },
    {
      title: "Mark Zuckerberg Chart",
      image: "/assets/Mark.jpeg",
      type: "preview", // chart image only
      previewUrl: "/assets/Mark.jpeg",
    },
    {
      title: "Mark Zuckerberg Presentation",
      file: "/assets/Mark Zuckerberg.pptx",
      image: "/assets/MarkPPT.jpg", // thumbnail
      type: "download",
    },
    {
      title: "Merged Presentation",
      file: "/assets/Merged(Less3).pptx",
      image: "/assets/Merged(Less3).png", // thumbnail
      type: "download",
    },
    {
      title: "APJ Abdul Kalam Chart",
      image: "/assets/APJ Abdul Kalam chart.jpeg",
      type: "preview", // chart image only
      previewUrl: "/assets/APJ Abdul Kalam chart.jpeg",
    },
    {
      title: "Mark Zuckerberg Box art-work",
      image: "/assets/Mark Zuckerberg Box.jpeg",
      type: "preview", // chart image only
      previewUrl: "/assets/Mark Zuckerberg Box.jpeg",
    },
  ];

  const filtered = assets.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="p-4 sm:p-8 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Showcase</h1>

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
