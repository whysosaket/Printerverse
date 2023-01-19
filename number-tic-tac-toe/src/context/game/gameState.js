import React, {useState, useEffect} from "react";
import GameContext from "./gameContext";

const GameState = (props) => {
    const [game, updateGame] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [selected, updateSelected] = useState(4);
    const [points, updatePoints] = useState([0,0]);
    const [computerPlayFlag, setComputerPlayFlag] = useState(false);
    const [playerTurn , updatePlayerTurn] = useState(true);
    const [winner, setWinner] = useState("");


    const handleCellClick = (e)=>{
        const cellNo = e.target.dataset.cellIndex;
        updateSelected(Number(cellNo));
    }

    const handleSelectorClick = (e) => {
        const selectedNo = e.target.dataset.cellIndex;
        if (game[selected] !== 0) {
            return;
        }
        if(!playerTurn){
            return;
        }
        updateGame((prev) => {
            const newGame = [...prev];
            newGame[selected] = Number(selectedNo) + 1;
            return newGame;
        }, updateGame(game));
        updateSelected((prev) => {
            let emptyCells = [];
            for (let i = 0; i < 9; i++) {
                if (game[i] === 0) {
                    emptyCells.push(i);
                }
            }
            return emptyCells[Math.floor(Math.random() * emptyCells.length)];
        });
        updatePlayerTurn(false);
    }

    const handleReset = ()=>{
        updateGame([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        updateSelected(4);
        setComputerPlayFlag(false);
        updatePlayerTurn(true);
    }

    const checkWinner = () => {
        
        // Check rows
        for (let i = 0; i < 9; i += 3) {
            if (game[i] + game[i + 1] + game[i + 2] === 15) {
                if(game[i] === 0 || game[i + 1] === 0 || game[i + 2] === 0) continue;
                setWinner("You ");
                return true;
            }
        }
    
        // Check columns
        for (let i = 0; i < 3; i++) {
            if (game[i] + game[i + 3] + game[i + 6] === 15) {
                if(game[i] === 0 || game[i + 3] === 0 || game[i + 6] === 0) continue;
                setWinner("You ");
                return true;
            }
        }
    
        // Check diagonals
        if ((game[0] + game[4] + game[8] === 15)&&(game[0] !== 0 || game[4] !== 0 || game[9] !== 0) || (game[2] + game[4] + game[6] === 15)&&(game[2] !== 0 || game[4] !== 0 || game[6] !== 0)) {
            setWinner("You ");
            return true;
        }
    
        return false;
    }

    const checkComputerWinner = (newGame) => {
        // Check rows
        for (let i = 0; i < 9; i += 3) {
            if (newGame[i] + newGame[i + 1] + newGame[i + 2] === 15) {
                if(newGame[i] === 0 || newGame[i + 1] === 0 || newGame[i + 2] === 0) continue;
                return true;
            }
        }

        // Check columns
        for (let i = 0; i < 3; i++) {
            if (newGame[i] + newGame[i + 3] + newGame[i + 6] === 15) {
                if(newGame[i] === 0 || newGame[i + 3] === 0 || newGame[i + 6] === 0) continue;
                return true;
            }
        }

        // Check diagonals
        if (newGame[0] + newGame[4] + newGame[8] === 15 || newGame[2] + newGame[4] + newGame[6] === 15) {
            if(newGame[0] === 0 || newGame[4] === 0 || newGame[9] === 0) return false;
            if(newGame[2] === 0 || newGame[4] === 0 || newGame[6] === 0) return false;
            return true;
        }

        return false;
    }

    

    const computerPlay = () => {

        if(!computerPlayFlag){
            return;
        }

        if(playerTurn){
            return;
        }

        let foundWinningMove = false;

        // Check if computer can win in the next move
        
        for (let i = 0; i < 9; i++) {
            if (game[i] === 0) {
                const newGame = [...game];
                const availableValues = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => !game.includes(x));
                availableValues.forEach((value) => {
                    newGame[i] = value;
                    if (checkComputerWinner(newGame)) {
                        if (game[i] === 0) {
                            updateGame(newGame);
                            updateSelected(i);
                            foundWinningMove = true;
                            return;
                        }
                    }
                });
            }
            if(foundWinningMove){
                return;
            }
        }
    
        // Check if player can win in the next move, and block them
        for (let i = 0; i < 9; i++) {
            if (game[i] === 0) {
                const newGame = [...game];
                const availableValues = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => !game.includes(x));
                newGame[i] = availableValues[0];
                if (checkWinner(newGame)) {
                    if (game[i] === 0) {
                        updateGame(newGame);
                        updateSelected(i);
                        return;
                    }
                }
            }
        }
    
        // If computer can't win and player can't win, select an empty cell that will lead to a win
        for (let i = 0; i < 9; i++) {
            if (game[i] === 0) {
                const newGame = [...game];
                const availableValues = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => !game.includes(x));
                newGame[i] = availableValues[0];
                if (checkWinner(newGame)) {
                    if (game[i] === 0) {
                        updateGame(newGame);
                        updateSelected(i);
                        return;
                    }
                }
            }
        }
    
        // If no move leads to a win, select a random empty cell
        let emptyCells = [];
        for (let i = 0; i < 9; i++) {
            if (game[i] === 0) {
                emptyCells.push(i);
            }
        }
        if(emptyCells.length === 0) return;
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (game[randomCell] === 0) {
            const newGame = [...game];
            const availableValues = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => !game.includes(x));
            newGame[randomCell] = availableValues[0];
            updateGame(newGame);
            updateSelected(randomCell);
        }

        updatePlayerTurn(true);
    };
    
    
        return (
            <GameContext.Provider value={{game, updateGame, selected, updateSelected, handleCellClick, handleSelectorClick, handleReset, checkWinner, computerPlay,computerPlayFlag, setComputerPlayFlag, playerTurn, winner}}>
            {props.children}
            </GameContext.Provider>
        );
    };
    
    export default GameState;
    