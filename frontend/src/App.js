import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchAddress from './components/SearchAddress';
import 'bootstrap/dist/css/bootstrap.css';

// this file keeps the routes to the different sections of the app.

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
      {/*TODO other routes to add  */}

          <Route path ="/search" element={<SearchAddress/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
