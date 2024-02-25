import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerMenu}>
        <ul>

          <a href="#about" className={styles.link}><li>About</li></a>
          <a href="#skills" className={styles.link}><li>Skills</li></a>
          <a href="#projects" className={styles.link}><li>Projects</li></a>

        </ul>
      </div>
      <p>copyright &#169; 2024 Sachin Nautiyal. All Rights Reserved</p>
    </div>
  )
}

export default Footer
