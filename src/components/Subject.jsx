import { useState } from "react";

function Subject({
  subject,
  setIsEditingId,
  isEditingId,
  children,
  className,
  onClick,
}) {
  const isEditing = isEditingId === subject.id;

  const [editedTitle, setEditedTitle] = useState(subject.name);
  return (
    <div
      className={`${className} cursor-pointer flex flex-col p-4 rounded-xl`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4 j">
        <div className="h-[15px] w-[15px] bg-customGreen rounded-full"></div>
        <div onClick={(e) => e.stopPropagation()}>
          {isEditing ? (
            <input
              className="border border-customOrange rounded-xl py-1 px-2 outline-0"
              type="text"
              value={editedTitle}
              autoFocus
              onBlur={() => setIsEditingId(null)}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          ) : (
            <h4>{subject?.name}</h4>
          )}
        </div>

        {children}
      </div>
      <div className="w-full h-2 bg-slate-200 mt-4 rounded-lg relative overflow-hidden">
        <div className="absolute left-0 bg-customGreen h-full w-[50%]"></div>
      </div>
    </div>
  );
}

export default Subject;
