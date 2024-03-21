
import React, {useEffect, useState} from 'react';
import Navbar from './component/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';
// import './App.css';
import { fetchTopAlbums, fetchNewAlbums } from './api/api.js';
import { StyledEngineProvider } from '@mui/material';
import HomePage from './pages/HomePage/HomePage.jsx';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const topAlbumsData = await fetchTopAlbums();
      const newAlbumsData = await fetchNewAlbums();
      setData({ topAlbums: topAlbumsData, newAlbums: newAlbumsData });
    };

    fetchData();
  }, []);
  return (
    <>
    <StyledEngineProvider>

    <Navbar/>
    <HomePage/>
    <Outlet context={{data: {topAlbum, newAlbum}}}/>
    </StyledEngineProvider>
    
    </>
  );
}

export default App;
