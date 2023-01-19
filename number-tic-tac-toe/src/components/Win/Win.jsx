import React, {useContext} from 'react'
import "./Win.css"
import GameContext from "../../context/game/gameContext";

const Win = (props) => {

    const gameContext = useContext(GameContext);
    const { checkWinner } = gameContext;

  return (
    <div>
        {checkWinner()&&
        <div className="win--container">
            <div className="win--item">{checkWinner?"Game Over":"Lose"}</div>
        </div>
        }
    </div>
  )
}

export default Win