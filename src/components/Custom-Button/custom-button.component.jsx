import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({ children, blue, mini, ...otherProps }) => {
    return (
        <button
            className={`${blue ? 'blue' : ''} ${mini ? 'mini': ''} custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default CustomButton;