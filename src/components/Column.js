import React, { useEffect } from "react";

function Column(props) {
  useEffect(props.calculateWinner);
  return (
    <button
      className="column"
      onClick={() => {
        props.handleColumnClick(props.id);
      }}
    >
      {renderSquares(props.arrInArr)}
    </button>
  );
}
function renderSquares(square) {
  function convertSquare(square) {
    switch (square) {
      case "R":
        square = <div className="red chip" />;
        break;
      case "Y":
        square = <div className="yellow chip" />;
        break;
      default:
        square = null;
    }
    return square;
  }
  return (
    <div className="squares">
      <div className="square shadow">{convertSquare(square[0])}</div>
      <div className="square shadow">{convertSquare(square[1])}</div>
      <div className="square shadow">{convertSquare(square[2])}</div>
      <div className="square shadow">{convertSquare(square[3])}</div>
      <div className="square shadow">{convertSquare(square[4])}</div>
      <div className="square shadow">{convertSquare(square[5])}</div>
    </div>
  );
}
export default Column;
