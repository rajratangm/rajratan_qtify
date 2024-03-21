import React from 'react'
import Hero from '../../component/Hero/Hero'
import Section from '../../component/Section/Section'
import { useOutletContext } from 'react-router-dom'
function HomePage(){
    // const {data}= useOutletContext();
    // const {newAlbum, topAlbum}= data;
    return (<>
    <Hero/>
    
    {/* <Section title ='Top Albu
    <Section title =' New Albums' data ={topAlbum} type = 'album'/>m' data ={newAlbum} type= 'album'/> */}
    
    </>)
}

export default HomePage 