import Card from "./Card";
import SectionTitle from "./SectionTitle";
import Subject from "./Subject";
import { useNavigate } from "react-router-dom";
import { useSubjects } from "../context/SubjectsProvider";
import { useState } from "react";
import Actions from "./Actions";

function AllSubjects() {
  const navigate = useNavigate();
  const { subjects, deleteSubject } = useSubjects();
  const [isEditingId, setIsEditingId] = useState();
  console.log(isEditingId);

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
            isEditingId={isEditingId}
            setIsEditingId={setIsEditingId}
          >
            <small className="text-[14px] text-customGrey">
              {`0/${subject.tasks.length}`} tasks completed
            </small>
            <Actions
              subject={subject}
              deleteSubject={deleteSubject}
              setIsEditingId={setIsEditingId}
            />
          </Subject>
        ))}
      </div>
    </Card>
  );
}

export default AllSubjects;
