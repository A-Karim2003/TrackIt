import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSubjects } from "../context/SubjectsProvider";
import { useParams } from "react-router-dom";

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

      <RiDeleteBin5Line
        className="ml-auto text-customRed h-5 w-5 cursor-pointer hover:scale-120 transition duration-300"
        onClick={() => deleteTask(subjectId, task.id)}
      />
    </div>
  );
}

export default Task;
