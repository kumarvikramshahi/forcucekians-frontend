import React from "react"
import styles from "./contentCourses.module.css"

export default function JavaScript() {
    const lectureList = [
        {
            name: "W3Schools.com (documentation)",
            link: "https://www.w3schools.com/js/default.asp"
        },
        {
            name: "GeeksforGeeks (documentation)",
            link: "https://www.geeksforgeeks.org/javascript-tutorial/"
        },
        {
            name: "code with harry (YouTube)",
            link: "https://youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL"
        },
        {
            name: "SoloLearn (App on play Store)",
            link: "https://play.google.com/store/apps/details?id=com.sololearn"
        }
    ]
    return (
        <div className={styles.divContainer}>
            <h1 className={styles.h1}>JavaScript</h1>
            <div className={styles.lecturesCard}>
                <h2 className={styles.h2}>Free resources of lectures - </h2>
                <ol className={styles.ol}>
                    {lectureList.map(listItem => <li key={listItem.link}><a className={styles.lectureLinks} href={listItem.link} rel="noopener noreferrer" target="_blank"> {listItem.name} </a></li>)}
                </ol>
            </div>
            <div className={styles.applicationCard}>
                <h2 className={styles.h2}>Application - </h2>
                <i><b>Note:</b> you will learn more either by  googling yourselves or exploring the topic yourselves you can't learn as much from others experience as you learn from yours.</i>
                <h3 className={styles.h3}>1.Web Development</h3>
                <p>JS is like brain for a website, by using JS you will able to design any thing that you can't do with help of css, it provide functionalty to a button or tell website what to do at given state.</p>
                <h3 className={styles.h3}>2.Backend Development</h3>
                <p>Yup, you heard write JS is used also for backend development, Node.js that provide a run time enviroment for javaScript.</p>
                <h3 className={styles.h3}>3.Mobile Application</h3>
                <p>React.js and React native these two are frameworks of JS that is developed by facebook and many popular apps have been developed in React native like instagram, fb, Bloomberg. It provides simplicity of developing apps for multiple paltform simultaneously.</p>
            </div>
        </div>
    )
}