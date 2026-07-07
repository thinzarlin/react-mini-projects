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
          Used to store current number, step size and maximum number. When these
          values change, React re-renders the component and updates the
          interface automatically.
        </li>
        <li>
          Props - Used to pass information from the parent component into the
          child components. This keeps state centralized in the parent component
          and allows the child components to trigger updates.
        </li>
      </ul>
      <h4 className="font-semibold">Challenges</h4>
      <ul className="list-disc list-inside text-gray-800">
        <li>
          Auto disabled the control buttons if the next number will become out
          of range.
        </li>
      </ul>
      <h4 className="font-semibold">Problems in v1</h4>
      <ul className="list-disc list-inside text-gray-800">
        <li>
          Storing the button disabled values in state which can be calculated
          directly from the other existing states.
        </li>
        <li>
          The step size and maximum value can be negative numbers as there is no
          validation for this. This can cause the counter to go negative even if
          the button disabled values are calculated correctly.
        </li>
        <li>
          When the maximum value is set to zero and click reset button, the
          control buttons become disabled because the maximum value is not reset
          to default value and so the user might need to change the maximum
          value even if she click the reset button.
        </li>
      </ul>
      <h4 className="font-semibold">Improvements</h4>
      <ul className="list-disc list-inside text-gray-800">
        <li>
          Use the existing states to calculate the button disabled values and
          store them in variables as React calculates them automatically every
          render.
        </li>
        <li>
          Remove the check functions as the button disabled values are directly
          calculated from the existing states.
        </li>
        <li>
          Change the way to set the number from direct update to functional
          update to get the latest value of the number. Because direct update
          uses the number value from the current render which may not be the
          latest value if the number is updated multiple times in a single
          render. Although there are no multiple updates in this project, but it
          is a good practice to use functional update when the new state depends
          directly on the previous state.
        </li>
        <li>
          Add validation for the step size and maximum value to prevent negative
          values.
        </li>
        <li>
          Reset the step size and maximum value to their default values so that
          the user does not have to change the values after reset.
        </li>
      </ul>
      <h4 className="font-semibold">Lessons Learned</h4>
      <ul className="list-disc list-inside text-gray-800">
        <li>
          Not every value belongs in state. If a value can be calculated from
          existing states, it should be derived instead of stored.
        </li>
        <li>
          Use the functional state update whenever the next state depends on the
          previous one.
        </li>
      </ul>
    </div>
  );
}
