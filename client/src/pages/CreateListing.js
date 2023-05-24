import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';


const HomeForm = (props) => {
    const [errors, setErrors] = useState ({})
    const navigate = useNavigate()
    const [home, setHome] = useState({
        numberOfRooms: Number(0),
        priceRange: Number(0),
        city: '',
        state: '',
        description: ''
    });

    const handleInputChange = (e) => {
        setHome({ ...home, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newHome', home)
            .then((res) => {
                console.log(res)
                setHome({numberOfRooms:0, priceRange:0, city: "", state: "", description:""})
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                setErrors(err)
            })
    }

    return (
        <div className='UHMain'>
            <form className='w-25' onSubmit={submitHandler}>
                <h1>Create A New Listing</h1>

                <label className='form-label'>Number Of Rooms: </label>
                <input className='form-control' type="number" onChange={handleInputChange} value={home.numberOfRooms} name='numberOfRooms' />
                {
                    errors.numberOfRooms?
                    <p className='text-danger'>{errors.numberOfRooms.message}</p>:
                    null
                }
                <br />
                <label className='form-label'>Price Range: </label>
                <input className='form-control' type="number" onChange={handleInputChange} value={home.priceRange} name='priceRange' />
                {
                    errors.priceRange?
                    <p className='text-danger'>{errors.priceRange.message}</p>:
                    null
                }
                <br />
                <label className='form-label'>City: </label>
                <input className='form-control' type="text" onChange={handleInputChange} value={home.city} name='city' />
                {
                    errors.city?
                    <p className='text-danger'>{errors.city.message}</p>:
                    null
                }
                <br />
                <label className='form-label'>State: </label>
                <input className='form-control' type="text" onChange={handleInputChange} value={home.state} name='state' />
                {
                    errors.state?
                    <p className='text-danger'>{errors.state.message}</p>:
                    null
                }
                <br />
                <label className='form-label'>Description: </label>
                <input className='form-control' type="text" onChange={handleInputChange} value={home.description} name='description' />
                {
                    errors.description?
                    <p className='text-danger'>{errors.description.message}</p>:
                    null
                }
                <br /><br  />
                <button className='btn btn-success' >Create</button>
            </form>
            <br  /><br  />
                <Link to={'/'}>Home</Link>
        </div>
    )
}

export default HomeForm;