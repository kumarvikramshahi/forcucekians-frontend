import React from "react"
import styles from "./Logo.module.css"

export default class Logo extends React.Component {
    render() {
        return (
            <header>
                <h1 className={styles.h1} id="logo"> <a href="./" style={{ textDecoration: "none", color: "purple" }}>F0r CUCEKians</a>
                </h1>
                {/*don't remove ID of h1 tag removing it means breaking the working of "ToTop" button*/}
            </header >
        )
    }
}