import React from "react";
import Column from "./Column";
function Board(props) {
  return (
    <div className="board board-style">
      <Column
        id={0}
        arrInArr={props.board[0]}
        handleColumnClick={props.handleColumnClick}
        calculateWinner={props.calculateWinner}
      />
      <Column
        id={1}
        arrInArr={props.board[1]}
        handleColumnClick={props.handleColumnClick}
        calculateWinner={props.calculateWinner}
      />
      <Column
        id={2}
        arrInArr={props.board[2]}
        handleColumnClick={props.handleColumnClick}
        calculateWinner={props.calculateWinner}
      />
      <Column
        id={3}
        arrInArr={props.board[3]}
        handleColumnClick={props.handleColumnClick}
        calculateWinner={props.calculateWinner}
      />
      <Column
        id={4}
        arrInArr={props.board[4]}
        handleColumnClick={props.handleColumnClick}
        calculateWinner={props.calculateWinner}
      />
      <Column
        id={5}
        arrInArr={props.board[5]}
        handleColumnClick={props.handleColumnClick}
        calculateWinner={props.calculateWinner}
      />
      <Column
        id={6}
        arrInArr={props.board[6]}
        handleColumnClick={props.handleColumnClick}
        calculateWinner={props.calculateWinner}
      />
    </div>
  );
}
export default Board;
