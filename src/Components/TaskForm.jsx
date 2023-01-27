import { useState,useEffect } from "react"

const TaskForm = ({createTask}) => {

    const [title, setTitle] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        createTask(title)
    }

  return (
        <form onSubmit={handleSubmit} >
             <input type="text" placeholder="Escribe tu tarea" onChange={(e)=>{setTitle(e.target.value)}}/>
             <button >Envia tu tarea</button>
        </form>
  )
}

export default TaskForm