import React from "react"
import Header from "./components/AppComponents/header"
import Main from "./components/AppComponents/Main"
import Footer from "./components/AppComponents/footer"
import ToTop from "./components/AppComponents/ToTop"
import "./App.css"

// can't use ENV varibles to store and use API LINK, JWT token & user ID etc
// due to netlify subscription plan, to use ENV varibles in netlify we need paid plans
if (process.env.NODE_ENV === "production")
    window.$SERVER_URI = "https://giddy-colt-jeans.cyclic.app/";
if (process.env.NODE_ENV === "development")
    window.$SERVER_URI = 'http://localhost:8080';

window.$TOKEN = localStorage.getItem("bhaagB**");
window.$USER_ID = localStorage.getItem("userId");
window.$IsAuth = window.$TOKEN && window.$USER_ID;

export default function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
            <ToTop />
        </div>
    )
}