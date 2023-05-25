import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import '../App.css'
import Dashboard from './DashBoard';

const HomeForm = (props) => {
    const [errors, setErrors] = useState ({})
    const navigate = useNavigate()
    const [home, setHome] = useState({
        numberOfRooms: 0,
        priceRange: 0,
        city: '',
        state: '',
        description: ''
    });

    const handleInputChange = (e) => {
        setHome({ ...home, [e.target.name]: e.target.value })
    }
const submitHandler = (e) => {
        e.preventDefault();
        axios.post("/create/home", home)
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            <Dashboard/>
 <div className='formclass'>
            <form className='w-25' onSubmit={submitHandler}>
                <h1 className='title_create'>Create A New Listing</h1>

                <label className='form-label'>Number Of Rooms: </label>
                <input className='form-control' type="number" onChange={handleInputChange} value={home.numberOfRooms} name='numberOfRooms' />
                {
                    errors.numberOfRooms?
                    <p className='text-danger'>{errors.numberOfRooms.message}</p>:
                    null
                }
                <label className='form-label'>Price Range: </label>
                <input className='form-control' type="number" onChange={handleInputChange} value={home.priceRange} name='priceRange' />
                {
                    errors.priceRange?
                    <p className='text-danger'>{errors.priceRange.message}</p>:
                    null
                }
                <label className='form-label'>City: </label>
                <input className='form-control' type="text" onChange={handleInputChange} value={home.city} name='city' />
                {
                    errors.city?
                    <p className='text-danger'>{errors.city.message}</p>:
                    null
                }
                <label className='form-label'>State: </label>
                <input className='form-control' type="text" onChange={handleInputChange} value={home.state} name='state' />
                {
                    errors.state?
                    <p className='text-danger'>{errors.state.message}</p>:
                    null
                }
                <label className='form-label'>Description: </label>
                <input className='form-control' type="text" onChange={handleInputChange} value={home.description} name='description' />
                {
                    errors.description?
                    <p className='text-danger'>{errors.description.message}</p>:
                    null
                }
                {/* <button className='btn btn-success' >Create</button> */}
                <button className='btn' type='submit'>Create</button>
            </form>
            <br  /><br  />
                <Link to={'/'}>Home</Link>
        </div>
        </div>
       
    )
}

export default HomeForm;