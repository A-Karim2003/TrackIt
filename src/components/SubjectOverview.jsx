import { useSubjects } from "../context/SubjectsProvider";
import Card from "./Card";
import SubjectProgress from "./SubjectProgress";

function SubjectOverview() {
  const { subjects } = useSubjects();
  return (
    <Card className="flex-col">
      <div className="flex items-center justify-between w-full mb-4">
        <h3 className="font-bold text-xl tracking-[1px]">Subject Overview</h3>
        <small className="text-[#5853E7] text-[16px] cursor-pointer">
          View All &rarr;
        </small>
      </div>

      <div className="flex flex-col gap-8 ">
        {subjects.map((subject) => {
          return (
            <SubjectProgress
              key={subject.id}
              subjectName={subject.name}
              taskQuantity={subject.tasks.length}
            />
          );
        })}
      </div>
    </Card>
  );
}

export default SubjectOverview;
