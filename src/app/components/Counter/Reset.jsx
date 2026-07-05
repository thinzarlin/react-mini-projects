export default function Reset({handleResetClick}) {
  return (
    <>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-gray-800 border border-transparent text-white hover:bg-gray-700"
        onClick={handleResetClick}
      >
        Reset
      </button>
    </>
  );
}
