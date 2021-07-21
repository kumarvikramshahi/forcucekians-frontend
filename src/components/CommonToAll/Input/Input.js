import React from "react"
import "./Input.css"

export default function Input(props) {
    return (
        <>
            <label htmlFor={props.name} > {props.label} </label>
            <input className="input" {...props} />
        </>
    )
}