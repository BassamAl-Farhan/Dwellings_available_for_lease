import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const Dashboard = (props) => {
    const navigate = useNavigate()
    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, { withCredentials: true })
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='DShell' >
            <div className='DLeft'>

                <h1>Dojo Homes</h1>

            </div>
            <div className='DCenter'>
                <Link className='btn' to={'/allHomes'}>Home Library</Link>
                <hr />
                <Link className='btn' to={'/register'}>Register</Link>
                <hr />
                <Link className='btn' to={'/login'}>Login</Link>
            </div>
            <div className='DRight'>
                <button className='btn' onClick={logout}>Log out</button>
                <hr />
                <Link className='btn' to={'/createListing'}>Create Listing</Link>
                <hr />
                <Link className='btn' target='blank' to={'/homeApi'}>Random Home</Link>
            </div>
        </div>
    )
}

export default Dashboard;