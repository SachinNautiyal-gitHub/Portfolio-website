import React from 'react'
import styles from './navbar.module.css'
import logo from '../../images/sachin-nautiyal-high-resolution-logo-white (1).png'
import { Link } from 'react-scroll'
const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.navlist}>
          <ul>
          <Link to='home'   smooth={true}  offset={-80} className={styles.link}>Home</Link>
          <Link to='about'   smooth={true}  offset={-80} className={styles.link}>About</Link>
          <Link to='skills'   smooth={true}  offset={-80} className={styles.link}>Skills</Link>
          <Link to='projects'   smooth={true}  offset={-80} className={styles.link}>Projects</Link>
          <Link to='contact'   smooth={true}  offset={-80} className={styles.link}>Contact</Link>
            


          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
