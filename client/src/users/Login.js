import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'

const Login = (props) => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const changeHandler = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    axios
      .post('/login/user', userLogin)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError('An error occurred during login.');
        }
      });
  };

  return (
      <div className='formclass'>
       
        {error && <p className='text-danger'>{error}</p>}
        <form className='w-25' onSubmit={loginHandler}>
        <h1 className='title_create'>Login</h1>

          <label className='form-label'>Email: </label>
          <input className='form-control' type='text' name='email' value={userLogin.email} onChange={changeHandler} />

          <br />
          <label className='form-label'>Password: </label>
          <input className='form-control' type='password' name='password' value={userLogin.password} onChange={changeHandler} />

          <br />
          <button className='btn'>Login</button>
          <br /> <br />
          <Link style={{ color: 'black' }} to={'/register'}>
            Don't have an account? Click here to sign up
          </Link>
          <br /> <br />
          <Link style={{ color: 'black' }} to={'/'}>
            Home
          </Link>
        </form>
      </div>
  );
};

export default Login;
