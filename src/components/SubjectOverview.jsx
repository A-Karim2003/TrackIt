import { useNavigate } from "react-router-dom";
import { useSubjects } from "../context/SubjectsProvider";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import Subject from "./Subject";

function SubjectOverview() {
  const navigate = useNavigate();
  const { subjects } = useSubjects();
  return (
    <Card className="flex-col">
      <div className="flex items-center justify-between w-full mb-4">
        <SectionTitle title="Subject Overview" />
        <small className="text-[#5853E7] text-[16px] cursor-pointer">
          View All &rarr;
        </small>
      </div>

      <div className="flex flex-col gap-8 ">
        {subjects.map((subject) => (
          <Subject
            key={subject.id}
            subject={subject}
            className=" hover:bg-gray-100"
            onClick={() => navigate("/subjects")}
          >
            <small className="text-[14px] text-customGrey">
              {subject.tasks.length} tasks
            </small>
            <small className="text-[14px] text-customGrey ml-auto">50%</small>
          </Subject>
        ))}
      </div>
    </Card>
  );
}

export default SubjectOverview;
