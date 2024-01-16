//props가 설정되지 않아도 항상 받는 children이 있음
// children prop은 컴포넌트 텍스트 사이에 있는 내용이 포함되어 있음.
// 단순한 텍스트부터 jsx 구조까지 다 받아올 수 있음
// 컴포넌트가 다른 컴포넌트나 내용을 감싸서 구축하는 것을 컴포넌트 합성이라 함

//children는 특별한 props로 거의 유일하게 이름 변경이 불가능함
//나머지는 자유롭게 이름을 바꿔서 가져올 수 있음
//on을 사용하면 궁극적으로 특정 이벤트에 기반해 실행되는 것을 알려줌
const TabButton = ({ children, label, isSelected, ...props }) => {
  // console.log(props);
  return (
    <li>
      {/* 함수에 ()를 붙이면 랜더링 될 때 바로 실행되는 것을 의미함
        잘 구분해야함 */}
      <button className={isSelected ? "active" : null} {...props}>
        {children}
      </button>
      {/* <button>{label}</button> */}
    </li>
  );
};

export default TabButton;
