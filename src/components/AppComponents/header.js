import React from "react"
import "./header.css"

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 className="logo" id="logo">
                    <a href="./">
                        F0r CUCEKians
                    </a>
                </h1>
                {/*don't remove ID of h1 tag removing it means breaking the working of "ToTop" button*/}
            </header >
        )
    }
}