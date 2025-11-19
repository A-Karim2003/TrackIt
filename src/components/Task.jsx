import { RiDeleteBin5Line } from "react-icons/ri";

function Task({ taskName, id }) {
  return (
    <div
      className={`cursor-pointer flex p-4 rounded-xl border border-slate-300 items-center justify-center gap-4`}
    >
      <input type="checkbox" id={id} class="w-5 h-5 accent-green-200" />

      <label htmlFor={id} className="italic">
        {taskName}
      </label>

      <RiDeleteBin5Line className="ml-auto text-customRed h-5 w-5 cursor-pointer hover:scale-120 transition duration-300" />
    </div>
  );
}

export default Task;
