export default function TechPill({ label, color }) {
  return (
    <span
      className="px-3 py-1 rounded-full font-mono font-semibold"
      style={{
        fontSize: "11px",
        color,
        background: `${color}18`,
        border: `1px solid ${color}30`,
      }}
    >
      {label}
    </span>
  );
}