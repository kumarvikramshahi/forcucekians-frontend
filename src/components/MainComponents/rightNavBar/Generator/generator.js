import React, { useState } from "react";
import "./generator.css"
import Button from "../../../CommonToAll/Button/Button";
import Input from "../../../CommonToAll/Input/Input";

export default function OtpGenerator() {
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const submitHandeler = async (e) => {
        e.preventDefault();
console.log("hi")
        const url = 'https://1.rome.api.flipkart.com/api/5/user/otp/generate';
        const options = {
            method: "POST",
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({
                loginId: "+91"+number,
                state: "VERIFIED",
                churnEmailRequest: "false"
            })
        }
//need to send cookies with request
        setLoading(true)
        const response = await fetch(url, options);
        const responseData = await response.json();
        console.log(responseData)
        if (responseData.STATUS_CODE === 200) {
            setLoading(false);
            setMessage("DOne");
        }

    }

    return (
        <div className="container">
            <form onSubmit={submitHandeler}>
                <Input
                    type="number"
                    name="number"
                    placeholder="number"
                    required={true}
                    label="Number"
                    maxLength={10}
                    minLength={10}
                    onChange={e => setNumber(e.target.value)}
                />
                <Button
                    type="submit"
                    value="Submit"
                />
                <br />
                <div> {loading ? message : null} </div>
            </form>
        </div>
    )
}