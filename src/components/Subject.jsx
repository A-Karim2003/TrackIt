import { useState } from "react";
import { useSubjects } from "../context/SubjectsProvider";
import EditItemInput from "./EditItemInput";

function Subject({
  subject,
  completedPercentage,
  setIsEditingId,
  isEditingId,
  children,
  className,
  onClick,
}) {
  const [editedTitle, setEditedTitle] = useState(subject.name);
  const { updateSubject } = useSubjects();
  const isEditing = isEditingId === subject.id;

  function onSubmit() {
    if (!editedTitle.trim()) return;

    updateSubject(subject.id, editedTitle);
    setIsEditingId(null);
  }

  function onCancel() {
    setIsEditingId(null);
  }

  return (
    <div
      className={`${className} cursor-pointer flex flex-col p-4 rounded-xl`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4 ">
        <div
          className="h-[15px] w-[15px] rounded-full"
          style={{ background: subject.themeColor }}
        ></div>
        <div onClick={(e) => e.stopPropagation()}>
          {isEditing ? (
            <EditItemInput
              onChange={setEditedTitle}
              value={editedTitle}
              onSubmit={onSubmit}
              onCancel={onCancel}
            />
          ) : (
            <h4>{subject?.name}</h4>
          )}
        </div>
        {children}
      </div>
      <div className="w-full h-2 bg-slate-200 mt-4 rounded-lg relative overflow-hidden">
        <div
          className={`absolute left-0 h-full duration-1000`}
          style={{
            width: `${completedPercentage}%`,
            background: subject.themeColor,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Subject;
