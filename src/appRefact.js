import React, { useState, useContext, useEffect } from "react";
import "./App.css";

function Game() {
  //players

  const [players, setPlayers] = [null, null];
  function playersSubmit() {
    player1 = document.getElementByName("player1").value;
    player2 = document.getElementByName("player2").value;
    setPlayers([player1, player2]);
    console.log(players);
  }

  return (
    <div className="game">
      <Players players={players} playersSubmit={playersSubmit} />
    </div>
  );
}

function Players(props) {
  return (
    <div className="players">
      <input type="text" name="player1">
        {players[0]}
      </input>
      <input type="text" name="player2">
        {players[1]}
      </input>
      <button type="button" value="Submit" onCLick={playersSubmit} />
    </div>
  );
}

/*function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [historySquares, setHistorySquares] = useState(Array(9).fill(null));
  const [OisNext, setOisNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [scores, setScores] = useState([0, 0]);
  const [history, setHistory] = useState([]);

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          if (winner === null) {
            const nextSquares = squares.slice();
            if (nextSquares[i] === null) {
              nextSquares[i] = OisNext ? "X" : "O";
            } else {
              return;
            }
            setSquares(nextSquares);
            setOisNext(!OisNext);
            console.log(squares);
          } else {
            return;
          }
        }}
      />
    );
  }

  useEffect(() => {
    calculateWinner(squares);
    if (winner !== null) {
      if (history.length === 0) {
        setHistory(squares);
      } else {
        setHistory(props.history + squares);
      }

      console.log("HISTORY" + history.length + history[0]);
      let nextScores = scores.slice();
      winner === "X" ? (nextScores[0] += 1) : (nextScores[1] += 1);
      setScores(nextScores);
      setWinner(null);
      setSquares(Array(9).fill(null));
    } else if (squares.includes(null) === false) {
      setSquares(Array(9).fill(null));
      return;
    }
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={squares}
          setSquares={setSquares}
          historySquares={historySquares}
          setHistorySquares={setHistorySquares}
          OisNext={OisNext}
          setOisNext={setOisNext}
          winner={winner}
          setWinner={setWinner}
          scores={scores}
          setScores={setScores}
          history={history}
          setHistory={setHistory}
          renderSquare={renderSquare}
        />
      </div>
      <div className="history-board">
        <HistoryBoard
          historySquares={historySquares}
          winner={winner}
          history={history}
          renderSquare={renderSquare}
        />
      </div>
      <div className="game-info">
        <div />
        <ol />
      </div>
    </div>
  );
}

function HistoryBoard(props) {
  props.history.map(squares => {
    return (
      <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  });
}

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board(props) {
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log("WINNER!");
        setWinner(squares[a]);
      }
    }
    console.log("NO WINNER");
    return;
  }

  function declareTurn() {
    return OisNext ? <p>Your turn X</p> : <p>Your turn O</p>;
  }

  return (
    <div className="main-container">
      <div className="game-container">
        <div className="scores">
          <h1>Scores</h1>
          <p>
            X : {scores[0]} - O : {scores[1]}
          </p>
        </div>
        <div className="status">{declareTurn()} </div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
}

export default Game;*/
