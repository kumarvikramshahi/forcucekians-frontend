import React, { useState } from "react"
import "./SideBar.css"

export default function SideBar(props) {
    const [sideBarMobileON, setSideBarMobileON] = useState(false);

    const handleClick = () => {
        return setSideBarMobileON(!sideBarMobileON);
    }

    return (
        <nav className="nav">
            <div className="sideBarPC">
                {props.list}
            </div>
            <div className="toggleButton">
                <svg onClick={handleClick} className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                </svg>
                <svg onClick={handleClick}
                    className="svg2nd"
                    id="sideBarMobileButton"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z" />
                </svg>
                <div
                    className={sideBarMobileON ? "sideBarMobileShow" : "sideBarMobileHide"}
                    onClick={handleClick}
                >
                    <div className="sideBarMobile glassmorphism">
                        {props.list}
                    </div>
                </div>
            </div>
        </nav>
    )
}