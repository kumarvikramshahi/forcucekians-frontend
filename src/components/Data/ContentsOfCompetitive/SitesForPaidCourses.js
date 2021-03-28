import React from "react"
import { useRouteMatch, Switch, Route, NavLink } from "react-router-dom"
import styles from "./contentCompetitive.module.css"
import TrickForFreeUdemyCourse from "./TrickForFreeUdemyCourse"

export default function SitesForPaidCourses() {
    let { url } = useRouteMatch();
    const list = [
        {
            name: "Udemy",
            link: "https://www.udemy.com/",
            descrption:
                <ul>
                    <li>
                        <NavLink onClick={() => window.scrollTo(0, 500)} activeClassName={styles.activeNavLink} className={styles.navLink} to={`${url}/tricksToGetAnyUdemyCoursesInFree`}> Click here
                    </NavLink> for 'Tricks to get any Udemy courses in free'.
                   </li>
                </ul>
        },
        {
            name: "Coursera",
            link: "https://www.coursera.org/",
            descrption: ""
        },
        {
            name: "Coding Ninjas",
            link: "https://www.codingninjas.com/",
            descrption: ""
        },
        {
            name: "Udacity",
            link: "https://www.udacity.com/",
            descrption: ""
        },
        {
            name: "Pluralsight",
            link: "https://www.pluralsight.com/",
            descrption: ""
        },
        {
            name: "edx",
            link: "https://www.edx.org/",
            descrption: ""
        },
        {
            name: "Codecademy",
            link: "https://www.codecademy.com/",
            descrption: ""
        }
    ]
    return (
        <article className={styles.divContainer}>
            <header><h1 className={styles.h1}> Best Sites For Paid Online Courses </h1></header>
            <ul>
                {list.map(listItem => <li key={listItem.link}><a href={listItem.link} rel="noopener noreferrer" target="_blank">{listItem.name} </a> {listItem.descrption} </li>)}
            </ul>
            <p>All of the above websites are best, just pick any of them and start learning. Don't waste time on choosing platforms.</p>
            <hr />
            <div className={styles.listCard}>
                <Switch>
                    <Route exact path={`${url}/tricksToGetAnyUdemyCoursesInFree`} component={TrickForFreeUdemyCourse} />
                </Switch>
            </div>
        </article>
    )
}