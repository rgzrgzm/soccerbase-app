"use client";
import { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState("theme-white");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    }
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("themeChange"));
  };

  return (
    <div className="flex space-x-4 p-4 border border-red-300S">
      <button
        onClick={() => handleThemeChange("theme-white")}
        className="bg-white text-black px-4 py-2 border rounded"
      >
        Blanco
      </button>
      <button
        onClick={() => handleThemeChange("theme-dark-blue")}
        // onClick={() => setTheme("theme-dark-blue")}
        className="bg-blue-900 text-white px-4 py-2 border rounded"
      >
        Azul oscuro
      </button>
      <button
        onClick={() => handleThemeChange("theme-black")}
        className="bg-black text-white px-4 py-2 border rounded"
      >
        Negro
      </button>
    </div>
  );
};
