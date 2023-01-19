import React, {useState, useContext} from "react";
import "./Board.css"
import GameContext from "../../context/game/gameContext";

const Board = (props) => {

  const gameContext = useContext(GameContext);
  const {game, updateGame, selected, updateSelected, handleCellClick} = gameContext;
  console.log(selected);
  
  return (
    <>
      <div className="game--container">
            <div data-cell-index="0" onClick={handleCellClick} id="1" className={selected===0?"selected cell":"cell"}>{game[0]!==0&&game[0]}</div>
            <div data-cell-index="1" onClick={handleCellClick} id="2" className={selected===1?"selected cell":"cell"}>{game[1]!==0&&game[1]}</div>
            <div data-cell-index="2" onClick={handleCellClick} id="3" className={selected===2?"selected cell":"cell"}>{game[2]!==0&&game[2]}</div>
            <div data-cell-index="3" onClick={handleCellClick} id="4" className={selected===3?"selected cell":"cell"}>{game[3]!==0&&game[3]}</div>
            <div data-cell-index="4" onClick={handleCellClick} id="5" className={selected===4?"selected cell":"cell"}>{game[4]!==0&&game[4]}</div>
            <div data-cell-index="5" onClick={handleCellClick} id="6" className={selected===5?"selected cell":"cell"}>{game[5]!==0&&game[5]}</div>
            <div data-cell-index="6" onClick={handleCellClick} id="7" className={selected===6?"selected cell":"cell"}>{game[6]!==0&&game[6]}</div>
            <div data-cell-index="7" onClick={handleCellClick} id="8" className={selected===7?"selected cell":"cell"}>{game[7]!==0&&game[7]}</div>
            <div data-cell-index="8" onClick={handleCellClick} id="9" className={selected===8?"selected cell":"cell"}>{game[8]!==0&&game[8]}</div>
        </div>
    </>
  );
};

export default Board;