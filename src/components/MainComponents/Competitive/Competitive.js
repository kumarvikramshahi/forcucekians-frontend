import React from "react"
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom"
import SideBar from "../../CommonToAll/SideBar"
import CompetitiveSideBarList from "../../Data/SideBarList/CompetitiveSideBarList"
import Add from "../../CommonToAll/Add"
import ToTop from "../../CommonToAll/ToTop"
import Error from "../../CommonToAll/Error"
import styles from "./Competitive.module.css"
import FOSS from "../../Data/ContentsOfCompetitive/FOSS"
import FossPrograms from "../../Data/ContentsOfCompetitive/FossPrograms"
import SitesForFreeCourses from "../../Data/ContentsOfCompetitive/SitesForFreeCourses"
import SitesForProgrammers from "../../Data/ContentsOfCompetitive/SitesForProgrammers"
import SitesForPaidCourses from "../../Data/ContentsOfCompetitive/SitesForPaidCourses"
import CompetitiveCoding from "../../Data/ContentsOfCompetitive/CompetitiveCoding"

export default function Competitive() {
    let { url } = useRouteMatch()
    const list = CompetitiveSideBarList.map(listItem => <NavLink activeClassName={styles.sideBarCompetitiveActive} className={styles.sideBarCompetitive} key={listItem.path} to={`${url}/${listItem.path}`}> {listItem.name} </NavLink>)
    return (
        <div className={styles.competitive}>
            <div className={styles.competitiveParent}>
                <div><SideBar list={list} /></div>
                <main>
                    <Switch>
                        <Route exact path="/competitive" component={SitesForFreeCourses} />
                        <Route exact path={`${url}/sitesForFreeCourses`} component={SitesForFreeCourses} />
                        <Route exact path={`${url}/sitesForPaidCourses`} component={SitesForPaidCourses} />
                        <Route exact path={`${url}/sitesForProgrammers`} component={SitesForProgrammers} />
                        <Route exact path={`${url}/openSourceSoftware`} component={FOSS} />
                        <Route exact path={`${url}/openSourcePrograms`} component={FossPrograms} />
                        <Route exact path={`${url}/competitiveCodingWebsites`} component={CompetitiveCoding} />
                        <Route exact component={Error} />
                    </Switch>
                </main>
                <Add />
            </div>
            <ToTop />
        </div>
    )
}
