import React from 'react'
import styles from './Hero.module.css'

function Hero(){
    return (
        <div className={styles.hero}>
        <div className={styles.heroImageWrapper}>
            <div>

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