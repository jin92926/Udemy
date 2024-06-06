const redux = require("redux");

//리듀서 함수는 항상 2개의 파라미터를 받음, 기존 상태와 발송된 액션
// 또한 항상 새로운 상태 객체(대부분 객체지만 num등 어떤 값도 가능)를 반환해야함
// 기본값을 설정해야함
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

// console.log(store.getState());

const counterSubscriber = () => {
  // createStore로 생성된 저장소에서 사용할 수 있는 메서드
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

//액션을 발송하는 메서드
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
