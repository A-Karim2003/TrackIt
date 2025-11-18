import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <nav className=" h-10 min-h-14">
      <ul className="flex justify-start items-center gap-4 h-full">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "h-full w-22 flex justify-center items-center border-b-2 border-[#44C1B3] "
              : " h-full w-22 flex justify-center items-center"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/subjects"
          className={({ isActive }) =>
            isActive
              ? "h-full w-22 flex justify-center items-center border-b-2 border-[#44C1B3] "
              : " h-full w-22 flex justify-center items-center"
          }
        >
          Subjects
        </NavLink>

        {/* <NavLink
          to="subjectssomething"
          className={({ isActive }) =>
            isActive
              ? "h-full w-22 flex justify-center items-center border-b-2 border-[#44C1B3] "
              : " h-full w-22 flex justify-center items-center"
          }
        >
          React
        </NavLink> */}
      </ul>
    </nav>
  );
}

export default NavLinks;
