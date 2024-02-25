import React from 'react'
import styles from './projects.module.css'
import project1 from '../../images/Project1.png'
import project2 from '../../images/Project2.png'
import project3 from '../../images/Project3.png'
import project4 from '../../images/Project4.png'
import project5 from '../../images/Project5.png'
import project6 from '../../images/Project6.png'

import upArrow from '../../images/uparrow.png'

const Projects = () => {
  return (
    <>
    <div className={styles.projects} id='projects'>
    <a href="#skills" className={styles.Arrow}><img src={upArrow} className={styles.icon} alt="" /></a>
     <h1>My Projects</h1>
     <div className={styles.container}>
      
      <div className={styles.projectContainer}>
         <img src={project1} alt="" />   
         <div className={styles.buttons}>
          <a href="https://github.com/SachinNautiyal-gitHub/Resume-Builder" rel="noreferrer" target='_blank'><button>Source code</button></a>
          <a href="https://resumebuilder-project-sachinnautiyal.netlify.app/" rel="noreferrer" target='_blank'><button>Live Demo</button></a>
         </div>
      </div>
      <div className={styles.projectContainer}>
      <img src={project2} alt="" />
      <div className={styles.buttons}>
          <a href="https://github.com/SachinNautiyal-gitHub/Image-Gallery" rel="noreferrer" target='_blank'><button>Source code</button></a>
          <a href="https://nautiyalsachin-project-unsplashclon.netlify.app/" rel="noreferrer" target='_blank'><button>Live Demo</button></a>
         </div>
      </div>
      <div className={styles.projectContainer}>
      <img src={project3} alt="" />
      <div className={styles.buttons}>
          <a href="https://github.com/SachinNautiyal-gitHub"><button>Source code</button></a>
          <a href="https://nautiyal-sachin-project2-textanalyse.netlify.app/" rel="noreferrer" target='_blank'><button>Live Demo</button></a>
         </div>
      </div>
      <div className={styles.projectContainer}>
      <img src={project4} alt="" />
      <div className={styles.buttons}>
          <a href="https://github.com/SachinNautiyal-gitHub/UrL-Shortner" rel="noreferrer" target='_blank'><button>Source code</button></a>
          <a href="https://urlshortner-frontend.onrender.com/" rel="noreferrer" target='_blank'><button>Live Demo</button></a>
         </div>
      </div>
      <div className={styles.projectContainer}>
      <img src={project5} alt="" />
      <div className={styles.buttons}>
          <a href="https://github.com/SachinNautiyal-gitHub/Simple-Weather-App" rel="noreferrer" target='_blank'><button>Source code</button></a>
          <a href="https://weather-app-nautiyal-sachin.netlify.app/" rel="noreferrer" target='_blank'><button>Live Demo</button></a>
         </div>
      </div>
      <div className={styles.projectContainer}>
      <img src={project6} alt="" />
      <div className={styles.buttons}>
          <a href="/"><button>Source code</button></a>
          <a href="/"><button>Live Demo</button></a>
         </div>
      </div>


     </div>
    </div>
    
    
    </>
  )
}

export default Projects
