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
      // return <RegistrationForm />
      response.json().then(data => setErrors(data.errors));
    }
  });
};

  return (
    <form onClick={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)}/>
        { errors.name && <div className='error'>{errors.name.join(', ')}</div> }
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' onChange={ (e) => setEmail(e.target.value)}/>
        {errors.email && <div className='error'>{errors.email.join(', ')}</div>}
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' onChange={ (e) => setPassword(e.target.value) }/>
        {errors.password && <div className='password'>{errors.password.join(', ')}</div>}
      </div>
      <div>
        <label htmlFor='password-confirmation'>Password Confirmation</label>
        <input type='paswword' id='password-confirmation' name='password_confrimation' onChange={ (e) => setPasswordConfirmation(e.target.value)}/>
        {errors.password_confirmation && <div className='password_confirmation'>{errors.password_confirmation.join(', ')}</div>}
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default RegistrationForm