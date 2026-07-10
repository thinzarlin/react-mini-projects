"use client";

import { useState } from "react";
import Counter from "./pages/Counter";
import CounterV2 from "./pages/CounterV2";
import TemperatureConverter from "./pages/TemperatureConverter";
import TemperatureConverterV2 from "./pages/TemperatureConverterV2";
import CharacterCounter from "./pages/CharacterCounter";

export default function Home() {
  const [element, setElement] = useState("placeholder");

  function handleElementChange(e) {
    setElement(e.target.value);
  }

  return (
    <main className="flex flex-col flex-1 items-center font-sans justify-center w-full py-10 px-10 bg-white text-black gap-6">
      {/* <div className="flex gap-3">
        <button
          type="button"
          className="py-2 px-4 text-sm font-medium rounded-lg bg-blue-500 border border-blue-500 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => setElement("counter")}
        >
          Counter
        </button>
        <button
          type="button"
          className="py-2 px-4 text-sm font-medium rounded-lg bg-blue-500 border border-blue-500 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => setElement("counterV2")}
        >
          Counter v2
        </button>
        <button
          type="button"
          className="py-2 px-4 text-sm font-medium rounded-lg bg-blue-500 border border-blue-500 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => setElement("tempConv")}
        >
          Temperature Converter
        </button>
        <button
          type="button"
          className="py-2 px-4 text-sm font-medium rounded-lg bg-blue-500 border border-blue-500 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => setElement("tempConvV2")}
        >
          Temperature Converter v2
        </button>
      </div> */}

      <div className="flex flex-row gap-x-6 items-center px-40">
        <div className="max-w-sm">
          <label
            htmlFor="element"
            className="block text-sm font-medium text-gray-900"
          >
            Mini Projects
          </label>
          <div className="relative">
            <select
              id="element"
              value={element}
              onChange={handleElementChange}
              className="mt-2 block w-full px-2 py-2.5 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg appearance-none pr-10 focus:ring-blue-700 focus:border-blue-700 shadow-xs placeholder:text-gray-600"
            >
              <option value="placeholder">📁 Projects</option>
              <option value="counter">🔢 Counter</option>
              <option value="counterV2">🔢 Counter v2</option>
              <option value="tempConv">🌡️ Temperature Converter</option>
              <option value="tempConvV2">🌡️ Temperature Converter v2</option>
              <option value="charCounter">🔤 Character Counter</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                data-slot="icon"
                aria-hidden="true"
                className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              >
                <path
                  d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {element == "counter" && <Counter />}
      {element == "counterV2" && <CounterV2 />}
      {element == "tempConv" && <TemperatureConverter />}
      {element == "tempConvV2" && <TemperatureConverterV2 />}
      {element == "charCounter" && <CharacterCounter />}
    </main>
  );
}
