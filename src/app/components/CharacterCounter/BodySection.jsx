import Customize from "./Customize";
import LetterFrequencyList from "./LetterFrequencyList";

export default function BodySection({
  isCountSpace,
  handleIsCountSpaceChange,
  text,
  handleTextChange,
  remainingChars,
  topCharArr,
}) {
  return (
    <div className="flex flex-row gap-6 justify-around max-w-3xl w-full">
      <div className="flex flex-col gap-4 max-w-xl w-full">
        <Customize
          isCountSpace={isCountSpace}
          handleIsCountSpaceChange={handleIsCountSpaceChange}
        />

        <div className="max-w-xl w-full">
          <label
            htmlFor="text"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Text
          </label>
          <textarea
            id="text"
            rows="20"
            placeholder="Write your text here..."
            value={text}
            onChange={handleTextChange}
            className="block w-full p-3.5 shadow-xs bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 placeholder:text-gray-600"
          ></textarea>
          <span className="mt-3 text-xs inline-flex justify-end w-full text-gray-700">
            {remainingChars}
          </span>
        </div>
      </div>

      <LetterFrequencyList topCharArr={topCharArr} />
    </div>
  );
}
