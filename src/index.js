import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

ReactDOM.render(
  //make sure to avoid use of HashRouter, using it will disturb different functionalty.
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
  , document.getElementById("root")
)