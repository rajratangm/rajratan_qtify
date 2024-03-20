import React, {useState} from 'react'
import styles from './Section.module.css'
function Section({title, data, type}){
    const [carouselToggle, setCarouselToggle]= useState(true)
    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 onClick={handleToggle}>{
                    !carouselToggle ? 'Collapse All': 'Show All'
                    }</h4>
            </div>
        </div>
    )
}