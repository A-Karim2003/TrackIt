import { useState } from "react";
import { useSubjects } from "../context/SubjectsProvider";
import { useParams } from "react-router-dom";
import Actions from "./Actions";

function Task({ task }) {
  const [isChecked, setIsChecked] = useState(false);
  const { deleteTask } = useSubjects();
  const { id: subjectId } = useParams();

  return (
    <div
      className={`cursor-pointer flex p-4 rounded-xl border border-slate-300 items-center justify-center gap-4`}
    >
      <input
        type="checkbox"
        id={task.id}
        className="w-5 h-5 accent-green-200"
        onChange={(e) => setIsChecked(e.target.checked)}
        checked={isChecked}
      />
      <label htmlFor={task.id} className="italic">
        {task.text}
      </label>
      <Actions
        item={task}
        deleteItem={() => deleteTask(subjectId, task.id)}
        setIsEditingId={""}
      />
    </div>
  );
}

export default Task;
