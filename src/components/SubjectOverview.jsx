import { useNavigate } from "react-router-dom";
import { useSubjects } from "../context/SubjectsProvider";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import Subject from "./Subject";
import getSubjectStats from "../helpers/getSubjectStats";

function SubjectOverview() {
  const navigate = useNavigate();
  const { subjects } = useSubjects();

  return (
    <Card className="flex-col">
      <div className="flex items-center justify-between w-full mb-4">
        <SectionTitle title="Subject Overview" />
        <small
          className="text-[#5853E7] text-[16px] cursor-pointer"
          onClick={() => navigate("/subjects")}
        >
          View All &rarr;
        </small>
      </div>

      <div className="flex flex-col gap-8 ">
        {subjects.map((subject, i) => {
          const { completedPercentage } = getSubjectStats(subject);
          return (
            i < 3 && (
              <Subject
                key={subject.id}
                subject={subject}
                completedPercentage={completedPercentage}
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate(`/subjects/${subject.id}`)}
              >
                <small className="text-[14px] text-customGrey">
                  {subject.tasks.length} tasks
                </small>
                <small className="text-[14px] text-customGrey ml-auto">
                  {completedPercentage}%
                </small>
              </Subject>
            )
          );
        })}
      </div>
    </Card>
  );
}

export default SubjectOverview;
