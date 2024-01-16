import { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
  //컴포넌트가 두개지만 useState로 각각 다르게 적용받는 이유는
  //리액트는 매번 새로운 인스턴스를 생성하기 때문임
  //동일한 로직을 따르지만 완전히 서로 따로 작동함
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    //리액트에서 state를 변경할 때 해당 상태의 이전 값을 변경하는 경우에는
    //아래와 같이 작업하면 반환하고자 하는 새로운 상태값으로 보내면 안됨,
    // 해당 상태 변경 함수로 보내야함

    // 이렇게 작업하면 isEditing의 현재 상태를 기준으로 삼음, 즉각적으로 실행 안됨
    // setIsEditing(!isEditing);
    setIsEditing((editing) => !editing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      //입력값의 변화에 반응하고 변경된 값을 다시 입력값에 전달하는 방식을 양방향 바인딩이라 함
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {/* {!isEditing ? <span className="player-name">{name}</span> : <input />} */}
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
};

export default Player;
