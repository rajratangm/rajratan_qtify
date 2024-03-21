import React from 'react'
import Hero from '../../component/Hero/Hero'
import Section from '../../component/Section/Section'
import { useOutletContext } from 'react-router-dom'
import {filterFilters} from ''
function HomePage({data}){
    // const {data}= useOutletContext();
    // const { topAlbum, newAlbum}= data;
    const topAlbum = data?.topAlbum || [];
    const newAlbum = data?.newAlbum || [];
    const songsAlbum = data?.songsAlbum || [];
    return (<>
    <Hero/>
    
    <Section title ='New Album' data ={newAlbum} type= 'album'/>
    <Section title =' Top Albums' data ={topAlbum} type = 'album'/>
    <Section title =' Songs' data ={songsAlbum} filterSource= {filterFilters} type = 'song'/>
    
    
    </>)
}

export default HomePage 