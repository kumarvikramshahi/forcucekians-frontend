import React from "react"
import BooksList from "../../../Data/BooksList"
import Searchbar from "../../../CommonToAll/searchBar"
import styles from "../Materials.module.css"

export default function Books() {
    const booksLinks = BooksList.map(
        listItem =>
            <a
                className={styles.aStyle}
                title={listItem.author}
                key={listItem.href}
                href={listItem.href}
                target="_blank"
                rel="noopener noreferrer" >
                {listItem.name}
            </a>
    )
    return (
        <div className={styles.divContainerQue}>
            <h2 className={styles.h2} role="img" aria-label="emoji">
                📚 BOOKS
            </h2>
            <Searchbar introText="Search by book name or its author" />
            <div className={styles.divChild}>
                {booksLinks} 
            </div>
        </div>
    )
}