import React from "react"
import Searchbar from "../../../CommonToAll/searchBar"
import QuePaperList from "../../../Data/QuePaperList"
import styles from "../Materials.module.css"

export default function QuePaper() {
    const quePaperLinks = QuePaperList.map(
        listItem =>
            <a className={styles.aStyle}
                title={listItem.name}
                key={listItem.link}
                href={listItem.link}
                target="_blank"
                rel="noopener noreferrer" >
                {listItem.subject}
            </a>
    )
    return (
        <div className={styles.divContainerQue}>
            <h2 className={styles.h2} role="img" aria-label="emoji">
                &#10067; Question paper
            </h2>
            <Searchbar introText="e.g: BEC 1st sem 2018" />
            <div className={styles.divChild}>
                {quePaperLinks}
            </div>
        </div>
    )
}