const fetchAvailablePlaces = async () => {
  //async는 항상 promise를 반환함
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }
  return resData.places;
};

const updateUserPlaces = async (places) => {
  //기본적으로 설정하지 않으면 get 요청
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    // 백엔드 데이터 형태에 맞게 넣어줘야됨
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data");
  }
  return resData.message;
};

const fetchUserPlaces = async () => {
  //async는 항상 promise를 반환함
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }
  return resData.places;
};

export { fetchAvailablePlaces, updateUserPlaces, fetchUserPlaces };
