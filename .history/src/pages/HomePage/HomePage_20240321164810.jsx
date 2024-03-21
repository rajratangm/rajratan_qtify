import React from 'react'
import Hero from '../../component/Hero/Hero'
import Section from '../../component/Section/Section'
import { useOutletContext } from 'react-router-dom'
function HomePage(){
    const {data}= useOutletContext();
    const {newAlbum, topAlbum}= data;
    return (<>
    <Hero/>
    
    {/* <Section title ='Top Album' data ={newAlbum} type= 'album'/>
    <Section title =' New Albums' data ={topAlbum} type = 'album'/> */}
    
    </>)
}

export default HomePage 