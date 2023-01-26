import React, { useState, useEffect } from "react";
import { tasks as data } from "../Data/info";

const TaskList = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

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
