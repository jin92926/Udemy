const GameBoard = ({ onSelectSquare, board }) => {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   const handleSelectSquare = (rowIndex, colIndex) => {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedBoard;
  //     });
  //     onSelectSquare();
  //   };

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* 기존에는 onClick={onSelectSquare}으로 하면 현재 클릭된 행과 열의
                index를 모르기 때문에 이런식으로 변경해야함 */}
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  //버튼을 누르지 못하게 하는 기능
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;

// const updatedUser = user;
// user.name = "max";
//원본을 해치지 않는 두번째 방식으로 해야함
// const updatedUser2 = { ...user };
// user.name = "max";
