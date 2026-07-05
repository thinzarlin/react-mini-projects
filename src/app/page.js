"use client";

import { useState } from "react";
import Counter from "./pages/Counter";

export default function Home() {
  const [element, setElement] = useState();

  return (
    <main className="flex flex-col flex-1 items-center font-sans justify-center w-full py-10 px-10 bg-white text-black gap-6">
      <div className="flex gap-3">
        <button
          type="button"
          className="py-2 px-4 text-sm font-medium rounded-lg bg-blue-500 border border-blue-500 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => setElement("counter")}
        >
          Counter
        </button>
      </div>

      {element == "counter" && <Counter />}
    </main>
  );
}
