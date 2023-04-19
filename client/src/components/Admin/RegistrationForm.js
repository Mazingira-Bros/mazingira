import React from 'react'
import { useState } from 'react'
import Login from '../Login'

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState({});

const handleSubmit = (e) => {
  e.preventDefault();
  const userData = { name, email, password, passwordConfirmation: passwordConfirmation };
  fetch("/admin", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  }, [])
  .then(res =>{
    if (res.ok) {
      return <Login />
    } else {
      return <RegistrationForm />
      response.json().then(data => setErrors(data.errors));
    }
  }):
}



  return (
    <div>RegistrationForm</div>
  )
}

export default RegistrationForm