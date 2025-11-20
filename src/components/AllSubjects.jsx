import { RiDeleteBin5Line } from "react-icons/ri";

import Card from "./Card";
import SectionTitle from "./SectionTitle";
import Subject from "./Subject";
import { useNavigate } from "react-router-dom";
import { useSubjects } from "../context/SubjectsProvider";

function AllSubjects() {
  const navigate = useNavigate();
  const { subjects, deleteSubject } = useSubjects();

  return (
    <Card className="flex flex-col gap-8">
      <SectionTitle title="All Subjects" />

      <div className="flex flex-col gap-8 ">
        {subjects.map((subject) => (
          <Subject
            key={subject.id}
            subject={subject}
            className="border border-slate-300 "
            onClick={() => navigate(`/subjects/${subject.id}`)}
          >
            <small className="text-[14px] text-customGrey">
              {`0/${subject.tasks.length}`} tasks completed
            </small>
            <RiDeleteBin5Line
              className="ml-auto text-customRed h-5 w-5 cursor-pointer hover:scale-120 transition duration-300"
              onClick={(e) => {
                e.stopPropagation();
                deleteSubject(subject.id);
              }}
            />
          </Subject>
        ))}
      </div>
    </Card>
  );
}

export default AllSubjects;
