import React from 'react'
import Signup from '../components/Signup'
import "./Welcome.css"

const Welcome = () => {
  return (
    <div className='welcome-page'>
      <section>
        <h2>Welcome to</h2>
        <h1>Remind Me</h1>
      </section>
      <section>
        <Signup />
      </section>
    </div>
  )
}

export default Welcome