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
        <li>Celsius ↔ Fahrenheit ↔ Kelvin</li>
        <li>Validation</li>
        <li>Empty input handling</li>
        <li>Decimal places customization</li>
        <li>Temperature Status</li>
      </ul>
      <h4 className="font-semibold">React concepts used</h4>
      <ul className="list-disc list-inside text-gray-800">
        <li>
          <span className="bg-gray-200 px-2 py-1 rounded-md">useState</span> -
          Used to store a single temperature value together with the unit the
          user entered.
        </li>
        <li>
          Conditional rendering - Used to display the temperature status and
          validation of Kelvin temperature.
        </li>
        <li>
          Updating objects in state by creating a new object and pass it to the
          state setting function.
        </li>
      </ul>
      <h4 className="font-semibold">Problems in v1</h4>
      <ul className="list-disc list-inside text-gray-800">
        <li>
          Storing all the temperature values in state which can be calculated
          directly from the one state.
        </li>
      </ul>
      <h4 className="font-semibold">Improvements</h4>
      <ul className="list-disc list-inside text-gray-800">
        <li>
          Setup only one state object to store the temperature and the unit the
          user enter. Use that state variable to calculate other units.
        </li>
        <li>
          Remove input change handlers that has the repeated logic. Instead,
          create only one handler and centralize the logic in one place. Use the
          id of the input as the identifier of which input is updated.
        </li>
        <li>
          Precision input validation ensures that no negative number is allowed
          and the number must be less than maximum percision. Also, if the user
          enter empty string, it will not automatically change into zero but
          display as empty string.
        </li>
      </ul>
      <h4 className="font-semibold">Lessons Learned</h4>
      <ul className="list-disc list-inside text-gray-800">
        <li>
          Do not use multiple states to store different variations of one piece
          of information. Instead, store in one state as a single source of
          truth.
        </li>
      </ul>
    </div>
  );
}
