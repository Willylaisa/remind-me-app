import React, { useEffect, useState } from 'react'
import IndividualTask from './IndividualTask'
import axios from 'axios'
import { useParams } from "react-router-dom"

const UserTasks = () => {
  const userId = useParams()
  const id = userId.id
  const [tasks, setTasks] = useState([])
  const [userName, setUserName] = useState("")
  useEffect(() => {
    fetchUserName()
    fetchTasks()
  }, [])
  
  const fetchUserName = async () => {
    try {
      const response = await axios.get(`http://16.171.196.4:443/users/${id}`)
      setUserName(response.data.username)
    } catch (error) {
      console.log(error);
    }
  }
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://16.171.196.4:443/tasks")
      setTasks(response.data)
    } catch (error) {
      console.log( error);
    }
  }

  
  return (
    <div className='user-tasks'>
      <h2 style={{textAlign: "center", color: '#02a802', fontFamily: 'sans-serif'}} >{userName}</h2>
      
        {tasks.map((task) =>  (
            <div>
              {task.name === userName ?<IndividualTask
              title={`${task.title}`}
              description={`${task.description}`}
            /> : ""}
            </div>
            )       
        )}
    </div>
  )
}

export default UserTasks