export default function StatsBadge({ label, val, color }) {
  const colorClass = `bg-${color}-50 text-${color}-900 ring-${color}-200`;

  return (
    <>
      <span
        className={`inline-flex items-center px-2 py-1 ring-1 ring-inset text-sm font-medium rounded-lg ${colorClass}`}
      >
        {label}: <span className="mx-1">{val}</span>
      </span>
    </>
  );
}
