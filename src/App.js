import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Link } from 'react-router-dom';

function App() {
  return (
    
    <div className="container" >
   <Routes>
   <Route path="/" element={<Login />} />
    <Route path="home" element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
   </Routes>
    </div>
  );
}

export default App;
