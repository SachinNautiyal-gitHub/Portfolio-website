import React from 'react'
import styles from './home.module.css'
import image from '../../images/my.png'
// import HtmlIcon from '../../images/html.png'
// import cssIcon from '../../images/css.png'
// import tailwindIcon from '../../images/tailwind.png'
// import bootstrapIcon from '../../images/bootstrap (2).png'
// import javaScriptIcon from '../../images/javascript.png'
// import mongoIcon from '../../images/mongodb (2).png'
// import expressIcon from '../../images/expressjs.png'
// import ReactIcon from '../../images/react.png'
// import nodeJsIcon from '../../images/nodejs.png'
// import NextIcon from '../../images/nextjs.png'
// import cPIcon from '../../images/c++.png'
// import NetCoreIcon from '../../images/netcore.png'
// import pyhtonIcon from '../../images/python.png'
// import AngularIcon from '../../images/angular.png'


import githubIcon from '../../images/github.png'
import linkedinIcon from '../../images/linkedin.png'
import upworkIcon from '../../images/upwork2.png'




const Home = () => {
    return (
        <>
            <div className={styles.home} id='home'>
                <div className={styles.con}>

                    <div className={styles.image}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.contant}>
                        <p className={styles.text_P1}>Hello, I'm </p>
                        <h1 className={styles.title}>Sachin Nautiyal</h1>
                        <p className={styles.text_P2}>Full-Stack Web Developer</p>

                        <div className={styles.buttons}>
                            <a href="/"><button className={styles.button1}>Download CV</button></a>
                            <a href="#contact" style={{ scrollBehavior: 'smooth', }}><button className={styles.button2}>Contact Me</button></a>
                        </div>

                        <div className={styles.socialMedia}>
                            <a href="https://www.linkedin.com/in/sachin-nautiyal-201682245/" rel="noreferrer" target='_blank'><img src={linkedinIcon} alt="" /></a>
                            <a href="https://github.com/SachinNautiyal-gitHub" rel="noreferrer" target='_blank'><img src={githubIcon} alt="" /></a>
                        </div>

                        <div className={styles.upwork}>

                            <p>Hire Me On </p><a href="https://www.upwork.com/freelancers/~01b7353984e10e506c" rel='noreferrer'  target='_blank'><img className={styles.upworkImage} src={upworkIcon} alt="upwork logo" /></a>
                        </div>
                    </div>




                </div>


                {/* <div className={styles.techSTack}>
                <h2>Tech STack</h2>
                 <img src={HtmlIcon} alt="" />
                 <img src={cssIcon} alt="" />
                 <img src={tailwindIcon} alt="" />
                 <img src={bootstrapIcon} alt="" />
                 <img src={javaScriptIcon} alt="" />
                 <img src={mongoIcon} alt="" />
                 <img src={expressIcon} alt="" />
                 <img src={ReactIcon} alt="" />
                 <img src={nodeJsIcon} alt="" />
                 <img src={NextIcon} alt="" />
                 <img src={cPIcon} alt="" />
                 <img src={NetCoreIcon} alt="" />
                 <img src={pyhtonIcon} alt="" />
                 <img src={AngularIcon} alt="" />



               </div> */}

            </div>

        </>
    )
}

export default Home
