import React from 'react'


const CreateTask = ({userId}) => {
  return (
    <div className='create-task'>
        <h2 style={{textAlign: "center", color: "#333"}} >Create New Task:</h2>
        <br />
        <form className='create-task-form' action={`https://13.51.193.134/create/${userId}`} method='post'>
            <input type="text" name="title" id='title' required placeholder="Enter task title..." />
            <label>Date and time to receive reminder: </label>
            <input required name="datetime" id='datetime-local' type="datetime"></input>
            <textarea name='description' id='description' rows={4} cols={50} placeholder="(OPTIONAL) Describe your task..."></textarea>
            <button className='create-task-btn'>Create Task</button>
        </form>
    </div>
  )
}

export default CreateTask