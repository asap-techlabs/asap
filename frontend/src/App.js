import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Cards from './components/Cards';
import SearchAddress from './components/SearchAddress';
import CalcOrder from "./components/CalculateOrder";
import NewOrderShow from "./components/NewOrderShow";
import ConfirmOrder from "./components/ConfirmOrder";

// this file keeps the routes to the different sections of the app.

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/*TODO other routes to add  */}
          <Route path="/" exact element={<Cards />} />
          <Route path="/search" element={<SearchAddress />} />
          <Route path="/orders/:id" element={<NewOrderShow />} />
          <Route path="/confirm/:id" element={<ConfirmOrder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
