export default function Journal() {
  return (
    <div className="text-left">
      <h3 className="font-bold text-xl">Journal</h3>
      <p>
        I built this project to practice state management using useState hook
        and conditional rendering element attribute using ternary operator.
      </p>
      <h4 className="font-semibold">Features:</h4>
      <ul className="list-disc list-inside text-gray-800 px-3">
        <li>Increment</li>
        <li>Decrement</li>
        <li>Reset</li>
        <li>Prevent negative numbers</li>
        <li>Step size</li>
        <li>Maximun value</li>
      </ul>
      <h4 className="font-semibold">React concepts used</h4>
      <ul className="list-disc list-inside text-gray-800">
        <li>
          <span className="bg-gray-200 px-2 py-1 rounded-md">useState</span> -
          Used to store current number, step size and maximum number so that UI
          updates immediately the disable state of control buttons when the user
          increase or decrease the number.
        </li>
        <li>
          Props - Used to pass information from the parent component into
          counter and other setting components.
        </li>
      </ul>
      <h4 className="font-semibold">Challenges</h4>
      <ul className="list-disc list-inside text-gray-800">
        <li>
          Auto disabled the control buttons if the next number will become out
          of range.
        </li>
      </ul>
    </div>
  );
}
