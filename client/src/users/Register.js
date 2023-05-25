import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'

const Register = (props) => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });

    const validateForm = () => {
        const errors = {};

        // Validate first name
        if (!user.first_name) {
            errors.first_name = "First name is required";
        } else if (user.first_name.length < 2) {
            errors.first_name = "First name must be at least 2 characters long";
        }

        // Validate last name
        if (!user.last_name) {
            errors.last_name = "Last name is required";
        } else if (user.last_name.length < 2) {
            errors.last_name = "Last name must be at least 2 characters long";
        }

        // Validate email
        if (!user.email) {
            errors.email = "Email is required";
        }

        // Validate password
        if (!user.password) {
            errors.password = "Password is required";
        }else if (user.password.length < 8) {
            errors.last_name = "Password must be at least 2 characters long";
        }

        return errors;
    };

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            axios.post("/create/user", user)
                .then(res => {
                    console.log(res);
                    navigate('/');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };

    return (
        <div className='formclass'>
            <form className='w-25' onSubmit={submitHandler}>
                <h1 className='title_create'>Register</h1>
                <label>First Name: </label>
                <input type="text" onChange={changeHandler} value={user.first_name} name='first_name' />
                {
                    errors.first_name ?
                        <p className='text-danger'>{errors.first_name}</p> :
                        null
                }
                <label>Last Name: </label>
                <input type="text" onChange={changeHandler} value={user.last_name} name='last_name' />
                {
                    errors.last_name ?
                        <p className='text-danger'>{errors.last_name}</p> :
                        null
                }
                <label>Email: </label>
                <input type="text" onChange={changeHandler} value={user.email} name='email' />
                {
                    errors.email ?
                        <p className='text-danger'>{errors.email}</p> :
                        null
                }
                <label>Password: </label>
                <input type="password" onChange={changeHandler} value={user.password} name='password' />
                {
                    errors.password ?
                        <p className='text-danger'>{errors.password}</p> :
                        null
                }
                <button className='btn'>Register</button>
                <Link to={'/login'} style={{ color: 'black' }}>Already have an account?</Link>
                <br /> <br />
                <Link style={{ color: 'black' }} to={'/'}>Home</Link>
            </form>
        </div>
    );
};

export default Register;
