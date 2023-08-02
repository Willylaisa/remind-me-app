import React from 'react'
import Login from '../components/Login'
import "./Welcome.css"

const Welcome = () => {
  return (
    <div className='welcome-page'>
      <section>
        <h1>Remind Me</h1>
        <h2>All your reminders in one place</h2>
      </section>
      <section>
        <Login />
      </section>
    </div>
  )
}

export default Welcome