import { useState } from "react";
import EditItemInput from "./EditItemInput";
import { useSubjects } from "../context/SubjectsProvider";
import { useParams } from "react-router-dom";

function Task({ task, isEditingId, children, setIsEditingId }) {
  const { updateTask } = useSubjects();
  const { id: subjectId } = useParams();
  const [isChecked, setIsChecked] = useState(false);
  const [editedTaskText, setEditedTaskText] = useState(task.text);
  const isEditing = isEditingId === task.id;

  function onSubmit() {
    if (!editedTaskText.trim()) return;
    updateTask(subjectId, task.id, editedTaskText);
    setIsEditingId(null);
  }
  function onCancel() {
    setIsEditingId(null);
  }

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

      {isEditing && (
        <EditItemInput
          onChange={setEditedTaskText}
          value={editedTaskText}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      )}

      {!isEditing && (
        <label htmlFor={task.id} className="italic">
          {task.text}
        </label>
      )}
      {children}
    </div>
  );
}

export default Task;
