import React from 'react'
import styles from './Hero.module.css'

function Hero(){
    return (
        <div className={styles.hero}>
        <div className={styles.heroImageWrapper}>
            <div className={styles.banner}>
            <h1>100 Thousand songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
            </div>

       
        </div>
        <div>

            <img
            src={require('../../assets/headphone.png')}
            width={122}
            alt='headphone'
            />
        </div>
        </div>
    )
} 


export default Hero