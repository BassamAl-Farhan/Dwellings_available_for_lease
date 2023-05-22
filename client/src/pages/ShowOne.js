import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate, useParams } from 'react-router-dom';
import cityscape1 from '../images/CityScape1.jpg';
import Dashboard from '../pages/DashBoard';


const OneHome = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [home, setHome] = useState({})
    

    useEffect(() => {
        axios.get("http://localhost:8000/api/showOne/"+id)
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
        <div className='' style={{
            backgroundImage:`url(${cityscape1})`
        }}>
            <Dashboard/>
            <h1 style={{ backgroundImage: `url(${cityscape1})`}}>Here's your Home!</h1>
            <Link className='' to={`/main`}>Main</Link>
        <div className=''>
            <h3>Number of Rooms: {home.numberOfRooms}</h3>
            <h3>Price Range: {home.priceRange}</h3>
            <h3>City: {home.city}</h3>
            <h3>State: {home.state}</h3>
            <h3>Description: {home.description}</h3>
            <br  /><br  />
            <br  /><br  />
            <button onClick={(e)=>{deleteHome(home._id)}} className='btn3 btn-danger'>Delete</button>
        </div>
        </div>
    )}

export default OneHome;