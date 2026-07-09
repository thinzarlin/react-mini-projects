import { useState } from "react";
import Journal from "../components/TemperatureConverterV2/Journal";
import Customize from "../components/TemperatureConverterV2/Customize";
import Status from "../components/TemperatureConverterV2/Status";
import Temperatures from "../components/TemperatureConverterV2/Temperatures";

export default function TemperatureConverterV2() {
  const MAX_PRECISION = 7;

  const [temperature, setTemperature] = useState({
    value: 0,
    unit: "celsius",
  });
  const [precision, setPrecision] = useState(2);

  const { celsius, fahrenheit, kelvin } = convertTemperature(
    temperature.value,
    temperature.unit,
  );

  function convertTemperature(val, unit) {
    if (isNaN(val)) {
      return {
        celsius: 0,
        fahrenheit: 32,
        kelvin: 273.15,
      };
    }

    let c = 0;

    if (unit === "celsius") {
      c = val;
    } else if (unit === "fahrenheit") {
      c = +(((val - 32) * 5) / 9);
    }
    if (unit === "kelvin") {
      c = +(val - 273.15);
    }

    return {
      celsius: roundNumber(c),
      fahrenheit: roundNumber(+((c * 9) / 5 + 32)),
      kelvin: roundNumber(+(c + 273.15)),
    };
  }

  function roundNumber(num) {
    return num !== "" ? +num.toFixed(precision) : 0;
  }

  function handleTemperatureChange(e) {
    const val = parseFloat(e.target.value);
    const newTemp = isNaN(val) ? "" : val;

    setTemperature({
      value: newTemp,
      unit: e.target.id,
    });
  }

  function handlePrecisionChange(e) {
    const val = parseFloat(e.target.value);
    const newPrecision = isNaN(val)
      ? ""
      : val < 0
        ? 0
        : val > MAX_PRECISION
          ? MAX_PRECISION
          : val;

    setPrecision(newPrecision);
  }

  return (
    <>
      <h1 className="text-xl font-bold">Convert Temperature Version 2</h1>

      <Status celsius={celsius} />

      <Temperatures
        celsius={celsius}
        fahrenheit={fahrenheit}
        kelvin={kelvin}
        handleTemperatureChange={handleTemperatureChange}
      />

      <Customize
        precision={precision}
        maxPrecision={MAX_PRECISION}
        handlePrecisionChange={handlePrecisionChange}
      />

      <hr className="w-full h-px my-8 bg-gray-300 border-0" />

      <Journal />
    </>
  );
}
