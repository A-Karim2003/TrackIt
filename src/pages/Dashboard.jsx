import DashboardInfo from "../components/AppLayout/DashboardInfo";
import { PiBookOpenLight } from "react-icons/pi";
import { LuCircleCheckBig } from "react-icons/lu";
import { MdTrendingUp } from "react-icons/md";

import { useSubjects } from "../context/SubjectsProvider";
import LoadingSpinner from "../components/LoadingSpinner";
import { useMemo } from "react";
import SubjectOverview from "../components/SubjectOverview";

function Dashboard() {
  const { subjects, status } = useSubjects();

  //* Groups all tasks
  const allTasks = useMemo(() => {
    return subjects.reduce((acc, subject) => {
      return [...acc, ...subject.tasks];
    }, []);
  }, [subjects]);

  if (status === "loading") return <LoadingSpinner />;

  return (
    <div className="flex flex-col gap-8">
      <DashboardInfo
        icon={<PiBookOpenLight className="h-10 w-10" />}
        title={"Total Subjects"}
        quantity={subjects.length}
        bgColor={"bg-bgCustomGreen"}
      />
      <DashboardInfo
        icon={<LuCircleCheckBig className="h-10 w-10" />}
        title={"Completed Tasks"}
        quantity={`2/${allTasks.length}`}
        bgColor={"bg-bgCustomOrange"}
      />
      <DashboardInfo
        icon={<MdTrendingUp className="h-10 w-10" />}
        title={"Overall Progress"}
        quantity={`40%`}
        bgColor={"bg-bgCustomRed"}
      />

      <SubjectOverview />
    </div>
  );
}

export default Dashboard;
