import React, {useState} from 'react'
import styles from './Section.module.css'

function Section({title, data, type}){
    const [carouselToggle, setCarouselToggle]= useState(true)
    const handleToggle=()=>{
        setCarouselToggle((prevState)=>!prevState)
    }
    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>{
                    !carouselToggle ? 'Collapse All': 'Show All'
                    }</h4>
            </div>

        </div>
    )
}