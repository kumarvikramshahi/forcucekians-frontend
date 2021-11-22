import React, { useState } from "react"
import "./Home.css"
import Searchbar from "../../CommonToAll/searchBar"
import Add from "../../CommonToAll/Add"
import Books from "../Materials/Books"
import QuePaper from "../Materials/QuePaper"
import Notes from "../Materials/Notes"
import Loading from "../../CommonToAll/Loading/loading"

export default function Home() {
    const [loading, setLoading] = useState(null);

    return (
        <>
            <div> {loading ? <Loading /> : null} </div>
            <div className="HomeParent">
                <div className="home">
                    <div className="addLeft">
                        <Add />
                    </div>
                    <div className="listCard card glassmorphism">
                        <h2 className="h2">
                            Search for Books, Notes, previous year Question Papers
                        </h2>
                        <Searchbar introText="Search..." />
                        < div className="lists" >
                            <Books setLoading={setLoading} />
                            <QuePaper setLoading={setLoading} />
                            <Notes setLoading={setLoading} />
                        </div >
                    </div >
                    <Add />
                    {/* remove <Add /> and put here intro related to upload files and blogs.. */}
                </div >
            </div >
        </>
    )
}