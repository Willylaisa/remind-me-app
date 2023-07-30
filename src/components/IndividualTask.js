import React from 'react'

const IndividualTask = ({title, description}) => {
  return (
    <div className='individual-task'>
        <h2>{title}</h2>
        <p>{description}</p>
        <br/>
        <p><small>You will receive an email with this reminder at the set time⌚.</small></p>
        <small>Ensure that you remove <strong>Remind Me</strong> from spam.</small>
    </div>
  )
}

export default IndividualTask