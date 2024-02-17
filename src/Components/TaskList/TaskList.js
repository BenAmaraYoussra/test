import React from 'react'
import Task from '../TaskCard/Task'
import { useSelector } from 'react-redux'

const TaskList = () => {
  const tasks = useSelector (state=>state.taskReducer.listTaks)
  //console.log(tasks)
  return (
    <div>
    {tasks.map((elt, key) =>(
      <Task task={elt} key={elt.id} />
    ))}
    </div>
  )
}

export default TaskList
