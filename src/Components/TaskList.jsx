const TaskList = ({tasks}) => {
    if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <h1>{task.title}</h1>
            <h2>{task.description}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
