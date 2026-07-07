export default function Customize({
  step,
  handleStepChange,
  maxNum,
  handleMaxNumChange,
  defaultMin,
}) {
  return (
    <>
      <h4 className="font-semibold mt-8">Customize</h4>
      <div className="flex flex-row gap-x-6 items-center px-40">
        <div className="max-w-xs w-40">
          <label
            htmlFor="step"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Step
          </label>
          <input
            id="step"
            type="number"
            min={defaultMin}
            className="py-2.5 px-4 rounded-lg block w-full bg-white border border-gray-400 text-gray-800 focus:border-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
            value={step}
            onChange={handleStepChange}
          />
        </div>
        <div className="max-w-xs w-40">
          <label
            htmlFor="maxNum"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Maximum Number
          </label>
          <input
            id="maxNum"
            type="number"
            min={defaultMin}
            className="py-2.5 px-4 rounded-lg block w-full bg-white border border-gray-400 text-gray-800 focus:border-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
            value={maxNum}
            onChange={handleMaxNumChange}
          />
        </div>
      </div>
    </>
  );
}
