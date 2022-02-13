import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchAddress from './components/SearchAddress';
import CardList from './components/CardList';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css';
import Cards from './components/Cards';
import SearchAddress from './components/SearchAddress';

// this file keeps the routes to the different sections of the app.

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
      {/*TODO other routes to add  */}
          <Route path ="/" element={<CardList/>} />
          <Route path ="/search" element={<SearchAddress/>} />
          <Route path ="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
