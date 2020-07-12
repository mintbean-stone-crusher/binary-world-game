import React from "react";
import Cell from "./Cell";
import { render } from "@testing-library/react";

const Board = (props) => (
  <table>
    {props.boardState.map((row, i) => {
      return (
        <tr>
          {row.map((cell, j) => (
            <Cell
              boardState={props.boardState}
              handleClick={props.handleClick}
              i={i}
              j={j}
            />
          ))}
        </tr>
      );
    })}
  </table>
);

export default Board;
