import React from "react";
import "../styles/Button.css";

const Button = ({ text }) => {

    return (
        <div className="Button">
            <p>{text}</p>
        </div>
    )
}

export default Button;