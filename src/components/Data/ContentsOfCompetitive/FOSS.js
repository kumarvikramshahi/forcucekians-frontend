import React from "react"
import styles from "./contentCompetitive.module.css"

export default function FOSS() {
    const list = [
        {
            name: "VLC media player",
            company: "VideoLAN",
            shortName: "VLC",
            officialWebsite: "https://www.videolan.org/vlc/index.html",
            Repositary: "https://github.com/videolan"
        },
        {
            name: "Wikipedia",
            company: "Wikimedia Foundation",
            shortName: "Wikipedia",
            officialWebsite: "https://en.wikipedia.org/wiki/Main_Page",
            Repositary: "https://github.com/wikimedia"
        },
        {
            name: "Mozilla Firefox (browser)",
            company: "Mozilla Foundation",
            shortName: "Mozilla",
            officialWebsite: "https://www.mozilla.org/en-US/firefox/new/",
            Repositary: "https://github.com/mozilla"
        },
        {
            name: "GIMP (Image editor)",
            company: "GNU and GNOME projects",
            shortName: "GIMP",
            officialWebsite: "https://www.gimp.org/",
            Repositary: "https://github.com/GNOME/gimp"
        },
        {
            name: "OpenShot (video editor)",
            company: "OpenShot Studios, LLC ",
            shortName: "OpenShot",
            officialWebsite: "https://www.openshot.org/",
            Repositary: "https://github.com/OpenShot"
        },
        {
            name: "Android (operating sysytem)",
            company: "Google",
            shortName: "Android",
            officialWebsite: "https://www.android.com/intl/en_in/",
            Repositary: "https://cs.android.com/android/platform/superproject/"
        },
        {
            name: "Linux (operating sysytem)",
            company: "Linus Torvalds",
            shortName: "Linux",
            officialWebsite: "https://www.linux.org/",
            Repositary: "https://github.com/torvalds/linux"
        },
        {
            name: "Kali Linux (operating sysytem)",
            company: "kali",
            shortName: "kali linux",
            officialWebsite: "https://www.kali.org/",
            Repositary: "https://gitlab.com/kalilinux"
        },
        {
            name: "Signal (messaging app)",
            company: "Signal Technology Foundation",
            shortName: "Signal",
            officialWebsite: "https://signal.org/en/",
            Repositary: "https://github.com/signalapp"
        }
    ]
    return (
        <article className={styles.divContainer}>
            <header><h1 className={styles.h1}>Free and Open Source Software (FOSS)</h1></header>
            <p>FOSS are softwares made for the people and made by the people i.e. it is made by group of people, and source code are made available publicly, any one can contribute to the source code. these softwares are free to use that means you don't have to pay for using the software but you can donate if you want.</p>
            <div className={styles.listCard}>
                <h2 className={styles.h2}>Here are some popular open source softwares - </h2>
                <table>
                    <thead>
                        <tr>
                            <th>Software</th><th>Developed by</th><th>Website Link</th><th>Source Code Repositary Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(listItem => <tr key={listItem.Repositary}><td>{listItem.name} </td><td>{listItem.company} </td><td><a href={listItem.officialWebsite} rel="noopener noreferrer" target="_blank">{listItem.shortName} official Website</a></td><td><a href={listItem.Repositary} rel="noopener noreferrer" target="_blank">{listItem.shortName} Repositary</a></td></tr>)}
                    </tbody>
                </table>
            </div>
        </article>
    )
}