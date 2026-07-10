export default function Customize({ isCountSpace, handleIsCountSpaceChange }) {
  return (
    <div className="flex flex-row gap-4 items-center">
      <input
        id="isCountSpace"
        type="checkbox"
        checked={isCountSpace}
        onChange={handleIsCountSpaceChange}
        className="w-4 h-4 bg-gray-50 border-gray-200 border rounded-xs focus:ring-2 focus:ring-blue-100"
      />
      <label
        htmlFor="isCountSpace"
        className="select-none ms-2 text-sm font-medium text-gray-900"
      >
        Count Spaces
      </label>
    </div>
  );
}
