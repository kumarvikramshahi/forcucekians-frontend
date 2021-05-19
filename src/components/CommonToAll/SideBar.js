import React from "react"
import styles from "./SideBar.module.css"

export default class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { sideBarMobileON: false }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(
            prevState => {
                return {
                    sideBarMobileON: !prevState.sideBarMobileON
                }
            }
        )
    }
    render() {
        return (
            <nav className={styles.nav}>
                <div className={styles.sideBarPC}>
                    {this.props.list}
                </div>
                <div className={styles.toggleButton}>
                    <svg onClick={this.handleClick} className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                    </svg>
                    <svg onClick={this.handleClick} className={styles.svg2nd} id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z" />
                    </svg>
                    <div className={this.state.sideBarMobileON ? styles.sideBarMobileShow : styles.sideBarMobileHide} onClick={this.handleClick}>
                        <div className={styles.sideBarMobile}>
                            {this.props.list}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}