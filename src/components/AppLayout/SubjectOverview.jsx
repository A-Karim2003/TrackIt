import { useSubjects } from "../../context/SubjectsProvider";
import SubjectProgress from "./SubjectProgress";

function SubjectOverview() {
  const { subjects } = useSubjects();

  return (
    <section className="w-full m-auto p-8 flex flex-col gap-4 shadow-sm bg-white rounded-xl">
      <div className="flex items-center justify-between w-full mb-4">
        <h3 className="font-bold text-xl tracking-[1px]">Subject Overview</h3>
        <small className="text-[#5853E7] text-[16px] cursor-pointer">
          View All &rarr;
        </small>
      </div>

      <div className="flex flex-col gap-12 px-4">
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
    </section>
  );
}

export default SubjectOverview;
