import React from "react"
import styled from "styled-components"
import UploadNotes from "./uploadNotes"
import UploadBooks from "./uploadBooks"
import UploadQuestionPaper from "./uploadQuestionPaper"

const Bookmarks = styled.div`
    text-align: center;
    margin-bottom: 15px;
    font-weight: 600;
`
const Components = styled.div`
    margin-top: 20%;
`
const A = styled.a`
    color: rgb(0,0,0,0.8);
    margin: 0px 2%;
`

export default function Upload() {
    return (
        <div>
            <Bookmarks>
                <A href="#uploadQuestionPaper"> Upload-Question paper</A>
                <A href="#uploadBooks">Upload-Books</A>
            </Bookmarks>
            <UploadNotes />
            <Components id="uploadBooks">
                <UploadBooks />
            </Components>
            <Components id="uploadQuestionPaper">
                <UploadQuestionPaper />
            </Components>
        </div>
    )
}