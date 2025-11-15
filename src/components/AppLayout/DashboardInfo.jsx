function DashboardInfo({ icon, title, quantity, bgColor }) {
  return (
    <div className="w-full m-auto p-8 flex gap-4 shadow-sm bg-white rounded-xl">
      <div
        className={`h-14 w-14 flex items-center justify-center rounded-md text-customGreen bg-${bgColor}`}
      >
        {icon}
      </div>

      <div className="flex flex-col items-start justify-center">
        <small className="text-customGrey">{title}</small>
        <strong className="text-2xl">{quantity}</strong>
      </div>
    </div>
  );
}

export default DashboardInfo;
