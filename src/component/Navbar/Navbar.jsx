import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import Button from '../Button/Button'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
function Navbar(){
    return (
        <nav className={styles.navbar}>
             <Link to="/">
          <Logo />
        </Link>
            {/* <Search placeholder="Search your favorite album here"/>
            <Button>Give FeedBack</Button> */}
            <Search placeholder={"Search a song of your choice"}/>
            <Button children="Give Feedback"/>

        </nav>

    )
}


export default Navbar