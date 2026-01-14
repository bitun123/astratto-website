function FallWord({ children, delay = 0 }) {
  return (
    <span
      className="fall-word"
      style={{
        transitionDelay: `${delay}ms`,
        "--r": `${Math.random() * 60 - 30}deg`,
      }}
    >
      {children}
    </span>
  );
}
export default FallWord