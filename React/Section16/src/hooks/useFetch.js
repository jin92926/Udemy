// react에서 use로 시작하는 함수는 훅으로 인식되며, 특정 규칙을 부여함

import { useEffect, useState } from "react";

// 커스텀 훅은 use로 시작해야함
const useFetch = (fetchFn, initialValue) => {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    fetchedData,
    error,
  };
};

export default useFetch;
