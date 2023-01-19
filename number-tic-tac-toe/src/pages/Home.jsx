import React from 'react'
import './Home.css'
import Board from '../components/Board/Board'

const Home = () => {
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
    </div>
    </>
  )
}

export default Home