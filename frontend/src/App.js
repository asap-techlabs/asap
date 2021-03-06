import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "mapbox-gl/dist/mapbox-gl.css";
import SearchAddress from './components/SearchAddress';
import NewOrderShow from "./components/NewOrderShow";
import ConfirmOrder from "./components/ConfirmOrder";
import Login from './components/Login';
import Coord from "./components/Coord";
import HomeScreen from './components/HomeScreen.js'

// this file keeps the routes to the different sections of the app.

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ="/" exact element={<HomeScreen/>} />
          <Route path="/search" element={<SearchAddress />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders/:id" element={<NewOrderShow />} />
          <Route path="/confirm/:id" element={<ConfirmOrder />} />
          <Route path="/map/:id" element={<Coord />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
