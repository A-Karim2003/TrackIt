import AddForm from "./AddForm";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

function AddSubject() {
  return (
    <Card className="flex flex-col">
      <SectionTitle title="Add New Subject" />
      <AddForm />
    </Card>
  );
}

export default AddSubject;
