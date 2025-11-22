import { useState } from "react";

function Task({ task, children }) {
  const [isChecked, setIsChecked] = useState(false);

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
      {children}
    </div>
  );
}

export default Task;
