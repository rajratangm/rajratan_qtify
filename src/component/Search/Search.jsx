import React from 'react'
import {ReactComponent as SearchIcon} from '../../assets/SearchIcon.svg'
import styles from './Search.module.css'
function Search({placeholder}){

    const onSubmit = (e)=>{
        e.preventDefault();
        // write submission logic here
    }
    return (

        <form className={styles.wrapper} onSubmit= {onSubmit}>
        <input className={styles.search} placeholder={placeholder} required/>
        <button className={styles.searchButton} type='submit'>
            <SearchIcon/>
        </button>
    </form>
    )
    
}

export default Search