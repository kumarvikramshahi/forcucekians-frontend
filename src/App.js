import React from "react"
import Header from "./components/AppComponents/header"
import Main from "./components/AppComponents/Main"
import Footer from "./components/AppComponents/footer"
import ToTop from "./components/AppComponents/ToTop"
import "./App.css"

if (process.env.NODE_ENV === "production")
    window.$SERVER_URI = 'https://forcucekians.herokuapp.com';
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