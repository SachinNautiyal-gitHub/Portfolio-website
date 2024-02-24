import React from 'react'
import styles from './about.module.css'
import myImage from '../../images/my.png'
import experienceIcon from '../../images/experience.png'
import educationIcon from '../../images/education.png'
import downArrow from '../../images/arrow.png'
import upArrow from '../../images/uparrow.png'

const About = () => {
  return (
    <>

      <div className={styles.about} id='about'>
      <a href="#home" className={styles.Arrow}><img src={upArrow} className={styles.icon} alt="" /></a>
       <p className={styles.text1}> Get To Know more</p>
       <h1>About Me</h1>
       
       <div className={styles.container}>
       <div className={styles.picContainer}>
         <img src={myImage} alt="" />
       </div>
       <div className={styles.aboutDetails}>
          <div className={styles.info}>
            <div className={styles.detail}>
            <img src={experienceIcon} alt="Experience icon" class={styles.icon} />
              <h3>Experience</h3>
              <p>1+ year <br />Full-Stack Development</p>
            </div>
            <div className={styles.detail}>
            <img src={educationIcon} alt="Education icon" class={styles.icon} />
            <h3>Education</h3>
            <p>B.Sc. Bachelors Degree<br />Diploma in Full-Stack Web Development from Almabetter</p>

            </div>
          </div>
         <div className={styles.textContainer}>
          <p>Welcome to my portfolio! I'm Sachin Nautiyal, a Full Stack Web Developer specializing in the MERN stack, with additional strengths in C++ for data structures and algorithms problem-solving. I navigate seamlessly between front-end technologies like Next.js and the back-end prowess of MongoDB, Express.js, React, and Node.js. Explore my projects to witness the harmonious blend of creativity and technical acumen in crafting dynamic web applications and solving complex algorithmic challenges.</p>
         </div>
       </div>

       </div>

       <a href="#skills" className={styles.Arrow}><img src={downArrow} className={styles.icon} alt="" /></a>
      </div>

    </>
  )
}

export default About
