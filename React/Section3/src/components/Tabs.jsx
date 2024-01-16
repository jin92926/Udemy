//wrapper 컴포넌트는 프로젝트의 사이즈가 커질수록 유용함
const Tabs = ({ children, buttons, ButtonsContainer = "menu" }) => {
  //변수로 대문자로 변경해서 저장하거나 바로 받아와서 사용해도 됨
  //   const ButtonsContainer = buttonsContaioner;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
