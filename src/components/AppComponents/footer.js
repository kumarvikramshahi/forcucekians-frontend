import React from "react"

export default class Footer extends React.Component {
    render() {
        let myStyle = {
            padding: "4px",
            marginTop: "10%",
            textAlign: "center",
        }
        let button2 = {
            border: "1px solid transparent",
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            width: "50px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "3px"
        }
        let button = {
            border: "1px solid transparent",
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "600",
            marginTop: "3px"
        }
        return (
            <footer style={myStyle}>
                <a href="mailto:lightscience29@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button style={button}>Feedback</button>
                </a>
                <br />
                <a href="https://github.com/kumarvikramshahi/forcucekians.github.io" target="_blank" rel="noopener noreferrer">
                    <button style={button}>Github Repo</button>
                </a>
                <br />
                if you have any suggestions then feel free to drop a Mail.
                <br />
                <a href="mailto:lightscience29@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button style={button2}>Mail</button>
                </a>
                <br />
                <br /><br /><br /><br />
            </footer>
        )
    }
}
