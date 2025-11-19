import { useNavigate, useParams } from "react-router-dom";
import { useSubjects } from "../context/SubjectsProvider";
import Card from "../components/Card";
import Subject from "../components/Subject";
import LoadingSpinner from "../components/LoadingSpinner";
import AddForm from "../components/AddForm";
import SectionTitle from "../components/SectionTitle";
import Task from "../components/Task";

function SubjectDetail() {
  const { id } = useParams();
  const { subjects, status } = useSubjects();
  const navigate = useNavigate();

  if (status === "loading" || !subjects.length) return <LoadingSpinner />;

  //* Gets the current subject
  const subject = subjects.find((subject) => subject.id === id);

  return (
    <div className="flex flex-col gap-8">
      <div className="mb-4">
        <small
          className="text-customGrey text-[16px] cursor-pointer"
          onClick={() => navigate("/subjects")}
        >
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
        {subject.tasks.map((task) => {
          return <Task key={task.id} id={task.id} taskName={task.text} />;
        })}
      </Card>
    </div>
  );
}

export default SubjectDetail;
