import React from "react"
import Form from "../../../CommonToAll/Form/Form"

export default function UploadNotes() {
    const formNames = {
        subjectShortName: "",
        subjectFullName: "",
        moduleNum: "",
        notesBy: "",
        notesFile: "",
    }
    const input = [
        {
            type: "text",
            name: "subjectShortName",
            placeholder: "Like: BEE, BEC",
            required: true,
            label: "Subject short name",
            maxLength: 5,
            minLength: 2
        },
        {
            type: "text",
            name: "subjectFullName",
            placeholder: "Basic electrical engineering",
            required: true,
            label: "Subject full name",
            maxLength: 50,
            minLength: 5
        },
        {
            type: "text",
            name: "moduleNum",
            placeholder: "like: 3 or 3 & 4",
            required: true,
            label: "Module No.",
            maxLength: 10
        },
        {
            type: "file",
            name: "notesFile",
            required: true,
            label: "Upload Notes"
        },
        {
            type: "text",
            name: "notesBy",
            placeholder: "teacher's/creator's name",
            required: true,
            label: "Notes by",
            maxLength: 10
        }
    ]
    const button = [{
        type: "submit",
        value: "Upload"
    }]
    return (
        <div>
            <Form
                material="Notes"
                uri="/user/uploadNotes"
                form={formNames}
                isFormData={true}
                inputTag={input}
                buttonTag={button}
            />
        </div>
    )
}
