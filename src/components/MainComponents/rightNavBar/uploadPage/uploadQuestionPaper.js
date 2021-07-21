import React from "react"
import Form from "../../../CommonToAll/Form/Form"

export default function UploadQuestionPaper() {
    const formNames = {
        questionPaperName: "",
        subjectFullName: "",
        examType: "",
        fileUrl: ""
    }
    const input = [
        {
            type: "text",
            name: "questionPaperName",
            placeholder: "Like: CP 2nd sem 2017 (2015 scheme)",
            required: true,
            label: "Question-Paper name",
            maxLength: 60,
            minLength: 5
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
            name: "examType",
            placeholder: "like: internal or external",
            required: true,
            label: "Exam type",
            maxLength: 9,
            minLength: 5
        },
        {
            type: "url",
            name: "fileUrl",
            placeholder: "https://drive/questionPaper",
            required: true,
            label: "File URL"
        }
    ]
    const button = [{
        type: "submit",
        value: "Upload"
    }]
    return (
        <div>
            <Form
                material="Question-Paper"
                uri="/user/uploadQuestionPaper"
                form={formNames}
                inputTag={input}
                buttonTag={button}
            />
        </div>
    )
}