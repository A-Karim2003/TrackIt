import { RiDeleteBin5Line } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";

function Actions({ setIsEditingId, deleteItem }) {
  return (
    <div className="flex gap-4 ml-auto">
      <RiEdit2Line
        className=" text-customOrange h-5 w-5 cursor-pointer hover:scale-120 transition duration-300"
        onClick={(e) => {
          e.stopPropagation();
          setIsEditingId();
        }}
      />
      <RiDeleteBin5Line
        className=" text-customRed h-5 w-5 cursor-pointer hover:scale-120 transition duration-300"
        onClick={(e) => {
          e.stopPropagation();
          deleteItem();
        }}
      />
    </div>
  );
}

export default Actions;
