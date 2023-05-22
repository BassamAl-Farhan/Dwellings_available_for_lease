import React from "react";
import './style.css';
import { Link } from 'react-router-dom';

const Popular = () => {
  return (
    <>
      <div class="header">
        <h2>Popular places to Buy</h2>
        <Link id="home-btn" to={'/'}>Home</Link>
      </div>
      <div class="main-div">
        <div class="prop-div">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
            alt="Home pic"
            width="100"
            height="100"
          />
          <h4>Home Info</h4>
          <button id="add-button">Add to Library</button>
        </div>
        <div class="prop-div">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
            alt="Home pic"
            width="100"
            height="100"
          />
          <h4>Home Info</h4>
          <button id="add-button">Add to Library</button>
        </div>
        <div class="prop-div">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
            alt="Home pic"
            width="100"
            height="100"
          />
          <h4>Home Info</h4>
          <button id="add-button">Add to Library</button>
        </div>
        <div class="prop-div">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
            alt="Home pic"
            width="100"
            height="100"
          />
          <h4>Home Info</h4>
          <button id="add-button">Add to Library</button>
        </div>
        <div class="prop-div">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
            alt="Home pic"
            width="100"
            height="100"
          />
          <h4>Home Info</h4>
          <button id="add-button">Add to Library</button>
        </div>
      </div>
    </>
  );
};

export default Popular;
