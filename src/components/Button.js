import React from 'react'

const buttonStyle = {
    backgroundColor: '#2061aa',
    color: '#e7cc99'
}

const Button = (props) => {
    return (
        <button onClick={props.onClick} style={buttonStyle}>{props.label}</button>
    )
}

export default Button
