import React from 'react'

export const Square = ( {i, onClick} ) => {

    return (
        <div>
            <button 
                className="square" 
                onClick={ () => onClick() } //llama al prop onClick 
            >
                { i }
            </button>
        </div>
    )
}
