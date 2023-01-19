import React, {useState} from "react";
import "./Board.css"

const Board = (props) => {

  const [game, updateGame] = useState([1,2,3,4,5,6,7,8,9]);


  return (
    <>
      <div class="game--container">
            <div data-cell-index="0" id="1" class="cell">{game[0]}</div>
            <div data-cell-index="1" id="2" class="cell">{game[1]}</div>
            <div data-cell-index="2" id="3" class="cell">{game[2]}</div>
            <div data-cell-index="3" id="4" class="cell">{game[3]}</div>
            <div data-cell-index="4" id="5" class="cell">{game[4]}</div>
            <div data-cell-index="5" id="6" class="cell">{game[5]}</div>
            <div data-cell-index="6" id="7" class="cell">{game[6]}</div>
            <div data-cell-index="7" id="8" class="cell">{game[7]}</div>
            <div data-cell-index="8" id="9" class="cell">{game[8]}</div>
        </div>
    </>
  );
};

export default Board;