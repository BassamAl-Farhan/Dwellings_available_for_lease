import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import cityscape1 from '../images/CityScape1.jpg';



const DisplayAllHomes = (props) => {
    const { id } = useParams();
    const [ home, setHome ]  = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/allHomes')
            .then((res) => {
                setHome(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    const deleteHome = (homeId) => {
        axios.delete('http://localhost:8000/api/allHomes/' + homeId)
        .then(res => {
            navigate('/main')
        })
        .catch(err => console.log(err))
    };

    return (
        <div className='' style={{
            backgroundImage: `url(${cityscape1})`
        }}>
            {home?.map((home, index) => {
                return (
                    <div className='details' key={index}>
                        <h3>Number of Rooms: {home.numberOfRooms}</h3>
                        <h3>Price Range: {home.priceRange}</h3>
                        <h3>City: {home.city}</h3>
                        <h3>State: {home.state}</h3>
                        <h3>Description: {home.description}</h3>
                        <br />
                        <Link className='btn2' to={`/updateHome/${home._id}`}>Edit page</Link>
                        <br /><br />
                        <button onClick={(e)=>{deleteHome(home._id)}} className='btn3 btn-danger'>Delete</button>
                    </div>
                )
            })
            }
        </div>
    );
}
export default DisplayAllHomes;