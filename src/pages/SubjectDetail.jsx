import { useNavigate, useParams } from "react-router-dom";
import { useSubjects } from "../context/SubjectsProvider";
import Card from "../components/Card";
import Subject from "../components/Subject";
import LoadingSpinner from "../components/LoadingSpinner";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";
import getSubjectStats from "../helpers/getSubjectStats";

function SubjectDetail() {
  const { id } = useParams();
  const { subjects, status } = useSubjects();
  const navigate = useNavigate();

  if (status === "loading" || !subjects.length) return <LoadingSpinner />;

  //* Gets the current subject
  const subject = subjects.find((subject) => subject.id === id);

  const { completedCount, completedPercentage } = getSubjectStats(subject);

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
        <Subject
          subject={subject}
          className="w-full text-xl"
          completedPercentage={completedPercentage}
        >
          <small className="text-customGrey ">
            {`${completedCount}  of ${subject.tasks.length}`} tasks completed
          </small>
          <strong className=" ml-auto">{completedPercentage}%</strong>
        </Subject>
      </Card>

      <AddTask />
      <Tasks subject={subject} />
    </div>
  );
}

export default SubjectDetail;
