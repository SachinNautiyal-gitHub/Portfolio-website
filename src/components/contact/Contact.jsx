import React from 'react'
import styles from './contact.module.css'

import upArrow from '../../images/uparrow.png'
import emailIcon from '../../images/email.png'
import linkedinIcon from '../../images/linkedin.png'

const Contact = () => {
  return (
    <div className={styles.contact} id='contact'>
        <a href="#navbar" className={styles.Arrow}><img src={upArrow} className={styles.icon} alt="" /></a>
      <p>Get in Touch </p>
      <h1>Contact Me</h1>

      <div className={styles.connect}>
      <div className={styles.contactInfo}>
          <img src={emailIcon} alt="Email icon"  className={styles.icon} />
          <p><a href="mailto:nautiyalsachin2703@gmail.com" rel="noreferrer" target='_blank'>Mail Me</a></p>
        </div>
        <div className={styles.contactInfo}>
          <img  src={linkedinIcon} alt="LinkedIn icon" className={styles.icon} />
          <p><a href="https://www.linkedin.com/in/sachin-nautiyal-201682245/" rel="noreferrer" target='_blank'>LinkedIn</a></p>
        </div>

      </div>
    </div>
  )
}

export default Contact
