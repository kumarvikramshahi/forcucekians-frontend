import React, { useEffect } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import RightNavBar from "../MainComponents/rightNavBar/rightNavBar"
import DownBar from "../MainComponents/DownBar/DownBar"
import Error from "../CommonToAll/Error"
import Home from "../MainComponents/Home/Home"
import Courses from "../MainComponents/Courses/Courses"
import Competitive from "../MainComponents/Competitive/Competitive"
import Blogs from "../MainComponents/Blogs/Blogs"
import LogIn from "../MainComponents/rightNavBar/auth/LogIn"
import SignUp from "../MainComponents/rightNavBar/auth/signUp"
import ProfilePage from "../MainComponents/rightNavBar/profilePage/profilePage"
import Upload from "../MainComponents/rightNavBar/uploadPage/upload"
import OtpGenerator from "../MainComponents/rightNavBar/Generator/generator"

export default function Main() {
  const logOut = () => {
    localStorage.removeItem("bhaagB**");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiryDatelodu");
  }
  const setAutoLogOut = (remainingMilliSec) => {
    setTimeout(() => {
      logOut();
      window.location.replace("/")
    }, remainingMilliSec)
  }

  const useEffectFinalArgument = false; // find its permanent solution and remove it.
  useEffect(() => {
    const expiryDate = localStorage.getItem("expiryDatelodu");
    if (!window.$IsAuth || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logOut();
      return;
    }
    const remainingMilliSec = new Date(expiryDate).getTime() - new Date().getTime();
    setAutoLogOut(remainingMilliSec);
  }, [useEffectFinalArgument])

  return (
    <>
      <DownBar />
      <RightNavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/courses" component={Courses} />
        <Route path="/competitive" component={Competitive} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/user/upload" component={Upload} />
        <Route path="/user/profilePage" component={ProfilePage} />
        <Route path="/user/login">
          {window.$IsAuth ? <Redirect to="/" /> : <LogIn previousLocation="/user/profilePage" />}
        </Route>
        <Route path="/user/signup">
          {window.$IsAuth ? <Redirect to="/" /> : <SignUp previousLocation="/user/profilePage" />}
        </Route>
        {localStorage.getItem("userId") === '60fa7604e9c10e00041d8396' ? (
          <Route path="/user/generator">
            <OtpGenerator />
          </Route>
        ) : null}
        <Route component={Error} />
      </Switch>
    </>
  )
}