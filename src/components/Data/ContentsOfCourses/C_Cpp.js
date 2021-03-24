import React from "react"
import styles from "./contentCourses.module.css"

export default function C_Cpp() {
    const lectureList = [
        {
            name: "Saurabh Shukla [C] (YouTube)",
            link: "https://youtube.com/playlist?list=PLe_7x5eaUqtXy5JOAc4mTaDfIkbc2BGcI"
        },
        {
            name: "Naresh it [C] (YouTube)",
            link: "https://youtube.com/playlist?list=PLVlQHNRLflP8IGz6OXwlV_lgHgc72aXlh"
        },
        {
            name: "code with harry [C] (YouTube)",
            link: "https://youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR"
        },
        {
            name:"GeeksforGeeks (documentation C++)",
            link:"https://www.geeksforgeeks.org/c-plus-plus/"
        },
        {
            name: "Code with harry [C++] (YouTube)",
            link: "https://youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL"
        },
        {
            name: "Naresh it [C++] (YouTube)",
            link: "https://youtube.com/playlist?list=PLVlQHNRLflP8_DGKcMoRw-TYJJALgGu4J"
        },
        {
            name: "SoloLearn (App on play Store)",
            link: "https://play.google.com/store/apps/details?id=com.sololearn"
        }
    ]
    return (
        <div className={styles.divContainer}>
            <h1 className={styles.h1}>C/C++</h1>
            <div className={styles.lecturesCard}>
                <h2 className={styles.h2}>Free resources of lectures - </h2>
                <ol className={styles.ol}>
                    {lectureList.map(listItem => <li key={listItem.link}><a className={styles.lectureLinks} href={listItem.link} rel="noopener noreferrer" target="_blank"> {listItem.name} </a></li>)}
                </ol>
            </div>
            <div className={styles.applicationCard}>
                <h2 className={styles.h2}>Applications - </h2>
                <i><b>Note:</b> you will learn more either by  googling yourselves or exploring the topic yourselves you can't learn as much from others experience as you learn from yours.</i>
                <h3 className={styles.h3}>1.GUI</h3>
                <p>GUI (Graphical User Interface). Adobe Photoshop, one of the most popularly used photo editors since older times, was created with the help of C/C++. later on some more softwares of Adobe were created using c/c++.</p>
                <h3 className={styles.h3}>2.Google</h3>
                <p>Google file system and Google chromium browser were developed using C/C++.</p>
                <h3 className={styles.h3}>3.Operating Systems</h3>
                <p>Microsoft windows is built in c/c++. firstly UNIX (a operating sysytem) was created using c later on some of android softwares were also created in c/c++, and still it is used.</p>
                <h3 className={styles.h3}>4.Animation/Graphics and Gaming</h3>
                <p>Since the C/C++ is relatively faster than Java or Python, as it is compiler-based, it finds several applications in the gaming sector. Some of the most simple games are coded in c such as Tic-Tac-Toe, The Dino game, The Snake game and many more. Increasing advanced versions of graphics and functions, Doom3 a first-person horror shooter game was designed by id Software for Microsoft Windows using c in 2004.</p>
            </div>
        </div>
    )
}