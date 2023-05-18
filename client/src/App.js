import React from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cities from "./pages/cities";
import Ranges from "./pages/ranges";
import Popular from "./pages/popular";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Cities />} />
        <Route exact path="/ranges" element={<Ranges />} />
        <Route exact path="/popular" element={<Popular />} />
      </Routes>
    </div>
  );
};

export default App;
