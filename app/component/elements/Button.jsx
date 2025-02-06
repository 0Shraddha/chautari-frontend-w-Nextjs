"use client";


const Button = ({text, type}) => {
    return (
        <button type={type} className="btn px-4 btn-secondary rounded-lg">{text}</button>
    );
}

export default Button;