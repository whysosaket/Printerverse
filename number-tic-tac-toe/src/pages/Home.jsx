import React, {useContext} from 'react'
import './Home.css'
import Board from '../components/Board/Board'
import Selector from '../components/Selector/Selector'
import GameContext from '../context/game/gameContext'
import Win from '../components/Win/Win'

const Home = () => {

  const gameContext = useContext(GameContext);
  const { handleReset, checkWinner} = gameContext;

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
      {!checkWinner()&&
      <Selector />
      }
      <Win />
    </div>
    <div className='reset'>
      <button className='reset-button' onClick={handleReset}>Reset</button>
    </div>
    <div className='footer'>
      <p>Created by <a href="https://www.github.com/whysosaket" target="_blank">Saket</a></p>
    </div>
    </>
  )
}

export default Home