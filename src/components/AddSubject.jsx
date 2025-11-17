import AddSubjectForm from "./AddSubjectForm";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

function AddSubject() {
  return (
    <Card className="flex flex-col">
      <SectionTitle title="Add New Subject" />
      <AddSubjectForm />
    </Card>
  );
}

export default AddSubject;
