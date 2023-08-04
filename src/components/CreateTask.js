import React from 'react'


const CreateTask = ({userId}) => {
  const [dateTimeValue, setDateTimeValue] = useState('');
  const handleDateTimeChange = (event) => {
    const rawValue = event.target.value; // Value from the input (in local timezone)

    // Convert to UTC
    const utcDate = new Date(Date.parse(rawValue)).toUTCString()

    const convertedDate = new Date(utcDate)
    const timeZone = 'Africa/Nairobi'
    const convertedDateString = convertedDate.toLocaleString('en-US', { timeZone });

    setDateTimeValue(new Date(convertedDateString))
  }
  return (
    <div className='create-task'>
        <h2 style={{textAlign: "center", color: "#333"}} >Create New Task:</h2>
        <br />
        <form className='create-task-form' action={`https://13.51.193.134/create/${userId}`} method='post'>
            <input type="text" name="title" id='title' required placeholder="Enter task title..." />
            <label>Date and time to receive reminder: </label>
            <input required name="datetime" id='datetime-local' type="datetime-local" value={dateTimeValue} onChange={handleDateTimeChange}></input>
            <textarea name='description' id='description' rows={4} cols={50} placeholder="(OPTIONAL) Describe your task..."></textarea>
            <button className='create-task-btn'>Create Task</button>
        </form>
    </div>
  )
}

export default CreateTask