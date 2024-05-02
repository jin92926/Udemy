const fetchAvailablePlaces = async () => {
  //async는 항상 promise를 반환함
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }
  return resData.places;
};

export default fetchAvailablePlaces;
