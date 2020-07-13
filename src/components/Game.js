import React, { useState, useEffect } from "react";
import Board from "./Board";
import Cell from "./Cell";
import Header from "./Header";

const Game = (props) => {
  const [gameOver, setGameOver] = useState(false);
  const [whiteScore, setWhiteScore] = useState(2);
  const [blackScore, setBlackScore] = useState(2);
  useEffect(() => {
    console.log('useeffect');
    console.log(props.currentPlayer, props.playerMode);
    if(getMaxCount(props.boardState, "B")===0 && getMaxCount(props.boardState, "W")===0)
    {
      setGameOver(true);
    }

    if(props.playerMode === "single" && props.currentPlayer === "B") {
      if (getMaxCount(props.boardState, props.currentPlayer) > 0) {
        computerMove();
        setGameOver(isGameOver(props.boardState));
        countScore(props.boardState);
      }
      props.currentPlayer === "B"
          ? props.setCurrentPlayer("W")
          : props.setCurrentPlayer("B");
    }
  }, [props.currentPlayer]);
  const handleClick = (x, y) => {
    const count = isValidMove(x, y, props.currentPlayer);
    if (count > 0) {
      console.log("Count>0" + x + "," + y + "," + props.currentPlayer);
      playGame(props.boardState, x, y, props.currentPlayer);
      setGameOver(isGameOver(props.boardState));
      countScore(props.boardState);
      props.currentPlayer === "B"
        ? props.setCurrentPlayer("W")
        : props.setCurrentPlayer("B");
      // console.log(currentPlayer);
      // setCurrentPlayer("B");

    }
    const cnt=getMaxCount(props.boardState,props.currentPlayer);
    console.log('max count : ',cnt);
    if(getMaxCount(props.boardState,props.currentPlayer)==0){
      props.currentPlayer === "B"
          ? props.setCurrentPlayer("W")
          : props.setCurrentPlayer("B");
    }
    // setTimeout(console.log(currentPlayer), 2000);

    // console.log(boardState);
    // if (playerMode == "single" && currentPlayer == "B") {
    //   console.log("Computer Move");
    //   computerMove();
    //   currentPlayer === "B" ? setCurrentPlayer("W") : setCurrentPlayer("B");
    // }
  };

  const getMaxCount = (boardState,c) => {
    let maxCount=0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let count = isValidMove(i, j, c);
        if (count > maxCount) {
          maxCount = count;
          console.log('x :',i,'j:',j);
        }
      }
    }
    return maxCount;
  };
    const computerMove = () => {
      console.log("INSIDE COMPUTER MOVE");
      let maxCount = 0;
      let xForMaxCount = 0;
      let yForMaxCount = 0;
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          let count = isValidMove(i, j, "B");
          if (count > maxCount) {
            maxCount = count;
            xForMaxCount = i;
            yForMaxCount = j;
          }
        }
      }
      if (maxCount > 0) playGame(props.boardState, xForMaxCount, yForMaxCount, "B");
    };

  const isValidMove = (x, y, i) => {
    // console.log("INSIDE VALIDMOVE");
    let count = 0;
    if (props.boardState[x][y] !== "O")
      return count;
    count += checkTop(props.boardState, x, y, i);
    // console.log("top:", count);
    count += checkRight(props.boardState, x, y, i);
    // console.log("right:", count);
    count += checkLeft(props.boardState, x, y, i);
    // console.log("left:", count);
    count += checkBottom(props.boardState, x, y, i);
    // console.log("bottom:", count);
    count += checkTopRight(props.boardState, x, y, i);
    // console.log("topright:", count);
    count += checkTopLeft(props.boardState, x, y, i);
    // console.log("topleft:", count);
    count += checkBottomRight(props.boardState, x, y, i);
    // console.log("bottomright:", count);
    count += checkBottomLeft(props.boardState, x, y, i);
    // console.log("bottomleft:", count);
    // console.log("x:", x, "y:", y, "cnt:", count);
    return count;
  };

  const playGame = (boardState, xForMaxCount, yForMaxCount, c) => {
    // console.log("inside playgame", xForMaxCount, "-", yForMaxCount);
    if (checkTop(boardState, xForMaxCount, yForMaxCount, c) > 0) {
      // console.log("top");
      changeTop(boardState, xForMaxCount, yForMaxCount, c);
    }
    if (checkRight(boardState, xForMaxCount, yForMaxCount, c) > 0) {
      // console.log("right");
      changeRight(boardState, xForMaxCount, yForMaxCount, c);
    }
    if (checkLeft(boardState, xForMaxCount, yForMaxCount, c) > 0) {
      // console.log("left");
      changeLeft(boardState, xForMaxCount, yForMaxCount, c);
    }
    if (checkBottom(boardState, xForMaxCount, yForMaxCount, c) > 0) {
      // console.log("btm");
      changeBottom(boardState, xForMaxCount, yForMaxCount, c);
    }
    if (checkTopRight(boardState, xForMaxCount, yForMaxCount, c) > 0) {
      // console.log("tprgt");
      changeTopRight(boardState, xForMaxCount, yForMaxCount, c);
    }
    if (checkTopLeft(boardState, xForMaxCount, yForMaxCount, c) > 0) {
      // console.log("topleft");
      changeTopLeft(boardState, xForMaxCount, yForMaxCount, c);
    }
    if (checkBottomRight(boardState, xForMaxCount, yForMaxCount, c) > 0) {
      // console.log("btmrgt");
      changeBottomRight(boardState, xForMaxCount, yForMaxCount, c);
    }
    if (checkBottomLeft(boardState, xForMaxCount, yForMaxCount, c) > 0) {
      // console.log("btmleft");
      changeBottomLeft(boardState, xForMaxCount, yForMaxCount, c);
    }
  };

  const checkTop = (boardState, x, y, i) => {
    let p = x,
      q = y;
    let count = 0;
    if (p > 1) {
      p--;
      while (p >= 0) {
        if (boardState[p][q] === "O") {
          break;
        } else if (boardState[p][q] === i) {
          return count;
        } else if (boardState[p][q] !== i) {
          count++;
        }
        p--;
      }
    }
    return 0;
  };
  const checkRight = (boardState, x, y, i) => {
    let p = x,
      q = y;
    let count = 0;
    if (q < 6) {
      q++;
      while (q <= 7) {
        if (boardState[p][q] === "O") {
          break;
        } else if (boardState[p][q] === i) {
          return count;
        } else if (boardState[p][q] !== i) {
          count++;
        }
        q++;
      }
    }
    return 0;
  };
  const checkLeft = (boardState, x, y, i) => {
    let p = x,
      q = y;
    let count = 0;
    if (q > 1) {
      q--;
      while (q >= 0) {
        if (boardState[p][q] === "O") {
          break;
        } else if (boardState[p][q] === i) {
          return count;
        } else if (boardState[p][q] !== i) {
          count++;
        }
        q--;
      }
    }
    return 0;
  };
  const checkBottom = (boardState, x, y, i) => {
    let p = x,
      q = y;
    let count = 0;
    if (p < 6) {
      p++;
      while (p <= 7) {
        if (boardState[p][q] === "O") {
          break;
        } else if (boardState[p][q] === i) {
          return count;
        } else if (boardState[p][q] !== i) {
          count++;
        }
        p++;
      }
    }
    return 0;
  };
  const checkTopRight = (boardState, x, y, i) => {
    let p = x,
      q = y;
    let count = 0;
    if (p > 1 && q < 6) {
      p--;
      q++;
      while (p >= 0 && q <= 7) {
        if (boardState[p][q] === "O") {
          break;
        } else if (boardState[p][q] === i) {
          return count;
        } else if (boardState[p][q] !== i) {
          count++;
        }
        p--;
        q++;
      }
    }
    return 0;
  };
  const checkTopLeft = (boardState, x, y, i) => {
    let p = x,
      q = y;
    let count = 0;
    if (p > 1 && q > 1) {
      p--;
      q--;
      while (p >= 0 && q >= 0) {
        if (boardState[p][q] === "O") {
          break;
        } else if (boardState[p][q] === i) {
          return count;
        } else if (boardState[p][q] !== i) {
          count++;
        }
        p--;
        q--;
      }
    }
    return 0;
  };
  const checkBottomRight = (boardState, x, y, i) => {
    let p = x,
      q = y;
    let count = 0;
    if (p < 6 && q < 6) {
      p++;
      q++;
      while (p <= 7 && q <= 7) {
        if (boardState[p][q] === "O") {
          break;
        } else if (boardState[p][q] === i) {
          return count;
        } else if (boardState[p][q] !== i) {
          count++;
        }
        p++;
        q++;
      }
    }
    return 0;
  };
  const checkBottomLeft = (boardState, x, y, i) => {
    let p = x,
      q = y;
    let count = 0;
    if (p < 6 && q > 1) {
      p++;
      q--;
      while (p <= 7 && q >= 0) {
        if (boardState[p][q] === "O") {
          break;
        } else if (boardState[p][q] === i) {
          return count;
        } else if (boardState[p][q] !== i) {
          count++;
        }
        p++;
        q--;
      }
    }
    return 0;
  };

  const changeTop = (boardState, x, y, c) => {
    // TODO Auto-generated method stub
    let p = x,
      q = y;
    let copy = [...boardState];
    copy[p][q] = c;
    // props.boardState[p][q] = c;
    p--;
    while (p >= 0) {
      if (boardState[p][q] === c) {
        break;
      } else if (boardState[p][q] !== c) {
        // props.boardState[p][q] = c;
        copy[p][q] = c;
      }
      p--;
    }
    props.setBoardState(copy);
  };

  const changeRight = (boardState, x, y, c) => {
    console.log("in changeright x,y", x, ":", y);
    let p = x,
      q = y;
    let copy = [...boardState];
    copy[p][q] = c;
    // props.boardState[p][q] = c;
    q++;
    while (q <= 7) {
      if (boardState[p][q] === c) {
        break;
      } else if (boardState[p][q] !== c) {
        // props.boardState[p][q] = c;
        copy[p][q] = c;
      }
      q++;
    }
    props.setBoardState(copy);
  };

  const changeLeft = (boardState, x, y, c) => {
    let p = x,
      q = y;
    // props.boardState[p][q] = c;
    let copy = [...boardState];
    copy[p][q] = props.currentPlayer;
    q--;
    while (q >= 0) {
      if (boardState[p][q] === c) {
        break;
      } else if (boardState[p][q] !== c) {
        // props.boardState[p][q] = c;
        copy[p][q] = props.currentPlayer;
      }
      q--;
    }
    props.setBoardState(copy);
  };
  const changeBottom = (boardState, x, y, c) => {
    let p = x,
      q = y;
    // props.boardState[p][q] = c;
    let copy = [...boardState];
    copy[p][q] = props.currentPlayer;
    p++;
    while (p <= 7) {
      if (boardState[p][q] === c) {
        break;
      } else if (boardState[p][q] !== c) {
        // props.boardState[p][q] = c;
        copy[p][q] = props.currentPlayer;
      }
      p++;
    }
    props.setBoardState(copy);
  };
  const changeTopRight = (boardState, x, y, c) => {
    let p = x,
      q = y;
    // props.boardState[p][q] = c;
    let copy = [...boardState];
    copy[p][q] = props.currentPlayer;
    p--;
    q++;
    while (p >= 0 && q <= 7) {
      if (boardState[p][q] === c) {
        break;
      } else if (boardState[p][q] !== c) {
        // boardState[p][q] = c;
        copy[p][q] = props.currentPlayer;
      }
      p--;
      q++;
    }
    props.setBoardState(copy);
  };
  const changeTopLeft = (boardState, x, y, c) => {
    let p = x,
      q = y;
    // props.boardState[p][q] = c;
    let copy = [...boardState];
    copy[p][q] = props.currentPlayer;
    p--;
    q--;
    while (p >= 0 && q >= 0) {
      if (boardState[p][q] === c) {
        break;
      } else if (boardState[p][q] !== c) {
        // props.boardState[p][q] = c;
        copy[p][q] = props.currentPlayer;
      }
      p--;
      q--;
    }
    props.setBoardState(copy);
  };
  const changeBottomRight = (boardState, x, y, c) => {
    let p = x,
      q = y;
    // props.boardState[p][q] = c;
    let copy = [...boardState];
    copy[p][q] = props.currentPlayer;
    p++;
    q++;
    while (p <= 7 && q <= 7) {
      if (boardState[p][q] === c) {
        break;
      } else if (boardState[p][q] !== c) {
        // props.boardState[p][q] = c;
        copy[p][q] = props.currentPlayer;
      }
      p++;
      q++;
    }
    props.setBoardState(copy);
  };
  const changeBottomLeft = (boardState, x, y, c) => {
    let p = x,
      q = y;
    // props.boardState[p][q] = c;
    let copy = [...boardState];
    copy[p][q] = props.currentPlayer;
    p++;
    q--;
    while (p <= 7 && q >= 0) {
      if (boardState[p][q] === c) {
        break;
      } else if (boardState[p][q] !== c) {
        // props.boardState[p][q] = c;
        copy[p][q] = props.currentPlayer;
      }
      p++;
      q--;
    }
    props.setBoardState(copy);
  };

  const resetGame = () => {
    props.setBoardState([
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "W", "B", "O", "O", "O"],
      ["O", "O", "O", "B", "W", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O", "O"],
    ]);
    props.setCurrentPlayer("W");
    props.setPlayerMode("single");
  };

  const isGameOver = (boardState) => {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (boardState[i][j] === "O") return false;
      }
    }
    return true;
  };

  const countScore = (boardState) => {
    let w = 0,
      b = 0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (boardState[i][j] === "W") {
          w++;
        } else if (boardState[i][j] === "B") {
          b++;
        }
      }
    }
    setWhiteScore(w);
    setBlackScore(b);
  };
  return (
    <div className="box">
      <Header
        currentPlayer={props.currentPlayer}
        setPlayerMode={props.setPlayerMode}
        resetGame={resetGame}
        gameOver={gameOver}
        whiteScore={whiteScore}
        blackScore={blackScore}
      />
      <Board boardState={props.boardState} handleClick={handleClick} />
      <div id="text"></div>
    </div>
  );
};

export default Game;
