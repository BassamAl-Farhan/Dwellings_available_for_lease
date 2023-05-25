import React from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cities from "./pages/cities";
import Ranges from "./pages/ranges";
import Popular from "./pages/popular";
import Register from './users/Register';
import CreateListing from './pages/CreateListing';
import UpdateHome from './pages/UpdateHome';
import HomeLibrary from './pages/HomeLibrary';
import ShowOne from './pages/ShowOne';
import Login from './users/Login';
import Main from './views/main';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}default/>
          <Route path="/cities" element={<Cities />} />
          <Route path="/ranges" element={<Ranges />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/createListing" element={<CreateListing/>}/>
          <Route path="/updateHome/:id" element={<UpdateHome/>}/>
          <Route path="/allHomes" element={<HomeLibrary/>}/>
          <Route path="/showOne/:id" element={<ShowOne/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
