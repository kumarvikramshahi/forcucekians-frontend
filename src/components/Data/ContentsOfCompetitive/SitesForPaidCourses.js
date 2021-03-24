import React from "react"
import styles from "./contentCompetitive.module.css"

export default function SitesForPaidCourses() {
    const list = [
        {
            name: "Udemy",
            link: "https://www.udemy.com/",
        },
        {
            name: "Coursera",
            link: "https://www.coursera.org/"
        },
        {
            name: "Coding Ninjas",
            link: "https://www.codingninjas.com/"
        },
        {
            name: "Udacity",
            link: "https://www.udacity.com/"
        },
        {
            name: "Pluralsight",
            link: "https://www.pluralsight.com/"
        },
        {
            name: "edx",
            link: "https://www.edx.org/"
        },
        {
            name: "Codecademy",
            link: "https://www.codecademy.com/"
        }
    ]
    return (
        <article className={styles.divContainer}>
            <header><h1 className={styles.h1}> Best Sites For Paid Online Courses </h1></header>
            <ul>
                {list.map(listItem => <li key={listItem.link}><a href={listItem.link} rel="noopener noreferrer" target="_blank">{listItem.name} </a></li>)}
            </ul>
            <p>All of the above websites are best, just pick any of them and start learning. Don't waste time on choosing platforms.</p>
        </article>
    )
}