import React from "react";

const Cell = (props) => {
  return (
    <td id="cell_0_0" onClick={() => props.handleClick(props.i, props.j)}>
      {/* {props.i}
      {props.j} */}
      <button
        className={
          props.boardState[props.i][props.j] === "W"
            ? "whiteBox"
            : props.boardState[props.i][props.j] === "B"
            ? "blackBox"
            : null
        }
      />
    </td>
  );
};

export default Cell;
