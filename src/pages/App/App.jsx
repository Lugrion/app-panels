import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import Navbar from '../../components/nav';

import Home from '../Index/index';
import Login from '../Login/login';
import About from '../About/about';
import Error from '../Error/error';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setLoggedInUser={setLoggedInUser}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login loggedInUser={loggedInUser}/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
