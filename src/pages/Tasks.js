import React from 'react'
import Navbar from '../components/Navbar'
import CreateTask from '../components/CreateTask'
import UserTasks from '../components/UserTasks'
import { useParams } from "react-router-dom"
import "./Tasks.css"

const Tasks = () => {
  const userId = useParams()
  const id = userId.id
  return (
    <div>
        <Navbar />
        <div className='tasks-section'>
          <CreateTask 
            userId = {id}
          />
          <UserTasks />
        </div>
    </div>
  )
}

export default Tasks