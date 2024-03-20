import React from 'react'
import Hero from '../../component/Hero/Hero'
import Section from '../../component/Section/Section'
function HomePage(){
    const {data}
    return (<>
    <Hero/>
    <Section title ='Top Album' data ={[]} type= 'album'/>
    <Section title =' New Albums' data ={[]} type = 'album'/>
    
    </>)
}

export default HomePage 