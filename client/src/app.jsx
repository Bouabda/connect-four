import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/game-board.jsx"
class App extends React.Component{ 
    constructor(props){
        super(props);
    }
    render (){  
        return(
            
            <div>
            <h1>Connect Four</h1>
            <Board></Board>
            </div>
            )
    }
}


ReactDOM.render(<App></App>, document.getElementById("app"));