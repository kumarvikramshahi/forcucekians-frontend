import React from "react"
import styles from "../Materials.module.css"
import Searchbar from "../../../CommonToAll/searchBar"
import commonSubjects from "../../../Data/Notes/commonSubjectsNotes"
import cseNotes from "../../../Data/Notes/cseNotes"
import eceNotes from "../../../Data/Notes/eceNotes"
import itNotes from "../../../Data/Notes/itNotes"
import mechNotes from "../../../Data/Notes/mechNotes"
import civilNotes from "../../../Data/Notes/civilNotes"

export default class Notes extends React.Component {
    render() {
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
        return (
            <div className={styles.divContainerNotes}>
                <h2 className={styles.h2} role="img" aria-label="emoji">🖊️ NOTES </h2>
                <Searchbar introText="search as 'BEC' or 'basic electrical communication'" />
                <div className={styles.divChild}>{commonSubjectsNotesLink}{cseNotesLink}{itNotesLink}{eceNotesLink}{civilNotesLink}{mechNotesLink}
                </div>
            </div>
        )
    }
}