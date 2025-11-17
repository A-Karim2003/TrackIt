import { useSubjects } from "../context/SubjectsProvider";
import { RiDeleteBin5Line } from "react-icons/ri";

import Card from "./Card";
import LoadingSpinner from "./LoadingSpinner";
import SectionTitle from "./SectionTitle";
import Subject from "./Subject";

function AllSubjects() {
  const { subjects, status } = useSubjects();

  if (status === "loading") return <LoadingSpinner />;

  return (
    <Card className="flex flex-col gap-8">
      <SectionTitle title="All Subjects" />

      <div className="flex flex-col gap-8 ">
        {subjects.map((subject) => (
          <Subject key={subject.id} subject={subject}>
            <small className="text-[14px] text-customGrey">
              {`0/${subject.tasks.length}`} tasks completed
            </small>
            <RiDeleteBin5Line className="ml-auto text-customRed h-5 w-5" />
          </Subject>
        ))}
      </div>
    </Card>
  );
}

export default AllSubjects;
