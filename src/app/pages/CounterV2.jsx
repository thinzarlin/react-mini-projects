import { useState } from "react";
import CounterSection from "../components/CounterV2/CounterSection";
import Reset from "../components/CounterV2/Reset";
import Customize from "../components/CounterV2/Customize";
import Journal from "../components/CounterV2/Journal";

export default function CounterV2() {
  const DEFAULT_NUM = 0;
  const DEFAULT_STEP = 1;
  const DEFAULT_MAX = 10;
  const DEFAULT_MIN = 0;

  const [num, setNum] = useState(DEFAULT_NUM);
  const [step, setStep] = useState(DEFAULT_STEP);
  const [maxNum, setMaxNum] = useState(DEFAULT_MAX);

  const disableAdd = num + step > maxNum;
  const disableMinus = num - step < DEFAULT_MIN;

  function handleAddClick() {
    setNum((prev) => prev + step);
  }

  function handleMinusClick() {
    setNum((prev) => prev - step);
  }

  function handleResetClick() {
    setNum(DEFAULT_NUM);
    setStep(DEFAULT_STEP);
    setMaxNum(DEFAULT_MAX);
  }

  function handleStepChange(e) {
    const val = parseInt(e.target.value);
    const newStep = isNaN(val) || val < DEFAULT_MIN ? 0: val;
    setStep(newStep);
  }

  function handleMaxNumChange(e) {
    const val = parseInt(e.target.value);
    const newMaxNum = isNaN(val) || val < DEFAULT_MIN ? 0: val;
    setMaxNum(newMaxNum);
  }

  return (
    <>
      <h1 className="font-bold text-xl">Counter Version 2</h1>

      <CounterSection
        handleAddClick={handleAddClick}
        handleMinusClick={handleMinusClick}
        disableAdd={disableAdd}
        disableMinus={disableMinus}
        num={num}
      />

      <Reset handleResetClick={handleResetClick} />

      <Customize
        step={step}
        handleStepChange={handleStepChange}
        maxNum={maxNum}
        handleMaxNumChange={handleMaxNumChange}
        defaultMin={DEFAULT_MIN}
      />

      <hr className="w-full h-px my-8 bg-gray-300 border-0" />

      <Journal />
    </>
  );
}
