import React from "react";

function Winner(props) {
  return <div>{props.renderWinner(props.winner, props.restart)}</div>;
}
export default Winner;
