
import React from 'react';
import Navbar from './component/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';
// import './App.css';
import { fetchTopAlbumbs, fetchNewAlbumbs } from './api/api.js';

function App() {
  const [data, setData]= useState({})
  const generateData = (key, source)=>{
    source().then((data)=>{
      setData((prevState)=>{
        return{}
      })
    })
  }
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  );
}

export default App;
