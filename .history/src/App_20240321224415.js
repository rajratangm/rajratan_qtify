
import React, {useEffect, useState} from 'react';
import Navbar from './component/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';
// import './App.css';
import { fetchTopAlbums, fetchNewAlbums, fetchFilters, fetchSongs } from './api/api.js';
import { StyledEngineProvider } from '@mui/material';
import HomePage from './pages/HomePage/HomePage.jsx';

function App() {
  const [data, setData]= useState({})
  useEffect(() => {
    const fetchData = async () => {
      const topAlbums = await fetchTopAlbums();
      const newAlbums = await fetchNewAlbums();
      const songsAlbum = await fetchSongs();
      const filteredAlbum = await fetchFilters();

      setData({ topAlbum: topAlbums, newAlbum: newAlbums, song});
    };

    fetchData();
  }, []);
  return (
    <>
    <StyledEngineProvider>

    <Navbar/>
    <HomePage data = {data}/>
    {/* <Outlet context={{data: {data}}}/> */}
    </StyledEngineProvider>
    
    </>
  );
}

export default App;
