import React from "react"
import styles from "./contentCompetitive.module.css"

export default function SitesForFreeCourses() {
    const list = [
        {
            name:"GeeksforGeeks",
            officialWebsite:"https://www.geeksforgeeks.org/",
            description:"This one contains well written, well explained computer science and programming articles, quizzes and also is a handpicked website for placement preperation."
        },
        {
            name:"W3School",
            officialWebsite:"https://www.w3schools.com/",
            description:"It is a training website for learning web technologies online. I think this one is the best website for learning web development."
        },
        {
            name:"Khan Academy",
            officialWebsite:"https://www.khanacademy.org",
            description:"It aims to create a set of online tools that help educate students, produces short lessons in the form of videos and also includes supplementary practice exercises and materials for educators."
        },
        {
            name:"freecodecamp",
            officialWebsite:"https://www.freecodecamp.org/",
            description:"It contains video tutorials for multiple courses they have also their youtube channel where they put courses in one videos but they do not contain all topics, for covering whole topics you will have to visit their website."
        },
        {
            name:"edx",
            officialWebsite:"https://www.edx.org/",
            description:"It hosts online university-level courses in a wide range of disciplines to a worldwide student body, including some courses at no charge, created by Harvard and MIT. They don't charges for courses but to obtain certificates you will have to pay for it."
        },
        {
            name:"NPTEL",
            officialWebsite:"https://nptel.ac.in/",
            description:"Courses are made by highly experienced professors and HOD of IITs and IISc. nptel is initiative by Ministry of Human Resource development along with all the old prestigious IITs and IISc Bangalore."
        },
        {
            name:"YouTube",
            officialWebsite:"https://www.youtube.com/",
            description:"Many tutorials videos and courses are there and the main thing many of them are of best quality, if you want to learn any course search on youtube also."
        },
        {
            name:"SoloLearn",
            officialWebsite:"https://play.google.com/store/apps/details?id=com.sololearn",
            description:"It's an app that have lots of courses, you can also code on this app they have compiler for multiple programming languages.and the best thing is you can do these things on your smartphone."
        }
    ]
    return (
        <article className={styles.divContainer}>
            <header><h1 className={styles.h1}> Best Sites For Free Online Courses </h1></header>
            <div className={styles.listCardContainer}>
                {list.map(listItem => <div className={styles.listCard} key={listItem.officialWebsite}><h2><a className={styles.a} href={listItem.officialWebsite} rel="noopener noreferrer" target="_blank">{listItem.name} </a></h2><p>{listItem.description} </p> </div> )}
            </div>
        </article>
    )
}