//jsx 코드 안에서는 try-catch를 사용하지 못하기때문에 오류 경계를 만들어서 처리함

import { Component } from "react";

class ErrorBoundary extends Component {
  //클래스 컴포넌트에 추가하면 오류 경계로 만들어줌

  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
