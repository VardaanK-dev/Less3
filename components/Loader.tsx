"use client";

import { useEffect, useState } from "react";
import "./loader.css";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Fully hide after fade animation (0.5s)
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
