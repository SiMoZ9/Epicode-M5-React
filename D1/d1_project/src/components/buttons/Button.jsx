import React, { Component } from "react";
import "./Button.css"

class Button extends Component {
    render() {
        return (
            // Renderizza la props che gli dico
            <button>
                {this.props.title} 
            </button>
        )
    }
}


export default Button