import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import cityscape1 from '../images/CityScape1.jpg';

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
        setDish({ ...home, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newHome', home)
            .then((res) => {
                setDish({numberOfRooms:0, priceRange:0, city: "", state: "", description:""})
                navigate('/showfive')
            })
            .catch((err) => {
                setErrors(err.response.data.error.errors)
            })
    }



    return (
        <div className=''  style={{
            backgroundImage: `url(${cityscape1})`} }>
        <div className=''>
            <form className='w-25' onSubmit={submitHandler}>
                <h1>Search for your New Home</h1>

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
                <br />
                <button className='btn btn-success' >search</button>
            </form>
            <br  /><br  />
                <Link className='btn' to={'/main'}>Home</Link>
        </div>
        </div>
    )
}

export default HomeForm;