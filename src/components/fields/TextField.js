export default function TextField({ label, className, disabled, ...props }) {
  return (
    <div className={`${className} ${disabled ? "opacity-50" : null}`}>
      {label && <label className="block text-sm font-semibold mb-1">{label}</label>}
      <input
        type="text"
        className="h-10 p-2 border w-full"
        style={{
          boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.1)"
        }}
        disabled={disabled}
        {...props}
      />
    </div>
  );
}
