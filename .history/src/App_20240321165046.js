
import React, {useEffect, useState} from 'react';
import Navbar from './component/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';
// import './App.css';
import { fetchTopAlbumbs, fetchNewAlbumbs } from './api/api.js';
import { StyledEngineProvider } from '@mui/material';
import HomePage from './pages/HomePage/HomePage.jsx';

function App() {
  const [data, setData]= useState({})
  const generateData = (key, source)=>{
    source().then((data)=>{
      setData((prevState)=>{
        return{...prevState,[key]:data}
      })
    })
  }
  // useEffect(()=>{
  //   generateData('topAlbums', fetchTopAlbumbs)
  //   generateData('newAlbums', fetchNewAlbumbs)
  // },[])
  const {topAlbum=[], newAlbum=[]}= data;
  return (
    <>
    <StyledEngineProvider>

    <Navbar/>
    <HomePage/>
    {/* <Outlet context={{data: {topAlbum, newAlbum}}}/> */}
    </StyledEngineProvider>
    
    </>
  );
}

export default App;
