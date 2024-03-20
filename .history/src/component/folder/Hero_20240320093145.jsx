import React from 'react'
import styles from './Hero.module.css'

function Hero(){
    return (
        <div className=''>
        <div>

        <h1>100 Thousand songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
        </div>
        <div>

            <img
            src={require('../../assets/hero_headphone.png')}
            width={122}
            alt='headphone'
            />
        </div>
        
        
        </div>
    )
}