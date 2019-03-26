export default function Title({ children, className, ...props }) {
  return (
    <h1 className={`font-bold text-3xl mt-4 mb-4 ${className}`} {...props}>
      {children}
    </h1>
  );
}
