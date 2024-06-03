import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import PostRequest from '../helpers/postRequest';
import GetRequest from '../helpers/getRequest';
import { Link } from 'react-router-dom';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = { email, password };

    console.log(data);
    try {
      const responseData = await PostRequest('users/login', data);
      console.log(responseData)

      if (responseData.name) {
        navigate('/');
        setUser(responseData)
        localStorage.setItem('user', JSON.stringify(responseData))
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className='user-container'>
      <h1 style={{ marginBottom: "20px", fontSize: "6rem", fontWeight: "bold", fontFamily: "cursive", color: "#714618" }}>
        SWEETIME
      </h1>
      <div className='welcome-container'>
        <h1 className='welcome-header'>
          <center style={{color: "#714618"}}>
            Welcome back!
            <br />
            you should register to enjoy the site's recipes
          </center>
        </h1>
      </div>
      <br />
      <div className='login-container'>
        <form id='user-form' onSubmit={handleSubmit}>
          <div className='label-input-container'>
            <label style={{color: "#714618"}} htmlFor='username'> Email </label>
            <Input type='text' id='username' name='username' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className='label-input-container password-input'>
            <label style={{color: "#714618"}} htmlFor='password'>Password</label>
            <Input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div className='button-container'>
            <Button type='submit' onClick={handleSubmit}>
              Login
            </Button>
          </div>
        </form>
        <p className='registration-link'>
          <span className='registration-text' style={{color: "#714618"}}> Not registered yet? </span>
          <a style={{color: "#714618"}} href='http://localhost:3000/signup' className='registration-link'>
            Click here to register
          </a>
        </p>
      </div>
    </div>
  );
}


export default Login;
