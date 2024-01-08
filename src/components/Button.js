import React from 'react'

function Button({buttonText, postChange, requestType}) {

    const selectedStyle = { backgroundColor: 'rgb(173, 39, 39)', color: 'white'};

    return (
        <button 
            style={buttonText === requestType ? selectedStyle : null} 
            type='button'
            onClick={postChange}
        >
            {buttonText}
        </button>
    )
}

export default Button;
