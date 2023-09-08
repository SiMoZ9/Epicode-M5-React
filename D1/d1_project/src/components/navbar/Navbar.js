import React, { Component } from "react";
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div>
                    <img width={50} src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"></img>
                </div>
                <div>
                    <ul className="nav-links">
                        <li>testo 1</li>
                        <li>testo 2</li>
                        <li>testo 3</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar