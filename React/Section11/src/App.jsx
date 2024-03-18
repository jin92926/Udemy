import { useRef, useState, useEffect } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

//app내에 넣으면 app이 실행될때마다 작동하기에 필요 없으므로 밖으로 꺼내는게 좋음
const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
const storedPlaces = storedIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

  const [availablePlaces, setAvailablePlaces] = useState([]);

  //이렇게 useEffect를 사용하는 것은 비효율적,
  // localStorage는 즉각 실행되고 저장된 것은 전체 실행 중 한번만 실행되면 되기 떄문임
  // useEffect(() => {
  //   const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
  //   const storedPlaces = storedIds.map((id) =>
  //     AVAILABLE_PLACES.find((place) => place.id === id)
  //   );
  //   setPickedPlaces(storedPlaces);
  // }, []);

  // 두개의 인수가 필요,
  //useEffect를 사용해 무한루트에서 빠져나올 수 있음
  //다만 모든 사이드 이펙트가 useEffect를 필요한 것은 아니고,
  // 불필요한 부분에서는 사용을 안하는 것이 좋음, 앱이 실행되고 추가적으로 실행되는 방식이므로
  // 필요한 것이 아니라면 사용을 자제하는 것이 좋음
  useEffect(() => {
    // 브라우저가 사용자 동의를 하면 위치 제공해주는 것,
    // 해당 코드는 사이드 이펙트임, 위치를 확인하는 것이 애플리케이션 내에서는 필요하지만
    // 여기서는 app 컴포넌트와는 직접적인 연관이 없기 때문,
    // 모든 컴포넌트의 주된 목적은 랜더링이 가능한 jsx코드를 반환하는 것임
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailablePlaces(sortedPlaces);
    });
    // 이렇게 하면 의존성 배열의 값이 변화했을 경우에만 재실행함
    // 빈배열이기에 한번만 실행되는 것
  }, []);

  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    //이 코드도 사이드 이펙트이지만 useEffect가 필요없음
    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedIds])
      );
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current))
    );
  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
