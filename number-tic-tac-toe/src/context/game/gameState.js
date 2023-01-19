import React, {useState} from "react";
import GameContext from "./gameContext";

const GameState = (props) => {
    const [game, updateGame] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1]);
    const [selected, updateSelected] = useState(4);
    const [points, updatePoints] = useState([0,0]);
    
    const handleCellClick = (e)=>{
        const cellNo = e.target.dataset.cellIndex;
        updateSelected(Number(cellNo));
    }

    const handleSelectorClick = (e)=>{
        const selectedNo = e.target.dataset.cellIndex;
        updateGame((prev)=>{
        const newGame = [...prev];
        newGame[selected] = Number(selectedNo) + 1;
        return newGame;
        const winner = checkWinner();
        if(winner){
            handleReset();
        }
    })}

    const handleReset = ()=>{
        updateGame([-1,-1,-1,-1,-1,-1,-1,-1,-1]);
        updateSelected(4);
    }

    const checkWinner = ()=>{
        // winning combinations is sum of 15 for each row, column and diagonal
        const sum = game.reduce((a,b)=>a+b,0);
        if(sum===15){
            return true;
        }
        return false;
    }

    
    return (
        <GameContext.Provider value={{game, updateGame, selected, updateSelected, handleCellClick, handleSelectorClick, handleReset}}>
        {props.children}
        </GameContext.Provider>
    );
    };

    export default GameState;