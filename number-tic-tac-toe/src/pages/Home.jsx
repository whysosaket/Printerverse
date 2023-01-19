import React, {useContext} from 'react'
import './Home.css'
import Board from '../components/Board/Board'
import Selector from '../components/Selector/Selector'
import GameContext from '../context/game/gameContext'

const Home = () => {

  const gameContext = useContext(GameContext);
  const {game, updateGame, selected, updateSelected, handleCellClick, handleSelectorClick, handleReset} = gameContext;

  return (
    <>
    <div className='title'>
      <h1><span className='jumpshake'>
        <span style={{'color': "orange"}}>Tic</span> Tac
        <span style={{'color': "orange"}}> Toe</span>
        </span></h1>
    </div>
    <div className='board-conatiner'>
      <Board />
      <Selector />
    </div>
    <div className='reset'>
      <button className='reset-button' onClick={handleReset}>Reset</button>
    </div>
    <div className='footer'>
      <p>Created by <a href="www.github.com/whysosaket">Saket</a></p>
    </div>
    </>
  )
}

export default Home