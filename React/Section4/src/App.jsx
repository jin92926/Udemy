import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

const App = () => {
  //여러 컴포넌트 간에 상태를 공유하기 위해 사용되는 상태 끌어올리기
  //부모 컴포넌트에서 상태를 관리하면서, 필요한 데이터나 상태를 자식 컴포넌트로 전달하여 사용
  //각각의 컴포넌트를 독립적으로 유지할 수 있음
  const [activePlayer, setActivePlayer] = useState("X");

  //gameboard와 player에서 둘다 게임 정보가 사용되고 있기에
  // 하나로 통합
  const [gameTurns, setGameTurns] = useState([]);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        //player 에 activePlayer를 넣는 것은 이상적이지 못함,
        // 두 종류의 상태를 병합하는 것과 같기 때문
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
          // activePlayerSymbol={activePlayer}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
};

export default App;
