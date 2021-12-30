import React from "react"
import Form from "../../../CommonToAll/Form/Form"

export default function UploadBooks() {
    const formNames = {
        bookName: "",
        author: "",
        genre: "",
        bookFile: ""
    }
    const input = [
        {
            type: "text",
            name: "bookName",
            placeholder: "Like: Half Girlfriend",
            required: true,
            label: "Book name",
            maxLength: 50
        },
        {
            type: "text",
            name: "author",
            placeholder: "Chetan Bhagat",
            required: true,
            label: "Author",
            maxLength: 20,
            minLength: 3
        },
        {
            type: "text",
            name: "genre",
            placeholder: "Like: Romantic Novel",
            required: true,
            label: "Genre",
            maxLength: 15,
            minLength: 3
        },
        {
            type: "file",
            name: "bookFile",
            required: true,
            label: "Upload Book"
        }
    ]
    const button = [{
        type: "submit",
        value: "Upload"
    }]
    return (
        <div>
            <Form
                material="Book"
                uri="/user/uploadBooks"
                form={formNames}
                isFormData = {true}
                inputTag={input}
                buttonTag={button}
            />
        </div>
    )
}