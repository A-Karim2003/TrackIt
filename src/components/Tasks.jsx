import { useState } from "react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import Task from "./Task";
import Actions from "./Actions";
import { useSubjects } from "../context/SubjectsProvider";
import { useParams } from "react-router-dom";

function Tasks({ subject }) {
  const { deleteTask } = useSubjects();
  const { id: subjectId } = useParams();
  const [isEditingId, setIsEditingId] = useState();

  return (
    <Card className="w-full flex flex-col">
      <SectionTitle title="Tasks" />
      {subject.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          isEditingId={isEditingId}
          setIsEditingId={setIsEditingId}
        >
          <Actions
            item={task}
            deleteItem={() => deleteTask(subjectId, task.id)}
            setIsEditingId={() => setIsEditingId(task.id)}
          />
        </Task>
      ))}
    </Card>
  );
}

export default Tasks;
