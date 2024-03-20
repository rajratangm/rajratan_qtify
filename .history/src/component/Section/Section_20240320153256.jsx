import React from 'react'
import styles from './Section.module.css'
function Section({title, data, type}){
    const [carouselToggle, setCarouselToggle]
    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4>show all</h4>
            </div>
        </div>
    )
}