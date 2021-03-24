import React from "react"

export default class Footer extends React.Component {
    render() {
        let myStyle = {
            padding: "4px",
            marginTop: "10%",
            textAlign: "center",
        }
        return (
            <footer style={myStyle}>
                if you have any suggestions regarding this page or have matrials like "Notes" then you can mail it on <a href="mailto:lightscience29@gmail.com" target="_blank" rel="noopener noreferrer"> lightscience29@gmail.com </a><br />
                <b><i>no copyrights of this webpage you can copy it.</i></b>
                <br /><br /><br /><br />
            </footer>
        )
    }
}
