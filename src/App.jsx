import TaskList from './Components/TaskList'
import TaskForm from './Components/TaskForm'

const App = () => {
  <h1>Lista de tareas</h1>
  return (
    <>
      <TaskForm/>
      <TaskList/>
    </>
  )
}

export default App