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
            isError: false,  // if error exist or not
            isUploading: false,
            token: "", // Jwt token
            isAuth: true,  // if authenticated or not,
            validationError: ''
            // isEmailError: false  // if email format wrong
        }
        this.inputHandler = this.inputHandler.bind(this)
        this.formHandeler = this.formHandeler.bind(this)
        // this.emailValidator = this.emailValidator.bind(this)
    }

    inputHandler(event) {
        const updateForm = { ...this.state.uploadForm }
        const property = event.target.name
        if (event.target.type === "file") updateForm[property] = event.target.files[0];
        else updateForm[property] = event.target.value;
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

    // apply this only after adding "ug.cusat.ac.in" validation support in backend...
    // after uncommneting this also uncommnet onchange in input tag.
    // emailValidator(event) {
    //     if (this.props.isSignUp) {
    //         const emailDomain = event.target.value.split("@")[1] === "ug.cusat.ac.in";
    //         if (!emailDomain) {
    //             this.setState({ isEmailError: true })
    // make sure to use 'isEmailError' in Button
    //             return this.setState({ errorMsg: "please enter your cusat mail id.." });
    //         } else {
    //             this.setState({ isEmailError: false })
    //             return this.setState({ errorMsg: "" });
    //         }
    //     }
    // }

    formHandeler(event) {
        event.preventDefault()

        if (!this.state.isAuth) {
            return;
        }

        // For Logged In users
        this.setState({ errorMsg: "" })

        // File Validation check
        const questionPaperFileExe = this.state.uploadForm?.questionPaperFile ? this.state.uploadForm?.questionPaperFile?.name.split(".")[1] : null;
        const bookFileExe = this.state.uploadForm?.bookFile ? this.state.uploadForm?.bookFile?.name.split(".")[1] : null;
        const notesFileExe = this.state.uploadForm?.notesFile ? this.state.uploadForm?.notesFile?.name.split(".")[1] : null;

        if (questionPaperFileExe === ".docx" || questionPaperFileExe === ".pdf" || questionPaperFileExe === ".xlsx" || questionPaperFileExe === ".pptx") {
            return this.setState({ validationError: "Select PDF/Excel/PowerPoint/Docs file" })
        }
        if (bookFileExe === ".docx" || bookFileExe === ".pdf" || bookFileExe === ".xlsx" || bookFileExe === ".pptx") {
            return this.setState({ validationError: "Select PDF/Excel/PowerPoint/Docs file" })
        }
        if (notesFileExe === ".docx" || notesFileExe === ".pdf" || notesFileExe === ".xlsx" || notesFileExe === ".pptx") {
            return this.setState({ validationError: "Select PDF/Excel/PowerPoint/Docs file" })
        }

        // FormData
        const formData = new FormData();
        for (let item in this.state.uploadForm) {
            if (this.state.uploadForm[item]) formData.append(item, this.state.uploadForm[item]);
            else {
                return this.setState({ validationError: "Please fill all required fields" });
            }
        }

        const options = {
            method: "POST",
            headers: this.props.isAuthPage ? { 'Content-Type': 'application/json' } : this.props.isFormData ? { 'Authorization': 'Bearer ' + this.state.token } : { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.state.token },
            body: this.props.isFormData ? formData : JSON.stringify({ ...this.state.uploadForm })
        }

        // body: JSON.stringify({
        //     ...this.state.uploadForm
        // })

        // Sending request
        this.setState({ isUploading: true })
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
                    for (let item in this.state.uploadForm) {
                        this.state.uploadForm[item] = null;
                    }
                    setTimeout(() => {
                        this.setState({ message_201: "" })
                        window.location.reload(false)
                    }, 2000)
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
                        <div className={this.state.validationError.length ? "validationError" : null}>
                            {this.state.validationError ? this.state.validationError : null}
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
                                        accept=".docx,.pdf, .xlsx, .pptx"
                                    // onChange={item.name === "email" ? this.emailValidator : null}
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