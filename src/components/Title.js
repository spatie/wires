export default function Title({ children, className }) {
  return <h1 className={`font-bold text-3xl mt-4 mb-4 ${className}`}>{children}</h1>;
}
