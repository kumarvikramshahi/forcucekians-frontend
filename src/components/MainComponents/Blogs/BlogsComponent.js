import React from "react"
import "./Blogs.css"
import BlogsList from "../../Data/BlogsList"

export default function BlogsComponent() {
    const blogsData = BlogsList.map(
        listItem => {
            return (
                <div
                    title=""
                    id={listItem.href}
                    className="cardContainer card glassmorphism"
                    key={listItem.href} >
                    <a
                        href={listItem.href}
                        target="_blank"
                        rel="noopener noreferrer" >
                        <img className="image" src={listItem.imageHref} alt={listItem.name} />
                    </a>
                    <div>
                        <h3 style={{ margin: "0px" }}>
                            <a
                                className="cardLinks"
                                href={listItem.href}
                                title={listItem.fname}
                                target="_blank"
                                rel="noopener noreferrer">
                                {listItem.name}
                            </a>
                        </h3>
                        <p className="cardText">
                            {listItem.demoText}.
                            <a href={listItem.href} target="_blank" rel="noopener noreferrer">
                                Read more..
                            </a>
                        </p>
                        <br />
                        <i style={{ fontSize: "70%" }} className="cardText">
                            {listItem.datePublished}
                        </i>
                    </div>
                </div >
            )
        }
    )
    return (
        <div className="blogsComponent">
            {blogsData}
        </div>
    )
}