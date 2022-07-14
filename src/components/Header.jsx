import React from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header({ text, bgColor, textColor }) {


    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
      }
    
    return (

        <div style={headerStyles}>
            <div className="container">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <h2>{text}</h2></Link>
            </div>
        </div>



    )
}



Header.defaultProps = {
    text: "Feedback",
    bgColor: "white",
    textColor: "orange",
}


Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header