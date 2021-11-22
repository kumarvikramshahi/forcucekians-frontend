import React, { useState, useEffect } from "react"
import "./profilePage.css"
import Loading from "../../../CommonToAll/Loading/loading"
import PopupMessage from "../../../CommonToAll/popupMessage/popupMessage"
import Button from "../../../CommonToAll/Button/Button"
import { Link } from "react-router-dom"
import Searchbar from "../../../CommonToAll/searchBar"

export default function ProfilePage() {
    const [isLoading, setIsLoading] = useState(false);
    const [booksList, setBooksList] = useState([]);
    const [notesList, setNotesList] = useState([]);
    const [questionPaperList, setQuestionPaperList] = useState([]);
    const [error, setError] = useState("");
    const [authMessage, setAuthMessage] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const fetchMaterial = async (material) => {
        try {
            setIsLoading(true);
            const response = await fetch(`${window.$SERVER_URI}/contributions/${material}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + window.$TOKEN
                }
            });
            const respData = await response.json();
            if (response.status !== 200) {
                const error = new Error(respData.message)
                throw error;
            }
            if (respData.booksList) {
                setBooksList(respData.booksList);
            }
            if (respData.notesList) {
                setNotesList(respData.notesList);
            }
            if (respData.questionPaperList) {
                setQuestionPaperList(respData.questionPaperList);
            }
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }

    const deleteMaterial = async (material, button) => {
        try {
            setIsLoading(true);
            const response = await fetch(window.$SERVER_URI + material + "/" + button.target.name, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + window.$TOKEN
                }
            });
            const respData = await response.json();

            if (response.status !== 200 && response.status !== 201) {
                const error = new Error(respData.message)
                throw error;
            }
            button.target.parentNode.style.display = 'none'
            setSuccessMsg(respData.message)
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }

    const deleteBook = async (event) => {
        await deleteMaterial("/contributions/books", event);
    }
    const deleteNotes = (event) => {
        deleteMaterial("/contributions/notes", event);
    }
    const deleteQuestionPaper = (event) => {
        deleteMaterial("/contributions/questionPaper", event);
    }

    useEffect(() => {
        if (!window.$IsAuth) {
            return setAuthMessage("Log In to see your contributions");
        }
        fetchMaterial("notes");
        fetchMaterial("questionPaper");
        fetchMaterial("books");
    }, [])

    return (
        <div className="profilePage">
            <PopupMessage blankMessage={error.length ? false : true} errorMessage={true}>
                {error}
            </PopupMessage>
            <PopupMessage blankMessage={successMsg.length ? false : true}>
                {successMsg}
            </PopupMessage>
            <div> {isLoading ? <Loading /> : null} </div>

            {window.$IsAuth ? (
                <>
                    <h2 className="h2"> Your contributions.. </h2>
                    <hr />
                    <div className="divContainer">
                        {
                            booksList.map(listItem => {
                                return (
                                    <div
                                        className="divContributionList card glassmorphism"
                                        title={listItem.author}
                                        key={listItem.fileUrl}
                                    >
                                        <span className="cardProperty">Name: </span>
                                        {listItem.name} <br />
                                        <span className="cardProperty">Author: </span>
                                        {listItem.author} <br />
                                        <span className="cardProperty">Genre: </span>
                                        {listItem.genre} <br />
                                        <span className="cardProperty">fileUrl: </span>
                                        <a href={listItem.fileUrl} target="_blank"
                                            className="fileUrl"
                                            rel="noreferrer noopener"
                                        >
                                            {listItem.fileUrl}
                                        </a> <br />
                                        <br />
                                        <Button
                                            type="button"
                                            name={listItem._id}
                                            value="Delete"
                                            onClick={deleteBook}
                                        />
                                    </div>
                                )
                            })
                        }
                        {
                            notesList.map(listItem => {
                                return (
                                    <div
                                        className="divContributionList card glassmorphism"
                                        title={listItem.shortName}
                                        key={listItem.fileUrl}
                                    >
                                        <span className="cardProperty">Name: </span>
                                        {listItem.name} <br />
                                        <span className="cardProperty">Short name: </span>
                                        {listItem.shortName} <br />
                                        <span className="cardProperty">fileUrl: </span>
                                        <a href={listItem.fileUrl} target="_blank"
                                            className="fileUrl"
                                            rel="noreferrer noopener"
                                        >
                                            {" "}{listItem.fileUrl}
                                        </a> <br /> <br />
                                        <br />
                                        <Button
                                            type="button"
                                            name={listItem._id}
                                            value="Delete"
                                            onClick={deleteNotes}
                                        />
                                    </div>
                                )
                            })
                        }
                        {
                            questionPaperList.map(listItem => {
                                return (
                                    <div
                                        className="divContributionList card glassmorphism"
                                        title={listItem.subject}
                                        key={listItem.fileUrl}
                                    >
                                        <span className="cardProperty">Name: </span>
                                        {listItem.name} <br />
                                        <span className="cardProperty">Subject: </span>
                                        {listItem.subject} <br />
                                        <span className="cardProperty">Exam type: </span>
                                        {listItem.examType} <br />
                                        <span className="cardProperty">fileUrl: </span>
                                        <a href={listItem.fileUrl} target="_blank"
                                            className="fileUrl"
                                            rel="noreferrer noopener"
                                        >
                                            {listItem.fileUrl}
                                        </a> <br /><br />
                                        <br />
                                        <Button
                                            type="button"
                                            name={listItem._id}
                                            value="Delete"
                                            onClick={deleteQuestionPaper}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            ) :
                <Link to="/user/login" style={{ textDecoration: "none" }}>
                    <div className="authMessage glassmorphism"> {authMessage} </div>
                </Link>
            }
        </div>
    )
}