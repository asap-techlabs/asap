import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchAddress from './components/SearchAddress';
import HomeScreen from './components/HomeScreen.js';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css';
import Recap from './components/Recap';

// this file keeps the routes to the different sections of the app.

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
      {/*TODO other routes to add  */}
          <Route path ="/" element={<HomeScreen/>} />
          <Route path ="/search" element={<SearchAddress/>} />
          <Route path ="/login" element={<Login/>} />
          <Route path ="/orders/:id" element={<Recap/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
