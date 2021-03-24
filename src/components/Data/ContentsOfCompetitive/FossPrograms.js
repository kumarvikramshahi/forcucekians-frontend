import React from "react"
import styles from "./contentCompetitive.module.css"

export default function FossPrograms() {
    const list = [
        {
            program: "fossasia Codeheat",
            timeline: "'happens throughout the year'",
            prize: "swags and merchandise",
            officialWebsite: "https://codeheat.org/",
        },
        {
            program: "Google Summer of Code",
            timeline:"'March to August'",
            prize: "$1500",
            officialWebsite: "https://summerofcode.withgoogle.com/"
        },
        {
            program: "Outreachy",
            timeline:"'Feburary to August'",
            prize: "$6000",
            officialWebsite: "https://www.outreachy.org/"
        },
        {
            program: "Hyperledger",
            timeline:"'March - May || June – August || September – Nov'",
            prize: "$3000 (for Indians)",
            officialWebsite: "https://www.hyperledger.org/"
        },
        {
            program: "GirlScript Summer of Code",
            timeline:"'March to May'",
            prize: "Based on performance",
            officialWebsite: "https://gssoc.girlscript.tech/"
        },
        {
            program: "Rails Girls Summer of Code (RGSoC)",
            timeline:"March to September",
            prize: "Variable",
            officialWebsite: "https://railsgirlssummerofcode.org/"
        },
        {
            program:"MLH Fellowship",
            timeline:"'February to April || May to August'",
            prize: "variable (upto $5000)",
            officialWebsite: "https://fellowship.mlh.io/"
        },
        {
            program: "Hacktoberfest ",
            timeline:"'In October'", 
            prize: "Swags",
            officialWebsite: "https://hacktoberfest.digitalocean.com/"
        },
        {
            program: "The Linux Foundation Mentorship Program",
            timeline:"'March - May || June – August || September – Nov'",
            prize: "$3000 (for Indians)",
            officialWebsite: "https://linuxfoundation.org/en/about/diversity-inclusivity/mentorship/"
        },
        {
            program: "Season of KDE",
            timeline:"'December - May'",
            prize: "Merchandise and Swag",
            officialWebsite: "https://season.kde.org/"
        },
        {
            program: "Alibaba Summer of Code",
            timeline:"'May to September'",
            prize: "based on projects",
            officialWebsite: "https://www.alibabacloud.com/blog/alibaba-summer-of-code-2020-leading-the-new-open-source-trend_596241"
        },
        {
            program: "Google Season of Docs",
            timeline:"'April to November'",
            prize: "$3000 (for Indians)",
            officialWebsite: "https://developers.google.com/season-of-docs"
        },
        {
            program: "Open Mainframe Project",
            timeline:"'March - May || June – August || September – Nov'",
            prize: "Experience",
            officialWebsite: "https://www.openmainframeproject.org/"
        },
        {
            program: "Free Software Foundation (FSF)",
            timeline:"' three terms: summer, fall, and spring'",
            prize: "experience",
            officialWebsite: "https://www.fsf.org/volunteer/internships"
        },
        {
            program: "The Processing Foundation Fellowships",
            timeline:"'Applicaition open in first week of April'",
            prize: "$3000",
            officialWebsite: "https://processingfoundation.org/"
        }
    ]
    return (
        <article className={styles.divContainer}>
            <header><h1 className={styles.h1}> Open Source Programs </h1></header>
            <p>There are some of the programs (Internships) conducted by different communities or companies to promote Open Source softwares and projects. Some of them are paid and some are not but they will give you a lots of <b>fun & experience</b> . These programs will give you <b>experience about real use of technoloigies</b> you have learnt or will learn.</p>
            <div className={styles.listCardContainer}>
                {list.map(listItem => <div className={styles.listCard} key={listItem.officialWebsite}><h2><a className={styles.a} href={listItem.officialWebsite} rel="noopener noreferrer" target="_blank">{listItem.program} </a></h2><p>Timeline: '{listItem.timeline}'<br />Prizes: '{listItem.prize}'</p></div>)}
            </div>
        </article>
    )
}