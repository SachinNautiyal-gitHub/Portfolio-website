import React from 'react'
import styles from './home.module.css'
import image from '../../images/my2.png'
import downArrow from '../../images/arrow.png'


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
                            <a href="https://drive.google.com/file/d/1FVMMDv_b4FsGqEWxkTjmODXIghV-_inq/view?usp=sharing" rel='noreferrer' target='_blank'><button className={styles.button1}>Download CV</button></a>
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

             <a href="#about" className={styles.Arrow}><img src={downArrow} className={styles.icon} alt="" /></a>

            </div>

        </>
    )
}

export default Home
