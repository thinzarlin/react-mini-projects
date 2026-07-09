export default function Field({ id, val, label, symbol, handleChange }) {
  return (
    <div className="max-w-xs w-40">
      <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <div
          className={`flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 
                  ${
                    id == "kelvin" &&
                    val < 0 &&
                    " outline-red-700 has-[input:focus-within]:outline-red-800 bg-red-50"
                  }`}
        >
          <input
            id={id}
            type="number"
            value={val}
            onChange={handleChange}
            className="block min-w-0 grow py-1.5 px-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
          <div className="grid shrink-0 grid-cols-1 focus-within:relative">
            <p className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-4 pl-1 text-base text-gray-500">
              {symbol}
            </p>
          </div>
        </div>
      </div>
      <p className="text-red-500 font-semibold px-2">
        {id == "kelvin" && val < 0 && "Invalid"}
      </p>
    </div>
  );
}
