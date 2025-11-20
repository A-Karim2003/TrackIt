import { useState } from "react";
import { useSubjects } from "../context/SubjectsProvider";
import AddForm from "./AddForm";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

function AddSubject() {
  const { addSubject } = useSubjects();
  const [subjectName, setSubjectName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!subjectName) return;

    const subject = {
      id: crypto.randomUUID(),
      name: subjectName,
      tasks: [],
    };

    addSubject(subject);
  }

  return (
    <Card className="flex flex-col">
      <SectionTitle title="Add New Subject" />
      <AddForm onSubmit={handleSubmit} setValue={setSubjectName} />
    </Card>
  );
}

export default AddSubject;
