import SubjectProgress from "./SubjectProgress";

function SubjectOverview() {
  return (
    <section className="w-full m-auto p-8 flex flex-col gap-4 shadow-sm bg-white rounded-xl">
      <div className="flex items-center justify-between w-full">
        <h3 className="font-bold text-xl tracking-[1px]">Subject Overview</h3>
        <small className="text-[#5853E7] text-[16px] cursor-pointer">
          View All &rarr;
        </small>
      </div>

      <div className="flex flex-col gap-12">
        <SubjectProgress subjectName={"React"} taskQuantity={2} />
        <SubjectProgress subjectName={"JavaScript"} taskQuantity={4} />
        <SubjectProgress subjectName={"Data Science"} taskQuantity={1} />
      </div>
    </section>
  );
}

export default SubjectOverview;
