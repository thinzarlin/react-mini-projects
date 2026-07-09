import Field from "./Field";

export default function Temperatures({
  celsius,
  fahrenheit,
  kelvin,
  handleTemperatureChange,
}) {
  return (
    <div className="flex flex-row gap-x-6 items-center px-40">
      <Field
        id="celsius"
        val={celsius}
        label="Celsius"
        symbol="°C"
        handleChange={handleTemperatureChange}
      />

      <Field
        id="fahrenheit"
        val={fahrenheit}
        label="Fahrenheit"
        symbol="°F"
        handleChange={handleTemperatureChange}
      />

      <Field
        id="kelvin"
        val={kelvin}
        label="Kelvin"
        symbol="K"
        handleChange={handleTemperatureChange}
      />
    </div>
  );
}
