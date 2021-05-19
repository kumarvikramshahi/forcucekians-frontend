import React from "react"
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom"
import SideBar from "../../CommonToAll/SideBar"
import CoursesSideBarList from "../../Data/SideBarList/CoursesSideBarList"
import Add from "../../CommonToAll/Add"
import ToTop from "../../CommonToAll/ToTop"
import Error from "../../CommonToAll/Error"
import styles from "./Courses.module.css"
import C_Cpp from "../../Data/ContentsOfCourses/C_Cpp"
import Java from "../../Data/ContentsOfCourses/Java"
import Html_Css from "../../Data/ContentsOfCourses/Html_Css"
import JavaScript from "../../Data/ContentsOfCourses/JavaScript"

export default function Courses() {
    let { url } = useRouteMatch()
    const list = CoursesSideBarList.map(listItem =>
        <NavLink
            activeClassName={styles.sideBarCoursesActive}
            className={styles.sideBarCourses}
            key={listItem.href}
            to={`${url}/${listItem.href}`} >
            {listItem.name}
        </NavLink>
    )
    return (
        <div className={styles.courses}>
            <div className={styles.coursesParent}>
                <div>
                    <SideBar list={list} />
                </div>
                <main className={styles.switchTag}>
                    <Switch>
                        <Route exact path="/courses" component={C_Cpp} />
                        <Route exact path={`${url}/c_cpp`} component={C_Cpp} />
                        <Route exact path={`${url}/java`} component={Java} />
                        <Route exact path={`${url}/html_css`} component={Html_Css} />
                        <Route exact path={`${url}/javaScript`} component={JavaScript} />
                        <Route exact component={Error} />
                    </Switch>
                </main>
                <Add />
            </div>
            <ToTop />
        </div>
    )
}
