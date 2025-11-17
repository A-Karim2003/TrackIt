import { useNavigate } from "react-router-dom";

function SubjectProgress({ subjectName, taskQuantity }) {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col hover:bg-gray-100 p-4 rounded-xl cursor-pointer"
      onClick={() => navigate("subjects")}
    >
      <div className="flex items-center gap-4 j">
        <div className="h-[15px] w-[15px] bg-customGreen rounded-full"></div>
        <h4>{subjectName}</h4>
        <small className="text-[14px] text-customGrey">
          {taskQuantity} tasks
        </small>
        <small className="text-[14px] text-customGrey ml-auto">50%</small>
      </div>
      <div className="w-full h-2 bg-slate-200 mt-4 rounded-lg relative overflow-hidden">
        <div className="absolute left-0 bg-customGreen h-full w-[50%]"></div>
      </div>
    </div>
  );
}

export default SubjectProgress;
