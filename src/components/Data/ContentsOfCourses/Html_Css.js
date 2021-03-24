import React from "react"
import styles from "./contentCourses.module.css"

export default function Html_Css() {
    const lectureList = [
        {
            name: "W3Schools.com (documentation)",
            link: "https://www.w3schools.com/"
        },
        {
            name: "GeeksforGeeks (documentation)",
            link: "https://www.geeksforgeeks.org/html-tutorials/"
        },
        {
            name: "code with harry (YouTube)",
            link: "https://youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg"
        },
        {
            name: "Apna College (YouTube)",
            link: "https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
        },
        {
            name: "SoloLearn (App on play Store)",
            link: "https://play.google.com/store/apps/details?id=com.sololearn"
        }
    ]
    return (
        <div className={styles.divContainer}>
            <h1 className={styles.h1}> HTML/CSS </h1>
            <div className={styles.lecturesCard}>
                <h2 className={styles.h2}>Free resources of lectures - </h2>
                <ol className={styles.ol}>
                    {lectureList.map(listItem => <li key={listItem.link}><a className={styles.lectureLinks} href={listItem.link} rel="noopener noreferrer" target="_blank"> {listItem.name} </a></li>)}
                </ol>
            </div>
            <div className={styles.applicationCard}>
                <h2 className={styles.h2}>Applications - </h2>
                <i><b>Note:</b> you will learn more either by  googling yourselves or exploring the topic yourselves you can't learn as much from others experience as you learn from yours.</i>
                <h3 className={styles.h3}>1.Web Development</h3>
                <p>HTML/CSS is base of a web page where HTML is used in creating content for website and css is used for desingning (styling) the website.</p>
                <h3 className={styles.h3}>2.Web Designing</h3>
                <p>HTML/CSS is also used for designing purpose of a website or a web app.</p>
            </div>
        </div>
    )
}