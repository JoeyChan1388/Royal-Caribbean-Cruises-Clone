import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';

// CSS Classes for defaulting a btn class
const STYLES = ['btn--primary', 'btn--primary-blue' , 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    // Default btn css style and size
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to={'/Signin'} className='btn-mobile'>
            {/* Button made up using the props passed in */}
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}

export default Button