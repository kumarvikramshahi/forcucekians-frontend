import React from "react"
import Form from "../../../CommonToAll/Form/Form"

export default function UploadBooks() {
    const formNames = {
        bookName: "",
        author: "",
        genre: "",
        fileUrl: ""
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
            type: "url",
            name: "fileUrl",
            placeholder: "https://drive/book/HalfGirlfriend",
            required: true,
            label: "File/Book URL"
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
                inputTag={input}
                buttonTag={button}
            />
        </div>
    )
}