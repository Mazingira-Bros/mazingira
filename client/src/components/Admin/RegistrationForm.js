import React from 'react'
import { useState } from 'react'

function RegistrationForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState({})

  


  return (
    <div>RegistrationForm</div>
  )
}

export default RegistrationForm