// react에서 use로 시작하는 함수는 훅으로 인식되며, 특정 규칙을 부여함

import { useEffect } from "react";

// 커스텀 훅은 use로 시작해야함
const useFetch = () => {
  useEffect();
};

export default useFetch;
