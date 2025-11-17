import AddSubject from "../components/AddSubject";
import AllSubjects from "../components/AllSubjects";

function Subjects() {
  return (
    <div className="flex flex-col gap-8">
      <AddSubject />
      <AllSubjects />
    </div>
  );
}

export default Subjects;
