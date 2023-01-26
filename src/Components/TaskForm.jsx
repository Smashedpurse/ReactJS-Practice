const TaskForm = () => {
  return (
        <form action="">
             <input type="text" placeholder="Escribe tu tarea" onChange={(e)=>{
                console.log(e.target.value)
             }}/>
             <button>Envia tu tarea</button>
        </form>
  )
}

export default TaskForm