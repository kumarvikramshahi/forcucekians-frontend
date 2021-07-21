import React from "react"

export default function Error() {
    const h1 = {
        textAlign: "center",
        color: "grey",
        padding: "4px"
    }
    const span = {
        fontSize: "230%",
        color: "rgb(255,0,0,0.7)"
    }
    return (
        <h1 style={h1}>
            <span style={span}> 404 </span>
            <br />
            <span> Oops! Page not found. </span>
        </h1>
    )
}