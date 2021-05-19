import React from "react"

export default class Searchbar extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }
    handleChange(event) {
        let inputValue = document.querySelector("input[type='search']").value.toLowerCase();
        let a_Tag = document.querySelectorAll("a[title]")
        let arrayLength = a_Tag.length
        for (let i = 0; i < arrayLength; i++) {
            let a_text = a_Tag[i].innerHTML || a_Tag[i].innerText
            if (a_text.toLowerCase().indexOf(inputValue) > -1) {
                a_Tag[i].style.display = ""
            } else {
                let a_title = document.querySelectorAll("a[title]")[i].title
                if (a_title.toLowerCase().indexOf(inputValue) > -1) {
                    a_Tag[i].style.display = ""
                } else {
                    a_Tag[i].style.display = "none"
                }
            }
            if (event.target.value === "") {
                a_Tag[i].style.display = "block"
            }
        }
    }
    handleFocus() {
        let inputTag = document.getElementById("input")
        inputTag.style.boxShadow = "0px 0px 10px rgb(0,0,0,0.5)"
        inputTag.style.border = "1px solid rgb(0,0,0,0)"
        inputTag.style.transition = "box-shadow 0.5s"
    }
    handleBlur() {
        let inputTag = document.getElementById("input")
        inputTag.style.boxShadow = "none"
        inputTag.style.border = "1px solid rgb(0,0,0,0.5)"
    }
    render() {
        const input = {
            width: "80%",
            height: "40px",
            border: "1px solid rgb(0,0,0,0.5)",
            borderRadius: "5px",
            padding: "0px 0px 0px 10px",
            backgroundColor:"rgb(0,0,0,0.05)"
        }
        // window.onscroll = function () {
        //     let scrollValue = document.body.scrollTop || document.documentElement.scrollTop
        //     if (document.body.scrollTop < 100|| document.documentElement.scrollTop < 100){
        //         document.getElementById("input").style.width = scrollValue / 2 + 10 + "%"
        //     }
        // }
        return (
            <input type="search" id="input" style={input} placeholder={"🔍 " + this.props.introText} name="subjectName" onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
        )
    }
}
