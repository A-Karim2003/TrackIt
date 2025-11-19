import { useSubjects } from "../context/SubjectsProvider";
import AddForm from "./AddForm";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

function AddSubject() {
  const { addSubject } = useSubjects();

  function handleSubmit() {
    const subject = {
      id: "1",
      name: "React",
      tasks: [
        {
          id: 1,
          text: "Learn JSX basics",
          completed: false,
        },
        {
          id: 2,
          text: "Practice useState",
          completed: false,
        },
        {
          id: 3,
          text: "Understand useEffect dependencies",
          completed: false,
        },
        {
          id: 4,
          text: "Build a custom hook",
          completed: false,
        },
        {
          id: 5,
          text: "Learn React Router",
          completed: false,
        },
        {
          id: 6,
          text: "Memoize components using React.memo",
          completed: false,
        },
      ],
    };

    addSubject(subject);
  }

  return (
    <Card className="flex flex-col">
      <SectionTitle title="Add New Subject" />
      <AddForm onSubmit={handleSubmit} />
    </Card>
  );
}

export default AddSubject;
