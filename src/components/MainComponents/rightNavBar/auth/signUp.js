import React from "react"
import Form from "../../../CommonToAll/Form/Form"

export default function LogIn(props) {
    const formNames = {
        name: "",
        email: "",
        password: ""
    }
    const input = [
        {
            type: "name",
            name: "name",
            require: true,
            label: "Name",
            minLength: 3,
            maxLength: 20
        },
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
            label: "Password",
            placeholder: "must include number,special case",
            minLength: 5,
        }
    ]
    const button = [{
        type: "submit",
        value: "SignUp"
    }]
    return (
        <div>
            <Form
                uri="/user/signup"
                form={formNames}
                inputTag={input}
                buttonTag={button}
                isAuthPage={true}
                previousLocation={props.previousLocation}
            />
        </div>
    )
}