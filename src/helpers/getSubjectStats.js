function getSubjectStats(subject) {
  //* Return number of completed tasks
  const completedCount = subject.tasks.reduce(
    (acc, task) => acc + (task.completed ? 1 : 0),
    0
  );

  //* Return percentage of completed tasks
  const completedPercentage = subject.tasks.length
    ? Math.round((completedCount / subject.tasks.length) * 100)
    : 0;

  return { completedCount, completedPercentage };
}

export default getSubjectStats;
