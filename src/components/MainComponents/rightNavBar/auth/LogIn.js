import React from "react"
import Form from "../../../CommonToAll/Form/Form"

export default function LogIn(props) {
    const formNames = {
        email: "",
        password: ""
    }
    const input = [
        {
            type: "email",
            name: "email",
            required: true,
            label: "Email id"
        },
        {
            type: "password",
            name: "password",
            required: true,
            label: "Password"
        }
    ]
    const button = [{
        type: "submit",
        value: "Log In"
    }]
    return (
        <div>
            <Form
                uri="/user/login"
                form={formNames}
                inputTag={input}
                buttonTag={button}
                isAuthPage={true}
                previousLocation={props.previousLocation}
            />
        </div>
    )
}