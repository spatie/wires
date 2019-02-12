export default function Button({ label = "Submit", color = "blue", className = null }) {
  return (
    <button
      className={`h-10 px-3 bg-${color} border-b-2 border-t-2 border-${color}-dark text-white font-semibold rounded-sm ${className}`}
      style={{ borderTopColor: "transparent" }}
    >
      {label}
    </button>
  );
}
