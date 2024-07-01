import React, { useEffect, useState } from "react";

const useHttp = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/events");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("failed fetch data");
        }

        setData(resData.events);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return { data, loading };
};

export default useHttp;
