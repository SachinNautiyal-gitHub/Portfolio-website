import React from 'react'
import styles from './home.module.css'
import image from '../../images/IMG20230630145847.jpg'
import HtmlIcon from '../../images/html.png'
import cssIcon from '../../images/css.png'
import tailwindIcon from '../../images/tailwind.png'
import bootstrapIcon from '../../images/bootstrap (2).png'
import javaScriptIcon from '../../images/javascript.png'
import mongoIcon from '../../images/mongodb (2).png'
import expressIcon from '../../images/expressjs.png'
import ReactIcon from '../../images/react.png'
import nodeJsIcon from '../../images/nodejs.png'
import NextIcon from '../../images/nextjs.png'
import cPIcon from '../../images/c++.png'
import NetCoreIcon from '../../images/netcore.png'
import pyhtonIcon from '../../images/python.png'
import AngularIcon from '../../images/angular.png'





const Home = () => {
    return (
        <>
            <div className={styles.home} id='home'>
                <div className={styles.con}>
                    <div className={styles.contant}>
                        <h1>Hello !!</h1>
                        <h2>I'm Sachin Nautiyal..</h2>
                        <h1 style={{ color: '#CCA01D' }}>Full-Stack Web Developer</h1>
                    </div>



                    <div className={styles.image}>
                        <img src={image} alt="" />
                    </div>
                </div>
               

               <div className={styles.techSTack}>
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



               </div>

            </div>

        </>
    )
}

export default Home
