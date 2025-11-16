function Card({ children, className }) {
  return (
    <div
      className={`${className} w-full m-auto p-8 flex gap-4 shadow-sm bg-white rounded-xl `}
    >
      {children}
    </div>
  );
}

export default Card;
