import React, { useEffect, useState } from 'react';
import Dashboard from '../pages/DashBoard';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import CityScape from '../images/CityScape1.jpg';
import SeattleScape from '../images/seattlescape.jpg';
import ModernHouse from '../images/ModernHouse.jpg';
import axios from 'axios';
import '../App.css';

const Main = () => {
    const [homes, setHomes] = useState([]);

    useEffect(() => {
        fetch("/home")
            .then(res => res.json())
            .then(data => {
                setHomes(data);
                console.log(data);
            });
    }, []);

    const deleteHome = (id) => {
        axios
            .delete(`/delete/${id}`)
            .then(() => {
                setHomes(homes.filter(home => home.id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="MainShell">
            <div className='DashShell'>
                <Dashboard />
            </div>
            <div className="MainBody">
                <div className="MainCubes">
                    <h1 className='titlesearchlink'>Search Homes By City</h1>
                    <Image className='CityPic' src={CityScape} alt='...' />
                    <br /><br />
                    <Link className='btnsearch' to={'/cities'}>Search</Link>
                </div>
                <hr />
                <div className="MainCubes">
                    <h1 className='titlesearchlink'>Search Homes By Popular Locations</h1>
                    <Image className='CityPic' src={SeattleScape} alt='...' />
                    <br /><br />
                    <Link className='btnsearch' to={'/popular'}>Search</Link>
                </div>
                <hr />
                <div className="MainCubes">
                    <h1 className='titlesearchlink'>Search Homes By Price Range</h1>
                    <Image className='CityPic' src={ModernHouse} alt='...' />
                    <br /><br />
                    <Link className='btnsearch' to={'/ranges'}>Search</Link>
                </div>
            </div>

            {/* Display the list of homes */}
            <div>
                <h2 className='allhomestitle'>Browse Homes</h2>
                <ul className='homemainpagediv'>
                    {homes.map(home => (
                        <div className='singlehomemainsearch' key={home.id}>
                            <h2>{home.city}</h2>
                            <p>Number of Rooms: {home.numberOfRooms}</p>
                            <p>Price Range: {home.priceRange}</p>
                            <p>Description: {home.description}</p>
                            <Link className='linktosearchbtn' to={`/Updatehome/${home.id}`}>Update</Link>
                            <button className='linktosearchbtn' onClick={() => deleteHome(home.id)}>Delete</button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Main;
