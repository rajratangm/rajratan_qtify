import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import Button from '../Button/Button'
import styles from './Navbar.module.css'
function Navbar(){
    return (
        <nav className={styles.navbar}>
            <a href='/'>
            <Logo/>
            </a>
            <Search placeholder="Search your favorite album here"/>
            <Button cl>Give FeedBack</Button>

        </nav>

    )
}


export default Navbar