import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import Houston from '../images/Houston.jpg';
import SeattleScape from '../images/seattlescape.jpg';
import NewYork from '../images/NewYork.jpg';
import Boston from '../images/Boston.jpg';
import LasVegas from '../images/LasVegas.jpg';


const Ranges = (props) => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/newHome')
        .then((res) => {
            navigate('/allHomes')
        })
        .catch((err) => {
            console.log(err)
        })
};

  return (
    <>
      <div class="header">
        <h2>Homes by City</h2>
        <Link id="home-btn" to={'/'}>Home</Link>
      </div>
      <div class="main-div">
        <div class="prop-div" >
          <img class='cityPic'
            src={SeattleScape}
            alt="Home pic"
          />
          <h4>Seattle, WA</h4>
          <h5>3 bedroom</h5> 
          <h5>$950,000</h5> 
          <h5>A NW Beauty! Ready for immediate move in.</h5>
          <button id="submit" onSubmit={submitHandler} >Add to Library</button>
          <Link to={'/UpdateHome/:id'}>Update</Link>
          <Link to={'/showOne/:id'}>Show One</Link>
        </div>
    <hr/>
        <div class="prop-div">
          <img class='cityPic'
            src={Houston}
            alt="Home pic"
          />
          <h4>Houston, Texas</h4>
          <h5>4 bedroom</h5>
          <h5>$750,000</h5>
          <h5>A Texan Beauty! Ready to move in.</h5>
          <button id="submit" onSubmit={submitHandler}>Add to Library</button>
          <Link to={'/UpdateHome/:id'}>Update</Link>
          <Link to={'/showOne/:id'}>Show One</Link>
        </div>
        <hr/>
        <div class="prop-div">
          <img class='cityPic'
            src={NewYork}
            alt="Home pic"
          />
          <h4>New York, New York</h4>
          <h5>4 bedroom</h5>
          <h5>$750,000</h5>
          <h5>High end luxury with a million dollar view! Ready to move in.</h5>
          <button id="submit" onSubmit={submitHandler}>Add to Library</button>
          <Link to={'/UpdateHome/:id'}>Update</Link>
          <Link to={'/showOne/:id'}>Show One</Link>
        </div>
        <hr/>
        <div class="prop-div">
          <img class='cityPic'
            src={Boston}
            alt="Home pic"
          />
          <h4>Boston, Masachusetts</h4>
          <h5>6 bedroom</h5>
          <h5>$7950,000</h5>
          <h5>Near many historical sites and great schools. Ready to move in.</h5>
          <button id="submit" onSubmit={submitHandler}>Add to Library</button>
          <Link to={'/UpdateHome/:id'}>Update</Link>
          <Link to={'/showOne/:id'}>Show One</Link>
        </div>
        <hr/>
        <div class="prop-div">
          <img class='cityPic'
            src={LasVegas}
            alt="Home pic"
          />
          <h4>Home Info</h4>
          <h5>2 bedroom</h5>
          <h5>$620,000</h5>
          <h5>Clase to New Vegas with a direct route to winning!!!! Ready to move in.</h5>
          <button id="submit" onSubmit={submitHandler}>Add to Library</button>
          <Link to={'/UpdateHome/:id'}>Update</Link>
          <Link to={'/showOne/:id'}>Show One</Link>
        </div>
      </div>
    </>
  );
};

export default Ranges;
