import React from "react"

export default function ToTop() {
    const style = {
        zIndex: "2",
        position: "fixed",
        right: "10px",
        bottom: "20%",
        transform: "translateX(170%)",
        cursor: "pointer"
    }
    window.onscroll = function () {
        let toTopBtn = document.getElementById('ToTopBtn')
        let sideBarMobileButton = document.getElementById("sideBarMobileButton")
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            toTopBtn.style.textDecoration = "none"
            toTopBtn.style.textAlign = "center"
            toTopBtn.style.position = "fixed"
            toTopBtn.style.right = "10px"
            toTopBtn.style.bottom = "10%"
            toTopBtn.style.zIndex = "2"
            toTopBtn.style.transform = "translateX(0)"
            toTopBtn.style.transition = "transform 0.3s ease-in"
            if (sideBarMobileButton) {
                sideBarMobileButton.style.zIndex = "2"
                sideBarMobileButton.style.transform = "translateX(0)"
                sideBarMobileButton.style.transition = "transform 0.2s ease-in"
            }
            // sideBarMobileButton id is for SideBarMobile so don't try to remove this.
        }
        else {
            toTopBtn.style.textDecoration = "none"
            toTopBtn.style.textAlign = "center"
            toTopBtn.style.position = "fixed"
            toTopBtn.style.right = "10px"
            toTopBtn.style.bottom = "10%"
            toTopBtn.style.transform = "translateX(170%)"
            toTopBtn.style.transition = "transform 0.25s ease-in"
            if (sideBarMobileButton) {
                sideBarMobileButton.style.transform = "translateX(170%)"
                sideBarMobileButton.style.transition = "transform 0.15s ease-in"
            }
            // sideBarMobileButton id is for SideBarMobile so don't try to remove this.
        }
    }
    return (
        <span
            onClick={() => window.scrollTo(0, 0)}
            style={style}
            id="ToTopBtn"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm17-1h-4v8h-2v-8h-4l5-6 5 6z" /></svg>
        </span>
    )
}
