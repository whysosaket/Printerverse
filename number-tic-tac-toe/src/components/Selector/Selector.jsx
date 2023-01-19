import React, {useState, useContext, useEffect, useRef} from 'react'
import "./Selector.css"
import GameContext from "../../context/game/gameContext";

const Selector = () => {

  const gameContext = useContext(GameContext);
  const {game, updateGame, selected, updateSelected, handleCellClick, handleSelectorClick, computerPlay, computerPlayFlag, setComputerPlayFlag} = gameContext;

  const click = useRef(false);

    const handleComputerPlay = () => {
        setComputerPlayFlag(true);
    }

    useEffect(() => {
        if (computerPlayFlag) {
            computerPlay();
            setComputerPlayFlag(false);
        }
    }, [computerPlayFlag]);

  return (
    <>
      <div className='selector'>
        <div data-cell-index="0" className={game.includes(1)?"selector--item hide":"selector--item"} onClick={handleSelectorClick}>1</div>
        <div data-cell-index="1" className={game.includes(2)?"selector--item hide":"selector--item"} onClick={handleSelectorClick}>2</div>
        <div data-cell-index="2" className={game.includes(3)?"selector--item hide":"selector--item"} onClick={handleSelectorClick}>3</div>
        <div data-cell-index="3" className={game.includes(4)?"selector--item hide":"selector--item"} onClick={handleSelectorClick}>4</div>
        <div data-cell-index="4" className={game.includes(5)?"selector--item hide":"selector--item"} onClick={handleSelectorClick}>5</div>
        <div data-cell-index="5" className={game.includes(6)?"selector--item hide":"selector--item"} onClick={handleSelectorClick}>6</div>
        <div data-cell-index="6" className={game.includes(7)?"selector--item hide":"selector--item"} onClick={handleSelectorClick}>7</div>
        <div data-cell-index="7" className={game.includes(8)?"selector--item hide":"selector--item"} onClick={handleSelectorClick}>8</div>
        <div data-cell-index="8" className={game.includes(9)?"selector--item hide":"selector--item"} onClick={handleSelectorClick}>9</div>
        <button onClick={handleComputerPlay}>Computer Play</button>
        </div>
        
    </>
  )
}

export default Selector