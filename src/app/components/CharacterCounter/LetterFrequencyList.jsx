export default function LetterFrequencyList({ topCharArr }) {
  return (
    <div className="w-60 h-full bg-white border border-gray-200 rounded-xl shadow-xs text-sm">
      <ul role="list" className="space-y-1 divide-y divide-gray-200">
        <li className="px-4 py-3 bg-gray-50 text-gray-600 font-bold">
          Letter Frequency
        </li>
        {topCharArr.map((charObj) => (
          <li
            key={charObj.char}
            className="flex items-center justify-between py-2.5 px-5 text-gray-600"
          >
            <span>{charObj.char}</span>
            <span className="font-medium">{charObj.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
