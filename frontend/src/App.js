import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Cards from './components/Cards';
import SearchAddress from './components/SearchAddress';
import CreateOrder from './components/CreateOrder';

// this file keeps the routes to the different sections of the app.

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
      {/*TODO other routes to add  */}
          <Route path ="/" exact element={<Cards/>} />
          <Route path ="/search" element={<SearchAddress/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
