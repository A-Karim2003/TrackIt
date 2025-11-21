import { useState } from "react";
import AddForm from "./AddForm";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import { useSubjects } from "../context/SubjectsProvider";
import { useParams } from "react-router-dom";

function AddTask() {
  const { createTask } = useSubjects();
  const { id } = useParams();
  console.log();

  const [taskName, setTaskName] = useState("");

  function handleAddTask(e) {
    e.preventDefault();
    if (!taskName.trim()) return;

    const newTask = {
      id: crypto.randomUUID(),
      text: taskName,
      completed: false,
    };

    createTask(id, newTask);
    setTaskName("");
  }

  return (
    <Card className="w-full flex flex-col">
      <SectionTitle title="Add New Task" />
      <AddForm
        placeholder={"Add new task"}
        setValue={setTaskName}
        value={taskName}
        onSubmit={handleAddTask}
      />
    </Card>
  );
}

export default AddTask;
