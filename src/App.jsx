import TaskList from './Components/TaskList'
import TaskForm from './Components/TaskForm'
import { tasks as data } from './Data/info'
import { useState,useEffect } from 'react'
import {Greet} from "./Components/Grett" 

const App = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle){
    setTasks([...tasks,{
      title:taskTitle,
      id:tasks.length,
      description:"Mi cuarta tarea"
    }])
  }  

  return (
    <>
      <Greet/>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App