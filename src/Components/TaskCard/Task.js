import { Button } from 'react-bootstrap'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask } from '../../JS/Actions/actions'
import './task.css'
import EditTask from '../EditTask/EditTask'
import {Row, Col} from 'react-bootstrap'

const Task = ({ task }) => {
  const dispatch = useDispatch()
  return (
    <div 
    //style={{ display: 'flex', justifyContent: 'space-between' }}>

>
    <Row>
    <Col md={6}>
    <h3 className={task.isDone ? 'done' : 'undone'}>{task.caption}</h3>
    </Col>

    <Col md={2}>
      <EditTask task={task} />
    </Col>
    <Col md={2}>
  {' '}
  <Button
  variant="danger"
  onClick={()=> dispatch(deleteTask(task.id))}
  >
    Delete
  </Button>
  </Col>
  <Col md={2}>
  <Button onClick={()=>(doneTask(task.id))}>
    {task.isDone ? 'UnDone' : 'Done'}
  </Button>
  </Col>
</Row>
</div>
  )
}
export default Task
