import AddSubject from "../components/AddSubject";
import AllSubjects from "../components/AllSubjects";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSubjects } from "../context/SubjectsProvider";

function SubjectsSection() {
  const { status } = useSubjects();

  if (status === "loading") return <LoadingSpinner />;

  return (
    <div className="flex flex-col gap-8">
      <AddSubject />
      <AllSubjects />
    </div>
  );
}

export default SubjectsSection;
