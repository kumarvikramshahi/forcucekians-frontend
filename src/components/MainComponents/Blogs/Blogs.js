import React from "react"
import styles from "./Blogs.module.css"
import Add from "../../CommonToAll/Add"
import ToTop from "../../CommonToAll/ToTop"
import BlogsComponent from "./BlogsComponent"

export default function Blogs() {
    return (
        <div className={styles.blogs}>
            <div className={styles.blogsParent}>
                <div className={styles.addLeft}>
                    <Add />
                </div>
                <div className={styles.middleSection}>
                    <h1 className={styles.h1}>
                        Blogs..
                    </h1>
                    <BlogsComponent />
                    <div id="svg"></div> {/* Remove this line only when SideBar is rendered in this component*/}
                </div>
                <Add />
            </div>
            <ToTop />
        </div>
    )
}