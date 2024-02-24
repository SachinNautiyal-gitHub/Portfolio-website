import React from 'react'
import styles from './projects.module.css'
import project1 from '../../images/Project1.png'
import project2 from '../../images/Project2.png'
import project3 from '../../images/Project3.png'
import project4 from '../../images/Project4.png'
import project5 from '../../images/Project5.png'
import project6 from '../../images/Project6.png'

import upArrow from '../../images/uparrow.png'
import downArrow from '../../images/arrow.png'

const Projects = () => {
  return (
    <>
    <div className={styles.projects} id='projects'>
     <h1>My Projects</h1>
     <div className={styles.container}>
      
      <div className={styles.projectContainer}>
         <img src={project1} alt="" />
         <div className={styles.buttons}>
          <a href="https://github.com/SachinNautiyal-gitHub/Resume-Builder"><button>Source code</button></a>
          <a href=""><button>Live Demo</button></a>
         </div>
      </div>
      <div className={styles.projectContainer}>
      <img src={project2} alt="" />
      <div className={styles.buttons}>
          <a href="https://github.com/SachinNautiyal-gitHub/Image-Gallery"><button>Source code</button></a>
          <a href=""><button>Live Demo</button></a>
         </div>
      </div>
      <div className={styles.projectContainer}>
      <img src={project3} alt="" />
      <div className={styles.buttons}>
          <a href=""><button>Source code</button></a>
          <a href=""><button>Live Demo</button></a>
         </div>
      </div>
      <div className={styles.projectContainer}>
      <img src={project4} alt="" />
      <div className={styles.buttons}>
          <a href=""><button>Source code</button></a>
          <a href=""><button>Live Demo</button></a>
         </div>
      </div>
      <div className={styles.projectContainer}>
      <img src={project5} alt="" />
      <div className={styles.buttons}>
          <a href="https://github.com/SachinNautiyal-gitHub/Simple-Weather-App"><button>Source code</button></a>
          <a href=""><button>Live Demo</button></a>
         </div>
      </div>
      <div className={styles.projectContainer}>
      <img src={project6} alt="" />
      <div className={styles.buttons}>
          <a href=""><button>Source code</button></a>
          <a href=""><button>Live Demo</button></a>
         </div>
      </div>


     </div>
    </div>
    
    
    </>
  )
}

export default Projects
