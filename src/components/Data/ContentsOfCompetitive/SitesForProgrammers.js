import React from "react"
import styles from "./contentCompetitive.module.css"

export default function SitesForProgrammers() {
    const list = [
        {
            name: "StackOverflow",
            link: "https://stackoverflow.com/",
            description: "It is an open community for anyone that codes. Here you can discuss your problems and can also solve other's problems."
        },
        {
            name:"Quora",
            link:"https://www.quora.com/",
            description:"Quora is a place to gain and share knowledge. It's a platform to ask questions and connect with people who contribute unique insights and quality answers."
        },
        {
            name:"LinkedIn",
            link:"https://in.linkedin.com/",
            description:"LinkedIn is Social media that is mainly used for professional networking, and allows job seekers to post their CVs and employers to post jobs."
        },
        {
            name:"Github",
            link:"https://github.com/",
            description:"It is a provider of Internet hosting for software development and version control using Git. basically, this is the place where you can host you project in free, can contribute to open source projects, and also by using as a student developer you can access many premium freatures in free."
        },
        {
            name:"Stack Exchange",
            link:"https://stackexchange.com/",
            description:"It's a network of question-and-answer websites on topics in diverse fields, each site covering a specific topic, where questions, answers, and users are subject to a reputation award process. "
        },
        {
            name:"Reddit",
            link:"https://www.reddit.com/",
            description:"Reddit is a social news aggregation, web content rating, and discussion website.It's a social media for developers, just find communities you're interested in, and become part of an online community!",
        },
        
        {
            name:"Hacker News",
            link:"https://news.ycombinator.com/",
            description:" Hacker News is the go-to site for developer news related to all the things that might be weighing on your mind at any given time."
        },
        {
            name:"Google Developers",
            link:"https://developers.google.com/",
            description:"The internet’s leading entity seeks to inspire coders with tutorials and tips. You’ll also find an abundance of other tools and resources ranging from Google’s many consoles for developers (the Google API Console, Google Play Store Developer Console, and others)."
        },
        {
            name:"DevDocs",
            link:"https://devdocs.io/",
            description:"It's an open source app that allows you to search documentation of all popular programming languages and frameworks. one place to search all the docs."
        },
        {
            name:"Glassdoor",
            link:"https://www.glassdoor.co.in/index.htm",
            description:"Glassdoor is a website where employees review their companies. so if you wanna know about any company's enviroment then this site is for you."
        }
    ]
    return (
        <article className={styles.divContainer}>
            <header><h1 className={styles.h1}> Best Sites to follow as a Developer </h1></header>
            <div className={styles.listCardContainer}>
                {list.map(listItem => <div className={styles.listCard} key={listItem.link}><h2><a className={styles.a} href={listItem.link} rel="noopener noreferrer" target="_blank">{listItem.name} </a></h2><p>{listItem.description} </p> </div>)}
            </div>
            <p>These websites will help you a lot in many ways, so try to do follow these websites regularly. </p>
        </article>
    )
}