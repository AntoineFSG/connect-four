import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Players from "./components/Players";
import Winner from "./components/Winner";
import RestartButton from "./components/RestartButton";

function Game() {
  const [turnRed, setTurnRed] = useState(true);
  const [turnCount, setTurnCount] = useState(0);
  const [players, setPlayers] = useState({
    playerOne: "Player 1",
    playerTwo: "Player 2"
  });
  const [winner, setWinner] = useState(null);
  const [scores, setScores] = useState({ playerOne: 0, playerTwo: 0 });
  const [board, setBoard] = useState([
    Array(6).fill(null),
    Array(6).fill(null),
    Array(6).fill(null),
    Array(6).fill(null),
    Array(6).fill(null),
    Array(6).fill(null),
    Array(6).fill(null)
  ]);
  const [nameAreSet, setNameAreSet] = useState(false);
  function startNewRound() {
    console.log("New Round Started");

    setWinner(null);
    let newBoard = [
      Array(6).fill(null),
      Array(6).fill(null),
      Array(6).fill(null),
      Array(6).fill(null),
      Array(6).fill(null),
      Array(6).fill(null),
      Array(6).fill(null)
    ];
    setBoard(newBoard);
    setTurnCount(0);
  }

  //Board related Functions

  function handleColumnClick(id) {
    console.log("TURNCOUNT------" + turnCount);
    if (winner === null) {
      if (turnRed === true) {
        let nextBoard = board.slice();
        let index = nextBoard[id].indexOf(null);
        if (~index) {
          nextBoard[id][index] = "R";
          let oldTurnCount = turnCount;
          setTurnCount(oldTurnCount + 1);
        }
        setTurnRed(!turnRed);
        setBoard(nextBoard);
      } else {
        let nextBoard = board.slice();
        let index = nextBoard[id].indexOf(null);
        if (~index) {
          nextBoard[id][index] = "Y";
          let oldTurnCount = turnCount;
          setTurnCount(oldTurnCount + 1);
        }
        setTurnRed(!turnRed);
        setBoard(nextBoard);
      }
    }
    return;
  }
  function findADraw() {
    if (turnCount > 41 && winner === null) {
      setWinner("This is a Draw nobody");
      console.log("This is a Draw nobody");
      let newScores = { ...scores };
      newScores.playerTwo += 1;
      newScores.playerOne += 1;
      setScores(newScores);
    }
  }
  function findFourInARow(arr) {
    arr.forEach(arrInArr => {
      for (let i = 0; i < arrInArr.length - 3; i++) {
        let a = i;
        let b = i + 1;
        let c = i + 2;
        let d = i + 3;

        if (
          arrInArr[a] &&
          arrInArr[a] === arrInArr[b] &&
          arrInArr[a] === arrInArr[c] &&
          arrInArr[a] === arrInArr[d]
        ) {
          if (arrInArr[a] === "R") {
            setWinner(players.playerOne);
            setScores(scores.playerOne + 1);
            let newScores = { ...scores };
            newScores.playerOne += 1;
            setScores(newScores);
          } else if (arrInArr[a] === "Y") {
            setWinner(players.playerTwo);
            let newScores = { ...scores };
            newScores.playerTwo += 1;
            setScores(newScores);
          } else {
            return;
          }
        }
      }
    });
  }
  //Winner related functions
  function calculateWinner() {
    if (winner === null) {
      findFourInARow(board);
      findFourInARow(rows);
      findFourInARow(diags);
      findADraw();
    }
  }

  function handlePlayerSubmit(e) {
    e.preventDefault();
    setNameAreSet(true);
  }
  function handlePlayerChange(e) {
    e.preventDefault();
    let newPlayers = { ...players };
    e.target.name === "PlayerOne"
      ? (newPlayers = { ...players, playerOne: e.target.value })
      : (newPlayers = { ...players, playerTwo: e.target.value });
    console.log(newPlayers);
    setPlayers({ ...newPlayers });
  }
  function renderWinner(theWinner, onClickFunct) {
    if (theWinner != null) {
      return (
        <div className="winner">
          <div>
            <h1>
              {theWinner}
              <br />
              wins !
            </h1>
            <RestartButton onClick={onClickFunct} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
  const rows = [
    [
      board[0][0],
      board[1][0],
      board[2][0],
      board[3][0],
      board[4][0],
      board[5][0],
      board[6][0]
    ],
    [
      board[0][1],
      board[1][1],
      board[2][1],
      board[3][1],
      board[4][1],
      board[5][1],
      board[6][1]
    ],
    [
      board[0][2],
      board[1][2],
      board[2][2],
      board[3][2],
      board[4][2],
      board[5][2],
      board[6][2]
    ],
    [
      board[0][3],
      board[1][3],
      board[2][3],
      board[3][3],
      board[4][3],
      board[5][3],
      board[6][3]
    ],
    [
      board[0][4],
      board[1][4],
      board[2][4],
      board[3][4],
      board[4][4],
      board[5][4],
      board[6][4]
    ],
    [
      board[0][5],
      board[1][5],
      board[2][5],
      board[3][5],
      board[4][5],
      board[5][5],
      board[6][5]
    ]
  ];

  const diags = [
    [board[0][3], board[1][2], board[2][1], board[3][0]],
    [board[0][4], board[1][3], board[2][2], board[3][1], board[4][0]],
    [
      board[0][5],
      board[1][4],
      board[2][3],
      board[3][2],
      board[4][1],
      board[5][0]
    ],
    [
      board[1][5],
      board[2][4],
      board[3][3],
      board[4][2],
      board[5][1],
      board[6][0]
    ],
    [board[2][5], board[3][4], board[4][3], board[5][2], board[6][1]],
    [board[3][5], board[4][4], board[5][3], board[6][2]],
    [board[0][2], board[1][3], board[2][4], board[3][5]],
    [board[0][1], board[1][2], board[2][3], board[3][4], board[4][5]],
    [
      board[0][0],
      board[1][1],
      board[2][2],
      board[3][3],
      board[4][4],
      board[5][5]
    ],
    [
      board[1][0],
      board[2][1],
      board[3][2],
      board[4][3],
      board[5][4],
      board[6][5]
    ],
    [board[2][0], board[3][1], board[4][2], board[5][3], board[6][4]],
    [board[3][0], board[4][1], board[5][2], board[6][3]]
  ];

  return (
    <div>
      <div>
        <Players
          players={players}
          handlePlayerChange={handlePlayerChange}
          handlePlayerSubmit={handlePlayerSubmit}
          scores={scores}
          nameAreSet={nameAreSet}
        />
      </div>
      <Winner
        players={players}
        renderWinner={renderWinner}
        winner={winner}
        restart={startNewRound}
      />
      <div>
        <Board
          board={board}
          handleColumnClick={handleColumnClick}
          calculateWinner={calculateWinner}
        />
      </div>
    </div>
  );
}

export default Game;

/*function Game() {
  const [arrInArr, setSquares] = useState(Array(9).fill(null));
  const [historySquares, setHistorySquares] = useState(Array(9).fill(null));
  const [OisNext, setOisNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [scores, setScores] = useState([0, 0]);
  const [history, setHistory] = useState([]);

  function renderSquare(i) {
    return <Square value={arrInArr[i]} onClick={handleClick} />;
    function handleClick() {
      if (winner === null) {
        const nextSquares = arrInArr.slice();
        if (nextSquares[i] === null) {
          nextSquares[i] = OisNext ? "X" : "O";
        } else {
          return;
        }
        setSquares(nextSquares);
        setOisNext(!OisNext);
        console.log(arrInArr);
      } else {
        return;
      }
    }
  }

  function renderHistorySquare(x) {
    return <historySquare value={historySquares[x]} />;
  }

  useEffect(() => {
    function calculateWinner(arrInArr) {
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
          arrInArr[a] &&
          arrInArr[a] === arrInArr[b] &&
          arrInArr[a] === arrInArr[c]
        ) {
          console.log("WINNER!");
          setWinner(arrInArr[a]);
        }
      }
      console.log("NO WINNER");
      return;
    }
    calculateWinner(arrInArr);
    if (winner !== null) {
      let nextHistory = history.slice();
      nextHistory.push([arrInArr]);
      setHistory(nextHistory);
      console.log("HISTORY IN CW " + history);

      console.log("HISTORY" + history.length + history[0]);
      let nextScores = scores.slice();
      winner === "X" ? (nextScores[0] += 1) : (nextScores[1] += 1);
      setScores(nextScores);
      setWinner(null);
      setSquares(Array(9).fill(null));
    } else if (arrInArr.includes(null) === false) {
      setSquares(Array(9).fill(null));
      return;
    }
    return console.log("useffect calculate winner unmount");
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          arrInArr={arrInArr}
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
          renderHistorySquare={renderHistorySquare}
        />
      </div>
      <div className="game-info">
        <div />
        <ol />
      </div>
    </div>
  );
}
function createHistory(history){
  for (let i = 0; i < history.length; i++) {
    <div id={i}>
      <div className="board-row">
        {props.renderHistorySquare(props.history[i][0])}
        {props.renderHistorySquare(props.history[i][1])}
        {props.renderHistorySquare(props.history[i][2])}
      </div>
      <div className="board-row">
        {props.renderHistorySquare(props.history[i][3])}
        {props.renderHistorySquare(props.history[i][4])}
        {props.renderHistorySquare(props.history[i][5])}
      </div>
      <div className="board-row">
        {props.renderHistorySquare(props.history[i][6])}
        {props.renderHistorySquare(props.history[i][7])}
        {props.renderHistorySquare(props.history[i][8])}
      </div>
    </div>

  }
}
function HistoryBoard(props) {
  if (props.history.length === 0) {
    return <div>History</div>;
  } else {
    console.log("my history " + props.history[0]);
    return(
    );
  }
}

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
function historySquare(value) {
  return <button className="square">{value}</button>;
}

function Board(props) {
  function declareTurn() {
    return props.OisNext ? <p>Your turn X</p> : <p>Your turn O</p>;
  }

  return (
    <div className="main-container">
      <div className="game-container">
        <div className="scores">
          <h1>Scores</h1>
          <p>
            X : {props.scores[0]} - O : {props.scores[1]}
          </p>
        </div>
        <div className="status">{declareTurn()} </div>
        <div className="board-row">
          {props.renderSquare(0)}
          {props.renderSquare(1)}
          {props.renderSquare(2)}
        </div>
        <div className="board-row">
          {props.renderSquare(3)}
          {props.renderSquare(4)}
          {props.renderSquare(5)}
        </div>
        <div className="board-row">
          {props.renderSquare(6)}
          {props.renderSquare(7)}
          {props.renderSquare(8)}
        </div>
      </div>
    </div>
  );
}

export default Game;

/*import React, { useState, useContext, useEffect } from "react";
import "./App.css";

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board(props) {
  const [arrInArr, setSquares] = useState(Array(9).fill(null));
  const [OisNext, setOisNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [scores, setScores] = useState([0, 0]);

  function renderSquare(i) {
    return (
      <Square
        value={arrInArr[i]}
        onClick={() => {
          if (winner === null) {
            const nextSquares = arrInArr.slice();
            if (nextSquares[i] === null) {
              nextSquares[i] = OisNext ? "X" : "O";
            } else {
              return;
            }
            setSquares(nextSquares);
            setOisNext(!OisNext);
            console.log(arrInArr);
          } else {
            return;
          }
        }}
      />
    );
  }
  function calculateWinner(arrInArr) {
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
        arrInArr[a] &&
        arrInArr[a] === arrInArr[b] &&
        arrInArr[a] === arrInArr[c]
      ) {
        console.log("WINNER!");
        setWinner(arrInArr[a]);
      }
    }
    console.log("NO WINNER");
    return;
  }

  function declareTurn() {
    return OisNext ? <p>Your turn X</p> : <p>Your turn O</p>;
  }
  useEffect(() => {
    calculateWinner(arrInArr);
    if (winner !== null) {
      if (props.history.length === 0) {
        props.setHistory(arrInArr);
      } else {
        props.setHistory(props.history + arrInArr);
      }

      console.log("HISTORY" + props.history.length + props.history[0]);
      let nextScores = scores.slice();
      winner === "X" ? (nextScores[0] += 1) : (nextScores[1] += 1);
      setScores(nextScores);
      setWinner(null);
      setSquares(Array(9).fill(null));
    } else if (arrInArr.includes(null) === false) {
      setSquares(Array(9).fill(null));
      return;
    }
  });

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

function Game() {
  const [history, setHistory] = useState([]);
  return (
    <div className="game">
      <div className="game-board">
        <Board history={history} setHistory={setHistory} />
      </div>
      <div className="game-info">
        <div />
        <ol />
      </div>
    </div>
  );
}

export default Game;*/
