import React, { Component } from "react"
import Loading from "../Loading/loading"
import PopupMessage from "../popupMessage/popupMessage"
import Input from "../Input/Input"
import Button from "../Button/Button"
import "./Form.css"

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uploadForm: { ...this.props.form },
            message_201: "",
            errorMsg: "", // compile/runtime error message
            isError: false,
            isUploading: false,
            token: "",
            isAuth: true
        }
        this.inputHandler = this.inputHandler.bind(this)
        this.formHandeler = this.formHandeler.bind(this)
    }
    inputHandler(event) {
        const updateForm = { ...this.state.uploadForm }
        const property = event.target.name
        updateForm[property] = event.target.value
        this.setState({
            uploadForm: updateForm
        })
    }
    componentDidMount() {
        this.setState({ token: localStorage.getItem("bhaagB**") })

        // Message for not Logged users
        if ((!window.$IsAuth) && (!this.props.isAuthPage)) {
            return this.setState({
                isAuth: false,
                errorMsg: "You are not logged In. Please Log In to upload!"
            })
        }
    }
    formHandeler(event) {
        event.preventDefault()

        if (!this.state.isAuth) {
            return;
        }

        // For Logged In users
        this.setState({ isUploading: true })
        this.setState({ errorMsg: "" })

        const options = {
            method: "POST",
            headers: this.props.isAuthPage ? { 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.state.token },
            body: JSON.stringify({
                ...this.state.uploadForm
            })
        }
        fetch(window.$SERVER_URI + this.props.uri, options)
            .then(resp => {
                if (resp.status === 200 || resp.status === 201) {
                    this.setState({ isError: false })
                } else {
                    this.setState({ isError: true })
                }
                return resp.json()
            })
            .then(respData => {
                if (this.state.isError) {
                    if (respData.errors) {
                        return respData.errors.map(item => {
                            const error = new Error(item.msg)
                            throw error;
                        })
                    }
                    const error = new Error(respData.message)
                    throw error;
                }
                if (this.props.isAuthPage) {
                    localStorage.setItem("bhaagB**", respData.token)
                    localStorage.setItem("userId", respData.userId)
                    const remainingMilliseconds = (respData.expiresIn[0]) * 60 * 60 * 1000;
                    const expiryDate = new Date(
                        new Date().getTime() + remainingMilliseconds
                    );
                    localStorage.setItem('expiryDatelodu', expiryDate.toISOString());
                    this.setState({
                        isUploading: false
                    }, window.location.replace(this.props.previousLocation))
                } else {
                    this.setState({ message_201: respData.message })
                    this.setState({ isUploading: false })
                    setTimeout(() => {
                        this.setState({ message_201: "" })
                    }, 4000)
                }
            })
            .catch(err => {
                this.setState({
                    isUploading: false,
                    errorMsg: err.message
                })
            })
    }
    render() {
        return (
            <div>
                <PopupMessage blankMessage={this.state.message_201.length ? false : true}>
                    {this.state.message_201}
                </PopupMessage>
                <div> {this.state.isUploading ? <Loading /> : null} </div>
                <form className="form card glassmorphism"
                    method="POST"
                    onSubmit={this.formHandeler}
                >
                    <div>
                        <div className="formHeading">
                            {this.props.isAuthPage ? null : `Enter ${this.props.material} details`}
                        </div>
                        <div className={this.state.errorMsg.length ? "validationError" : null}>
                            {
                                this.state.errorMsg.length ? this.state.errorMsg : null
                            }
                        </div>
                        {
                            this.props.inputTag.map(item => {
                                return (
                                    <Input
                                        type={item.type}
                                        name={item.name}
                                        key={item.name}
                                        placeholder={item.placeholder}
                                        required={item.required}
                                        label={item.label}
                                        maxLength={item.maxLength}
                                        minLength={item.minLength}
                                        onChange={this.inputHandler}
                                    />
                                )
                            })
                        }
                        {
                            this.props.buttonTag.map(item => {
                                return (
                                    <Button
                                        disabled={!this.state.isAuth ? true : false}
                                        key={item.value}
                                        type={item.type}
                                        value={item.value}
                                    />
                                )
                            })
                        }
                    </div>
                </form>
            </div>
        )
    }
}