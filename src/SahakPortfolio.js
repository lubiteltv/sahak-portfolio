
import { useState } from "react";

export default function SahakPortfolioEnhanced() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen p-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}>
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Sahak Sahakian</h1>
        <p className="text-lg text-gray-500 dark:text-gray-300">Media Educator | Worldbuilding | Virtual Production | Generative AI</p>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">Video Showreel</h2>
        <div className="aspect-video">
          <img src="/video_showreel_placeholder.jpg" alt="Video Showreel" className="w-full h-auto rounded-lg shadow" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">Student Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="/F_21_OD.jpeg" alt="Wireframe" className="rounded shadow" />
          <img src="/F_21_Unreal_OD.jpg" alt="Unreal Scene" className="rounded shadow" />
          <img src="/336720921_744461660559499_5341123949806424753_n.jpeg" alt="Blender Scene" className="rounded shadow" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">Walkthrough Video</h2>
        <div className="aspect-video">
          <img src="/walkthrough_video_placeholder.jpg" alt="Walkthrough" className="w-full h-auto rounded-lg shadow" />
        </div>
      </section>
    </div>
  );
}
