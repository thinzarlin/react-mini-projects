export default function Journal() {
  return (
    <div className="text-left">
      <h3 className="font-bold text-xl">Journal</h3>
      <p>
        I built this project to practice state management using useState hook
        and controlled inputs.
      </p>
      <h4 className="font-semibold">Features:</h4>
      <ul className="list-disc list-inside text-gray-800 px-3">
        <li>Celsius ↔ Fahrenheit</li>
        <li>Validation</li>
        <li>Empty input handling</li>
      </ul>
      <h4 className="font-semibold">React concepts used</h4>
      <ul className="list-disc list-inside text-gray-800">
        <li>
          <span className="bg-gray-200 px-2 py-1 rounded-md">useState</span> -
          Used to store both temperature so that user can enter from any
          temperature field and auto calculates the other temperature.
        </li>
      </ul>
    </div>
  );
}
