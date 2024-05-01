import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  //데이터가 늦게오는 것을 대비해 상태값 추가하는 게 좋음
  const [isFetching, setIsFetching] = useState(false);
  // 에러 발생 대비 상태값
  const [error, setError] = useState();

  useEffect(() => {
    // fetch("http://localhost:3000/places")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((resData) => {
    //     console.log(resData);
    //     setAvailablePlaces(resData.places);
    //   });

    //async await이 더 선호됨

    const fetchPlaces = async () => {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }

        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({ message: error.message || "could not fecth places" });
      }

      setIsFetching(false);
    };

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      loadingText="Fetching place data..."
      isLoading={isFetching}
    />
  );
}
