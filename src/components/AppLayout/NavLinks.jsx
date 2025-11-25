import { NavLink, useLocation, useParams } from "react-router-dom";
import { useSubjects } from "../../context/SubjectsProvider";

const activeClass =
  "h-full w-22 flex justify-center items-center border-b-2 border-[#44C1B3] cursor-pointer";
const defaultClass = "h-full w-22 flex justify-center items-center";

function NavLinks() {
  const { id: subjectId } = useParams();
  const { subjects } = useSubjects();

  const location = useLocation();
  const isSubjectPage = location.pathname === "/subjects";

  const subject = subjects.find((subject) => subject.id === subjectId);

  return (
    <nav className=" h-10 min-h-14">
      <ul className="flex justify-start items-center gap-4 h-full">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? activeClass : defaultClass)}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/subjects"
          className={isSubjectPage ? activeClass : defaultClass}
        >
          Subjects
        </NavLink>

        <h3 className={subjectId ? activeClass : defaultClass}>
          {subject?.name}
        </h3>
      </ul>
    </nav>
  );
}

export default NavLinks;
