import { useState, useEffect } from "react";

//DeleteConfirmation에 있으면 10밀리초마다 계속 리랜더링 되기때문에
// 따로 독립해서 컴포넌트를 만들면 ProegressBar에서만 처리됨
const ProegressBar = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
};

export default ProegressBar;
