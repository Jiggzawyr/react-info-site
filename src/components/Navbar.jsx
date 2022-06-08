import React from "react"

export default function Navbar() {
    return(
        <nav>
            <img className="nav-icon" src={require("../images/react-icon-small.png")} />
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}