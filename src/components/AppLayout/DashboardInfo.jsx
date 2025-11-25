import Card from "../Card";

function DashboardInfo({ icon, title, quantity, bgColor, color }) {
  return (
    <Card>
      <div
        className={`h-14 w-14 flex items-center justify-center rounded-md ${color} ${bgColor}`}
      >
        {icon}
      </div>

      <div className="flex flex-col items-start justify-center">
        <small className="text-customGrey">{title}</small>
        <strong className="text-2xl">{quantity}</strong>
      </div>
    </Card>
  );
}

export default DashboardInfo;
