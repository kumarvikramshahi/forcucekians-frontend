import React from "react"
import Input from "./Input/Input"

export default class Searchbar extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        let inputValue = document.querySelector("input[type='search']").value.toLowerCase();
        let a_Tag = document.querySelectorAll("a[title]") || document.getElementsByClassName("divContributionList")
        let arrayLength = a_Tag.length
        for (let i = 0; i < arrayLength; i++) {
            let a_text = a_Tag[i].innerHTML || a_Tag[i].innerText
            if (a_text.toLowerCase().indexOf(inputValue) > -1) {
                a_Tag[i].style.display = ""
            } else {
                let a_title = document.querySelectorAll("a[title]")[i].title || document.getElementsByClassName("divContributionList")[i].title
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
    render() {
        return (
            <Input
                type="search"
                id="search"
                placeholder={"🔍 " + this.props.introText}
                name="subjectName"
                onChange={this.handleChange}
            />
        )
    }
}