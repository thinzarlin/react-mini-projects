export default function Journal() {
  return (
    <div className="text-left w-full">
      <h3 className="font-bold text-xl">Journal</h3>
      <p>
        I built this project to practice state management using useState hook.
      </p>
      <h4 className="font-semibold">Features:</h4>
      <ul className="list-disc list-inside text-gray-800 px-3">
        <li>Characters count</li>
        <li>Characters count (no spaces)</li>
        <li>Words count</li>
        <li>Sentences count</li>
        <li>Paragraphs count</li>
        <li>Spaces count</li>
        <li>Reading time estimate</li>
        <li>Maximum characters</li>
        <li>Letter Frequency</li>
      </ul>
      <h4 className="font-semibold">React concepts used</h4>
      <ul className="list-disc list-inside text-gray-800">
        <li>
          <span className="bg-gray-200 px-2 py-1 rounded-md">useState</span> -
          Used to store text that user enters to calculate stats immediately.
        </li>
        <li>
          Props - Used to pass information from the parent component into
          counter and other setting components.
        </li>
        <li>
          Derived values - Instead of storing every data in state, I
          derived all from the current text state. This keeps the state minimal
          and ensures all metrics remain synchronized.
        </li>
      </ul>
      <h4 className="font-semibold">Challenges</h4>
      <ul className="list-disc list-inside text-gray-800">
        <li>Counting characters including and excluding spaces.</li>
        <li>Displaying letter frequency.</li>
        <li>Using regular expressions.</li>
      </ul>
    </div>
  );
}
