import React, { useState } from 'react';
import { Button, Input } from 'antd';
import './Signup.css';
import PostRequest from '../helpers/postRequest';
import { useNavigate } from 'react-router-dom';

function Signup({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async () => {
    console.log(`נרשמת עם שם משתמש: ${email}, סיסמא: ${password}, שם כינוי: ${name}`);

    // a@a.c
    if (!email.includes('@') || !email.includes('.') || email.length < 5) {
      return alert('Please insert a valid email')
    }

    const body = {
      name,
      email,
      password,
    };

    try {
      await PostRequest('users/register', body);
      navigate('/');
      setUser(body)
    } catch (err) {
      console.log(err)
      if (err.message.includes('Duplicate entry')) {
        return alert('Email already exists')
      }
      alert(err.message);
    }
  };

  return (
    <div className='user-container'>
      <h1 style={{ marginBottom: "20px", fontSize: "6rem", fontWeight: "bold", fontFamily: "cursive", color: "#714618" }}>
        SWEETIME
      </h1>
      <h1 className='welcome-header'style={{color: "#714618"}}>Enter the details for registration</h1>
      <br></br>
      <div className='login-container'>
        <form id='user-form'>
          <div className='label-input-container'>
            <label htmlFor='email' style={{color: "#714618"}}>Email </label>
            <Input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className='label-input-container'>
            <label htmlFor='password' style={{color: "#714618"}}>Password</label>
            <Input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className='label-input-container'>
            <label htmlFor='nickname' style={{color: "#714618"}}>Nickname </label>
            <Input type='text' id='nickname' name='nickname' value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
         
          <br></br>

          <div className='button-container'>
            <Button type='button' onClick={handleRegistration}>
              Create a user
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

