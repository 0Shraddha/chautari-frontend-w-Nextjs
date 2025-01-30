"use client";


const Button = ({text, type}) => {
    return (
        <button type={type} className="btn btn-sm btn-light border">{text}</button>
    );
}

export default Button;