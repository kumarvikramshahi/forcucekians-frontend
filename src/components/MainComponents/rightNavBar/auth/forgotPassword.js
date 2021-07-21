import React from "react"
import Input from "../../../CommonToAll/Input/Input"
import Button from "../../../CommonToAll/Button/Button"

export default function ForgotPassword() {
    const formHandeler = (event) => {
        event.preventDefault();
    }
    return (
        <form className="form card glassmorphism" action="" method="POST" onSubmit={formHandeler}>
            <div>
                <Input
                    type="text"
                    name="email"
                    required={true}
                    label="Email Id"
                />
                <Button type="submit" value="Get code" />
            </div>
        </form>
    )
}