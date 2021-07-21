import React from "react"
import "./Blogs.css"
import Add from "../../CommonToAll/Add"
import BlogsComponent from "./BlogsComponent"

export default function Blogs() {
    return (
        <div className="blogs">
            <div className="blogsParent">
                <div className="addLeft">
                    <Add />
                </div>
                <div className="middleSection">
                    <h1 className="h1">
                        Blogs..
                    </h1>
                    <BlogsComponent />
                </div>
                <Add />
            </div>
        </div>
    )
}