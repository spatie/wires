export default function CheckboxField({ label, className = null, ...props }) {
    return (
        <label className={`flex items-center ${className}`}>
            <input type="checkbox" {...props} />
            <span className="inline-block ml-3" style={{ transform: 'translateY(0.1rem)' }}>
                {label}
            </span>
        </label>
    );
}
