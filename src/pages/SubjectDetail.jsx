import { useParams } from "react-router-dom";
import { useSubjects } from "../context/SubjectsProvider";
import Card from "../components/Card";
import Subject from "../components/Subject";
import LoadingSpinner from "../components/LoadingSpinner";
import AddForm from "../components/AddForm";
import SectionTitle from "../components/SectionTitle";

function SubjectDetail() {
  const { id } = useParams();
  const { subjects, status } = useSubjects();

  if (status === "loading" || !subjects.length) return <LoadingSpinner />;

  const subject = subjects.find((subject) => subject.id === id);

  return (
    <div className="flex flex-col gap-8">
      <div className="mb-4">
        <small className="text-customGrey text-[16px] cursor-pointer">
          &larr; Back to Subjects
        </small>
      </div>
      <Card>
        <Subject subject={subject} className="w-full text-xl">
          <small className="text-customGrey ">
            {`1  of ${subject.tasks.length}`} tasks completed
          </small>
          <strong className=" ml-auto">50%</strong>
        </Subject>
      </Card>

      <Card className="w-full flex flex-col">
        <SectionTitle title="Add New Task" />
        <AddForm placeholder={"Add new task"} />
      </Card>

      <Card className="w-full flex flex-col">
        <SectionTitle title="Tasks" />
        //! Create a loop for interate through task and generate a checkable
        task component
      </Card>
    </div>
  );
}

export default SubjectDetail;
