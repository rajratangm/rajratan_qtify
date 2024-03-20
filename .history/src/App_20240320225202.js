
import React from 'react';
import Navbar from './component/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';
// import './App.css';
import { fetchNewAlbumbs, fetchN } from './api/api.js';

function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  );
}

export default App;
