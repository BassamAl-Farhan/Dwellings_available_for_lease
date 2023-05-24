import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate, useParams } from 'react-router-dom';


const UpdateHome = (props) => {
    const { id } = useParams();
    const [numberOfRooms, setNumberOfRooms] = useState();
    const [priceRange, setPriceRange] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/oneHome/'+ id)
            console.log(id)
            .then(res => {
                setNumberOfRooms(res.data.numberOfRooms);
                setPriceRange(res.data.priceRange);
                setCity(res.data.city);
                setState(res.data.state);
                setDescription(res.data.description);
            })
            .catch(err=> console.log(err))
    }, [])

    const updateHome = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateHome/'+ id, {
            numberOfRooms,
            priceRange,
            city,
            state,
            description
        })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err))
    };

    return(
        <div>
        <div className='UHMain'>
            <h1>Update Home</h1>
            <form className='w-25' onSubmit={updateHome}>
                <p>
                    <label>Number of Rooms</label><br />
                    <input type='number'
                    name='numberOfRooms'
                    value={numberOfRooms}
                    onChange={(e) => { setNumberOfRooms(e.target.value) }} />
                </p>
                <p>
                <label>Price Range</label><br />
                    <input type='number'
                    name='priceRange'
                    value={priceRange}
                    onChange={(e) => { setPriceRange(e.target.value) }} />
                </p>
                <p>
                <label>City</label><br />
                    <input type='text'
                    name='city'
                    value={city}
                    onChange={(e) => { setCity(e.target.value) }} />
                </p>
                <p>
                <label>State</label><br />
                    <input type='text'
                    name='state'
                    value={state}
                    onChange={(e) => { setState(e.target.value) }} />
                </p>
                <p>
                <label>Description</label><br />
                    <input type='textarea'
                    name='description'
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }} /> 
                </p>
                <br  /><br  />
                <br  /><br  />
                <input className='btn btn-success' type='submit'/>
                <br  /><br  />
                <Link to={'/'}>Home</Link>
                <br  /><br  />
            </form>
        </div>
        </div>
    )

}

export default UpdateHome;
