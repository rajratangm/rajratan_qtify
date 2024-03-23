import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import Button from '../Button/Button'
import styles from './Navbar.module.css'
function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Logo ={.logoDiv}/>
            {/* <Search placeholder="Search your favorite album here"/>
            <Button>Give FeedBack</Button> */}
            <Search placeholder={"Search a song of your choice"}/>
            <Button children="Give Feedback"/>

        </nav>

    )
}


export default Navbar