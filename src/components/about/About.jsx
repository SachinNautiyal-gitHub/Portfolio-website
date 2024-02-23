import React from 'react'
import styles from './about.module.css'

const About = () => {
  return (
    <>

      <div className={styles.about} id='about'>

        <h1>About Me</h1>

        <div className={styles.description}>
          Welcome to my digital space! I am a passionate and versatile Full Stack Web Developer with a specialization in the MERN (MongoDB, Express.js, React, Node.js) stack and C++ development. My journey in the world of programming is marked by a deep understanding of Data Structures and Algorithms (DSA), which forms the backbone of my problem-solving skills.
          <br />
          In the dynamic realm of web development, I bring proficiency in crafting robust and scalable applications. From server-side logic in Node.js to creating responsive and intuitive user interfaces with React, I thrive on bringing ideas to life in the digital landscape. My expertise extends to working with MongoDB for efficient data management and Express.js for building robust and secure server applications.
          <br />
          <br />
          Whether it's developing the backend logic, designing captivating front-end interfaces, or optimizing database performance, my goal is to create web applications that not only meet but exceed expectations. Join me on this exciting journey where technology meets innovation, and together, we can turn your ideas into reality. Explore my portfolio to witness the fusion of creativity, precision, and functionality in every project I undertake.
          <br />

          <div className={styles.buttons}>
            <a href="https://www.upwork.com/freelancers/~01b7353984e10e506c?mp_source=share" target='_blank'><button className={styles.upworkButton} > Hire me on Upwork</button></a>
            <a href="https://github.com/SachinNautiyal-gitHub" target='_blank'><button className={styles.githubButton}> GitHub</button></a>
            <a href="https://www.linkedin.com/in/sachin-nautiyal-201682245/" target='_blank'><button className={styles.linkedinButton}>Linkedin</button></a>
            <a href="/" target='_blank'><button className={styles.resumeButton}>My Resume</button></a>
          </div>


        </div>


      </div>

    </>
  )
}

export default About
