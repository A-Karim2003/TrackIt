import DashboardInfo from "../components/AppLayout/DashboardInfo";
import { PiBookOpenLight } from "react-icons/pi";
import SubjectOverview from "../components/AppLayout/SubjectOverview";

function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      <DashboardInfo
        icon={<PiBookOpenLight className="h-10 w-10" />}
        title={"Total Subjects"}
        quantity={3}
        bgColor={"bgCustomGreen"}
      />
      <DashboardInfo
        icon={<PiBookOpenLight className="h-10 w-10" />}
        title={"Completed Tasks"}
        quantity={`2/5`}
        bgColor={"bgCustomOrange"}
      />
      <DashboardInfo
        icon={<PiBookOpenLight className="h-10 w-10" />}
        title={"Overall Progress"}
        quantity={`40%`}
        bgColor={"bgCustomRed"}
      />

      <SubjectOverview />
    </div>
  );
}

export default Dashboard;
