import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

// class는 대부분 함수형을 사용해서 일반적으로 사용하지 않지만
// 오류 경계에 사용함
class Users extends Component {
  // class를 사용할 때 상태를 사용할 때 항상 초기화, 상태정의를 해야했음

  constructor() {
    super();
    //useState에서는 어떤 형태든 사용 가능하지만 여기서는 객체만 가능
    this.state = {
      showUsers: true,
      more: "Test",
    };
  }

  componentDidUpdate() {
    //js에서만 사용 가능
    // try {
    //   someCodeWhichMightFail();
    // } catch (err) {
    //   //handle error
    // }
    if (this.props.users.length === 0) {
      throw new Error("No users provided!");
    }
  }

  toggleUsersHandler() {
    //this.state.showUsers = false // not!
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
