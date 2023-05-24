import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate, useParams } from 'react-router-dom';
import Dashboard from '../pages/DashBoard';


const OneHome = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [home, setHome] = useState({})
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/showOne/"+id)
        console.log()
            .then((res) => {
                setHome(res.data)
            })
            .catch((err) => {  
                console.log(err);
            })
    }, [])

    const deleteHome = (homeId) => {
        axios.delete('http://localhost:8000/api/allHomes/' + homeId)
        .then(res => {
            navigate('/')
        })
        .catch(err => console.log(err))
    };

    return (
        <div className="UHMain">
            <Dashboard/>
            <h1>Here's your Home!</h1>
        <div>
            <h3>Number of Rooms: {home.numberOfRooms}</h3>
            <h3>Price: {home.priceRange}</h3>
            <h3>City: {home.city}</h3>
            <h3>State: {home.state}</h3>
            <h3>Description: {home.description}</h3>
            <br  /><br  />
            <button onClick={(e)=>{deleteHome(home._id)}} className='btn3 btn-danger'>Delete</button>
            <br  /><br  />
            <Link to={`/`}>Home</Link>
        </div>
        </div>
    )}

export default OneHome;