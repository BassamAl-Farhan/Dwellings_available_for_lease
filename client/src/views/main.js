import React from 'react';
import Dashboard from '../pages/DashBoard';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import CityScape from '../images/CityScape1.jpg';
import SeattleScape from '../images/seattlescape.jpg';
import ModernHouse from '../images/ModernHouse.jpg';


const Main = () => {
    return (
        <div className="MainShell">
            <div className='DashShell'>
                <Dashboard />
            </div>
            <div className="MainBody">
                <div className="MainCubes">
                <h1>Search Homes By City</h1>
                <Image className='CityPic' src={CityScape} alt='...'/>
                <br  /><br  />
                <Link className='btn' to={'/cities'}>Search</Link>
                </div> 
                <hr/>
                <div className="MainCubes">
                <h1>Search Homes By Popular Locations</h1>
                <Image className='CityPic' src={SeattleScape} alt='...'/>
                <br  /><br  />
                <Link className='btn' to={'/popular'}>Search</Link>
                </div> 
                <hr/>
                <div className="MainCubes">
                <h1>Search Homes By Price</h1>
                <Image className='CityPic' src={ModernHouse} alt='...'/>
                <br  /><br  />
                <Link className='btn' to={'/ranges'}>Search</Link>
                </div> 
            </div>
        </div>
    )
}
export default Main;
