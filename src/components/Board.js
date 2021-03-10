import React, { useState } from 'react'
import { Square } from './Square'

export const Board = () => {

    // helper function: define quien gana.
    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
    }


    // States: Square y turno (X o O).
    const [square, setSquare] = useState( Array(9).fill(null) );
    const [xIsNext, setXIsNext] = useState(true)

    let winner = calculateWinner(square);  

    let status = winner ? ('"Winner is: ' + winner +'" ') : ('Next player is: ' + (xIsNext ? 'X' : 'O') ) ;

    const handleClick = (i) => {
        const squareSliced = square.slice();

        if( calculateWinner(squareSliced) || squareSliced[i] ){
            return;
        }

        console.log( xIsNext );
        squareSliced[i] = xIsNext ? 'X' : 'O';

        setSquare( square => squareSliced );

        setXIsNext( xIsNext => !xIsNext );

    } 

    

    
    

    // if( winner ){
    //     status = '"Winner is: ' + winner +'" ';
    // } // else {
    //     status = 'Next player: ' +   (xIsNext ? 'X' : 'O' );
    // }


    return (
        <>
            <div className="status"> 
               <h3> { status } </h3> 
            </div>

            <div className="board-row">
                {   <Square 
                        i= { square[0] } 
                        onClick={ () => handleClick(0) }
                    /> 
                }
                {   <Square 
                        i= { square[1] } 
                        onClick={ () => handleClick(1) }
                    /> 
                }
                {   <Square 
                        i= { square[2] } 
                        onClick={ () => handleClick(2) }
                    /> 
                }
            </div>
            <div className="board-row">
            {   <Square 
                        i= { square[3] } 
                        onClick={ () => handleClick(3) }
                    /> 
                }
                {   <Square 
                        i= { square[4] } 
                        onClick={ () => handleClick(4) }
                    /> 
                }
                {   <Square 
                        i= { square[5] } 
                        onClick={ () => handleClick(5) }
                    /> 
                }
            </div>
            <div className="board-row">
                {   <Square 
                        i= { square[6] } 
                        onClick={ () => handleClick(6) }
                    /> 
                }
                {   <Square 
                        i= { square[7] } 
                        onClick={ () => handleClick(7) }
                    /> 
                }
                {   <Square 
                        i= { square[8] } 
                        onClick={ () => handleClick(8) }
                    /> 
                }
            </div>
            
        </>
    )
}
