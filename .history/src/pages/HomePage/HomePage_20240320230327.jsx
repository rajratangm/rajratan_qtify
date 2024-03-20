import React from 'react'
import Hero from '../../component/Hero/Hero'
import Section from '../../component/Section/Section'
import { useOutletContext } from 'react-router-dom'
function HomePage(){
    const {data}= useOutletContext()
    return (<>
    <Hero/>
    <Section title ='Top Album' data ={[]} type= 'album'/>
    <Section title =' New Albums' data ={[]} type = 'album'/>
    
    </>)
}

export default HomePage 