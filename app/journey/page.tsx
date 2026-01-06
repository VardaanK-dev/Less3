"use client";
import { useState } from "react";

export default function JourneyPage() {
  const [openMonth, setOpenMonth] = useState<string | null>(null);

  const months = [
    {
      name: "December 2025",
      color: "bg-red-600 hover:bg-red-700",
      members: [
        {
          name: "Hemendra",
          color: "text-blue-400",
          img: "/assets/A.P.J ABDUL KALAM.png",
          desc: "Hemendra focused about APJ Abdul Kalam and how he helped locally, nationally and globally.",
        },
        {
          name: "Jastina",
          color: "text-green-400",
          img: "/assets/memberB_presentation.png",
          desc: "Jastina focused on Mark Zuckerberg and his local, national and global impacts.",
        },
        {
          name: "Vardaan",
          color: "text-purple-400",
          img: "/assets/RatanTata.jpg",
          desc: "Vardaan focused on Ratan Tata and how his ideas helped people locally, nationally and globally.",
        },
      ],
    },
    {
      name: "January 2026",
      color: "bg-yellow-600 hover:bg-yellow-700",
      members: [
        {
          name: "Hemendra",
          color: "text-blue-400",
          img: "/assets/placeholder",
          desc: "Placeholder",
        },
        {
          name: "Jastina",
          color: "text-green-400",
          img: "/assets/placeholder",
          desc: "Placeholder",
        },
        {
          name: "Vardaan",
          color: "text-purple-400",
          img: "/assets/placeholder",
          desc: "Placeholder",
        },
      ],
    },
  ];

  return (
    <main className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Our Journey</h1>

      {months.map((month) => (
        <div key={month.name} className="mb-6">
          {/* Outer rectangle */}
          <button
            onClick={() =>
              setOpenMonth(openMonth === month.name ? null : month.name)
            }
            className={`w-full text-left px-6 py-3 text-white font-semibold rounded shadow-lg transition ${month.color}`}
          >
            {month.name}
          </button>

          {/* Dropdown content */}
          {openMonth === month.name && (
            <div className="mt-4 space-y-4">
              {month.members.map((m) => (
                <div key={m.name} className="bg-gray-800 p-4 rounded shadow">
                  <h2 className={`text-lg font-bold ${m.color}`}>{m.name}</h2>
                  <img
                    src={m.img}
                    alt={`${m.name} presentation`}
                    className="w-full max-w-md rounded mb-2"
                  />
                  <p className="text-gray-300">{m.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
