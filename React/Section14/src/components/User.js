import classes from "./User.module.css";
import { Component } from "react";

// render는 props를 받지않음, Component 사용해서 props에 접근할 수 있음
class User extends Component {
  componentWillUnmount() {
    console.log("User will unmount");
  }

  //리액트에 필요한 메서드
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
