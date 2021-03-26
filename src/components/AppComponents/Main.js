import React from "react"
import {Switch, Route } from "react-router-dom"
import DownBar from "../MainComponents/DownBar"
import Error from "../CommonToAll/Error"
import Home from "../MainComponents/Home/Home"
import Materials from "../MainComponents/Materials/Materials"
import Courses from "../MainComponents/Courses/Courses"
import Competitive from "../MainComponents/Competitive/Competitive"
import Blogs from "../MainComponents/Blogs/Blogs"


export default class Main extends React.Component {
  render() {
    return (
      <>
        <DownBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/materials" component={Materials}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/competitive" component={Competitive}/>
          <Route path="/blogs" component={Blogs}/>
          <Route component={Error} />
        </Switch>
      </>
    )
  }
}