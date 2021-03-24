import React from "react"
import Logo from "./components/AppComponents/Logo"
import Main from "./components/AppComponents/Main"
import Footer from "./components/AppComponents/footer"
import "./index.css"

export default function App(){
    return (
        <div>
            <Logo />
            <Main />
            <Footer />
        </div>
    )
}