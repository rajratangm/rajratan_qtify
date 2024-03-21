import React from 'react'
import Hero from '../../component/Hero/Hero'
import Section from '../../component/Section/Section'
import { useOutletContext } from 'react-router-dom'
function HomePage({}){
    const {data}= useOutletContext();
    // const { topAlbum, newAlbum}= data;
    const topAlbum = data?.topAlbum || [];
    const newAlbum = data?.newAlbum || [];
    return (<>
    <Hero/>
    
    <Section title ='New Album' data ={newAlbum} type= 'album'/>
    <Section title =' Top Albums' data ={topAlbum} type = 'album'/>
    
    </>)
}

export default HomePage 