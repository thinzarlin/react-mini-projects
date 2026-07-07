import { useState } from "react";
import Journal from "../components/TemperatureConverter/Journal";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  function handleCelsiusChange(e) {
    const val = parseFloat(e.target.value);
    const newCelsius = isNaN(val) ? 0 : val;
    const fahrenheitVal = (newCelsius * 9) / 5 + 32;
    setCelsius(newCelsius);
    setFahrenheit(+fahrenheitVal.toFixed(2));
  }

  function handleFahrenheitChange(e) {
    const val = parseFloat(e.target.value);
    const newFahrenheit = isNaN(val) ? 0 : val;
    const celsiusVal = ((newFahrenheit - 32) * 5) / 9;
    setFahrenheit(newFahrenheit);
    setCelsius(+celsiusVal.toFixed(2));
  }

  return (
    <>
      <h1 className="text-xl font-bold">Convert Temperature</h1>
      <div className="flex flex-row gap-x-6 items-center px-40">
        <div className="max-w-xs w-40">
          <label
            htmlFor="celsius"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Celsius
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <input
                id="celsius"
                type="number"
                value={celsius}
                onChange={handleCelsiusChange}
                className="block min-w-0 grow py-1.5 px-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
              <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                <p className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-4 pl-1 text-base text-gray-500">
                  °C
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-xs w-40">
          <label
            htmlFor="fahrenheit"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Fahrenheit
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <input
                id="fahrenheit"
                type="number"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                className="block min-w-0 grow py-1.5 px-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
              <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                <p className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-4 pl-1 text-base text-gray-500">
                  °F
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-full h-px my-8 bg-gray-300 border-0" />

      <Journal />
    </>
  );
}
