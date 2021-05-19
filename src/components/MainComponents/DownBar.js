import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./DownBar.module.css"

export default class DownBar extends React.Component {
    render() {
        return (
            <div className={styles.containerDiv}>
                <NavLink activeClassName={styles.childDivActive} className={styles.childDiv} to="/courses">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M10 23c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.884.586 1.414v1h-6v-1zm8 0c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.884.586 1.414v1h-6v-1zm-11.241-14c.649 0 1.293-.213 1.692-.436.755-.42 2.695-1.643 3.485-2.124.216-.131.495-.083.654.113l.008.011c.165.204.146.499-.043.68-.622.597-2.443 2.328-3.37 3.213-.522.499-.822 1.183-.853 1.904-.095 2.207-.261 6.912-.331 8.833-.017.45-.387.806-.837.806h-.001c-.444 0-.786-.347-.836-.788-.111-.981-.329-3.28-.426-4.212-.04-.384-.28-.613-.585-.615-.304-.001-.523.226-.549.609-.061.921-.265 3.248-.341 4.22-.034.442-.397.786-.84.786h-.001c-.452 0-.824-.357-.842-.808-.097-2.342-.369-8.964-.369-8.964l-1.287 2.33c-.14.253-.445.364-.715.26h-.001c-.279-.108-.43-.411-.349-.698l1.244-4.393c.122-.43.515-.727.962-.727h4.531zm6.241 7c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm8 0c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm3-1h-14v-2h7v-1h3v1h2v-11h-20v4.356l-2 2v-8.356h24v15zm-7-5h-3v-1h3v1zm-11.626-6c1.241 0 2.25 1.008 2.25 2.25s-1.009 2.25-2.25 2.25c-1.242 0-2.25-1.008-2.25-2.25s1.008-2.25 2.25-2.25zm14.626 4h-6v-1h6v1zm0-2h-6v-1h6v1z" />
                    </svg>
                    <span className={styles.childSpan}>
                        <span role="img" aria-label="emoji">
                            &nbsp;
                        </span>
                        COURSES
                    </span>
                    <span className={styles.childSpanMobile}>
                        Courses
                    </span>
                </NavLink>
                <NavLink activeClassName={styles.childDivActive} className={styles.childDiv} to="/materials">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 22v-16h16v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-10.386h-20v20h10.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-5v-1h5v1zm5-4h-10v1h10v-1zm0-3h-10v1h10v-1zm3-6h-19v19h-1v-20h20v1zm-2-2h-19v19h-1v-20h20v1z" />
                    </svg>
                    <span className={styles.childSpan}>
                        <span role="img" aria-label="emoji">
                            &nbsp;
                        </span>
                        STUDY MATERIALS
                    </span>
                    <span className={styles.childSpanMobile}>
                        Materials
                    </span>
                </NavLink>
                <NavLink exact activeClassName={styles.childDivActive} className={styles.childDiv} to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
                    </svg>
                    <span className={styles.childSpanMobile}>
                        Home
                    </span>
                </NavLink>
                <NavLink activeClassName={styles.childDivActive} className={styles.childDiv} to="/competitive">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z" />
                    </svg>
                    <span className={styles.childSpan}>
                        <span role="img" aria-label="emoji">
                            &nbsp;
                        </span>
                        COMPETITIVE
                    </span>
                    <span className={styles.childSpanMobile}>
                        Competitive
                    </span>
                </NavLink>
                <NavLink activeClassName={styles.childDivActive} className={styles.childDiv} to="/blogs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-3v-1h3v1zm0 2h-3v1h3v-1zm0 3h-10v1h10v-1zm-5-6h-5v4h5v-4z" />
                    </svg>
                    <span className={styles.childSpan}>
                        <span role="img" aria-label="emoji">
                            &nbsp;
                        </span>
                        BLOGS
                    </span>
                    <span className={styles.childSpanMobile}>
                        Blogs
                    </span>
                </NavLink>
            </div>
        )
    }
}