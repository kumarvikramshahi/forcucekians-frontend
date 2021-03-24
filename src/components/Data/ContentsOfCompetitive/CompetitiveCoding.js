import React from "react"
import styles from "./contentCompetitive.module.css"

export default function CompetitiveCoding() {
    const list = [
        {
            name:"TopCoder",
            link:"https://www.topcoder.com/",
            description:"It is one of the most popular platforms for online programming competitions.TopCoder Community has majorly 4 segments – Design, Development, Data Science, and Competitive Programming."
        },
        {
            name:"HackerRank",
            link:"https://www.hackerrank.com/",
            description:"HackerRank offers you to solve programming challenges in any of various programming languages such as C, Java, Python, Ruby, etc. Apart from this, you can also get job interview and internships offers by taking part in various coding challenges."
        },
        {
            name:" CodeChef",
            link:"https://www.codechef.com/",
            description:"CodeChef conducts a programming competition at the start of every month and also conducts 2 smaller programming contests at the middle and end of the month. You can submit your solution in any of the programming languages."
        },
        {
            name:"Geeks Coding Challenge (GCC)",
            link:"https://www.geeksforgeeks.org/",
            description:"GCC is a 3-day coding contest organized by GeeksforGeeks. The contest is conducted online where you can solve various coding problems and can compete with other programmers online.the total prize amount for Geeks Coding Challenge is worth more than 6 Lakh Rupees consisting of cash prizes, accessories, courses, etc."
        },
        {
            name:"LeetCode",
            link:"https://leetcode.com/",
            description:"Here the contests are generally of a duration of 90 minutes. You can solve the challenges in their own online editor in any one of the supported programming languages. Apart from this, various additional features such as job interview preparation, discussions, etc are also provided on LeetCode"
        },
        {
            name:"Codeforces",
            link:"https://codeforces.com/",
            description:"Codeforces is a Russian website that hosts competitive programming competitions where the number of competitive coders across the world competes with each other. The best thing about Codeforces is that the contests are regularly conducted here as every month they organize nearly 6 contests. Also, participation in the contests is free and open to everybody. "
        },
        {
            name:"HackerEarth",
            link:"https://www.hackerearth.com/",
            description:"HackerEarth offers you to solve programming challenges in any of various programming languages such as C, Java, Python, Ruby, etc. Apart from this, you can also get job interview and internships offers by taking part in various coding challenges."
        }
    ]
    return (
        <article className={styles.divContainer}>
            <header><h1 className={styles.h1}> Best Competitive Coding Websites </h1></header>
            <div className={styles.listCardContainer}>
                {list.map(listItem => <div className={styles.listCard} key={listItem.link}><h2><a className={styles.a} href={listItem.link} rel="noopener noreferrer" target="_blank">{listItem.name} </a></h2><p>{listItem.description} </p> </div> )}
            </div>
        </article>
    )
}