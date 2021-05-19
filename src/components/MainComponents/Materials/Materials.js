import React from "react"
import { useRouteMatch, Switch, Route, NavLink } from "react-router-dom"
import Notes from "./ContentsMaterials/Notes"
import QuePaper from "./ContentsMaterials/QuePaper"
import Books from "./ContentsMaterials/Books"
import SideBar from "../../CommonToAll/SideBar"
import MaterialsSideBarList from "../../Data/SideBarList/MaterialsSideBarList"
import Add from "../../CommonToAll/Add"
import ToTop from "../../CommonToAll/ToTop"
import Error from "../../CommonToAll/Error"
import styles from "./Materials.module.css"

export default function Materials() {
    let { url } = useRouteMatch();
    const list = MaterialsSideBarList.map(
        listItem =>
            <NavLink
                activeClassName={styles.sideBarHomeActive}
                className={styles.sideBarHome}
                key={listItem.href}
                to={`${url}/${listItem.href}`} >
                {listItem.name}
            </NavLink>
    )
    return (
        <div className={styles.home}>
            <div className={styles.homeParent}>
                <div>
                    <SideBar list={list} />
                </div>
                <main className={styles.switchTag}>
                    <Switch>
                        <Route path="/materials" component={Notes} exact />
                        <Route path={`${url}/notes`} component={Notes} exact />
                        <Route path={`${url}/quepaper`} component={QuePaper} exact />
                        <Route path={`${url}/books`} component={Books} exact />
                        <Route component={Error} />
                    </Switch>
                </main>
                <Add />
            </div>
            <ToTop />
        </div >
    )
}