import React, { useState } from 'react'
import styles from './navbar.module.css'
import logo from '../../images/logo.png'
const Navbar = () => {


  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };



  return (
    <>
      <div className={`${styles.navbar} ${isMenuOpen ? styles.menuOpen : ''}`} id='navbar'>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
       
        <div className={styles.navlist}>
          <ul>
            
         <a href="#home" className={styles.link}><li>Home</li></a> 
         <a href="#about" className={styles.link}><li>About</li></a> 
         <a href="#skills" className={styles.link}><li>Skills</li></a> 
         <a href="#projects" className={styles.link}><li>Projects</li></a> 
         <a href="#contact" className={styles.link}><li></li>Contact</a> 

          </ul>
        </div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {isMenuOpen && (
            
            <div className={styles.hamburgermenu}>
            <ul >
            
            <a href="#home" className={styles.link}><li>Home</li></a> 
            <a href="#about" className={styles.link}><li>About</li></a> 
            <a href="#skills" className={styles.link}><li>Skills</li></a> 
            <a href="#projects" className={styles.link}><li>Projects</li></a> 
            <a href="#contact" className={styles.link}><li></li>Contact</a> 
   
             </ul>
             </div>
      )}

      </div>
    </>
  )
}

export default Navbar
