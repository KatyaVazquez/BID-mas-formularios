import React from 'react'

const ResultadosFor = (props) => {

  const {Name, LastName, Email, Password, confirmPassword} =props.datitos;

  return (
    <div className='result'>
      <h1>Your Form Date</h1>
      <p>First Name: {Name}</p>
      <p>Last Name: {LastName}</p>
      <p>Email: {Email}</p>
      <p>Password: {Password}</p>
      <p>Confirm Password: {confirmPassword}</p>
    </div>
  )
}

export default ResultadosFor