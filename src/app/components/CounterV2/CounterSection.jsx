export default function CounterSection({
  handleAddClick,
  handleMinusClick,
  disableAdd,
  disableMinus,
  num,
}) {
  return (
    <div className="flex flex-row gap-x-8 items-center">
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 font-medium rounded-lg border border-gray-800 text-gray-800 hover:border-gray-900 hover:text-gray-900 disabled:opacity-50 disabled:pointer-events-none"
        onClick={handleMinusClick}
        disabled={disableMinus}
      >
        -
      </button>
      <p className="text-lg">{num}</p>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 font-medium rounded-lg border border-gray-800 text-gray-800 hover:border-gray-900 hover:text-gray-900 disabled:opacity-50 disabled:pointer-events-none"
        onClick={handleAddClick}
        disabled={disableAdd}
      >
        +
      </button>
    </div>
  );
}
