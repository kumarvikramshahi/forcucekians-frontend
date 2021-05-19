import React from "react"
import BlogsList from "../../Data/BlogsList"
import styles from "./Blogs.module.css"

export default function BlogsComponent() {
    const blogsData = BlogsList.map(
        listItem => {
            return (
                <div
                    title=""
                    id={listItem.href}
                    className={styles.cardContainer}
                    key={listItem.href}>
                    <a
                        href={listItem.href}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img className={styles.image} src={listItem.imageHref} alt={listItem.name} />
                    </a>
                    <h3 style={{ margin: "0px" }}>
                        <a
                            className={styles.cardLinks}
                            href={listItem.href}
                            title={listItem.fname}
                            target="_blank"
                            rel="noopener noreferrer">
                            {listItem.name}
                        </a>
                    </h3>
                    <p className={styles.cardText}>
                        {listItem.demoText}.
                        <a href={listItem.href} target="_blank" rel="noopener noreferrer">
                            Read more..
                        </a>
                    </p>
                    <br />
                    <i style={{ fontSize: "70%" }} className={styles.cardText}>
                        {listItem.datePublished}
                    </i>
                </div >
            )
        }
    )
    return (
        <div className={styles.blogsComponent}>
            {blogsData}
        </div>
    )
}