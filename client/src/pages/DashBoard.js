import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'

const Dashboard = (props) => {
    const navigate = useNavigate()





    const logout = () => {
        axios.post('/logout')
            .then(res => {
                window.location.href = '/register';
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
    
    return (
        <div className='DShell' >
            <div className='DBlock'>
                <h1 className='dojotitle'>Dojo Homes</h1>
            </div>
            <div className='DBlock'>
                <Link className='linkto' to={'/createListing'}>Create Listing</Link>
                <hr />
                <Link className='linkto' to={'/register'}>Register</Link>
                <hr />
                <button className='linktobtn' onClick={logout}>Log out</button>
            </div>
            
        </div>
    )
}

export default Dashboard;