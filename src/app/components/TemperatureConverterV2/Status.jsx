export default function Status({ celsius }) {
  return (
    <>
      <h4 className="font-semibold text-lg mt-1">
        {celsius <= 0 && "🥶 Freezing"}
        {celsius > 0 && celsius <= 10 && "❄️ Cold"}
        {celsius > 10 && celsius <= 19 && "😎 Cool"}
        {celsius > 19 && celsius <= 24 && "😊 Comfortable"}
        {celsius > 24 && celsius <= 29 && "☀️ Warm"}
        {celsius > 29 && celsius <= 34 && "🔥 Hot"}
        {celsius > 34 && "🥵 Sweltering"}
      </h4>
    </>
  );
}
