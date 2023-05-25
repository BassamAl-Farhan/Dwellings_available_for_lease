import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'

const Register = (props) => {
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    })

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("/create/user", user)
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
            <div className='formclass'>
                <form className='w-25' onSubmit={submitHandler}>
                    <h1 className='title_create'>Register</h1>
                        <label>First Name: </label>
                        <input type="text" onChange={changeHandler} value={user.first_name} name='first_name' />
                        {
                            errors.first_name ?
                                <p className='text-danger'>{errors.firstName.message}</p> :
                                null
                        }
                        <label>Last Name: </label>
                        <input type="text" onChange={changeHandler} value={user.last_name} name='last_name' />
                        {
                            errors.last_name ?
                                <p className='text-danger'>{errors.lastName.message}</p> :
                                null
                        }
                
                        <label>Email: </label>
                        <input type="text" onChange={changeHandler} value={user.email} name='email' />
                        {
                            errors.email ?
                                <p className='text-danger'>{errors.email.message}</p> :
                                null
                        }
                
                
                        <label>Password: </label>
                        <input type="password" onChange={changeHandler} value={user.password} name='password' />
                        {
                            errors.password ?
                                <p className='text-danger'>{errors.password.message}</p> :
                                null
                        }
                
                    <button className='btn'>Register</button>
                    <Link to={'/login'} style={{ color: 'black' }}>Already have an account?</Link>
                <br /> <br />
                <Link style={{ color: 'black' }} to={'/'}>Home</Link>                </form>
               
            </div>
    )
}

export default Register;