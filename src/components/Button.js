import React from 'react'

const buttonStyle = {
    backgroundColor: '#dd5b50'
}

const Button = (props) => {
    return (
        <button className="button" style={buttonStyle}>{props.label}</button>
    )
}

export default Button
