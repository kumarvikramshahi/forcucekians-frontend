import React from "react"
import styles from "../Home/Home.module.css"
import Add from "../../CommonToAll/Add"
import Searchbar from "../../CommonToAll/searchBar"
import ToTop from "../../CommonToAll/ToTop"
import commonSubjects from "../../Data/Notes/commonSubjectsNotes"
import cseNotes from "../../Data/Notes/cseNotes"
import itNotes from "../../Data/Notes/itNotes"
import eceNotes from "../../Data/Notes/eceNotes"
import civilNotes from "../../Data/Notes/civilNotes"
import mechNotes from "../../Data/Notes/mechNotes"
import QuePaperList from "../../Data/QuePaperList"
import BooksList from "../../Data/BooksList"

export default function Home() {
    const commonSubjectsNotesLink = commonSubjects.map(
        listItem => <a className={styles.aStyle} title={listItem.name} key={listItem.link} href={listItem.link} target="_blank" rel="noopener noreferrer"> {listItem.subject} </a>
    )
    const cseNotesLink = cseNotes.map(
        listItem => <a className={styles.aStyle} title={listItem.name} key={listItem.link} href={listItem.link} target="_blank" rel="noopener noreferrer"> {listItem.subject} </a>
    )
    const itNotesLink = itNotes.map(
        listItem => <a className={styles.aStyle} title={listItem.name} key={listItem.link} href={listItem.link} target="_blank" rel="noopener noreferrer"> {listItem.subject} </a>
    )
    const eceNotesLink = eceNotes.map(
        listItem => <a className={styles.aStyle} title={listItem.name} key={listItem.link} href={listItem.link} target="_blank" rel="noopener noreferrer"> {listItem.subject} </a>
    )
    const civilNotesLink = civilNotes.map(
        listItem => <a className={styles.aStyle} title={listItem.name} key={listItem.link} href={listItem.link} target="_blank" rel="noopener noreferrer"> {listItem.subject} </a>
    )
    const mechNotesLink = mechNotes.map(
        listItem => <a className={styles.aStyle} title={listItem.name} key={listItem.link} href={listItem.link} target="_blank" rel="noopener noreferrer"> {listItem.subject} </a>
    )
    const quePaperLinks = QuePaperList.map(
        listItem => <a className={styles.aStyle} title={listItem.name} key={listItem.link} href={listItem.link} target="_blank" rel="noopener noreferrer"> {listItem.subject} </a>
    )
    const booksLinks = BooksList.map(
        listItem => <a className={styles.aStyle} title={listItem.author} key={listItem.href} href={listItem.href} target="_blank" rel="noopener noreferrer"> {listItem.name} </a>
    )
    return (
        <div className={styles.HomeParent}>
            <div className={styles.home}>
                <div className={styles.addLeft}><Add /></div>
                <div className={styles.searchBar}>
                    <h2 className={styles.h2}>Search for Books, Notes, previous year Question Papers</h2>
                    <Searchbar introText="Search..." />
                    <div className={styles.lists}>{booksLinks}{quePaperLinks}{commonSubjectsNotesLink}{cseNotesLink}{itNotesLink}{eceNotesLink}{civilNotesLink}{mechNotesLink}
                    </div>
                </div>
                <Add />
            </div>
            <div id="svg"></div> {/* Remove this line only when SideBar is rendered in this component */}
            <ToTop />
        </div>
    )
}