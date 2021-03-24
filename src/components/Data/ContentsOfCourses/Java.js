import React from "react"
import styles from "./contentCourses.module.css"

export default function Java() {
    const lectureList = [
        {
            name: "GeeksforGeeks (documentation)",
            link: "https://www.geeksforgeeks.org/java/"
        },
        {
            name: "Oracle (documentation)",
            link: "https://docs.oracle.com/javase/tutorial/index.html"
        },
        {
            name: "code with harry (YouTube)",
            link: "https://youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q"
        },
        {
            name: "Apna College (YouTube)",
            link: "https://youtube.com/playlist?list=PLKKfKV1b9e8ps6dD3QA5KFfHdiWj9cB1s"
        },
        {
            name: "SoloLearn (App on play Store)",
            link: "https://play.google.com/store/apps/details?id=com.sololearn"
        }
    ]
    return (
        <div className={styles.divContainer}>
            <h1 className={styles.h1}> Java </h1>
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
                <p>Java is also used to develop web applications. It provides a vast support for web applications through Servlets, Struts or JSPs</p>
                <h3 className={styles.h3}>2. Mobile Applications </h3>
                <p>Java Platform, Micro Edition (Java ME or J2ME) is a cross-platform framework to build applications that run across all Java supported devices, including feature phones and smart phones.</p>
                <h3>3. Enterprise Applications </h3>
                <p>Java Enterprise Edition (Java EE) is a popular platform that provides API and runtime environment for scripting and running enterprise software, including network applications and web-services.</p>
            </div>
        </div>
    )
}