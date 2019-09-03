import React from "react";

function RestartButton(props) {
  return (
    <button className="btn restart" onClick={props.onClick}>
      New Round
    </button>
  );
}

export default RestartButton;
