import React from "react"
import "./Button.css"

export default function Button(props) {
    return (
        <button className="button" {...props} >
            {props.value}
        </button>
    )
}