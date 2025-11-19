import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

function Task({ taskName, id }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={`cursor-pointer flex p-4 rounded-xl border border-slate-300 items-center justify-center gap-4`}
    >
      <input
        type="checkbox"
        id={id}
        className="w-5 h-5 accent-green-200"
        onChange={(e) => setIsChecked(e.target.checked)}
        checked={isChecked}
      />

      <label htmlFor={id} className="italic">
        {taskName}
      </label>

      <RiDeleteBin5Line className="ml-auto text-customRed h-5 w-5 cursor-pointer hover:scale-120 transition duration-300" />
    </div>
  );
}

export default Task;
