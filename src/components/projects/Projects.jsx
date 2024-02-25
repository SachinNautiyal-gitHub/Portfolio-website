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
                  <img src={project1} alt="" className={styles.image} />
                  <div class={styles.description}>
                     <h3>Description:</h3><h5> Introducing my Resume Builder App – a powerful tool crafted with React and Material-UI for a seamless user experience. Tailor your professional journey effortlessly with the intuitive interface and real-time previews. The application's React foundation ensures dynamic and responsive pages, while Material-UI styling elevates its visual appeal. This project not only showcases my React expertise but also reflects a commitment to user-centric design.</h5>
                  </div>

                  <div className={styles.buttons}>
                     <a href="https://github.com/SachinNautiyal-gitHub/Resume-Builder" rel="noreferrer" target='_blank'><button>Source code</button></a>
                     <a href="https://resumebuilder-project-sachinnautiyal.netlify.app/" rel="noreferrer" target='_blank'><button>Live Demo</button></a>
                  </div>
               </div>
               <div className={styles.projectContainer}>
                  <img src={project2} alt="" />
                  <div class={styles.description}>
                     <h3>Description:</h3><h5>Presenting my Image Gallery App, a dynamic showcase built with React. Immerse yourself in a seamless visual experience as you explore a curated collection of high-quality images. The responsive design ensures a smooth interaction, while React's efficiency powers the user-friendly interface. Each image is sourced dynamically, This project not only highlights my React skills but also demonstrates a keen eye for design and user experience.</h5>
                  </div>
                  <div className={styles.buttons}>
                     <a href="https://github.com/SachinNautiyal-gitHub/Image-Gallery" rel="noreferrer" target='_blank'><button>Source code</button></a>
                     <a href="https://nautiyalsachin-project-unsplashclon.netlify.app/" rel="noreferrer" target='_blank'><button>Live Demo</button></a>
                  </div>
               </div>
               <div className={styles.projectContainer}>
                  <img src={project3} alt="" />
                  <div class={styles.description}>
                     <h3>Description:</h3><h5>Introducing Text Utilizer, a versatile app skillfully crafted with React. This application enhances your text handling capabilities with a sleek and intuitive interface. Whether it's formatting, transforming, or analyzing text, this app simplifies the process. Powered by React, it ensures a responsive and dynamic user experience. Seamlessly manipulate text with ease, thanks to the app's efficient design and user-friendly features. Text Utilizer is a testament to my proficiency in leveraging React to create practical and user-centric applications. Elevate your text manipulation tasks with this compact and powerful React-based Text Utilizer app.</h5>
                  </div>
                  <div className={styles.buttons}>
                     <a href="https://github.com/SachinNautiyal-gitHub"><button>Source code</button></a>
                     <a href="https://nautiyal-sachin-project2-textanalyse.netlify.app/" rel="noreferrer" target='_blank'><button>Live Demo</button></a>
                  </div>
               </div>
               <div className={styles.projectContainer}>
                  <img src={project4} alt="" />
                  <div class={styles.description}>
                     <h3>Description:</h3><h5> Introducing my MERN-based URL Shortener App—a seamless solution to condense lengthy URLs. This full-stack marvel, powered by MongoDB, Express, React, and Node.js, ensures swift, efficient, and secure link shortening. With a clean and user-friendly interface, users can quickly generate concise URLs, optimizing sharing and tracking. This project exemplifies my proficiency in developing end-to-end web applications, combining a robust backend with a responsive frontend for a streamlined user experience. Simplify your links and elevate your web app experience with this compact and powerful URL Shortener App.</h5>
                  </div>
                  <div className={styles.buttons}>
                     <a href="https://github.com/SachinNautiyal-gitHub/UrL-Shortner" rel="noreferrer" target='_blank'><button>Source code</button></a>
                     <a href="https://urlshortner-frontend.onrender.com/" rel="noreferrer" target='_blank'><button>Live Demo</button></a>
                  </div>
               </div>
               <div className={styles.projectContainer}>
                  <img src={project5} alt="" />
                  <div class={styles.description}>
                     <h3>Description:</h3><h5>Introducing my Weather API application, a dynamic React.js project seamlessly integrated with RapidAPI. This user-friendly app provides real-time weather information with a sleek interface. Leveraging React.js ensures a responsive and engaging user experience, while RapidAPI supplies accurate and up-to-date weather data. Users can access current conditions, forecasts, and more, making informed decisions based on weather insights. This exemplifies my proficiency in React.js and API integration, delivering a compact yet powerful Weather API app for those seeking instant & reliable weather updates. Stay ahead with this efficient and visually appealing solution for weather information.</h5>
                  </div>
                  <div className={styles.buttons}>
                     <a href="https://github.com/SachinNautiyal-gitHub/Simple-Weather-App" rel="noreferrer" target='_blank'><button>Source code</button></a>
                     <a href="https://weather-app-nautiyal-sachin.netlify.app/" rel="noreferrer" target='_blank'><button>Live Demo</button></a>
                  </div>
               </div>
               <div className={styles.projectContainer}>
                  <img src={project6} alt="" />
                  <div class={styles.description}>
                     <h3>Description:</h3><h5> Introducing my Notes Store App, a comprehensive MERN stack application with user authentication, bringing the convenience of cloud-based note-taking to your fingertips. Securely store and access your notes from anywhere with MongoDB, Express, React, and Node.js. This full-stack marvel ensures a seamless user experience, combining a robust backend for data storage with a responsive React frontend. The user authentication feature adds an extra layer of privacy, allowing users to access their personalized notes securely. Elevate your note-taking experience with this MERN-powered app, showcasing my proficiency in building end-to-end solutions with user-centric features.</h5>
                  </div>
                  <div className={styles.buttons}>
                     <a href="https://github.com/SachinNautiyal-gitHub/My-Notes-App-MERN--Project-" rel="noreferrer" target='_blank'><button>Source code</button></a>
                     <a href="https://my-notes-app-mern-project.vercel.app/" rel="noreferrer" target='_blank'><button>Live Demo</button></a>
                  </div>
               </div>


            </div>
         </div>


      </>
   )
}

export default Projects
