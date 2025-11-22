import Card from "./Card";
import SectionTitle from "./SectionTitle";
import Task from "./Task";

function Tasks({ subject }) {
  return (
    <Card className="w-full flex flex-col">
      <SectionTitle title="Tasks" />
      {subject.tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </Card>
  );
}

export default Tasks;
