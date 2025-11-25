import { useState } from "react";
import { useSubjects } from "../context/SubjectsProvider";
import AddForm from "./AddForm";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import getRandomColor from "../helpers/getRandomColor";

function AddSubject() {
  const { addSubject } = useSubjects();
  const randomColor = getRandomColor();
  const [subjectName, setSubjectName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!subjectName.trim()) return;

    const subject = {
      id: crypto.randomUUID(),
      name: subjectName,
      themeColor: randomColor,
      tasks: [],
    };

    addSubject(subject);
    setSubjectName("");
  }

  return (
    <Card className="flex flex-col">
      <SectionTitle title="Add New Subject" />
      <AddForm
        onSubmit={handleSubmit}
        setValue={setSubjectName}
        value={subjectName}
      />
    </Card>
  );
}

export default AddSubject;
