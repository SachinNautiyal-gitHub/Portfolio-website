import React from 'react'
import styles from './skills.module.css'

import downArrow from '../../images/arrow.png'
import upArrow from '../../images/uparrow.png'

import htmlIcon from '../../images/HTML.png'
import CssIcon from '../../images/CSS.png'
import javaScriptIcon from '../../images/javaScript.png'
import ReactIcon from '../../images/react.png'
import pythonIcon from '../../images/python.png'
import CIcon from '../../images/c++.png'
import bootstrapIcon from '../../images/bootstrap.png'
import djangoIcon from '../../images/django.png'
import expressIcon from '../../images/express.png'
import firebaseIcon from '../../images/firebase.png'
import gitIcon from '../../images/git.png'
import herokuIcon from '../../images/heroku.png'
import mariaDBIcon from '../../images/mariaDB.png'
import materialUIIcon from '../../images/materialUI.png'
import mongoIcon from '../../images/mongoDB.png'
import mySqlIcon from '../../images/MySql.png'
import netlifyIcon from '../../images/netlify.png'
import NextIcon from '../../images/NEXT.png'
import nodeIcon from '../../images/node.png'
import reduxIcon from '../../images/redux.png'
import renderIcon from '../../images/render.png'
import tailwindIcon from '../../images/tailwind.png'
import vercelIcon from '../../images/vercel.png'
import ASPNETIcon from '../../images/ASP.net.png'
import githubIcon from '../../images/github.png'


const Skills = () => {
  return (
    <div className={styles.skills} id='skills'>
      <a href="#about" className={styles.Arrow}><img src={upArrow} className={styles.icon} alt="" /></a>
      <p>Explore My</p>
      <h1>Skills</h1>
      <div className={styles.allSkills}>
        <div className={styles.con}>
          <p>Scripting Languages</p>
          <div className={styles.articleContainer}>
            <article>
              <img src={htmlIcon} className={styles.icon} alt="checkmark" />
              <p>HTML</p>
            </article>
            <article>
              <img src={CssIcon} className={styles.icon} alt="checkmark" />
              <p>CSS</p>
            </article>
            <article>
              <img src={javaScriptIcon} className={styles.icon} alt="checkmark" />
              <p>JavaScript</p>
            </article>
            <article>
              <img src={ReactIcon} className={styles.icon} alt="checkmark" />
              <p>React</p>
            </article>
            <article>
              <img src={CIcon} className={styles.icon} alt="checkmark" />
              <p>C++</p>
            </article>
            <article>
              <img src={reduxIcon} className={styles.icon} alt="checkmark" /> 
              <p>Redux</p>
            </article>
          </div>
        </div>
        <div className={styles.con}>
          <p>FrameWorks</p>
          <div className={styles.articleContainer}>
            <article>
              <img src={NextIcon} className={styles.icon} alt="checkmark" />
              <p>Next.js</p>
            </article>
            <article>
              <img src={materialUIIcon} className={styles.icon} alt="checkmark" />
              <p>materialUI</p>
            </article>
            <article>
              <img src={bootstrapIcon} className={styles.icon} alt="checkmark" />
              <p>BootStrap</p>
            </article>
            <article>
              <img src={tailwindIcon} className={styles.icon} alt="checkmark" />
              <p>Tailwind CSS</p>
            </article>
          </div>
        </div>

        <div className={styles.con}>
          <p>Backend</p>
          <div className={styles.articleContainer}>
            <article>
              <img src={nodeIcon} className={styles.icon} alt="checkmark" />
              <p>Node JS</p>
            </article>
            <article>
              <img src={pythonIcon} className={styles.icon} alt="checkmark" />
              <p>Python</p>
            </article>
            <article>
              <img src={expressIcon} className={styles.icon} alt="checkmark" />
              <p>Express.js</p>
            </article>
            <article>
              <img src={ASPNETIcon} className={styles.icon} alt="checkmark" />
              <p>ASP.NET</p>
            </article>
            <article>
              <img src={djangoIcon} className={styles.icon} alt="checkmark" />
              <p>Django</p>
            </article>
          </div>
        </div>


        <div className={styles.con}>
          <p>DataBases</p>
          <div className={styles.articleContainer}>
            <article>
              <img src={mongoIcon} className={styles.icon} alt="checkmark" />
              <p>MongoDB</p>
            </article>
            <article>
              <img src={mySqlIcon} className={styles.icon} alt="checkmark" />
              <p>MySQL</p>
            </article>
            <article>
              <img src={mariaDBIcon} className={styles.icon} alt="checkmark" />
              <p>MariaDB</p>
            </article>
            <article>
              <img src={firebaseIcon} className={styles.icon} alt="checkmark" />
              <p>FireBase DB</p>
            </article>
          </div>
        </div>

        <div className={styles.con}>
          <p>Hosting Platform</p>
          <div className={styles.articleContainer}>
            <article>
              <img src={netlifyIcon} className={styles.icon} alt="checkmark" />
              
                <p>Netlify</p>
      
            </article>
            <article>
              <img src={githubIcon} className={styles.icon} alt="checkmark" />
              <p>Github Pages</p>
            </article>
            <article>
              <img src={vercelIcon} className={styles.icon} alt="checkmark" />
              <p>Vercel</p>
            </article>
            <article>
              <img src={herokuIcon} className={styles.icon} alt="checkmark" />
              <p>Heroku</p>
            </article>
            <article>
              <img src={renderIcon} className={styles.icon} alt="checkmark" />
              <p>Render</p>
            </article>
          </div>
        </div>

        <div className={styles.con}>
          <p>Version Control</p>
          <div className={styles.articleContainer}>
            <article>
              <img src={gitIcon} className={styles.icon} alt="checkmark" />
              <p>Git</p>
            </article>

          </div>
        </div>

    
      </div>
      <a href="#projects" className={styles.Arrow}><img src={downArrow} className={styles.icon} alt="" /></a>
    </div>
  )
}

export default Skills
