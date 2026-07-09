export default function Customize({ precision, maxPrecision, handlePrecisionChange }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h4 className="font-semibold text-base mt-5">Customize</h4>
      <div className="flex flex-row gap-x-6 items-center px-40">
        <div className="max-w-xs">
          <label
            htmlFor="precision"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Precision
          </label>
          <input
            id="precision"
            type="number"
            min="0"
            max={maxPrecision}
            className="block min-w-0 w-40 grow py-1.5 px-4 text-base text-gray-900 rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
            value={precision}
            onChange={handlePrecisionChange}
          />
        </div>
      </div>
    </div>
  );
}
