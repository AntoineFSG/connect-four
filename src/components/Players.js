import React from "react";

function Players(props) {
  if (props.nameAreSet === false) {
    return (
      <div className="players">
        <div className="players-form">
          <h1>Let's Play Connect Four !</h1>

          <input
            label="Player 1"
            type="text"
            name="PlayerOne"
            onChange={props.handlePlayerChange}
            value={props.players.playerOne}
          />
          <input
            label="Player 2"
            type="text"
            name="PlayerTwo"
            onChange={props.handlePlayerChange}
            value={props.players.playerTwo}
          />
          <div>
            <button
              className="btn start"
              value="Submit"
              onClick={props.handlePlayerSubmit}
            >
              Start
            </button>
          </div>
        </div>
        <div className="scores-container">
          <p className="scores">
            {props.players.playerOne} VS {props.players.playerTwo}
          </p>
          <p className="scores">
            {props.scores.playerOne} - {props.scores.playerTwo}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="scores-container">
        <p className="scores">
          {props.players.playerOne} VS {props.players.playerTwo}
        </p>
        <p className="scores">
          {props.scores.playerOne} - {props.scores.playerTwo}
        </p>
      </div>
    );
  }
}

export default Players;
