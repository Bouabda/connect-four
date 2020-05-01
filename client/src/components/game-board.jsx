import React from "react";
import ReactDOM from "react-dom";
class Board extends React.Component{ 
    constructor(props){ 
        super(props);
        this.playBorad = this.initBoard();
        this.player1 = {color: 'yellow', name: 'player 1', score: 0, number: 1}
        this.player2 = {color: 'red', name: 'player 2', score: 0, number: 2}
        this.currentPlayer = this.player1;
    }
    initBoard(){ 
        let board = [];
        for (let i = 0; i< 6 ; i++){ 
            let temp = [];
            for (let j = 0; j < 7; j++) {
                temp.push(0);
            }
            board.push(temp);
        } 
        return board;
    }
    updatePlayer() {
        if (this.currentPlayer === this.player1) {
          this.currentPlayer = this.player2;
        } else {
          this.currentPlayer = this.player1;
        }
      }

    render(){ 
        return (
            <div className="board"> 
            { 
            this.playBorad.map((rows, i)=>(
                <div className="col" key={(i).toString()} id={(i).toString()} >
                {rows.map((col, j)=>(
                    <div className="box" key={(i).toString()+(j).toString()} id={(i).toString()+(j).toString()} ></div>
                    ))
                }
                </div>
            ))
            }
            </div>
        )
    }
}

export default Board;