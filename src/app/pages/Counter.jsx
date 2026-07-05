import { useState } from "react";
import Customize from "../components/Counter/Customize";
import Reset from "../components/Counter/Reset";
import CounterSection from "../components/Counter/CounterSection";
import Journal from "../components/Counter/Journal";

export default function Counter() {
  const [num, setNum] = useState(0);
  const [step, setStep] = useState(1);
  const [maxNum, setMaxNum] = useState(10);
  const [disableAdd, setDisableAdd] = useState(false);
  const [disableMinus, setDisableMinus] = useState(false);

  function handleAddClick() {
    check(num + step + step, step);
    setNum(num + step);
  }

  function handleMinusClick() {
    check(num, num - (step + step));
    setNum(num - step);
  }

  function check(addNum, minusNum) {
    checkAdd(addNum);
    checkMinus(minusNum);
  }

  function checkAdd(stepNum, max = maxNum) {
    setDisableAdd(stepNum > max ? true : false);
  }

  function checkMinus(stepNum) {
    setDisableMinus(stepNum < 0 ? true : false);
  }

  function handleResetClick() {
    setNum(0);
    setDisableAdd(false);
    setDisableMinus(true);
  }

  function handleStepChange(e) {
    const newStep = e.target.value != "" ? parseInt(e.target.value) : 0;
    setStep(newStep);
    check(num + newStep, num - newStep);
  }

  function handleMaxNumChange(e) {
    const newMaxNum = e.target.value != "" ? parseInt(e.target.value) : 0;
    setMaxNum(newMaxNum);
    checkAdd(num, newMaxNum);
  }

  return (
    <>
      <h1 className="font-bold text-xl">Counter</h1>

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
      />

      <hr className="w-full h-px my-8 bg-gray-300 border-0" />

      <Journal />
    </>
  );
}
