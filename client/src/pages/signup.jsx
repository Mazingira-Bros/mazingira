import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Signup.css'; // import the CSS file

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { username, email, password};
    fetch('http://127.0.0.1:3000/signup',{
        method:'POST',
        header: {
            'content-Type': 'application/json',
        },
        body:JSON.stringyfy(data),
    })
        .then((response) =>{
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        })
        .then((data) =>{
            console.log(data);
        })
    .   .catch((error) => {
        
    })
  }