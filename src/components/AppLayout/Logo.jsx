function Logo() {
  return (
    <div className="h-20 flex items-center gap-2 px-12">
      <img src="/logo.png" alt="Logo" className="h-full" />
      <div className="flex flex-col justify-evenly h-[66%]">
        <strong className="text-sm leading-none tracking-wider">
          Learning Tracker
        </strong>
        <small className="text-xs italic text-gray-600 leading-none tracking-wider">
          Organise your study journey
        </small>
      </div>
    </div>
  );
}

export default Logo;
