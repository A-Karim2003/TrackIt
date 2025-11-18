import AddSubject from "../components/AddSubject";
import AllSubjects from "../components/AllSubjects";

function SubjectsSection() {
  return (
    <div className="flex flex-col gap-8">
      <AddSubject />
      <AllSubjects />
    </div>
  );
}

export default SubjectsSection;
